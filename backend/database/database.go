package database

import (
	"context"
	"fmt"
	"time"

	"github.com/LeNgocPhuc99/login-form/backend/configs"
	"github.com/LeNgocPhuc99/login-form/backend/helpers"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client

func Connect() {
	clientOpt := options.Client().ApplyURI(configs.DB_URL)

	// connect database
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, clientOpt)
	helpers.HandleError(err)

	// check connection
	err = client.Ping(context.TODO(), nil)
	helpers.HandleError(err)
	Client = client
	fmt.Println("Connected database")
}
