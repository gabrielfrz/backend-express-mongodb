import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';
import cors from 'cors';
import userRoute from './routes/user.route.js';
import exemploeroute from './routes/example.route.js';
import moviesBooksRoutes from './routes/moviebook.route.js';
import { swaggerUi, swaggerSpec } from './config/swagger.js';


dotenv.config();
db.connect();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/user', userRoute);
app.use('/protected', exemploeroute);
app.use('/moviesbooks', moviesBooksRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


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
