import React, { Component } from "react";
import ReactCountdown from "react-countdown-now";

export default class Countdown extends Component {
  renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
    const wrapper = (value, constraint) => {
      return (
        <div className="timerUnit">
          <p style={{ padding: 0, margin: 0 }}>{value}</p>
          <p style={{ padding: 0, margin: 0 }}>{constraint}</p>
        </div>
      );
    };

    if (completed) {
      return <p>Offer Ended</p>;
    } else {
      return (
        <div
          className="timer"
          style={{ display: "flex", alignItems: "center" }}
        >
          {wrapper(days, "days")}
          <span>:</span>
          {wrapper(hours, "Hrs")}
          <span>:</span>
          {wrapper(minutes, "Min")}
          <span>:</span>
          {wrapper(seconds, "Sec")}
        </div>
      );
    }
  };

  render() {
    return (
      <ReactCountdown
        date={this.props.timeLimit}
        renderer={this.renderCountdown}
      />
    );
  }
}
