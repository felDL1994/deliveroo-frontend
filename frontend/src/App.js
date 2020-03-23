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
          </div>

          <div className="content">
            <div className="wrapper">
              <div className="details">
                <div className="menus">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi quis nam modi voluptas pariatur dicta velit quasi,
                    fugit aliquam hic nulla aut culpa assumenda? Debitis et
                    laboriosam vero at aliquid.
                  </p>
                </div>
                <div className="basket">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores molestias corporis ab vitae corrupti eum quia optio!
                  Aut voluptatibus modi pariatur rerum ab sapiente ex accusamus
                  soluta odio delectus! Possimus.
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
