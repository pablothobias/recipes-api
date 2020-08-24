const axios = require('axios');
const { GIPHY_BASE_URL } = require('../configs');

module.exports = {
    fetchGifForRecipes: async (recipes) => {
        try {
            const promises = recipes.map(recipe => fetchGif(recipe.title));
            const response = await Promise.all(promises)
                .then(res => res)
                .catch(error => {
                    throw (error);
                });

            recipes.forEach((recipe, index) => {
                let gif = null;
                if (response[index] && response[index].data.data[0]) {
                    gif = response[index].data.data[0].images.original.url;
                }
                recipe.gif = gif;
            });
            return recipes;
        } catch (error) {
            throw ({ message: 'Could not fetch some gifs for your recipe at Giphy. Please try later.', status: 404 });
        }
    }
};

async function fetchGif(title) {
    return await axios.get(`${GIPHY_BASE_URL}&q=${title}`);
}