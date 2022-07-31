import React, { Component } from "react";

export default class HandleEven extends Component {
  handleClick = (e) => {
    alert("hello it's me");
  };

  showMess = (name) => {
    console.log(`Xin chào ${name}`);
  };

  render() {
    return (
      <div className="container">
        <button
          id="btnClick"
          onClick={(e) => {
            alert("hello");
          }}
        >
          Click me
        </button>
        <button className="btn btn-primary m-4" onClick={this.handleClick}>
          Click daddy
        </button>
        <hr />
        <h3>Handle Click params</h3>
        <button
          onClick={(e) => {
            // Gọi các hàm khác thực thi khi click
            this.showMess("jimmy");
          }}
        >
          Show mess
        </button>
        <button
          className="btn btn-primary m-4"
          onClick={this.showMess.bind(this, "world")}
        >
          Click
        </button>
      </div>
    );
  }
}
