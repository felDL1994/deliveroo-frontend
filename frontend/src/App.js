import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./assets/images/logo.png";
import Category from "./components/Category";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./App.css";

library.add(faStar, faPlus, faMinus);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);
  let total = 0;
  for (let i = 0; i < selectedProducts.length; i++) {
    total =
      total + Number(selectedProducts[i].price) * selectedProducts[i].quantity;
  }

  useEffect(async () => {
    const fetchData = async () => {
      const response = await axios.get("https://dlvr-bk.herokuapp.com/");
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  /*   console.log(data);
   */

  return (
    <div className="App">
      {isLoading === true ? (
        <h1 className="loading">En cours de chargement ...</h1>
      ) : (
        <div>
          <div className="header">
            <div className="top">
              <div className="top-logo">
                <img
                  style={{ height: "60px" }}
                  className="logo"
                  src={Logo}
                  alt=""
                />
              </div>
              <div className="restaurant-infos">
                <div className="restaurant-infostext">
                  <div className="restaurant-description">
                    <h1>{data.restaurant.name}</h1>
                    <p>{data.restaurant.description}</p>
                  </div>
                  <img
                    src={data.restaurant.picture}
                    alt={data.restaurant.name}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="body">
            <div className="content">
              <div className="menus">
                <div className="choix-menu">
                  {data.categories.map((category, index) => {
                    if (category.meals.length === 0) {
                      return null;
                    }
                    return (
                      <Category
                        setSelectedProducts={setSelectedProducts}
                        selectedProducts={selectedProducts}
                        name={category.name}
                        meals={category.meals}
                      ></Category>
                    );
                  })}
                </div>
              </div>
              <div className="panier">
                <div className="panier-card">
                  <button className="panier-valider">Valider mon panier</button>

                  <div className="panier-choix">
                    {selectedProducts.map((selectedProduct, index) => {
                      return (
                        <div className="panier-produits">
                          <div className="panier-counter">
                            <span>
                              <button
                                className="minus-button"
                                onClick={() => {
                                  const newSelectedProducts = [
                                    ...selectedProducts
                                  ];
                                  /*                              alert(index);
                                   */
                                  if (
                                    newSelectedProducts[index].quantity === 1
                                  ) {
                                    newSelectedProducts.splice(index, 1);
                                  } else {
                                    newSelectedProducts[index].quantity--;
                                  }

                                  setSelectedProducts(newSelectedProducts);
                                }}
                              >
                                <FontAwesomeIcon icon="minus"></FontAwesomeIcon>
                              </button>
                            </span>
                            <span>{selectedProduct.quantity}</span>
                            <span>
                              <button
                                className="add-button"
                                onClick={() => {
                                  const newSelectedProducts = [
                                    ...selectedProducts
                                  ];
                                  /*                              alert(index);
                                   */

                                  newSelectedProducts[index].quantity++;
                                  setSelectedProducts(newSelectedProducts);
                                }}
                              >
                                <FontAwesomeIcon icon="plus"></FontAwesomeIcon>
                              </button>
                            </span>
                          </div>
                          <span className="panier-item-name">
                            {selectedProduct.title}
                          </span>
                          <span className="panier-prix">
                            {selectedProduct.price} €
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="panier-resultat">
                    <div className="panier-sous-total">
                      <span className="panier-text">Sous-total</span>
                      <span className="panier-prix">{total.toFixed(2)} €</span>
                    </div>
                    <div className="panier-fraisdelivraison">
                      <span className="panier-text">Frais de livraison</span>
                      <span className="panier-prix">2.50 €</span>
                    </div>
                  </div>
                  <div className="panier-total">
                    <span className="panier-text">Total </span>
                    <span className="panier-prix">{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
