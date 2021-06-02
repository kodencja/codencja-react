import React, { useEffect } from "react";

const MenuIcon = React.forwardRef((props, ref) => {
  useEffect(() => {
    console.log("MenuIcon updated");
  });

  return (
    <div
      className="hamburger mx-0 pagefront-hamburger transform-scale-sm"
      ref={ref}
    >
      <i className="icon-menu-3 mx-0"></i>
      <i className="icon-cancel-circled-1 d-none"></i>
    </div>
  );
});

export default React.memo(MenuIcon);
