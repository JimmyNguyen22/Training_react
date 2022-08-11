import React, { Component } from "react";

export default class Databinding extends Component {
  product = {
    id: 1,
    name: "product 1",
    price: 1000,
    img: "https://picsum.photos/id/7/200/200",
  };

  renderCardProduct = () => {
    // Nội dung render phải là string, boolean, number hoặc jsx ( Có thẻ bao phủ)
    return (
      <div className="card">
        <img src={this.product.img} alt="..." />
        <div className="card-body bg-dark text-white">
          <p> {this.product.name}</p>
          <p> {this.product.price}</p>
        </div>
      </div>
    );
  };

  render() {
    const title = "hello world";
    const person = {
      name: "Jimmy",
      age: "18",
    };
    const renderText = (ten) => {
      return `Hello ${ten}`;
    };

    return (
      <div className="container">
        <p id="pText">{title}</p>
        <hr />
        <div className="card w-25 mt-2">
          <img src="https://i.pravatar.cc?u=9/" alt=".." />
          <div className="card-body">
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
          </div>
        </div>
        <hr />
        <h4>
          Binding gọi hàm: Chỗ gọi hàm sẽ hiển thị những gì mà hàm đó return. cú
          pháp {`goiham("text")`}
        </h4>
        {renderText("jimmy")}
        <hr />
        <h5>
          Binding thuộc tính tương tự binding biến và có thêm this.tenThuocTinh
        </h5>
        <div className="alert alert-primary">
          Product info:
          <p>id: {this.product.id}</p>
          <p>name: {this.product.name}</p>
          <p>price: {this.product.price}</p>
          <img src={this.product.img} alt="..." width={200} />
        </div>
        <hr />
        <h3>Card product</h3>
            <div className="w-25">
                {this.renderCardProduct()}
            </div>
      </div>
    );
  }
}
