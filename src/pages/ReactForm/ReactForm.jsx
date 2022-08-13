import React, { Component } from "react";
import FormProduct from "./FormProduct";
import TableProduct from "./TableProduct";

export default class ReactForm extends Component {
  state = {
    arrProduct: [
      {
        id: "1",
        name: "product 1",
        price: 1000,
        img: "https://picsum.photos/100/100",
        description: "description 1",
        productType: "mobile",
      },
      {
        id: "2",
        name: "product 2",
        price: 1000,
        img: "https://picsum.photos/id/9/100/100",
        description: "description 2",
        productType: "tablet",
      },
    ],
  };

  addProduct = (newProduct) => {
    let arrProductUpdate = [...this.state.arrProduct, { ...newProduct }];
    //setState
    this.setState(
      {
        arrProduct: arrProductUpdate,
      },
      () => {
        this.luuStore();
      }
    );
  };

  delProduct = (idDel) => {
    let arrProductUpdate = this.state.arrProduct.filter(
      (pro) => pro.id !== idDel
    );
    /// this.setState
    this.setState(
      {
        arrProduct: arrProductUpdate,
      },
      () => {
        this.luuStore();
      }
    );
  };
  layStore() {
    if (localStorage.getItem("arrProduct")) {
      return JSON.parse(localStorage.getItem("arrProduct"));
    }
    return [];
  }
  luuStore() {
    let value = JSON.stringify(this.state.arrProduct);
    localStorage.setItem("arrProduct", value);
  }

  render() {
    return (
      <div className="container">
        <h3>Product management</h3>
        <FormProduct addProduct={this.addProduct}></FormProduct>
        <TableProduct
          arrProduct={this.state.arrProduct}
          delProduct={this.delProduct}
        ></TableProduct>
      </div>
    );
  }

  componentDidMount() {
    // Hàm này sẽ thực thi sau khi nd đc render
    this.setState({
      arrProduct: this.layStore(),
    });
  }
}
