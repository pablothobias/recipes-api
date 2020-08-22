const axios  = require('axios');
const { RECIPE_PUPPY_BASE_URL } = require('../configs');

module.exports = {
    fetchRecipesFromRecipePuppy: async (ingredients, next) => {
        try {
            return await axios.get(`${RECIPE_PUPPY_BASE_URL}?i=${ingredients}`);
        } catch (error) {
            next(error);
        }
    }
};