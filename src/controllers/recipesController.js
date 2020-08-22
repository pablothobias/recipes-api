const { fetchRecipesFromRecipePuppy } = require('../helpers/recipePuppyHelper');

module.exports = {
    fetchRecipes: async (req, res, next) => {
        try {
            const ingredients = req.query.i;
            const recipesResponse = await fetchRecipesFromRecipePuppy(ingredients, next);
            const recipes = recipesResponse.data.results;
            const keywords = req.query.i.split(',');
            sanitizeResponse({recipes, keywords});
            res.send(recipes);
        } catch (error) {
            next(error);
        }
    }
};