curl --request GET \
  --url http://localhost:3000/protected \
  --header "Authorization: Bearer invalid.token.value"
