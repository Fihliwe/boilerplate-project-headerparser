// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable CORS for all routes
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files from 'public' directory
app.use(express.static('public'));

// Root route - serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Header parser endpoint
app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip || req.connection.remoteAddress,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});