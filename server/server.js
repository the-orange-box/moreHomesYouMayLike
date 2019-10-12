const express = require('express');
const axios = require('axios');
const app = express();

const PORT = 3030;

app.get('/', (req, res) => {
  res.send('The server is working and listening to endpoint /');
  express.static('../public');
});