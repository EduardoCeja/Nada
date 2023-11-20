import React from "react";

import "../../styles.css";

const ProductItem = props => (
  <div className="new-product-item">
    <img src={props.product.imageSrc} alt="placeholder" />
    <div className="new-product-item-body">
      <p>*****</p>
      <p className="new-product-item-name">{props.product.name}</p>
      <p className="new-product-item-price">
        ${(props.product.price * props.product.discount) / 100}{" "}
        <span>${props.product.price}</span>
      </p>
    </div>
  </div>
);

export default ProductItem;
