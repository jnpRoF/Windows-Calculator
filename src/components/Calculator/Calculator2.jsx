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

  handleDelete = () => {
    const deleteLastCharacter = (str) => {
      return str.slice(-str.length, -1);
    };
    if (this.state.currentOperation.secondOperand) {
      this.setState({
        currentOperation: {
          ...this.state.currentOperation,
          secondOperand: deleteLastCharacter(
            this.state.currentOperation.secondOperand
          ),
        },
      });

      return;
    }
    if (this.state.currentOperation.operator) {
      this.setState({
        currentOperation: {
          ...this.state.currentOperation,
          operator: deleteLastCharacter(this.state.currentOperation.operator),
        },
      });
      return;
    }
    if (this.state.currentOperation.firstOperand) {
      return this.setState({
        currentOperation: {
          ...this.state.currentOperation,
          firstOperand: deleteLastCharacter(
            this.state.currentOperation.firstOperand
          ),
        },
      });
    }
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
              <MemoryBtn className="unbold memory_btn">MC</MemoryBtn>
              <MemoryBtn className="unbold memory_btn">MR</MemoryBtn>
              <MemoryBtn className="bold memory_btn">M+</MemoryBtn>
              <MemoryBtn className="bold memory_btn">M-</MemoryBtn>
              <MemoryBtn className="bold memory_btn">MS</MemoryBtn>
            </div>
            <div className="calc_body_operators">
              <Button
                className="operator number"
                onClick={this.handleOperatorClick}
              >
                %
              </Button>
              <Button className="operator number">CE</Button>
              <Button className="operator number">C</Button>
              <Button className="operator number" onClick={this.handleDelete}>
                DELETE
              </Button>
              <Button className="operator number">1/x</Button>
              <Button className="operator number">xx</Button>
              <Button className="operator number">ss</Button>
              <Button
                className="operator number"
                onClick={this.handleOperatorClick}
              >
                /
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleOperandClick}
              >
                7
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleOperandClick}
              >
                8
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleOperandClick}
              >
                9
              </Button>
              <Button
                className="operator number"
                onClick={this.handleOperatorClick}
              >
                x
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleOperandClick}
              >
                4
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleOperandClick}
              >
                5
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleOperandClick}
              >
                6
              </Button>
              <Button
                className="operator number"
                onClick={this.handleOperatorClick}
              >
                -
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleOperandClick}
              >
                1
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleOperandClick}
              >
                2
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleOperandClick}
              >
                3
              </Button>
              <Button
                className="operator number"
                onClick={this.handleOperatorClick}
              >
                +
              </Button>
              <Button className="operator number">+/-</Button>
              <Button
                className="operand number bold"
                onClick={this.handleOperandClick}
              >
                0
              </Button>
              <Button className="operator number">.</Button>
              <Button className="equal number">=</Button>
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
//do opening and closing tags

//reason for having separate props for operators
