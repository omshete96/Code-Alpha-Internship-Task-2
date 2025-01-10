const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const followRoutes = require('./routes/followRoutes');

// MongoDB connection URI for local MongoDB
const dbURI = 'mongodb://localhost:27017/social_media_platform';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// Routes
app.use('/api/users', userRoutes);   // User routes (register, login)
app.use('/api/posts', postRoutes);   // Post routes (create post, view posts)
app.use('/api/follow', followRoutes); // Follow routes (follow, unfollow)

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Social Media Platform API');
});

// Set the port for the server
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
