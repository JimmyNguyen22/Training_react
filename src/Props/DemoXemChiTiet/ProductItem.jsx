import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item, click } = this.props;
    return (
      <div className="card">
        <img src={item.hinhAnh} height={400} alt="..." />
        <div className="card-body">
          <h3>{item.tenSP}</h3>
          <p>{item.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              click(item);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
