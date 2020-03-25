import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./assets/images/logo.png";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
            {" "}
            <div className="wrapper">
              <img className="logo" src={Logo} alt="" />
            </div>
          </div>
          <div className="wrapper">
            <h1>{data.restaurant.name}</h1>
            <div className="restaurant-info">
              <p>{data.restaurant.description}</p>
              <img src={data.restaurant.picture} alt="" />
            </div>
            <div className="grey-back">
              <div className="wrapper">
                <div className="restaurant-details">
                  <div className="meals">
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
                  <div className="basket">Le panier</div>
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
