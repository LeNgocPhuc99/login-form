package models

type User struct {
	FirstName string `json:"firstname" bson:"firstname"`
	LastName  string `json:"lastname" bson:"lastname"`
	Email     string `json:"email" bson:"email"`
	Username  string `json:"username" bson:"username"`
	Password  string `json:"password" bson:"password"`
}
