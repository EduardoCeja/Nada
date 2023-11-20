import React, { Component } from "react";

import "./tabsStyles.css";

export default class Tabs extends Component {
  state = { selected: this.props.selected };

  handleClick(index, e) {
    e.preventDefault();
    this.setState({ selected: index });
  }

  renderTabName() {
    return this.props.children.map((child, index) => (
      <li onClick={e => this.handleClick(index, e)} key={index}>
        <div
          className={`list-item ${
            this.state.selected === index ? "active-tab" : ""
          }`}
        >
          {child.props.name}
        </div>
      </li>
    ));
  }

  renderTabContent() {
    return <div>{this.props.children[this.state.selected]}</div>;
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <ul className="labels">{this.renderTabName()}</ul>
        </div>
        <div style={{ width: "100%" }}>{this.renderTabContent()}</div>
      </div>
    );
  }
}
