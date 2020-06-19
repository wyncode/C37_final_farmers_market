const express = require('express');
const axios = require('axios');
const router = new express.Router();





// Get Recipe by Ingredient
router.get('/recipe/:searchTerm', async (request, response) => {
    const { searchTerm } = request.params
    let { data } = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.apiKey}&ingredients=${searchTerm}`)
response.send(data)

})




module.exports = router;