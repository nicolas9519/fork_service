const express = require('express');
const fork = require('./components/fork')
const { port } = require('./config/config');

const app = express();

app.use('/fork', fork);

app.listen(port, function callbackListen() {
  console.log(`APP RUNNING IN PORT : ${port}`);
});
