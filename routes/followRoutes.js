// routes/followRoutes.js
const express = require('express');
const router = express.Router();

// Example route
router.post('/follow', (req, res) => {
  // Your logic for following users
  res.send('Follow route hit');
});

module.exports = router;
