const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Nodemon test docker-compose');
});

module.exports = routes;