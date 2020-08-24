require('dotenv/config');

module.exports = {
    RECIPE_PUPPY_BASE_URL: 'http://www.recipepuppy.com/api/',
    GIPHY_BASE_URL: `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&limit=1`,
};