package models

type User struct {
	FirstName string `json:"firstName" bson:"firstname"`
	LastName  string `json:"lastName" bson:"lastname"`
	Email     string `json:"email" bson:"email"`
	Username  string `json:"username" bson:"username"`
	Password  string `json:"password" bson:"password"`
}

type LoginPayload struct {
	Username string `json:"username" bson:"username"`
	Password string `json:"password" bson:"password"`
}
