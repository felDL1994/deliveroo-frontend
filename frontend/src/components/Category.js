import React from "react";
import Meal from "./Meal";
import "../App.css";

const Category = props => {
  return (
    <div>
      <h3>{props.name}</h3>

      <div className="meals-container">
        {props.meals.map((meal, index) => {
          return <Meal {...meal}></Meal>;
        })}
      </div>
    </div>
  );
};

export default Category;
