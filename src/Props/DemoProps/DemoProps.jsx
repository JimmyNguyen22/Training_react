import React, { Component } from "react";
import ProductCard from "./ProductCard";

const data = [
  {
    name: "timmy",
    age: "17",
  },
  {
    name: "jayson",
    age: "20",
  },
];
export default class DemoProps extends Component {
  renderPerson = () => {
    return data.map((person, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductCard item={person}></ProductCard>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderPerson()}</div>
      </div>
    );
  }
}
