import React from "react";

function NavItem({ navItem }) {
  console.log("NavItem render");
  return (
    <li className="nav-item bgr-col-dark pt-1">
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
