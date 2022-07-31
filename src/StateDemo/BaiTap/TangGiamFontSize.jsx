import React, { Component } from "react";

export default class TangGiamFontSize extends Component {
  state = {
    fSize: 16,
  };
  render() {
    return (
      <div className="container">
        <p className="w-50" style={{ fontSize: this.state.fSize }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          impedit minus a earum, expedita, aperiam sed molestiae vel veniam
          fugiat possimus ullam ea perferendis consequatur quisquam aut
          architecto. Odio, culpa.
        </p>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize + 5,
            });
          }}
        >
          +
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize - 5,
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
