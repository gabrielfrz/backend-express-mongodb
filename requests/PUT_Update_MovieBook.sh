#!/bin/bash

curl -X PUT http://localhost:3000/moviesbooks/{{ID}} \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{TOKEN}}" \
-d '{
  "type": "book",
  "title": "Sapiens",
  "authorOrDirector": "Yuval Harari",
  "genre": "History",
  "releaseYear": 2011,
  "completed": false
}'
