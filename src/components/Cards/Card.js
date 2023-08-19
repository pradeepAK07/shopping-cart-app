import React from "react";
import "./Card.css";

const Card = ({ data, HandlePageChange }) => {
  const {
    brand,
    category,
    discountPercentage,
    price,
    stock,
    thumbnail,
    title,
  } = data;
  console.log(data);
  return (
    <div className="Card">
      <p className="card-title">{title}</p>
      <img src={thumbnail} alt={title} className="card-img" />
      <p className="offer">Category : {category}</p>
      <button className="card-btn" onClick={() => HandlePageChange()}>
        Click to see more
      </button>
    </div>
  );
};

export default Card;
