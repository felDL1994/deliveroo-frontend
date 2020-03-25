import React from "react";

const Category = () => {
  return (
    <div>
      <h3>Brunch</h3>

      <div className="meals-container">
        <div className="meal-container">
          <div>
            <p>Brunch authentique 1 personne</p>
            <p>Assiette de jambon cuit, jambon</p>
            <div className="meal-horizontal">
              <p>25,00€</p>
              <p>Populaire</p>
            </div>
          </div>
          <img
            src="https://f.roocdn.com/images/menu_items/1583350/item-image.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;