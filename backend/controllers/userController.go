package controllers

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/LeNgocPhuc99/login-form/backend/configs"
	"github.com/LeNgocPhuc99/login-form/backend/database"
	"github.com/LeNgocPhuc99/login-form/backend/helpers"
	"github.com/LeNgocPhuc99/login-form/backend/models"

	"go.mongodb.org/mongo-driver/bson"
)

func Register(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Context-Type", "application/json")
	if r.Method == http.MethodPost {
		var user models.User
		json.NewDecoder(r.Body).Decode(&user)
		user.Password = helpers.HashPassword(user.Password)
		collection := database.Client.Database(configs.DB_NAME).Collection(configs.COLL_NAME)
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()

		result, err := collection.InsertOne(ctx, user)
		if err != nil {
			helpers.ErrorResponse(rw, err)
			return
		}
		log.Println(result)

		// generate token
		jwtToken, err := helpers.GenerateJWT(user.Username)
		if err != nil {
			helpers.ErrorResponse(rw, err)
			return
		}

		rw.Write([]byte(`{"token":"` + jwtToken + `"}`))
	}
}

func Login(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Content-Type", "application/json")
	// var user models.User
	var loginPayload models.LoginPayload
	var dbUser models.User

	json.NewDecoder(r.Body).Decode(&loginPayload)
	collection := database.Client.Database(configs.DB_NAME).Collection(configs.COLL_NAME)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	err := collection.FindOne(ctx, bson.M{"username": loginPayload.Username}).Decode(&dbUser)
	if err != nil {
		helpers.ErrorResponse(rw, err)
		return
	}

	passCheck := helpers.CheckPassword(loginPayload.Password, dbUser.Password)

	if !passCheck {
		rw.WriteHeader(http.StatusNoContent)
		rw.Write([]byte(`{"response":"Wrong Password!"}`))
		return
	}

	jwtToken, err := helpers.GenerateJWT(loginPayload.Username)
	if err != nil {
		helpers.ErrorResponse(rw, err)
		return
	}

	rw.Write([]byte(`{"token":"` + jwtToken + `"}`))
}
