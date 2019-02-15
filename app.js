var express = require('express');
var app = express();

app.get('/hello', (req, res) => {
  res.sendFile('hello.html', { root: `${__dirname}/public/` });
});

app.get('/world', (req, res) => {
  res.sendFile('world.html', { root: `${__dirname}/public/` });
});

app.listen(8080, () => console.log('app start'));
