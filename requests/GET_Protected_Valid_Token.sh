#!/bin/bash
TOKEN=$(curl -s --request POST \
  --url http://localhost:3000/user/login \
  --header 'Content-Type: application/json' \
  --data '{"email": "test@example.com", "password": "securepassword"}' | jq -r .token)

curl --request GET \
  --url http://localhost:3000/protected \
  --header "Authorization: Bearer $TOKEN"
