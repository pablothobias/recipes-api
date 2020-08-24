const { fetchRecipesFromRecipePuppy } = require('../helpers/recipePuppyHelper');
const { fetchGifForRecipes } = require('../helpers/giphyHelper');
const { sanitizeResponse } = require('../helpers/recipeCtrlHelper');

module.exports = {
    fetchRecipes: async (req, res, next) => {
        try {
            const ingredients = req.query.i;
            const recipePuppyResponse = await fetchRecipesFromRecipePuppy(ingredients);
            const recipesWithGif = await fetchGifForRecipes(recipePuppyResponse);
            console.log({recipesWithGif});
            const sanitizedRecipes = sanitizeResponse({recipesWithGif, ingredients});
            res.status(200).send(sanitizedRecipes);
        } catch (error) {
            next(error);
        }
    }
};