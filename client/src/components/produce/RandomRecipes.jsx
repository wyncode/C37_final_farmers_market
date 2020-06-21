import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomRecipes = ({ searchTerm }) => {
  const [recipeOne, setRecipeOne] = useState([]);
  const [recipeTwo, setRecipeTwo] = useState([]);

  console.log(searchTerm);

  const getFirstRecipe = async () => {
    await axios.get(`/recipe/${searchTerm}`).then((response) => {
      console.log(response);
      setRecipeOne(response.data);
    });
  };

  const getSecondRecipe = async () => {
    await axios.get(`/recipe/${searchTerm}`).then((response) => {
      console.log(response);
      setRecipeTwo(response.data);
    });
  };

  useEffect(() => {
    getFirstRecipe();
    getSecondRecipe();
  }, [searchTerm]);
  console.log('Recipe 1: ', recipeOne);
  console.log('Recipe 2: ', recipeTwo);

  return (
    <div>
      <h1>Recipes</h1>

      <img src={recipeOne.image} />
      <a href={recipeOne.sourceUrl} target="_blank">
        {recipeOne.title}
      </a>
      <img src={recipeTwo.image} />

      <a href={recipeTwo.sourceUrl} target="_blank">
        {recipeTwo.title}
      </a>
    </div>
  );
};

export default RandomRecipes;
