const express = require('express');
const axios = require('axios');
const { all } = require('../app');
const router = new express.Router();

// Get Recipe by Ingredient
router.get('/recipe/:searchTerm', async (request, response) => {
  let recipeArray;
  const { searchTerm } = request.params;
  let { data } = await axios.get(
    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.apiKey}&ingredients=${searchTerm}&number=4`
  );
  const allRecipes = data.map(async (recipe) => recipe.id);

  Promise.all(allRecipes)
    .then((res) =>
      res.map((recipeId) => {
        axios
          .get(
            `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.apiKey}&includeNutrition=false`
          )
          .then((data) => {
            console.log('DATA', data.data.image);
            const sourceUrl = data.data.sourceUrl;
            const image = data.data.image;
            response.send(data.data);
          });
      })
    )
    .catch((error) => response.send(error));
  console.log(recipeArray, 'recipe array');
  // response.send(data)
});

// Get Specfic Recipe Link
// router.get('recipes/:searchTerm/:result', async (request, response) => {
//     const {id} = request.params
//     let {data} = await axios.get(``)
// })

module.exports = router;
