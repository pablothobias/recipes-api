const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { commonErrorHandler, ingredientsLengthHandler, notFoundError } = require('./middlewares.js');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());
app.use(cors());
app.use(ingredientsLengthHandler);
app.use(routes);
app.use(notFoundError);
app.use(commonErrorHandler);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);