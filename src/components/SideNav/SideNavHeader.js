const SideNavHeader = ({ className, children, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default SideNavHeader;
