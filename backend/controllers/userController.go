package controllers

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"github.com/LeNgocPhuc99/login-form/backend/configs"
	"github.com/LeNgocPhuc99/login-form/backend/database"
	"github.com/LeNgocPhuc99/login-form/backend/helpers"
	"github.com/LeNgocPhuc99/login-form/backend/models"
	"go.mongodb.org/mongo-driver/bson"
)

func Register(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Content-type", "application/json")
	var user models.User
	json.NewDecoder(r.Body).Decode(&user)
	user.Password = helpers.HashPassword(user.Password)
	collection := database.Client.Database(configs.DB_NAME).Collection(configs.COLL_NAME)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	result, err := collection.InsertOne(ctx, user)
	helpers.HandleError(err)
	json.NewEncoder(rw).Encode(result)
}

func Login(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Content-Type", "application/json")
	var user models.User
	var dbUser models.User

	json.NewDecoder(r.Body).Decode(&user)
	collection := database.Client.Database(configs.DB_NAME).Collection(configs.COLL_NAME)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	err := collection.FindOne(ctx, bson.M{"username": user.Username}).Decode(&dbUser)
	if err != nil {
		rw.WriteHeader(http.StatusInternalServerError)
		rw.Write([]byte(`{"message":"` + err.Error() + `"}`))
		return
	}

	passCheck := helpers.CheckPassword(user.Password, dbUser.Password)

	if !passCheck {
		rw.Write([]byte(`{"response":"Wrong Password!"}`))
		return
	}

	jwtToken, err := helpers.GenerateJWT(user.Username)
	if err != nil {
		rw.WriteHeader(http.StatusInternalServerError)
		rw.Write([]byte(`{"message":"` + err.Error() + `"}`))
		return
	}

	rw.Write([]byte(`{"token":"` + jwtToken + `"}`))
}
