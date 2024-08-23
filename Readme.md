# express-jwt-auth

## Repo to demonstrate the what, why and how of JWTs

[HEADER].[PAYLOAD].[SIGNATURE]

Payload: userID, email, etc. Cannot contain sensitive information like Passwords, Card details, etc.

Encode --jwt_secret--> JWT_TOKEN DECODE---jwt_secret--> verify JWT_TOKEN
Encode --jwt_secret--> JWT_TOKEN DECODE---not_secret--> can't verify
