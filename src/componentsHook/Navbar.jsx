import React, { useState } from "react";
import NavItem from "./NavItem";

const navItemsTab = [
  {
    nameClass: "color-dark p-3 bgr-col-org-bright shadow-dark ",
    content: "HOME",
  },
  {
    nameClass: "color-dark p-3 bgr-col-org-bright shadow-dark ",
    content: "ABOUT ME",
  },
  {
    nameClass: "color-dark p-3 bgr-col-org-bright shadow-dark ",
    content: "SERVICES",
  },
  {
    nameClass: "color-dark p-3 bgr-col-org-bright shadow-dark ",
    content: "SKILLS",
  },
  {
    nameClass: "color-dark p-3 bgr-col-org-bright shadow-dark ",
    content: "PROJECTS",
  },
  {
    nameClass: "color-dark p-3 bgr-col-org-bright shadow-dark ",
    content: "CONTACT",
  },
  {
    // nameClass: "closes color-orange-bright p-1 ",
    nameClass: "closes p-1 ",
    content: <i className="icon-cancel-circled" />,
    // content: <i className="icon-cancel-squared" />,
  },
];
// class Navbar extends Component {
function Navbar() {
  // const [navItemsTab, setNavItemsTab] = useState(initialState)
  console.log("Navbar render");
  const navItemList = navItemsTab.map((navItem, index) => {
    // console.log(navItem);
    return (
      <NavItem
        key={index}
        navItem={navItem}
        // navItemClass={navItem.nameClass}
      ></NavItem>
    );
  });

  // const navItemClasses = this.state.navItemClass.map(/)

  return (
    <nav className="navbar nav-light">
      <div className="order-first mainmenu mainmenu-persp">
        <ul className="navbar-nav nav h4 notvisible">{navItemList}</ul>
      </div>
    </nav>
  );
}

// export const NavbarMemo = React.memo(Navbar);
export default React.memo(Navbar);
