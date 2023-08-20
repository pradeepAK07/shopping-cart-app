import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import axios from "axios";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductData } from "../../features/productActionType";

const Home = ({ product, dispatch, fetchProductData }) => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const res = response.data.products;
      setProductData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const HandlePageChange = (title, id) => {
    navigate(`/${title}`);
    fetchProductData(id);
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

const mapStateToProps = (state) => ({
  product: state.product,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductData: (id) => dispatch(fetchProductData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
