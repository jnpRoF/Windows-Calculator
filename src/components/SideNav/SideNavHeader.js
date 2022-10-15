import SideNavBody from "./SideNavBody";

const SideNavHeader = ({ className, children }) => {
  const handleSideNavDisplay = () => {
    // return <HistoryNav>hi</HistoryNav>;
  };

  return (
    <>
      <button className={className} onClick={handleSideNavDisplay}>
        {children}
      </button>
    </>
  );
};

export default SideNavHeader;
