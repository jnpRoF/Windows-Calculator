const Screen = ({
  firstOperandDigit,
  secondOperandDigit,
  className,
  operator,
  result,
  clicked,
  current,
}) => {
  if (current === "0") {
    return (
      <div className={className}>
        <div className="current_operation_cont">
          <span className="first_operand display">{current}</span>
          <span className="current_operator display">{operator}</span>
        </div>
        <p className="result">{result}</p>
      </div>
    );
  }
  if (!clicked) {
    // console.log("ggy"); //it logs every time that clicked is false is this not bad, does this not mean that for every time that it false this code will keep running? What if i don't want it to?
    return (
      <div className={className}>
        <div className="current_operation_cont">
          <span className="first_operand display">{firstOperandDigit}</span>
          <span className="current_operator display">{operator}</span>
        </div>
        <p className="result">{result}</p>
      </div>
    );
  } else {
    console.log(secondOperandDigit);
    return (
      <div className={className}>
        <div className="current_operation_cont">
          <span className="first_operand display">{firstOperandDigit}</span>
          <span className="current_operator display">{operator}</span>
          <span className="second_operand display">{secondOperandDigit}</span>
          <span className="equal_operator display">=</span>
        </div>
        <p className="result">{result}</p>
      </div>
    );
  }
};

export default Screen;
//it behaves somehow if i use children
