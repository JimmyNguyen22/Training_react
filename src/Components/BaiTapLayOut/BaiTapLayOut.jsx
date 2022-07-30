import React, { Component } from "react";
import Content from "./Content";
import FooterLayOut from "./FooterLayOut";
import HeaderLayOut from "./HeaderLayOut";
import Navigation from "./Navigation";

export default class BaiTapLayOut extends Component {
  render() {
    return (
      <div>
        <HeaderLayOut></HeaderLayOut>{" "}
        <div className="d-flex">
          <div className="w-25">
            <Navigation></Navigation>
          </div>
          <div className="w-75">
            <Content></Content>
          </div>
        </div>
        <FooterLayOut></FooterLayOut>
      </div>
    );
  }
}
