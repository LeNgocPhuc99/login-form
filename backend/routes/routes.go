package routes

import (
	"net/http"

	"github.com/LeNgocPhuc99/login-form/backend/controllers"
	"github.com/gorilla/mux"
)

func Routes() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/api/user/login", controllers.Login).Methods(http.MethodPost)
	router.HandleFunc("/api/user/register", controllers.Register).Methods(http.MethodPost)

	return router
}
