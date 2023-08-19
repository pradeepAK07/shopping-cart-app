import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import axios from "axios";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  const fetchProductData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const res = response.data.products;
      console.log(res);
      setProductData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const HandlePageChange = () => {
    navigate("/title");
  };

  return (
    <div className="Home">
      <div className="card-container">
        {productData.map((data) => (
          <Card data={data} HandlePageChange={HandlePageChange} />
        ))}
      </div>
    </div>
  );
};

export default Home;
