import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Article from "./Article";
import CarouselSlider from "./CarouselSlider";
import CarouselBtstrpSlider from "./CarouselBtstrpSlider";
import Hamburger from "./Hamburger";
import SectSlider from "./SectSlider";

class PageFront extends Component {
  render() {
    return (
      <main className="pagefront frontMain-pagefront">
        <Hamburger />
        <Article getClasses={() => "align-middle"}>
          {/* <SectSlider /> */}
          <CarouselSlider />
          {/* <CarouselBtstrpSlider /> */}
        </Article>
      </main>
    );
  }
}

export default PageFront;
