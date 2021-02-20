import React, { Component } from "react";
import NavItem from "./NavItem";

class Navbar extends Component {
  state = {
    navItemsTab: [
      {
        nameClass: "home color-dark p-3 bgr-col-org-bright",
        content: "HOME",
      },
      {
        nameClass: "about color-dark p-3 bgr-col-org-bright",
        content: "ABOUT ME",
      },
      {
        nameClass: "services color-dark p-3 bgr-col-org-bright",
        content: "SERVICES",
      },
      {
        nameClass: "skills color-dark p-3 bgr-col-org-bright",
        content: "SKILLS",
      },
      {
        nameClass: "check color-dark p-3 bgr-col-org-bright",
        content: "LET'S CHECK",
      },
      {
        nameClass: "contact color-dark p-3 bgr-col-org-bright",
        content: "CONTACT",
      },
      {
        nameClass: "closes color-orange-bright p-1 ",
        content: <i className="icon-cancel-circled" />,
      },
    ],
  };

  render() {
    const navItemList = this.state.navItemsTab.map((navItem, index) => {
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
          <ul className="navbar-nav nav h4 ">{navItemList}</ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
