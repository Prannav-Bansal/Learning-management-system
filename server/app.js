import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: [process.env.FRONTEND_URL || 'http://localhost:3000'],
  credentials: true,
}));

app.use(cookieParser());

export default app;
