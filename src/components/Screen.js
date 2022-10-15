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
          <span className="first_operand display">{firstOperandDigit}</span>
          <span className="current_operator display">{operator}</span>
        </div>
        <p className="result">{result}</p>
      </div>
    );
  } else {
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
