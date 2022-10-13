import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Mode from "../Mode/Mode";

class Calculator2 extends Component {
  state = {};

  render() {
    return (
      <div className="calculator">
        <div className="calc_body">
          <Navigation />
          <Mode />
        </div>
        <div className="calc-nav"></div>
      </div>
    );
  }
}

export default Calculator2;
