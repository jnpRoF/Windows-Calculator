import Button from "../Button";
import Screen from "../Screen";
import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="calculator">
      <Screen className="calc-history screen-history">History</Screen>
      <Screen className="calc-current screen-current">Current</Screen>
      <Screen className="calc-result screen-result">Result</Screen>
      <div className="btn-cont">
        <Button className="operand">1</Button>
        <Button className="operand">2</Button>
        <Button className="operand">3</Button>
        <Button className="operand">4</Button>
        <Button className="operand">5</Button>
        <Button className="operand">6</Button>
        <Button className="operand">7</Button>
        <Button className="operand">8</Button>
        <Button className="operand">9</Button>
        <Button className="operand">0</Button>

        <Button className="operator">+</Button>
        <Button className="operator">*</Button>
        <Button className="operator">/</Button>
        <Button className="operator">-</Button>
        <Button className="equal">=</Button>
        <Button className="ac">AC</Button>
      </div>
    </div>
  );
};

export default Calculator;
