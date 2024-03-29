import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Mode from "../Mode/Mode";
import Screen from "../Screen";
import MemoryBtn from "../Memory/Memory";
import Button from "../Button";
import SideNavHeader from "../SideNav/SideNavHeader";
import HistoryNav from "../SideNav/HistoryNav";
import MemoryNav from "../SideNav/MemoryNav";
import SideNavBody from "../SideNav/SideNavBody";
import "./Calculator.css";
class Calculator2 extends Component {
  state = {
    clicked: false,
    result: 0,
    history: [],
    currentOperation: {
      firstOperand: "",
      secondOperand: "",
      operator: "",
      current: "",
    },
    historyNav: "open",
  };

  // this.setState({ current: this.state.currentOperation.firstOperand }); //what if i do this

  handleHistoryDisplay = () => {
    this.setState({ historyNav: "open" });
  };

  handleMemoryDisplay = () => {
    this.setState({ historyNav: "close" });
  };

  // componentDidUpdate(_, prevState) {
  //   console.log({
  //     p: prevState.currentOperation.current,
  //     s: this.state.currentOperation.current,
  //   });
  //   if (
  //     prevState.currentOperation.current !== this.state.currentOperation.current
  //   ) {
  //     console.log("...");
  //     this.setState({ result: this.state.currentOperation.current });
  //   }
  //   console.log(this.state.result);
  // }

  handleCurrent = (e) => {
    console.log(this.state.clicked);
    if (!this.state.currentOperation.operator) {
      const current =
        this.state.currentOperation.current + e.target.textContent;

      this.setState(
        {
          currentOperation: {
            ...this.state.currentOperation,
            current,
          },
          result: current,
        }

        // () => {
        //   this.setState({ result: this.state.currentOperation.current });
        // }  // setting state inside setstate call back maybe wrong but check it out
      );

      //setstate is asynchronous while this.state is synchronus
    } else {
      const current =
        this.state.currentOperation.current + e.target.textContent;
      this.setState({
        currentOperation: {
          ...this.state.currentOperation,
          current,
          secondOperand: current,
        },
        result: current,
      });
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.firstOperand !== this.state.currentOperation.firstOperand) {
  //     this.handleOperatorClick(e); //maybe passing a callback inside setstate is good when you want pass a function inside

  //   }
  // }

  handleSecondOperand = (e) => {
    this.setState({
      currentOperation: {
        ...this.state.currentOperation,
        secondOperand:
          this.state.currentOperation.secondOperand + e.target.textContent,
      },
    });
  };

  calculate = (operator, firstOperand, secondOperand) => {
    console.log(operator, firstOperand, secondOperand);
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
    this.setState({
      result: this.state.currentOperation.firstOperand,
      currentOperation: {
        ...this.state.currentOperation,
        operator: e.target.textContent,
        current: "",
      },
    });
  };

  handleFirstOperand = (e) => {
    this.setState(
      {
        currentOperation: {
          ...this.state.currentOperation,
          firstOperand: !this.state.currentOperation.firstOperand
            ? this.state.result
            : this.calculate(
                this.state.currentOperation.operator,
                +this.state.currentOperation.firstOperand,
                +this.state.result
              ),
        },
      },
      () => {
        this.handleOperatorClick(e);
      }
    );
  };

  onOperatorClick = (e) => {
    this.handleFirstOperand(e);
  };

  handleDelete = () => {
    const deleteLastCharacter = (str) => {
      console.log(typeof str);
      // if (typeof str == "string") {
      //   return str.slice(-str.length, -1);
      // } else {
      //   str = `${str}`; //how is it that i convert it to string here and it affects the state
      //   return str.slice(-str.length, -1);
      // }
      return typeof str == "string"
        ? str.slice(-str.length, -1)
        : `${str}`.slice(-str.length, -1);
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

  handleResult = () => {
    (!this.state.currentOperation.firstOperand &&
      !this.state.currentOperation.current) ||
    this.state.currentOperation.current === "0"
      ? this.setState({
          currentOperation: {
            ...this.state.currentOperation,
            current: "0",
            operator: "=",
          },
          result: 0,
        })
      : this.setState({
          clicked: true,
          result: this.calculate(
            this.state.currentOperation.operator,
            +this.state.currentOperation.firstOperand,
            +this.state.currentOperation.secondOperand
          ),
        });
  };

  render() {
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
              result={this.state.result}
              current={this.state.currentOperation.current}
              clicked={this.state.clicked}
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
                onClick={(e) => {
                  this.onOperatorClick(e);
                }}
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
                onClick={(e) => {
                  this.onOperatorClick(e);
                }}
              >
                /
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleCurrent}
              >
                7
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleCurrent}
              >
                8
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleCurrent}
              >
                9
              </Button>
              <Button
                className="operator number"
                onClick={(e) => {
                  this.onOperatorClick(e);
                }}
              >
                x
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleCurrent}
              >
                4
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleCurrent}
              >
                5
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleCurrent}
              >
                6
              </Button>
              <Button
                className="operator number"
                onClick={(e) => {
                  this.onOperatorClick(e);
                }}
              >
                -
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleCurrent}
              >
                1
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleCurrent}
              >
                2
              </Button>
              <Button
                className="operand number bold"
                onClick={this.handleCurrent}
              >
                3
              </Button>
              <Button
                className="operator number"
                onClick={(e) => {
                  this.onOperatorClick(e);
                }}
              >
                +
              </Button>
              <Button className="operator number">+/-</Button>
              <Button
                className="operand number bold"
                onClick={this.handleCurrent}
              >
                0
              </Button>
              <Button className="operator number">.</Button>
              <Button className="equal number" onClick={this.handleResult}>
                =
              </Button>
            </div>
          </div>
        </div>
        <div className="calc_nav">
          <div className="calc_nav_header">
            <SideNavHeader
              className={`calc-history ${
                this.state.historyNav === "open" ? "side_nav" : ""
              }`}
              onClick={this.handleHistoryDisplay}
            >
              History
            </SideNavHeader>
            <SideNavHeader
              className={`calc-memory ${
                this.state.historyNav === "close" ? "side_nav" : ""
              }`}
              onClick={this.handleMemoryDisplay}
            >
              Memory
            </SideNavHeader>
          </div>
          <SideNavBody>
            {this.state.historyNav === "open" ? (
              <HistoryNav className="history_nav_body" />
            ) : (
              <MemoryNav className="memory_nav_body" />
            )}
          </SideNavBody>
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

//can we have two return statements if not why?

//what happens when we run two setStates consecutively, do they run simultaneuosly or what
