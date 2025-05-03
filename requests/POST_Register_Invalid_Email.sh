curl --request POST \
  --url http://localhost:3000/user/register \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Invalid Email",
    "email": "invalid-email",
    "password": "securepassword"
}'
