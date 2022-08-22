import React, { Component } from "react";
// Kết nối redux
import { connect } from "react-redux";
class DemoTangGiamSL extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        DemoTangGiamSL
        <h3>Number : {this.props.number}</h3>
        <h3>text : {this.props.text}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            // B1: tạo ra object action
            const action = {
              type: "Tang_sl",
              payload: 1,
            };
            // B2: dùng props.dispatch để đưa dữ liệu lên redux
            this.props.dispatch(action);
          }}
        >
          +
        </button>
      </div>
    );
  }
}
// Lấy state từ redux về biến thành this.props của component
const mapStateToProps = (state) => ({
  // return về object gì thì object đó sẽ là props của component

  number: state.number,
  text: state.stateA,
  state: state,
});

// Tạo ra component chứa logic redux
export default connect(mapStateToProps)(DemoTangGiamSL);
