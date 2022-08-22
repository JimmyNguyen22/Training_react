import React, { Component } from "react";
import { connect } from "react-redux";

class TableRedux extends Component {
  render() {
    return (
      <div>
        <div className="img">
          <img src="https://i.pravatar.cc?u=20" alt=".." height={200} />
        </div>
        <div>
          <tbody>
            <tr>
              <td width={"20%"}>Nguyễn Văn A</td>
              <td>Like</td>
            </tr>{" "}
            <tr>
              <td width={"20%"}>Nguyễn Văn B</td>
              <td>Like</td>
            </tr>
          </tbody>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(TableRedux);
