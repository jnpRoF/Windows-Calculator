const Screen = ({
  firstOperandDigit,
  secondOperandDigit,
  className,
  operator,
  result,
  clicked,
  current,
}) => {
  if (!clicked) {
    return (
      <div className={className}>
        <div className="current_operation_cont">
          <span className="first_operand">{firstOperandDigit}</span>
          <span className="current_operator">{operator}</span>
        </div>
        <p className="result">{result}</p>
      </div>
    );
  } else {
    return (
      <div className={className}>
        <div className="current_operation_cont">
          <span className="first_operand">{firstOperandDigit}</span>
          <span className="current_operator">{operator}</span>
          <span className="second_operand">{secondOperandDigit}</span>
          <span className="equal_operator">=</span>
        </div>
        <p className="result">{result}</p>
      </div>
    );
  }
};

export default Screen;
//it behaves somehow if i use children
