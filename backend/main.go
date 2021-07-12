package main

import (
	"log"
	"net/http"

	"github.com/LeNgocPhuc99/login-form/backend/database"
	"github.com/LeNgocPhuc99/login-form/backend/routes"
)

func main() {
	database.Connect()

	router := routes.Routes()

	log.Fatal(http.ListenAndServe(":8080", router))
}
