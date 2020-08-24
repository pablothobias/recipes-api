const { sanitizeResponse } = require('./recipeCtrlHelper');

test('Should sanitize teh data to send to user', async () => {

    const ingredients = "ham,bacon,tomato";
    const recipesWithGif = [
        {
            title: 'Chopped Salad Italiano',
            href: 'http://www.recipezaar.com/Chopped-Salad-Italiano-212100',
            ingredients: 'ham, bacon, tomato, monterey jack cheese, cucumber, salad dressing, romaine lettuce, rotini',
            thumbnail: 'http://img.recipepuppy.com/34979.jpg',
            gif: 'https://media2.giphy.com/media/14wjfl78iigELu/giphy.gif?cid=3fd724a72fsq9tnc6px99pcjrh8qb2pljlkblf5sow08aov0&rid=giphy.gif'
        },
        {
            title: 'Cobb Salad Ham Roll-ups',
            href: 'http://www.recipezaar.com/Cobb-Salad-Ham-Roll-ups-115331',
            ingredients: 'bacon, blue cheese, ham, dijon mustard, eggs, lettuce, mayonnaise, tomato',
            thumbnail: 'http://img.recipepuppy.com/316985.jpg',
            gif: 'https://media3.giphy.com/media/xUA7aUxCScDJLTwemA/giphy.gif?cid=3fd724a7m7yzumr2t1xxh0j5el2aczklllpkcfl1a2735las&rid=giphy.gif'
        }
    ];

    const result = await sanitizeResponse({ recipesWithGif, ingredients });

    expect(result).toBeDefined();
    expect(result).toEqual(
        expect.objectContaining({
            keywords: expect.any(Array),
            recipes: expect.any(Array),
        }));

    expect(result.recipes).toEqual(expect.arrayContaining([
        expect.objectContaining({
            title: expect.any(String),
            link: expect.any(String),
            ingredients: expect.any(Array),
            gif: expect.any(String),
        })
    ]));

    expect(result).toBeInstanceOf(Object);
})