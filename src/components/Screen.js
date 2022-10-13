const Screen = ({ children, className }) => {
  return (
    <div className={className}>
      <p className="result">{children}</p>
    </div>
  );
};

export default Screen;
