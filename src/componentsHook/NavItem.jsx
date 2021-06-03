import React from "react";

function NavItem({ navItem }) {
  // console.log("NavItem render");
  return (
    <li className="nav-item bgr-col-dark">
      <div
        role="link"
        className={"nav-link transform-scale-sm " + navItem.nameClass}
      >
        {navItem.content}
      </div>
    </li>
  );
}

export default NavItem;
