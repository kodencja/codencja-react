import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Article from "./Article";
import CarouselSlider from "./CarouselSlider";
import CarouselBtstrpSlider from "./CarouselBtstrpSlider";
import Hamburger from "./Hamburger";
import SectSlider from "./SectSlider";
import AboutSec from "./AboutSec";
import About from "./About";
import Services from "./Services";

class PageFront extends Component {
  // this.servicesRef.current = [] defined in CONSTRUCTOR
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      PFrontScrollBar: 0,
      aboutAppear: false,
      // number of divs to Appeat and to Hide
      noOfDivsToApp: 0,
      noOfDivsToHide: 0,
      appearClassOneRowOfDivs: [],
      serviceAppearRef: [],
    };

    this.carouselSliderRef = React.createRef();
    this.pageFrontRef = React.createRef();
    this.aboutRef = React.createRef();
    this.servicesRef = React.createRef(null);
    this.servicesRef.current = [];
  }

  // state = {
  //   windowWidth: window.innerWidth,
  //   windowHeight: window.innerHeight,
  //   PFrontScrollBar: 0,
  //   aboutAppear: false,
  //   // number of divs to Appeat and to Hide
  //   noOfDivsToApp: 0,
  //   noOfDivsToHide: 0,
  //   appearClassOneRowOfDivs: [],
  //   serviceAppearRef: [],
  // };

  // servArrRef = [];
  // arrayServRef = [];

  componentDidMount() {
    console.log("pageFront componentDidMount");
    window.addEventListener("resize", this.handleResize);
    // this.pageFrontRef.current.addEventListener("scroll", this.handleScroll);
    this.pageFrontRef.current.addEventListener("scroll", () => {
      this.handleScroll();
      this.handleAppearing();
    });
    console.log(this.servicesRef);
    // this.servicesRef.current = [];
    // window.addEventListener("scroll", this.handleScroll);
    // console.log(this.state.windowHeight);
    // const head1 = this.carouselSliderRef.querySelectorAll(".head1");

    // poniższa pętla wykonuje sie w sposób asynchroniczny tzn. "i" jest wyświetlane dopiero, gdy skończy się liczyć pętla while i wyświetli się "j"
    // for (let i = 0; i < 10; i++) {
    //   let j = 0;
    //   while (j < 400000000) {
    //     j++;
    //     if (j % 100000000 === 0) console.log(j);
    //   }
    //   console.log(i);
    // }
    // console.log($(this.pageFrontRef.current));
    // console.log(this.pageFrontRef);

    // console.log(this.servArrRef);
    // console.log(this.servArrRef.length);
    // for (let i = 0; i < this.servArrRef.length; i++) {
    //   this.servArrRef[i] = this.servicesRef;
    // console.log(this.servArrRef);
    // }
    // console.log(this.servArrRef);
    // console.log(this.servicesRef);
    // console.log(this.servicesRef.current);
    // console.log(this.servicesRef.length);
    // console.log(this.servicesRef[3]);
    // console.log(this.servicesRef[3].current);
    // console.log(this.servicesRef[12]);
    // console.log(this.servicesRef[20]);
    // console.log(this.servicesRef.length);
    // this.servicesRef[1].classList.add("notvisible");
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
    this.pageFrontRef.current.addEventListener("scroll", () => {
      this.handleScroll();
      // this.handleAppearing();
    });
  }

  addToRefs = (el) => {
    if (this.servicesRef.current === null) {
      console.log("servicesRef.current = null");
      // this.servicesRef.current = [];
      this.servicesRef.current.push(el);
    } else if (el && !this.servicesRef.current.includes(el)) {
      this.servicesRef.current.push(el);
    }
    console.log(this.servicesRef.current);
  };

  handleRefs = (refsArr) => {
    console.log(refsArr);
    // this.servArrRef = refsArr;
    // console.log(this.servArrRef);
    // console.log(this.servArrRef.current);
    // console.log(this.servArrRef);
    // this.setState({ serviceAppearRef: this.servArrRef.current }, () => {
    // this.setState({ serviceAppearRef: refsArr }, () => {
    //   console.log(this.state.serviceAppearRef);
    // });
    this.servArrRef = refsArr;
    console.log(this.servArrRef);
  };

  getDivTopVal = (frontScroll, elem) => {
    return new Promise((resolve, reject) => {
      if (reject.length > 1)
        reject(new Error("Error to get div appear top value"));
      else {
        resolve({
          divTop: elem.offsetTop,
          elTop: elem.offsetTop - this.PFrontScrollBar,
        });
      }
    });
  };

  handleAppearing = async () => {
    // vH=window.innerHeight;
    // number of divs to Appeat and to Hide
    // noOfDivsToApp = 0;
    // noOfDivsToHide = 0;
    // appClRow = [];
    let m = 0;
    console.log(this.servicesRef.length);
    try {
      for (let i = 0; i < this.servicesRef.length; i++) {
        const getDivTop = await this.getDivTopVal(
          this.state.PFrontScrollBar,
          this.servicesRef[i]
        );
        console.log(getDivTop.divTop);
        console.log(getDivTop.elTop);
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleResize = () => {
    this.setState(
      { windowWidth: window.innerWidth, windowHeight: window.innerHeight },
      () => {
        // console.log(this.state.windowWidth + ", " + this.state.windowHeight);
        this.carouselSliderRef.current.keepArrowsInsideImg(
          this.state.windowHeight,
          this.state.windowWidth
        );
      }
    );
  };

  handleScroll = () => {
    // console.log(this.aboutRef.current.mainTxt.current);
    // const el = this.aboutRef.current.mainTxt.current;
    // const windHeigth23 = this.state.windowHeight - this.state.windowHeight / 3;
    // console.log($(el).offset().top);
    // console.log(windHeigth23);
    // console.log(this.state.windowHeight);
    const PFrontScrollBar = $(this.pageFrontRef.current).scrollTop();
    // console.log(PFrontScrollBar);

    this.setState({ PFrontScrollBar: PFrontScrollBar }, () => {
      console.log(this.state.PFrontScrollBar);
    });

    // call callDisplay from About component
    // if (
    //   this.state.aboutAppear === false &&
    //   $(el).offset().top <= windHeigth23
    // )
    if (
      this.state.aboutAppear === false &&
      $(this.aboutRef.current.mainTxt.current).offset().top <=
        this.state.windowHeight - this.state.windowHeight / 3
    ) {
      console.log("handleScroll");
      this.aboutRef.current.callDisplay(
        this.aboutRef.current.state.spanMainTitleRefTab,
        0,
        0
      );
      this.setState({ aboutAppear: true });
    }
  };

  render() {
    return (
      <main className="pagefront frontMain-pagefront" ref={this.pageFrontRef}>
        <Hamburger />
        <Article getClasses={() => "align-middle"}>
          {/* <SectSlider /> */}
          <CarouselSlider
            windHeight={this.state.windowHeight}
            windWidth={this.state.windowWidth}
            ref={this.carouselSliderRef}
          />
          {/* <CarouselBtstrpSlider /> */}
          {/* <AboutSec /> */}
          <About ref={this.aboutRef} />
        </Article>
        <Article getClasses={() => "align-middle"}>
          {/* <Services ref={() => this.servArrRef.push(this.servicesRef)} /> */}
          {/* <Services arrRef={(iconRef) => (this.servicesRef = iconRef)} /> */}
          {/* <Services arrRef={(ref) => this.servicesRef.push(ref)} /> */}
          {/* <Services ref={(ref) => this.servicesRef.push(ref)} /> */}
          {/* <Services ref={(ref) => this.servArrRef.push(ref)} /> */}
          {/* <Services
            ref={(ref) => (this.servicesRef = [...this.servicesRef, ref])}
          /> */}
          {/* <Services
            ref={(icon) =>
              (this.servArrRef.current = [...this.servArrRef.current, icon])
            }
          /> */}
          {/* <Services arrRef={this.handleRefs} /> */}
          <Services ref={this.addToRefs} />
          {/* <Services
            ref={(icon) =>
              (this.servicesRef.current = [...this.servicesRef.current, icon])
            }
          /> */}
        </Article>
      </main>
    );
  }
}

export default PageFront;
