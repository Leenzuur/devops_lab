'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

let tests = [];

// App
const app = express();
app.get('/tests', (req, res) => {
  res.send(JSON.stringify(tests));
  console.log(`CALLED /tests`);
});
app.get('/test/new', (req, res) => {
  let test = { id: tests.length, name: 'test' + tests.length };
  tests.push(test)
  res.send('Ajouté : ' + JSON.stringify(test));
  console.log(`CALLED /test/new`);
});
app.get('/test/clear', (req, res) => {
  tests = [];
  res.send('Réinitialisé !');
  console.log(`CALLED /test/clear`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT} c`);
