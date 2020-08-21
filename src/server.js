const express = require('express');
const routes = require('./routes');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use(routes);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);