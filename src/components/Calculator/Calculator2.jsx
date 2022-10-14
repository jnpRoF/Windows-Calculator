import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Mode from "../Mode/Mode";
import Screen from "../Screen";
import MemoryBtn from "../Memory/Memory";
import Button from "../Button";
import SideNav from "../SideNav/SideNav";
import "./Calculator.css";
class Calculator2 extends Component {
  state = {
    result: 0,
    history: [],
    currentOperation: {
      firstOperand: "",
      secondOperand: "",
      operator: "",
    },
  };
  // handleOperandDisplay = () => {
  //   if (this.state.currentOperation.operator) {
  //     return this.state.currentOperation.secondOperand;
  //   } else {
  //     console.log("first");
  //     return this.state.currentOperation.firstOperand;
  //   }
  // };
  handleFirstOperand = (e) => {
    this.setState({
      currentOperation: {
        ...this.state.currentOperation,
        firstOperand:
          this.state.currentOperation.firstOperand + e.target.textContent,
      },
    });
  };

  handleSecondOperand = (e) => {
    this.setState({
      currentOperation: {
        ...this.state.currentOperation,
        secondOperand:
          this.state.currentOperation.secondOperand + e.target.textContent,
      },
    });
  };

  handleOperandClick = (e) => {
    if (this.state.currentOperation.operator) {
      this.handleSecondOperand(e);
      console.log(this.state.currentOperation.secondOperand);
    } else {
      this.handleFirstOperand(e);
      console.log(this.state.currentOperation.firstOperand);
    }
  };

  calculate = (operator, firstOperand, secondOperand) => {
    switch (operator) {
      case "+":
        return +firstOperand + +secondOperand;
      case "/":
        return +firstOperand / +secondOperand;
      case "-":
        return +firstOperand - +secondOperand;
      case "x":
        return +firstOperand * +secondOperand;

      default:
        break;
    }
  };
  handleOperatorClick = (e) => {
    if (!this.state.currentOperation.secondOperand) {
      this.setState({
        currentOperation: {
          ...this.state.currentOperation,
          operator: e.target.textContent,
        },
      });
    } else {
      this.setState({
        currentOperation: {
          firstOperand: this.calculate(
            this.state.currentOperation.operator,
            +this.state.currentOperation.firstOperand,
            +this.state.currentOperation.secondOperand
          ),
          secondOperand: "",
          operator: e.target.textContent,
        },
      });
    }
    console.log(e.target.textContent);
  };

  render() {
    console.log(
      this.state.currentOperation.firstOperand,
      this.state.currentOperation.secondOperand
    );
    return (
      <div className="calculator">
        <div className="calc_body">
          <div className="calc_view">
            <div className="calc_controls">
              <Navigation style={{ margin: "10px" }} />
              <Mode style={{ margin: "10px" }} />
            </div>
            <Screen
              className="calc_screen"
              firstOperandDigit={this.state.currentOperation.firstOperand}
              operator={this.state.currentOperation.operator}
              secondOperandDigit={this.state.currentOperation.secondOperand}
              // children={
              //   // this.handleOperandDisplay()
              //   this.state.currentOperation.operator
              //     ? this.state.currentOperation.secondOperand
              //     : this.state.currentOperation.firstOperand
              // }
            />
          </div>
          <div className="calc_body_controls">
            <div className="memory_operators">
              <MemoryBtn children="MC" className="unbold memory_btn" />
              <MemoryBtn children="MR" className="unbold memory_btn" />
              <MemoryBtn children="M+" className="bold memory_btn" />
              <MemoryBtn children="M-" className="bold memory_btn" />
              <MemoryBtn children="MS" className="bold memory_btn" />
            </div>
            <div className="calc_body_operators">
              <Button
                className="operator number"
                children="%"
                onClick={this.handleOperatorClick}
              />
              <Button className="operator number" children="CE" />
              <Button className="operator number" children="C" />
              <Button className="operator number" children="CANCEL" />
              <Button className="operator number" children="1/x" />
              <Button className="operator number" children="xx" />
              <Button className="operator number" children="ss" />
              <Button
                className="operator number"
                children="/"
                onClick={this.handleOperatorClick}
              />
              <Button
                className="operand number bold"
                children="7"
                onClick={this.handleOperandClick}
              />
              <Button
                className="operand number bold"
                children="8"
                onClick={this.handleOperandClick}
              />
              <Button
                className="operand number bold"
                children="9"
                onClick={this.handleOperandClick}
              />
              <Button
                className="operator number"
                children="x"
                onClick={this.handleOperatorClick}
              />
              <Button
                className="operand number bold"
                children="4"
                onClick={this.handleOperandClick}
              />
              <Button
                className="operand number bold"
                children="5"
                onClick={this.handleOperandClick}
              />
              <Button
                className="operand number bold"
                children="6"
                onClick={this.handleOperandClick}
              />
              <Button
                className="operator number"
                children="-"
                onClick={this.handleOperatorClick}
              />
              <Button
                className="operand number bold"
                children="1"
                onClick={this.handleOperandClick}
              />
              <Button
                className="operand number bold"
                children="2"
                onClick={this.handleOperandClick}
              />
              <Button
                className="operand number bold"
                children="3"
                onClick={this.handleOperandClick}
              />
              <Button
                className="operator number"
                children="+"
                onClick={this.handleOperatorClick}
              />
              <Button className="operator number" children="+/-" />
              <Button
                className="operand number bold"
                children="0"
                onClick={this.handleOperandClick}
              />
              <Button className="operator number" children="." />
              <Button className="equal number" children="=" />
            </div>
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

//so why is it not working if i put !== in the screen

// what does stanley when he was talking about putting a jsx inside a function
