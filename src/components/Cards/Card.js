import React from "react";
import "./Card.css";

const Card = ({ data, HandlePageChange }) => {
  const {
    id,
    brand,
    category,
    discountPercentage,
    price,
    stock,
    thumbnail,
    title,
  } = data;

  return (
    <div className="Card">
      <p className="card-title">{title}</p>
      <img src={thumbnail} alt={title} className="card-img" />
      <p className="offer">Category : {category}</p>
      <button className="card-btn" onClick={() => HandlePageChange(title, id)}>
        More details..
      </button>
    </div>
  );
};

export default Card;
