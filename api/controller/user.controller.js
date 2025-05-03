import { createUser, authenticateUser } from '../services/user.service.js';

const register = async (req, res) => {
  console.log("Registering user:", req.body);

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required' });
  }

  try {
    const user = await createUser({ name, email, password });
    console.log("Saved user:", user.email);
    return res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error registering user:", error.message);
    return res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  console.log("Logging in user:", req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const { token, name } = await authenticateUser({ email, password });
    console.log("User logged in successfully:", email);
    return res.status(200).json({ message: 'Login successful', token, name });
  } catch (error) {
    console.error("Error logging in user:", error.message);
    return res.status(400).json({ message: error.message });
  }
};

export { register, login };
