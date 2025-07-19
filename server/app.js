const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { config } = require('dotenv');
config();

const app = express();


app.use(express.json());
app.use(cors({
    origin: [process.env.FRONTEND_URL || 'http://localhost:3000'],
    credentials: true,
}));

app.use(cookieParser());