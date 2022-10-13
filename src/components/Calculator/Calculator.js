import React, { Component } from "react";
import Button from "../Button";
import Screen from "../Screen";
import "./Calculator.css";

class Calculator extends Component {
  state = {
    result: 0,
    history: [],
    currentOperation: {
      firstOperand: null,
      secondOperand: null,
      operator: "",
    },
  };

  handleFirstOperand = (e) => {
    console.log(e);
    this.setState({
      currentOperation: {
        firstOperand: e.target.textContent,
      },
    });
  };
  handleSecondOperand = (e) => {
    this.setState({
      currentOperation: {
        secondOperand: e.target.textContent,
      },
    });
  };

  handleOperands = (e) => {
    if (this.state.currentOperation.operator !== "") {
      this.handleSecondOperand(e);
    } else {
      this.handleFirstOperand(e);
    }
  };
  render() {
    return (
      <div className="calculator">
        <Screen className="calc-history screen-history">History</Screen>
        <Screen className="calc-current screen-current">
          <span className="first-operand number">
            {this.state.currentOperation.firstOperand}
          </span>
          <span className="current-operator number">
            {this.state.currentOperation.operator}
          </span>
          <span className="second-operand number">
            {this.state.currentOperation.secondOperand}
          </span>
        </Screen>
        <Screen className="calc-result screen-result number">
          {this.state.result}
        </Screen>
        <div className="btn-cont">
          <Button
            className="operand"
            onClick={(e) =>
              this.state.currentOperation.operator !== ""
                ? this.handleSecondOperand(e)
                : this.handleFirstOperand(e)
            }
          >
            1
          </Button>
          <Button className="operand" onClick={this.handleOperands}>
            2
          </Button>
          <Button className="operand" onClick={this.handleOperands}>
            3
          </Button>
          <Button className="operand" onClick={this.handleOperands}>
            4
          </Button>
          <Button className="operand" onClick={this.handleOperands}>
            5
          </Button>
          <Button className="operand" onClick={this.handleOperands}>
            6
          </Button>
          <Button className="operand" onClick={this.handleOperands}>
            7
          </Button>
          <Button className="operand" onClick={this.handleOperands}>
            8
          </Button>
          <Button className="operand" onClick={this.handleOperands}>
            9
          </Button>
          <Button className="operand" onClick={this.handleOperands}>
            0
          </Button>

          <Button className="operator" onClick={this.handleOperands}>
            +
          </Button>
          <Button className="operator" onClick={this.handleOperands}>
            *
          </Button>
          <Button className="operator" onClick={this.handleOperands}>
            /
          </Button>
          <Button className="operator" onClick={this.handleOperands}>
            -
          </Button>
          <Button className="equal" onClick={this.handleOperands}>
            =
          </Button>
          <Button className="ac" onClick={this.handleOperands}>
            AC
          </Button>
        </div>
      </div>
    );
  }
}

export default Calculator;
