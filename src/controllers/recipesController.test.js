const request = require('supertest');
const { BASE_URL } = require('../configs');

test('Should get recipes', async () => {
    const ingredients = 'bacon, ham, garlic';
    const result = await request(BASE_URL).get(`/recipes?i=${ingredients}`);

    expect(result.body).toEqual(
        expect.objectContaining({
            keywords: expect.any(Array),
            recipes: expect.any(Array),
        }));

    expect(result.body.recipes).toEqual(expect.arrayContaining([
        expect.objectContaining({
            title: expect.any(String),
            link: expect.any(String),
            ingredients: expect.any(Array),
            gif: expect.any(String),
        })
    ]));
    expect(result.status).toBe(200);
    expect(result.body.recipes).toBeInstanceOf(Array);

})

test('Should get error 400 when trying to fetch recipes with more than three parameters', async () => {
    const result = await request(BASE_URL).get('/recipes?i=bacon,ham,garlic,tomato')
    expect(result.status).toBe(400);
})