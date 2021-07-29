require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const router = require('./routes/api/staff');

const app = express();

// connect database
connectDB();

const port = process.env.PORT || 8080;

app.use(router);

app.listen(port, () => console.log(`Server running on port ${port}`));
