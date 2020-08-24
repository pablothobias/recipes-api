const sanitizeResponse = ({ recipesWithGif, ingredients }) => {
    try {
        const keywords = ingredients.split(',');
        const data = {
            keywords,
            recipes: recipesWithGif
        };

        const sanitizedData = handleAttributesNames(data);
        return sanitizedData;

    } catch (error) {
        throw ({ message: 'Internal Server Error', status: 500 });
    }
};

const handleAttributesNames = (data) => {
    for (let recipe of data.recipes) {
        recipe.link = recipe.href;
        recipe.ingredients = handleIngredients(recipe.ingredients);
        delete recipe.href;
        delete recipe.thumbnail;
    }
    return data;
};

const handleIngredients = (ingredients) => {
    const ingredientsRemovedSpaces = ingredients.replace(/\s+/g, '');
    const ingredientsArray = ingredientsRemovedSpaces.split(',');
    const sortedIngredients = ingredientsArray.sort();
    return sortedIngredients;
};

module.exports = { sanitizeResponse };