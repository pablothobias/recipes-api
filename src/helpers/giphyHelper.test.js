const { fetchGifForRecipes } = require('./giphyHelper');

test('Should fetch gifs for each recipe', async () => {

    const recipes = [
        {
            title: "Bean Soup Recipe",
            href: "http://cookeatshare.com/recipes/bean-soup-55376",
            ingredients: "great northern beans, ham, onions, bacon, garlic, oregano",
            thumbnail: "http://img.recipepuppy.com/726572.jpg"
        },
        {
            title: "Turkey and Bacon Rolls",
            href: "http://simplyrecipes.com/recipes/turkey_and_bacon_rolls/",
            ingredients: "turkey, black pepper, garlic, basil, ham, provolone cheese, bacon",
            thumbnail: "http://img.recipepuppy.com/510531.jpg"
        }
    ];

    const result = await fetchGifForRecipes(recipes);

    expect(result).toBeDefined();
    expect(result).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                title: expect.any(String),
                href: expect.any(String),
                ingredients: expect.any(String),
                thumbnail: expect.any(String),
                gif: expect.any(String),
            })
        ])
    );
    expect(result).toBeInstanceOf(Array);
})