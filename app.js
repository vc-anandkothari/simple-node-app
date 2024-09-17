const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

// Built-in Middleware to parse JSON data in the request body
app.use(bodyParser.json());

// Use the routes in your app
app.get('/', (req, res) => {
  res.send("Hello from Youtube code 2");
});
app.get('/users', (req, res) => {
  res.send("This is users list from Youtube code 2");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
