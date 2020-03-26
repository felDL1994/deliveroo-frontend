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
    <div className="menu-content">
      <div
        className="menu-card"
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
        <div className="menu-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="menu-infos">
            <span className="menu-price">{price} €</span>
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
  );
};

export default Meal;
