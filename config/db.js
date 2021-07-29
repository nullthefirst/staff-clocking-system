require('dotenv').config();

const mongoose = require('mongoose');
const db = `mongodb+srv://nullthefirst:${process.env.MONGODB_PASSWORD}@cluster0.eai54.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected MongoDB!');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
