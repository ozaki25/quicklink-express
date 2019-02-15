var express = require('express');
var app = express();

app.get('/hello', (req, res) => {
  res.sendFile('hello.html', { root: `${__dirname}/public/` });
});

app.get('/world', async (req, res) => {
  await new Promise(resolve => setTimeout(() => resolve(), 3000));
  res.sendFile('world.html', { root: `${__dirname}/public/` });
});

app.listen(8080, () => console.log('app start'));
