📦 Version History
1.0.0 – Initial Release
🎥 Video 1 demonstrates features from this version

A RESTful authentication API built with Node.js, Express, and MongoDB, using JWT for secure access control. It follows a clean layered architecture and provides all the essential features for a secure login system.

Key Features:

🧑‍💻 User registration (POST /user/register)

🔐 User login with JWT token generation (POST /user/login)

🛡️ Protected test endpoint (GET /protected)

🔑 Password hashing with bcrypt

🧩 Clean architecture using routes, controllers, services, models, and middlewares

🧪 Ready-to-run curl scripts for testing available in the /requests folder

1.0.1 – MovieBook CRUD Functionality
🎥 Video 2 demonstrates features from this version

This update introduces a complete CRUD system for movies and books, available only to authenticated users. All operations are scoped to each user, enforcing strict access control. The resource supports both books and movies under a unified model.

New in this version:

📚 Full CRUD for /moviesbooks:

POST – Create a new movie or book

GET – List all items for the logged-in user

GET /:id – Get specific item details

PUT – Full update of an item

PATCH – Partial update (e.g., mark as completed)

DELETE – Remove an item

🔐 JWT-based authentication enforced on all endpoints

🔒 Users can only access their own media items

🧱 MovieBook model with support for both types (books and movies)

🧪 New test scripts in /requests, including:

Successful requests

Invalid token handling

Missing token

Unauthorized access attempt across users (simulated)

📜 Clean, modular implementation across architecture layers

https://github.com/user-attachments/assets/934576db-c1e7-40e8-addd-43adb68fa79a












https://github.com/user-attachments/assets/159e7533-86fe-4011-9365-f3e964672e3a


