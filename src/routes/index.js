const express = require('express');

const routes = express.Router();

routes.get('/recipes', (req, res, next) => {
    try {
        throw({message: 'internal error test', status: 500});
        res.send('Nodemon test docker-compose');
    } catch (error) {
        next(error);
    }
});

module.exports = routes;