import React, { Component } from "react";
import {
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaFacebookF,
  FaHeart
} from "react-icons/fa";

import "../../styles.css";
import RadioButton from "../buttons/RadioButton";
import { Tabs, TabItem } from "../Tabs";
import Table_2xN from "../Table_2xN";
import Countdown from "../Countdown";

export default class ProductDetails extends Component {
  state = { bannerImage: this.props.product.image[0] };

  renderExtraImage = () => {
    return this.props.product.image.map(src => (
      <div onClick={() => this.setState({ bannerImage: src })}>
        <img className="product-image" src={src} alt="product display" />
      </div>
    ));
  };

  renderColorSelector = () => {
    return this.props.product.color.map(color => (
      <RadioButton
        style={{ backgroundColor: color }}
        name="color"
        value={color}
        onColorChange={this.props.onColorChange}
      />
    ));
  };

  renderSizeSelector = () => {
    return this.props.product.size.map(size => (
      <RadioButton
        name="size"
        value={size}
        label={size}
        onSizeChange={this.props.onSizeChange}
      />
    ));
  };

  render() {
    const {
      name,
      details,
      price,
      discount,
      inStock,
      timeLimit,
      description
    } = this.props.product;
    return (
      <div className="main">
        <div>
          {/* Product Images */}
          <div className="product-image-wrapper">
            <img
              className="product-banner-image"
              src={this.state.bannerImage}
              alt="product display"
            />

            <div className="product-extra-images">
              {this.renderExtraImage()}
            </div>
          </div>

          {/* Product description */}
          <div className="product-description-wrapper">
            <p className="product-name">{name}</p>
            <p className="product-price">
              <del>${price}</del> <span>{discount}% Off</span>
            </p>
            <p className="product-discounted-price">
              ${Math.round((price * discount) / 100, 2)}
            </p>

            {/* Color Selector */}
            <div className="color-option">{this.renderColorSelector()}</div>

            <div>
              <div className="size-details">
                Select Size
                <span>Size Chart</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="size-option">{this.renderSizeSelector()}</div>

            {/* Check if in stock */}
            {inStock ? (
              <div className="product-in-stock">InStock</div>
            ) : (
              <div className="product-in-stock">OutOfStock</div>
            )}

            {/* TODO: add quantity button style */}
            {/* <div className="quantity">
                  Quantity
                  <div className="quantity-selector">1</div>
                </div> */}

            {/* Product buy buttons */}
            <div className="product-buy-buttons">
              <button className="btn red-btn">ADD TO CART</button>
              <button className="btn red-btn">BUY NOW</button>
            </div>

            <div className="product-details">
              <p>Product Details</p>
              <p>{details}</p>
            </div>

            {/* Share links */}
            <div className="product-link">
              <div className="social-share">
                <p>Share It </p>
                <FaFacebookF className="social-icon" />
                <FaGooglePlusG className="social-icon" />
                <FaTwitter className="social-icon" />
                <FaInstagram className="social-icon" />
              </div>

              <div>|</div>

              <div className="wishlist">
                <FaHeart className="social-icon" />
                <span>Add To Wishlist</span>
              </div>
            </div>

            <div className="offerEnd">
              <p>Time Reminder</p>
              <div>
                <Countdown timeLimit={timeLimit} />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ width: "100%", marginTop: "20px" }}>
          <Tabs selected={0}>
            <TabItem name="DESCRIPTION">
              <Table_2xN description={description || []} />
            </TabItem>
            <TabItem name="DETAILS">Details</TabItem>
            <TabItem name="VIDEO">Video</TabItem>
          </Tabs>
        </div>
      </div>
    );
  }
}
