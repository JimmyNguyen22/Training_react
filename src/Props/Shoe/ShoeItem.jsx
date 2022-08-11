import React, { Component } from "react";

export default class img extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="card">
        <img src={item.image} alt="" />
        <div className="card-body">
          <h3>{item.name}</h3>
          <p>{item.price} $</p>
          <button className="btn bg-dark text-white">Add to carts</button>
        </div>
      </div>
    );
  }
}
