curl --request POST \
  --url http://localhost:3000/user/login \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "wrong@example.com",
    "password": "securepassword"
}'
