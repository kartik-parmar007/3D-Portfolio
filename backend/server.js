const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
    res.status(500).json({ 
      message: 'Error fetching contact submissions',
      error: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});