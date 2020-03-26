import React from "react";
import Meal from "./Meal";
import "../App.css";

const Category = props => {
  return (
    <div className="menu-item">
      <h3>{props.name}</h3>

      <div className="menus-container">
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
