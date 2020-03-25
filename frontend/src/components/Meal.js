import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

const Meal = props => {
  return (
    <div>
      <div className="meal-container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>{props.title}</p>
          <p style={{ color: "grey" }}>{props.description}</p>
          <div className="meal-horizontal">
            <p>{props.price}</p>
            {props.popular === true ? (
              <p>
                <FontAwesomeIcon icon="star"></FontAwesomeIcon>Populaire
              </p>
            ) : null}
          </div>
        </div>
        {props.picture ? (
          <img
            src={props.picture}
            alt={props.title}
            style={{ objectFit: "cover" }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Meal;
