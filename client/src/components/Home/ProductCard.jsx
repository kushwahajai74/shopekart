/* eslint-disable react/prop-types */
import React from "react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    half: true,
    count: 5,
    value: product.ratings,
    // color2: "tomato",
    size: window.innerWidth < 600 ? 25 : 20,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name.substring(0, 50)}</p>
      <div>
        <ReactStars {...options} />
        <span>({product.numberOfReviews} Reviews)</span>
      </div>
      <span>₹{`${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
