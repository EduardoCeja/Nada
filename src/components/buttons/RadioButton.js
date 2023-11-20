import React, { Component } from "react";

import "./buttonStyles.css";

export default class RadioButton extends Component {
  onChangeHandler = e => {};

  render() {
    return (
      <label className="radioBtnWrapper">
        &nbsp;
        <input type="radio" name={this.props.name} value={this.props.value} />
        <span className={`radioBtnCheckmark`} style={this.props.style}>
          {this.props.label || null}
        </span>
      </label>
    );
  }
}
