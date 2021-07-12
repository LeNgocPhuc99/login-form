package helpers

import (
	"log"
	"time"

	"github.com/LeNgocPhuc99/login-form/backend/configs"
	jwt "github.com/dgrijalva/jwt-go"
)

type SignedDetails struct {
	Username string
	jwt.StandardClaims
}

func GenerateJWT(username string) (string, error) {
	claims := &SignedDetails{
		Username: username,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * time.Duration(24)).Unix(),
		},
	}

	tokenString, err := jwt.NewWithClaims(jwt.SigningMethodHS256, claims).SignedString([]byte(configs.SECRET_KEY))
	if err != nil {
		log.Println("Error i JWT token generation")
		return "", err
	}

	return tokenString, nil
}

func ValidateToken(tokenString string) bool {
	token, err := jwt.ParseWithClaims(tokenString, &SignedDetails{}, func(t *jwt.Token) (interface{}, error) {
		return []byte(configs.SECRET_KEY), nil
	})

	if err != nil {
		log.Println(err)
		return false
	}

	claims, ok := token.Claims.(*SignedDetails)
	if !ok {
		log.Println("the token is invalid")
		return false
	}

	if claims.ExpiresAt < time.Now().Local().Unix() {
		log.Println("token is expired")
		return true
	}

	return true
}
