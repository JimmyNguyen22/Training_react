import React, { Component } from "react";
import CarItem from "./CarItem";

export default class CarList extends Component {
  renderProductItem = () => {
    let { product, carDetail } = this.props;
    return product.map((car, index) => {
      return (
        <div className="col-3" key={index}>
          <CarItem item={car} itemDetail={carDetail}></CarItem>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>Product list</h3>
        <div className="row">{this.renderProductItem()}</div>
      </div>
    );
  }
}
