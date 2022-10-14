const Screen = ({
  firstOperandDigit,
  secondOperandDigit,
  className,
  operator,
  result,
  children,
}) => {
  // console.log(children, operator);
  return (
    <div className={className}>
      <div className="current_operation_cont">
        <span className="first_operand">{firstOperandDigit}</span>
        <span className="current_operator">{operator}</span>
        <span className="second_operand">{secondOperandDigit}</span>
      </div>
      <p className="result">{result}</p>
      {/* <p className="result">{children}</p> */}
    </div>
  );
};

export default Screen;
//it behaves somehow if i use children
