import React, { useEffect } from "react";

function MenuIcon() {
  useEffect(() => {
    console.log("MenuIcon updated");
  });

  return (
    <div
      className="hamburger mx-0 pagefront-hamburger transform-scale-sm"
      // data-ctrl="Open"
    >
      <i className="icon-menu-3 mx-0"></i>
      <i className="icon-cancel-circled-1 d-none"></i>
    </div>
  );
}

// export default MenuIcon;
export default React.memo(MenuIcon);
