import express from 'express';
import { connectDB } from './config/db.js';  
import userRoutes from './routes/userRoutes.js';
import auth from './routes/auth.js'
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectDB();

app.use('/api', userRoutes);
app.use('/api/auth', auth)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
