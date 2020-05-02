const express = require('express');
const fork = require('./components/fork')

const app = express();
const port = 3000;

app.use('/fork', fork);

app.listen(port, () => {
  console.log(`APP RUNNING IN PORT : ${port}`);
});
