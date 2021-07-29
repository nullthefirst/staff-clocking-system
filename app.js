// configuring packages
require('dotenv').config();
const express = require('express');
const staffRoutes = require('./src/apiRoutes');
const mongoose = require('mongoose');
const app = express();

// connect database
const mongoURL = `mongodb+srv://nullthefirst:${process.env.MONGODB_PASSWORD}@releafdatabase.eai54.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.MONGODB_DATABASE,
});

const db = mongoose.connection;

if (!db) {
  console.log('Error connecting to database');
} else {
  console.log('Successfully connected MongoDB');
}

// setup middleware
app.use('/api', staffRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server initialization
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Welcome to the Staff Clock-In System'));
app.listen(port, () => console.log(`Server running on port ${port}`));
