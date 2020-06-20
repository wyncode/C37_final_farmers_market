import React, { useState, useEffect } from 'react';
import axios from 'axios';


const RandomRecipes = ({ searchTerm }) => {
  const [recipeImage, setRecipeImage] = useState(null);
  const [recipeLink, setRecipeLink] = useState(null);
  const [recipeName, setRecipeName] = useState(null);

  console.log(searchTerm)

  useEffect(() => {

    axios.get(`/recipe/${searchTerm}`).then(response => {
      console.log(response.data)
   setRecipeImage(response.data.image)
   setRecipeName(response.data.title)
   setRecipeLink(response.data.sourceUrl)
    });
    
  
  },[searchTerm]);

  return (
    <div>
      <h1>Recipes</h1>
     
      <img src={recipeImage}/>

      <a href={recipeLink} target="_blank">{recipeName}</a>
  
    </div>
  );
};

export default RandomRecipes;
