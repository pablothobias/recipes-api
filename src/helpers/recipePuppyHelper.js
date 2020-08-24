const axios = require('axios');
const { RECIPE_PUPPY_BASE_URL } = require('../configs');

module.exports = {
    fetchRecipesFromRecipePuppy: async (ingredients) => {
        try {
            const response = await axios.get(`${RECIPE_PUPPY_BASE_URL}?i=${ingredients}`);
            const recipes = response.data.results;
            return recipes;
        } catch (error) {
            throw(error);
        }
    }
};