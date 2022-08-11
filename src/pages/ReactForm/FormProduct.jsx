import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    productInfo: {
      id: "",
      name: "",
      price: 0,
      img: "",
      productType: "mobile",
      description: "",
    },
    error: {
      id: "",
      name: "",
      price: "",
      img: "",
      description: "",
    },
  };

  handleChange = (event) => {
    let { value, id } = event.target;
    let dataType = event.target.getAttribute("data-type");

    // Xử lý productInfo
    let newValue = this.state.productInfo;
    newValue[id] = value;

    // xử lý error
    let newError = this.state.error;
    let messError = "";
    if (value.trim() === "") {
      messError = id + " không được bỏ trống";
    } else {
      if (dataType === "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          messError = id + " phải là số";
        }
      }
    }
    newError[id] = messError;

    // setState
    this.setState(
      {
        productInfo: newValue,
        error: newError,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (event) => {
    // chặn sự kiện reload của browser
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-warning">Create product</div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>id</p>
              <input
                type="text"
                className="form-control"
                id="id"
                name="id"
                onInput={this.handleChange}
              />
              <p className="text-danger ">{this.state.error.id}</p>
            </div>
            <div className="form-group">
              <p>name</p>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onInput={this.handleChange}
              />
              <p className="text-danger">{this.state.error.name}</p>
            </div>
            <div className="form-group">
              <p>price</p>
              <input
                data-type="number"
                className="form-control"
                id="price"
                name="price"
                onInput={this.handleChange}
              />
              <p className="text-danger">{this.state.error.price}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>img</p>
              <input
                type="text"
                className="form-control"
                id="img"
                name="img"
                onInput={this.handleChange}
              />
              <p className="text-danger">{this.state.error.img}</p>
            </div>
            <div className="form-group">
              <p>Product type</p>
              <select
                name="productType"
                className="form-control"
                id="productType"
                onInput={this.handleChange}
              >
                <option value="mobile">mobile</option>
                <option value="laptop">laptop</option>
                <option value="tablet">tablet</option>
              </select>
            </div>
            <div className="form-group">
              <p>Description</p>
              <textarea
                name="description"
                id="description"
                className="form-control"
                onInput={this.handleChange}
              ></textarea>
              <p className="text-danger">{this.state.error.description}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success">Create</button>
          <button className="btn btn-primary mx-2">Update</button>
        </div>
      </form>
    );
  }
}
