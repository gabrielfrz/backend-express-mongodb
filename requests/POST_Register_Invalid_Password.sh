curl --request POST \
  --url http://localhost:3000/user/register \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "No Password",
    "email": "nopassword@example.com",
    "password": ""
}'
