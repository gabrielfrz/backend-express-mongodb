curl --request POST \
  --url https://backend-express-eight-ashen.vercel.app/user/register \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "securepassword"
}'

