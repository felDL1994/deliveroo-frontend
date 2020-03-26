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
        <div className="menu-card">
          <div className="menu-text">
            <h3 className="menu-title">{title}</h3>
            <p className="menu-description">{description}</p>
            <div className="menu-horizontal">
              <span>{price}</span>
              {popular === true ? (
                <span className="menu-popular">
                  <FontAwesomeIcon icon="star"></FontAwesomeIcon> Populaire
                </span>
              ) : null}
            </div>
          </div>

          <div className="menu-picture">
            {picture ? (
              <img src={picture} alt={title} style={{ objectFit: "cover" }} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
