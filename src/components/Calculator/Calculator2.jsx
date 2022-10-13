import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Mode from "../Mode/Mode";
import Screen from "../Screen";
import MemoryBtn from "../Memory/Memory";
import Button from "../Button";
import SideNav from "../SideNav/SideNav";
import "./Calculator.css";
class Calculator2 extends Component {
  state = {};
  render() {
    return (
      <div className="calculator">
        <div className="calc_body">
          <div className="calc_controls">
            <Navigation style={{ margin: "10px" }} />
            <Mode style={{ margin: "10px" }} />
          </div>

          <Screen className="calc_screen" children="0" />

          <div className="memory_operators">
            <MemoryBtn children="MC" />
            <MemoryBtn children="MR" />
            <MemoryBtn children="M+" />
            <MemoryBtn children="M-" />
            <MemoryBtn children="MS" />
          </div>
          <div className="calc_body_operators">
            <Button className="operator" children="%" />
            <Button className="operator" children="CE" />
            <Button className="operator" children="C" />
            <Button className="operator" children="CANCEL" />
            <Button className="operator" children="1/x" />
            <Button className="operator" children="xx" />
            <Button className="operator" children="ss" />
            <Button className="operator" children="/" />
            <Button className="operand" children="7" />
            <Button className="operand" children="8" />
            <Button className="operand" children="9" />
            <Button className="operator" children="X" />
            <Button className="operand" children="4" />
            <Button className="operand" children="5" />
            <Button className="operand" children="6" />
            <Button className="operator" children="-" />
            <Button className="operand" children="1" />
            <Button className="operand" children="2" />
            <Button className="operand" children="3" />
            <Button className="operator" children="+" />
            <Button className="operator" children="+/-" />
            <Button className="operand" children="0" />
            <Button className="operator" children="." />
            <Button className="equal" children="=" />
          </div>
        </div>
        <div className="calc_nav">
          <SideNav className="calc-history" children="History" />
          <SideNav className="calc-memory" children="Memory" />
        </div>
      </div>
    );
  }
}

export default Calculator2;
