const express = require('express');

const app = express();


app.use(express.json());
app.use(cors({
    origin: [process.env.FRONTEND_URL || 'http://localhost:3000'],
    credentials: true,
}));

app.use(cookieParser());