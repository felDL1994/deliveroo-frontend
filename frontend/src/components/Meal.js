import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

const Meal = ({
  title,
  description,
  popular,
  price,
  picture,
  selectedProducts,
  setSelectedProducts
}) => {
  return (
    <div>
      <div
        className="meal-container"
        onClick={() => {
          const copy = [...selectedProducts];

          let isProductFound = false;
          for (let i = 0; i < copy.length; i++) {
            if (copy[i].title === title) {
              copy[i].quantity++;
              isProductFound = true;
            }
          }
          if (isProductFound === false) {
            copy.push({ title: title, quantity: 1, price: price });
          }

          setSelectedProducts(copy);
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>{title}</p>
          <p style={{ color: "grey" }}>{description}</p>
          <div className="meal-horizontal">
            <p>{price}</p>
            {popular === true ? (
              <p>
                <FontAwesomeIcon icon="star"></FontAwesomeIcon>Populaire
              </p>
            ) : null}
          </div>
        </div>
        {picture ? (
          <img src={picture} alt={title} style={{ objectFit: "cover" }} />
        ) : null}
      </div>
    </div>
  );
};

export default Meal;
