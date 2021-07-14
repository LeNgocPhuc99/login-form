package routes

import (
	"net/http"

	"github.com/LeNgocPhuc99/login-form/backend/controllers"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func Routes() *mux.Router {
	router := mux.NewRouter()
	cors := handlers.CORS(
		handlers.AllowedHeaders([]string{"Content-Type", "Authorization"}),
		handlers.AllowedOrigins([]string{"*"}),
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"}),
		handlers.AllowCredentials(),
	)
	router.Use(cors)

	router.HandleFunc("/api/user/login", controllers.Login).Methods(http.MethodPost, http.MethodOptions)
	router.HandleFunc("/api/user/register", controllers.Register).Methods(http.MethodPost, http.MethodOptions)

	return router
}
