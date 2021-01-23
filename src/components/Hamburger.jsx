import React, { Component } from "react";
// import "../fontello/css/fontello.css";

class Hamburger extends Component {
  render() {
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
}

export default Hamburger;
