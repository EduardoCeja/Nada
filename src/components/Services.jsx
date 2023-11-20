import React, { Component } from "react";
import { FaShippingFast, FaRegClock, FaCreditCard } from "react-icons/fa";

import "../styles.css";

const ServiceItem = ({ icon, title, body }) => {
  return (
    <div className="offerItem">
      {icon}
      <div className="offerItemBody">
        <p className="offerItemHeading">{title}</p>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="offers">
          <ServiceItem
            title="Free Shipping"
            body="Free Shipping World Wide"
            icon={<FaShippingFast className="offerItemImg" />}
          />
          <ServiceItem
            title="24 X 7 Service"
            body="Online Service For New Customer"
            icon={<FaRegClock className="offerItemImg" />}
          />

          <ServiceItem
            title="Festival Offer"
            body="Free Shipping World Wide"
            icon={<FaRegClock className="offerItemImg" />}
          />
          <ServiceItem
            title="Online Payment"
            body="Contrary to New Belief."
            icon={<FaCreditCard className="offerItemImg" />}
          />
        </div>
      </div>
    );
  }
}
