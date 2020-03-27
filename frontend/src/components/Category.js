import React from "react";
import Meal from "./Meal";
import "../App.css";

const Category = props => {
  return (
    <div className="menu">
      <h2>{props.name}</h2>
      <div className="menu-container">
        {props.meals.map((meal, index) => {
          return (
            <Meal
              {...meal}
              setSelectedProducts={props.setSelectedProducts}
              selectedProducts={props.selectedProducts}
            ></Meal>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
