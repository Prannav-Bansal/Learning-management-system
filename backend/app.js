const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { config } = require('dotenv');
config();

const app = express();

app.use(express.json());

//app.use(cors({
 //   origin: [process.env.FRONTEND_URL],
 //   credentials: true
//}));
app.use(cors());


app.use(cookieParser());

app.use('/ping' , function(req ,res) {
    res.send('/pong');
});

app.all('*', (req, res, next) => {
    res.status(404).send('Not Found');
});

module.exports = app;