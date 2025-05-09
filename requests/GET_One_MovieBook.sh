#!/bin/bash

curl -X GET http://localhost:3000/moviesbooks/{{ID}} \
-H "Authorization: Bearer {{TOKEN}}"
