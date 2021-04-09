import React from "react";
import { Link } from "react-router-dom";

function NavItem({ navItem }) {
  console.log("NavItem render");
  return (
    <li className="nav-item bgr-col-dark pt-1">
      <div
        // href="#"
        role="link"
        className={"nav-link transform-scale-sm " + navItem.nameClass}
      >
        {navItem.content}
      </div>
    </li>

    // <li className="nav-item bgr-col-dark">
    //   <Link
    //     to="/"
    // className={
    //   "nav-link p-3 shadow-dark color-dark bgr-col-org-bright transform-scale-sm " +
    //   props.navItem.nameClass
    // }
    //   >
    //     {props.navItem.content}
    //   </Link>
    // </li>
  );
}

export default NavItem;
