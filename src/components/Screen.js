const Screen = ({
  firstOperandDigit,
  secondOperandDigit,
  className,
  operator,
  children,
}) => {
  // console.log(children, operator);
  return (
    <div className={className}>
      <span className="first_operand">{firstOperandDigit}</span>
      <span className="current_operator"> {operator}</span>
      <span className="second_operand">{secondOperandDigit}</span>
      {/* <p className="result">{children}</p> */}
    </div>
  );
};

export default Screen;
//it behaves somehow if i use children
