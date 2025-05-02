curl --request POST \
  --url http://localhost:3000/user/register \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "newuser",
    "password": "securepassword"
}'
