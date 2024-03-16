import { render } from "@testing-library/react";
import React from "react";

class Customer extends React.Component {
  // eslint-disable-next-line react/require-render-return
  render() {
    return (
      <div>
        <CustomerProfile
          id={this.props.id}
          image={this.props.image}
          name={this.props.name}
        />
        <CustomerInfo job={this.props.job} />
      </div>
    );
  }
}

class CustomerProfile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="profile" />
        <h2>
          {this.props.name}
          {this.props.id}
        </h2>
      </div>
    );
  }
}
class CustomerInfo extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.job}</h3>
      </div>
    );
  }
}
export default Customer;
