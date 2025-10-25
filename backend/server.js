const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Add debugging for ip-address module
try {
  require('ip-address');
  console.log('ip-address module loaded successfully');
} catch (err) {
  console.error('Failed to load ip-address module:', err.message);
}

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection with better error handling
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

console.log('Attempting to connect to MongoDB with URI:', MONGODB_URI.replace(/\/\/.*@/, '//****:****@')); // Hide credentials

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB successfully');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Contact form schema
const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API' });
});

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, title, description } = req.body;
    
    const newContact = new Contact({
      fullName,
      title,
      description
    });
    
    const savedContact = await newContact.save();
    res.status(201).json({ 
      message: 'Contact form submitted successfully',
      data: savedContact 
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ 
      message: 'Error submitting contact form',
      error: error.message 
    });
  }
});

// Get all contact submissions
app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({ 
      message: 'Error fetching contact submissions',
      error: error.message 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});