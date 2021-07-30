// configuring packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const staffRoutes = require('./src/apiRoutes');
const app = express();

// setup middleware
app.use(cors({ origin: true, credentials: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect database
const mongoURL = `mongodb+srv://nullthefirst:${process.env.MONGODB_PASSWORD}@releafdatabase.eai54.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  dbName: process.env.MONGODB_DATABASE,
});

const db = mongoose.connection;

if (!db) {
  console.log('Error connecting to database');
} else {
  console.log('Successfully connected MongoDB');
}

// server initialization
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));

// routes
app.get('/', (req, res) => res.send('Welcome to the Staff Clock-In System'));
app.use('/api', staffRoutes);
