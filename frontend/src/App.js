import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./assets/images/logo.png";
import Category from "./components/Category";
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
              <img src={data.restaurant.picture} alt={data.restaurant.name} />
            </div>
            <div className="grey-back">
              <div className="wrapper">
                <div className="restaurant-details">
                  <div className="meals">
                    <Category></Category>
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
