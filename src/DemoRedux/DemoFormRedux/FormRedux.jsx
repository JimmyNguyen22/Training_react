import React, { Component } from "react";
import { connect } from "react-redux";

class FormRedux extends Component {
  render() {
    return <div>FormRedux</div>;
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(FormRedux);
