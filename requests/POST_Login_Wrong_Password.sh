curl --request POST \
  --url http://localhost:3000/user/login \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "test@example.com",
    "password": "wrongpassword"
}'
