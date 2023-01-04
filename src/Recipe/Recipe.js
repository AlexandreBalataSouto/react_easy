import React, { useState, useEffect, useRef } from "react";
import "./Recipe.css";
import { v4 as uuid } from "uuid";

const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_RECIPE_IP}&app_key=${process.env.REACT_APP_RECIPE_KEY}%09&cuisineType=Central%20Europe&mealType=Lunch&imageSize=LARGE&random=false`;
let allRecipes = [];

const Recipe = () => {
  // const [allRecipes, setAllRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const filterRef = useRef(null);

  const getRecipes = async () => {
    fetch(url)
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        }
      })
      .then((data) => {
        setRecipes(data.hits);
        // setAllRecipes(data.hits);
        allRecipes = data.hits;
        setIsLoading(true);
      })
      .catch((error) => {
        console.log("error");
      });
  };
  useEffect(() => {
    getRecipes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filter = filterRef.current.value.toUpperCase();

    let newData = allRecipes.filter((item) => {
      let recipeName = item.recipe.label.toUpperCase();
      if (recipeName.includes(filter)) {
        return item;
      }
    });

    if (newData.length > 0) {
      setRecipes(newData);
    } else {
      setRecipes(allRecipes);
    }
  };

  return (
    <div className="container">
      <form className="form" action="#" onSubmit={handleSubmit}>
        <div className="form_search">
          <input type="text" ref={filterRef} />
          <button type="submit">Search</button>
        </div>
        {isLoading ? (
          <div className="list">
            {recipes.map((item) => {
              return (
                <div className="list_recipe" key={uuid()}>
                  <h3>{item.recipe.label}</h3>
                  <ul>
                    {item.recipe.ingredientLines.map((ingredient) => {
                      return <li key={uuid()}>{ingredient}</li>;
                    })}
                  </ul>
                  <p>Calories: {item.recipe.calories}</p>
                  <img src={item.recipe.image} alt="" />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="list_loading">
            <div className="loader"></div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Recipe;
