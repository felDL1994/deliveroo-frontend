import React from "react";

const Meal = props => {
  return (
    <div>
      <div className="meal-container">
        <div>
          <p>{props.title}</p>
          <p>{props.description}</p>
          <div className="meal-horizontal">
            <p>{props.price}</p>
            <p>{props.popular}</p>
          </div>
        </div>
        <img src={props.picture} alt={props.title} />
      </div>
    </div>
  );
};

export default Meal;
