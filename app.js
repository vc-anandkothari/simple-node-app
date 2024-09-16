// Import express
const express = require('express');

// Initialize app
const app = express();

// Create a simple GET endpoint
app.get('/', (req, res) => {
  res.send('Hello from your Node Js application');
});

// Create a simple GET endpoint
app.get('/greet', (req, res) => {
  res.send('Greetings from the GET endpoint!');
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
