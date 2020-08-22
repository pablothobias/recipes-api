const express = require('express');
const { fetchRecipes } = require('../controllers/recipesController');

const routes = express.Router();

routes.get('/recipes', fetchRecipes);

module.exports = routes;