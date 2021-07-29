require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect database
connectDB();

app.get('/', (req, res) => res.send('Hello world'));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
