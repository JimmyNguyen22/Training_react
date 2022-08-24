import React, { Component } from "react";
import { connect } from "react-redux";
import FormRedux from "./FormRedux";
import TableRedux from "./TableRedux";

class DemoFormRedux extends Component {
  render() {
    return (
      <div className="container">
        <TableRedux></TableRedux>
        <FormRedux></FormRedux>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(DemoFormRedux);
