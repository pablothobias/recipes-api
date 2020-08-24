const { fetchRecipesFromRecipePuppy } = require('./recipePuppyHelper');

test('Should fetch gifs for each recipe', async () => {

    const ingredients = "ham,bacon,tomato";

    const result = await fetchRecipesFromRecipePuppy(ingredients);

    expect(result).toBeDefined();
    expect(result).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                title: expect.any(String),
                href: expect.any(String),
                ingredients: expect.any(String),
                thumbnail: expect.any(String),
            })
        ])
    );
    expect(result).toBeInstanceOf(Array);
})