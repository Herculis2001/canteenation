const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { bkashController } = require('./bkashController'); 
const cors = require('cors');

// Load environment variables from a .env file if needed
require('dotenv').config();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Use the bkashController routes
app.use('/api/bkash', bkashController); // Use '/api/bkash' as the base route for bKash endpoints

// Root route
app.get('/', (req, res) => {
  res.send('Hello, this is your backend');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
