#!/bin/bash

curl -X DELETE http://localhost:3000/moviesbooks/{{ID}} \
-H "Authorization: Bearer {{TOKEN}}"
