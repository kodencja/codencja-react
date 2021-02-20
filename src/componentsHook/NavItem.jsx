import React from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <li className="nav-item bgr-col-dark">
      <a
        href="foo"
        className={
          "nav-link shadow-dark transform-scale-sm " + props.navItem.nameClass
        }
      >
        {props.navItem.content}
      </a>
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
