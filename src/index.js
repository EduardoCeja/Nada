import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ProductDetails from "./components/product/ProductDetails";
import Services from "./components/Services";
import NewProducts from "./components/product/NewProduct";

class App extends Component {
  state = {
    product: {
      name: "WAIST DRESS",
      details:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the maste",
      price: "180", // in $
      discount: "50", // in %
      size: ["M", "L", "XL"],
      inStock: true,
      color: ["#ffc0cb", "#87e487", "#c9c0c0"],
      image: [
        "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      link: "#",
      timeLimit: Date.now() + 172800 * 1000,
      description: [
        { name: "Ideal For", value: "Women" },
        { name: "Ideal For", value: "Women" },
        { name: "Ideal For", value: "Women" },
        { name: "Ideal For", value: "Women" },
        { name: "Ideal For", value: "Women" }
      ]
    }
  };

  render() {
    return (
      <div className="container ">
        <div className="left-aside">
          <Services />
          <NewProducts />
        </div>

        <div className="main">
          <ProductDetails product={this.state.product} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
