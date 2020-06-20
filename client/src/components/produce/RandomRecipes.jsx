import React, { useState, useEffect } from 'react';
import axios from 'axios';






const RandomRecipes = ({searchTerm}) => {

const [recipeImage, setRecipeImage] = useState(null)
const [recipeLink, setRecipeLink] = useState(null)
const [recipeName, setRecipeName] = useState(null)

useEffect(() => {
    axios.get(`/recipe/${searchTerm}`).then(response => {
        response.data.map(data => {
            setRecipeImage(data.image);
            setRecipeLink(data.sourceUrl);
            setRecipeName(data.title);
        })
    })
}, [])

return(
    <div>
<h1>Recipes</h1>
<p>{recipeName}</p>
    </div>
)

}




export default RandomRecipes