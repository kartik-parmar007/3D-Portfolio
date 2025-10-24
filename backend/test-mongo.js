const mongoose = require('mongoose');
require('dotenv').config();

console.log('MONGODB_URI from .env:', process.env.MONGODB_URI);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

console.log('Attempting to connect to:', MONGODB_URI);

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Successfully connected to MongoDB');
  mongoose.connection.close();
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});