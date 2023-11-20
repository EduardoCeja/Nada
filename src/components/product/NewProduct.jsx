import React, { Component } from "react";

import "../../styles.css";
import ProductItem from "./ProductItem";

const product = {
  name: "Flare Dress",
  price: 120,
  discount: 50,
  rating: 5,
  imageSrc: "https://via.placeholder.com/150"
};

export default class NewProducts extends Component {
  render() {
    return (
      <div className="new-product">
        <div className="new-product-head">NEW PRODUCT</div>
        <ProductItem product={product} />
        <ProductItem product={product} />
        <ProductItem product={product} />
        <ProductItem product={product} />
        <ProductItem product={product} />
        <ProductItem product={product} />
      </div>
    );
  }
}
