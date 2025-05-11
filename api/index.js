import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';

import userRoute from './routes/user.route.js';
import exemploeroute from './routes/example.route.js';
import moviesBooksRoutes from './routes/moviebook.route.js';

dotenv.config();
db.connect();

const app = express();

app.use(express.json());

// Routes
app.use('/user', userRoute);
app.use('/protected', exemploeroute);
app.use('/moviesbooks', moviesBooksRoutes);

// Root
app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
  });
}

export default app;
