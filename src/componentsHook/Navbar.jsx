import React from "react";
import NavItem from "./NavItem";
import("../css/navbar.css");

// const NavItem = lazy(() => import("./NavItem"));

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
    nameClass: "closes p-1 ",
    content: <i className="icon-cancel-circled" />,
  },
];

function Navbar() {
  console.log("Navbar render");
  const navItemList = navItemsTab.map((navItem, index) => {
    return <NavItem key={index} navItem={navItem}></NavItem>;
  });

  return (
    <nav className="navbar nav-light">
      <div className="order-first mainmenu mainmenu-persp">
        <ul className="navbar-nav nav h4 notvisible">
          {navItemList}
          {/* <Suspense fallback={<p>Loading...</p>}>{navItemList}</Suspense> */}
        </ul>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
