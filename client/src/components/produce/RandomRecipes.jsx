import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomRecipes.css';

const RandomRecipes = (props) => {
  const [recipeOne, setRecipeOne] = useState([]);
  const [recipeTwo, setRecipeTwo] = useState([]);

  console.log(props);

  const getFirstRecipe = async () => {
    await axios.get(`/recipe/${props.searchTerm}`).then((response) => {
      console.log(response);
      setRecipeOne(
        response.data[Math.floor(Math.random() * response.data.length)]
      );
    });
  };

  const getSecondRecipe = async () => {
    await axios.get(`/recipe/${props.searchTerm}`).then((response) => {
      setRecipeTwo(
        response.data[Math.floor(Math.random() * response.data.length)]
      );
    });
  };

  useEffect(() => {
    props.searchTerm && getFirstRecipe();
    props.searchTerm && getSecondRecipe();
  }, [props.searchTerm]);

  return (
    <div className="recipe-block">
      <div className="recipe">
        <img src={recipeOne && recipeOne.image} />
        <a href={recipeOne && recipeOne.sourceUrl} target="_blank">
          {recipeOne && recipeOne.title}
        </a>
      </div>
      <div className="recipe">
        <img src={recipeTwo && recipeTwo.image} />
        <a href={recipeTwo && recipeTwo.sourceUrl} target="_blank">
          {recipeTwo && recipeTwo.title}
        </a>
      </div>
    </div>
  );
};

export default RandomRecipes;
