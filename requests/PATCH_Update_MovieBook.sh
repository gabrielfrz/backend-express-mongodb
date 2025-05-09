#!/bin/bash

curl -X PATCH http://localhost:3000/moviesbooks/{{ID}} \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{TOKEN}}" \
-d '{
  "completed": true
}'
