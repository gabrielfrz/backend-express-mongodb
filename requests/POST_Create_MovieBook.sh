#!/bin/bash

curl -X POST http://localhost:3000/moviesbooks \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{TOKEN}}" \
-d '{
  "type": "movie",
  "title": "Inception",
  "authorOrDirector": "Christopher Nolan",
  "genre": "Sci-Fi",
  "releaseYear": 2010,
  "completed": true
}'
