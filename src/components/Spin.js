import React, { Component } from "react";
import Loading_icon from "./Spinner-1s-200px.gif";

export default class Spin extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img src={Loading_icon} alt="loading"></img>
      </div>
    );
  }
}
