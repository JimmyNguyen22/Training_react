import React, { Component } from "react";
import Body from "./BaiTapThucHanhLayout/Body";
import Footer from "./BaiTapThucHanhLayout/Footer";
import Header from "./BaiTapThucHanhLayout/Header";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}
