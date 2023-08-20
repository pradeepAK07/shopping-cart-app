import React, { useState } from "react";
import { connect } from "react-redux";
import "./SingleProduct.css";
import ProductCarosel from "./ProductCarosel/ProductCarosel";

const SingleProduct = ({ product }) => {
  const {
    title,
    description,
    discountPercentage,
    price,
    rating,
    stock,
    thumbnail,
    brand,
  } = product.singleProduct;
  const [count, setCount] = useState(0);

  const HandleAdd = () => {
    setCount((prev) => prev + 1);
  };
  const HandleSub = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };
  return (
    <div className="SingleProduct">
      <div className="single-product-container">
        <div className="product-image">
          <h2 className="single-product-title">{title}</h2>
          <img src={thumbnail} alt={title} className="single-product-img" />
        </div>
        <div className="product-body">
          <p className="product-description"> Description : {description}</p>
          <div className="price-container">
            <div>
              <p className="price">Price : ${price}</p>
              <p className="rating">{rating}</p>
            </div>
            <div>
              <p className="stock">{stock} is left</p>
              <p className="offer"> {Math.round(discountPercentage)}%off</p>
            </div>
            <div>
              <button className="sub-btn" onClick={HandleSub}>
                -
              </button>
              {count}
              <button className="add-btn" onClick={HandleAdd}>
                +
              </button>
              <br />
              <button className="cart-btn">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, null)(SingleProduct);
