import React, { useState, useEffect } from "react";
import axios from "axios";

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

  console.log(data);
  return (
    <div className="App">
      {isLoading === true ? (
        <p>En cours de chargement ...</p>
      ) : (
        <div>{data.restaurant.name}</div>
      )}
    </div>
  );
}

export default App;
