import React, { Component } from "react";
import { connect } from "react-redux";

class Burger extends Component {
  renderTopping = (id) => {
    const { burger } = this.props;
    let cheese = burger.find((item) => item.id === id);

    // số lượng
    let { quantity } = cheese;

    const arrDivJSX = [];
    for (let i = 0; i < quantity; i++) {
      // Mỗi lần duyệt tạo 1 div đưa vào array
      const divTopping = <div className={id} key={i}></div>;
      arrDivJSX.push(divTopping);
    }
    return arrDivJSX;
  };
  render() {
    return (
      <div className=" container">
        <div className="breadTop"></div>
        {this.renderTopping("salad")}
        {this.renderTopping("cheese")}
        {this.renderTopping("beef")}
        <div className="breadBottom"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducer.burger,
});

export default connect(mapStateToProps)(Burger);
