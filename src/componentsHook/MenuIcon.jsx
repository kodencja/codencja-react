import React, { useEffect } from "react";

const MenuIcon = () => {
  useEffect(() => {
    console.log("MenuIcon Comp.");
  }, []);

  return (
    <>
      <i className="icon-menu-3 mx-0"></i>
      <i className="icon-cancel-circled-1 d-none"></i>
    </>
  );
};

export default React.memo(MenuIcon);
