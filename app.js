const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Built-in Middleware to parse JSON data in the request body
app.use(bodyParser.json());

// Use the routes in your app
app.get('/', (req, res) => {
  res.send(`Hello! from Node JS Application -  ${PORT}`);
});

app.get('/cars', (req, res) => {
  res.send("Response from Cars API");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
