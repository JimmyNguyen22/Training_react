import React, { Component } from "react";
import CarList from "./CarList";
import Modal from "./Modal";

const data = [
  {
    id: 1,
    name: "black car",
    img: "./img/black-car.jpg",
    price: 1000,
  },
  { id: 2, name: "red car", img: "./img/red-car.jpg", price: 2000 },
  {
    id: 3,
    name: "silver car",
    img: "./img/silver-car.jpg",
    price: 3000,
  },
  {
    id: 4,
    name: "Steel car",
    img: "./img/steel-car.jpg",
    price: 4000,
  },
];

export default class CarStore extends Component {
  state = {
    productModal: {
      id: 2,
      name: "red car",
      img: "./img/red-car.jpg",
      price: 2000,
    },
  };

  // state đặt tại đâu thì setState sẽ đặt tại component đó
  viewDetail = (newProductModal) => {
    // Lấy dữ liệu product người dùng click thay thế cho state hiện tại
    this.setState({
      productModal: newProductModal,
    });
  };

  render() {
    return (
      <div className="container">
        <Modal itemModal={this.state.productModal}></Modal>
        <CarList carDetail={this.viewDetail} product={data}></CarList>
      </div>
    );
  }
}
