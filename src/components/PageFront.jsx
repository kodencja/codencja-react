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

// copy FrontPage.jsx from hook
import React, { useState, useEffect, useRef, useCallback } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
// import Article from "../components/Article";
// import CarouselSlider from "../components/CarouselSlider";
// import About from "../components/About";
// import Services from "../components/Services";
// import Skills from "../components/Skills.jsx";
// import MenuIcon from "../components/MenuIcon";

import Article from "./Article";
import CarouselSlider from "./CarouselSlider";
// import About from "./About";
import Services from "./Services";
import Skills from "./Skills.jsx";
import MenuIcon from "./MenuIcon";
import { useMemo } from "react";

const animShow4 = ["fadeInLeft", "fadeInDown", "fadeInUp", "fadeInRight"];
const animShow3 = ["fadeInLeft", "fadeInUp", "fadeInRight"];
const animShow2 = ["fadeInLeft", "fadeInRight"];
const animShow1 = ["bounceIn"];

const animHide4 = ["fadeOutLeft", "fadeOutDown", "fadeOutUp", "fadeOutRight"];
const animHide3 = ["fadeOutLeft", "fadeOutDown", "fadeOutRight"];
const animHide2 = ["fadeOutLeft", "fadeOutRight"];
const animHide1 = ["fadeOutDown"];
const appearTime = 10;

function FrontPage() {
  const [counter, setCounter] = useState(0);
  //servicesRef.current = [] DEFINED WITHOUT CONSTRUCTOR
  const [pageFrontScrollBar, setPageFrontScrollBar] = useState(1);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [divsToShowWithClassInView, setDivsToShowWithClassInView] = useState(
    []
  );
  const [
    divsToHideWithClassNotInView,
    setDivsToHideWithClassNotInView,
  ] = useState([]);
  // const [aboutAppear, setAboutAppear] = useState(false);
  const [resizeFlag, setResizeFlag] = useState(false);
  const [name, setName] = useState("");
  const [renderIndex, setRenderIndex] = useState(0);

  const pageFrontScrollVar = useRef(0);
  const carouselSliderRef = useRef();
  const pageFrontRef = useRef();
  // const aboutRef = useRef();
  const aboutAppear = useRef(false);
  // const servicesRef = useRef();
  // const skillsRef = useRef();
  const appearDivsRef = useRef([]);
  // const renderCountRef = React.createRef(1);

  // const carouselSliderRef = React.createRef();
  // const pageFrontRef = React.createRef();
  // const aboutRef = React.createRef();
  const servicesRef = React.createRef();
  const skillsRef = React.createRef();
  // const appearDivsRef = React.createRef();
  const renderCountRef = React.createRef(1);

  // tutaj trzeva dać tę funkcję 'keepArrowsInsideImg', bo gdy da się ją wewnątrz funkcji 'handleScroll' to poniższa funkjca widzi tylko pierowtne wartości windowWidth i windowHeight a tutaj widzi te uaktualnione w useState !!! WAŻNE !!!
  useEffect(() => {
    console.log(windowWidth);
    console.log(carouselSliderRef);
    console.log(carouselSliderRef.current);
    // carouselSliderRef.current.keepArrowsInsideImg(windowHeight, windowWidth);
    // renderCountRef.current = renderCountRef.current + 1;
    // console.log("useEffect-1");
    // console.log(pageFrontScrollBar);
    // console.log(pageFrontScrollVar.current);
    // console.log(pageFrontRef.current);
    // console.log(resizeFlag);
    // console.log(divsToShowWithClassInView);
    // console.log(divsToHideWithClassNotInView);
  }, [windowWidth, windowHeight]);

  useEffect(() => {
    console.log("useEffect-2");
    console.log(pageFrontRef.current);

    setRenderIndex((prevInd) => prevInd + 1);
    return () => {
      setRenderIndex();
    };
  }, [setRenderIndex]);

  useEffect(() => {
    console.log("useEffect-3");
    // renderCountRef.current = renderCountRef.current + 1;
    console.log(pageFrontRef.current);
    console.log(carouselSliderRef.current);
    console.log(servicesRef.current);
    console.log(skillsRef.current);
    console.log(appearDivsRef.current);
    console.log(appearDivsRef.current.length);
    if (appearDivsRef.current.length <= 0) {
      appearDivsRef.current = [
        ...appearDivsRef.current,
        ...servicesRef.current,
        ...skillsRef.current,
      ];
    }
    console.log(appearDivsRef.current);
  }, []);

  useEffect(() => {
    console.log("useEffect-4");
    // console.log(servicesRef.current);
    // console.log(skillsRef.current);
    window.addEventListener("resize", handleResize);
    const pageFrCurrent = pageFrontRef.current;
    console.log(pageFrCurrent);
    pageFrontRef.current.addEventListener("scroll", () => {
      // if (resizeFlag === false) {
      // console.log("scroll listener");
      handleScroll();
      // handleAppearing();
      // }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      pageFrCurrent.removeEventListener("scroll", () => {
        handleScroll();
        // handleAppearing();
      });
    };
  }, []);

  const callSetName = useCallback(
    (elTargetVal) => {
      setName(elTargetVal);
    },
    [setName]
  );

  // const setStateAsync = (setterName, newState) => {
  //   // console.log("Promise");
  //   return new Promise((resolve, reject) => {
  //     if (reject.length > 1) reject(new Error("Error!"));
  //     else {
  //       const nameSetter = eval(setterName);
  //       console.log(nameSetter);
  //       console.log(newState);
  //       nameSetter(newState);
  //       resolve();
  //     }
  //   });
  // };

  // const handleSetState = async (setterName, number) => {
  // console.log(setterName);
  // await setStateAsync(setterName, number);
  // console.log("after await");
  // eval(newName(count1 + number));
  // console.log(count1);
  // };

  const setStateAsync = (setterName, oldState, newState) => {
    console.log("Promise setState Async");
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error!"));
      else {
        const nameSetter = eval(setterName);
        // const nameVar = eval(varName);
        console.log(setterName);
        // console.log(varName);
        // console.log(nameVar);
        // console.log(oldState);
        console.log(newState);
        // console.log(typeof oldState);
        if (oldState !== "reset") {
          if (typeof newState === "number") {
            // console.log("Number");
            // nameSetter((prevS) => prevS + newState);
            nameSetter(newState);
          } else if (typeof oldState === "string") {
            // console.log("String");
            nameSetter(newState);
          } else if (typeof oldState === "boolean") {
            // console.log("Boolean");
            nameSetter(newState);
          } else if (typeof oldState === "object") {
            if (oldState instanceof Array) {
              // console.log("Array");
              // nameSetter((prevS) => [...prevS, newState]);
              nameSetter([...oldState, newState]);
            } else if (oldState instanceof Object) {
              // console.log("Object");
              // nameSetter((prevS) => ({ ...prevS, age: newState }));
              nameSetter({ ...oldState, age: newState });
            }
          }
          // } else if (oldState === "reset") {
        } else {
          // console.log("reset");
          if (typeof newState === "number") {
            // console.log("Number reset");
            nameSetter(newState);
          } else if (typeof newState === "object") {
            if (newState instanceof Array) {
              // console.log("Array reset");
              nameSetter([]);
            } else if (newState instanceof Object) {
              // console.log("Object reset");
              nameSetter(newState);
            }
          }
        }
        resolve();
      }
    });
  };

  const handleResize = async () => {
    console.log("handleResize Fn");
    // setWindowWidth(window.innerWidth);
    await setStateAsync("setWindowWidth", windowWidth, window.innerWidth);
    // await setStateAsync("setWindowHeight", window.innerHeight);
    await setStateAsync("setWindowHeight", windowHeight, window.innerHeight);
    // setWindowHeight(window.innerHeight);
    console.log(windowWidth);
    console.log(carouselSliderRef.current);
    handleHideResize();
    // carouselSliderRef.current.keepArrowsInsideImg(windowHeight, windowWidth);
    // carouselSliderRef.current.keepArrowsInsideImg(
    //   window.innerHeight,
    //   window.innerWidth
    // );
  };

  // const handleScroll = async () => {
  const handleScroll = useCallback(async () => {
    // console.log("handleScroll fn");
    if (resizeFlag === false) {
      const pFrontScroll = $(pageFrontRef.current).scrollTop();
      // const pFrontScroll = pageFrontRef.current.scrollTop;
      // console.log($(pageFrontRef.current));
      // console.log(pageFrontRef.current);
      // console.log(pFrontScroll);
      // console.log(pageFrontScrollBar);
      // console.log(pageFrontScrollVar.current);
      pageFrontScrollVar.current = pFrontScroll;

      // setPageFrontScrollBar(pageFrontScroll);
      // await setStateAsync(
      //   "setPageFrontScrollBar",
      //   pageFrontScrollBar,
      //   pFrontScroll
      // );
      // console.log(pageFrontScrollVar.current);
      handleAppearing(pFrontScroll);

      // call callDisplay from About component
      // if (
      //   state.aboutAppear === false &&
      //   $(el).offset().top <= windHeigth23
      // )

      // for About as class component
    }
    // if (
    //   aboutAppear.current === false &&
    //   $(aboutRef.current.mainTxt.current).offset().top <=
    //     windowHeight - windowHeight / 3
    // ) {
    //   console.log("handleScroll");
    //   // await setStateAsync("setAboutAppear", aboutAppear, true);
    //   console.log(aboutAppear.current);
    //   aboutRef.current.callDisplay(
    //     aboutRef.current.state.spanMainTitleRefTab,
    //     0,
    //     0
    //   );
    //   // setAboutAppear(true);
    //   aboutAppear.current = true;
    // }

    // for About as functional component
    // if (
    //   aboutAppear === false &&
    //   $(aboutRef.current.mainTxt.current).offset().top <=
    //     windowHeight - windowHeight / 3
    // ) {
    //   console.log("handleScroll");
    //   aboutRef.current.callDisplay(aboutRef.current.spanMainTitleRefTab, 0, 0);
    //   setAboutAppear(true);
    // }
  }, [pageFrontRef.current]);

  // const addToRefs = (el) => {
  const addToRefs = useCallback(
    // const addToRefs = useMemo(
    (el) => {
      console.log("add to Refs");
      // console.log(el);
      // console.log($(el).parent());
      // console.log($(el).parents());
      // console.log($(el).parents()[1]);
      if (el && el !== null) {
        const parentArr = $(el).parents();
        // console.log(servicesRef.current);
        // console.log(skillsRef.current);
        // console.log(parentArr);
        // console.log(parentArr.length);
        // for (let i = 0; i < parentArr.length; i++) {
        //   console.log(parentArr[i]);
        // }
        if (appearDivsRef.current === null) {
          appearDivsRef.current = [];
        }
        if (servicesRef.current === null || skillsRef.current === null) {
          // console.log("servicesRef.current = null");
          servicesRef.current = [];
          skillsRef.current = [];
        }

        [...parentArr].forEach((element) => {
          // console.log(element);
          if (element.classList.contains("services")) {
            // console.log("class contains");
            if (!servicesRef.current.includes(el)) {
              servicesRef.current.push(el);
              // console.log("servicesRef.current.push");
            }
          } else if (element.classList.contains("skills")) {
            // console.log("class contains");
            if (!skillsRef.current.includes(el)) {
              skillsRef.current.push(el);
              // console.log("servicesRef.current.push");
            }
          }
        });
      }

      // $(el)
      //   .parents()
      //   .forEach((element) => {
      //     if (element.classList.contains("col-sm-4")) {
      //       console.log("Includes col-sm-4");
      //     }
      //   });
      // console.log(servicesRef.current);

      // console.log(servicesRef.current);
    },
    [servicesRef.current, skillsRef.current]
  );

  // handleRefs = (refsArr) => {
  // console.log(refsArr);
  // servArrRef = refsArr;
  // console.log(servArrRef.current);
  // servicesRef.current = refsArr;
  // setState({ serviceAppearRef: servArrRef.current }, () => {
  // setState({ serviceAppearRef: refsArr }, () => {
  //   console.log(state.serviceAppearRef);
  // });
  // servArrRef = refsArr;
  // console.log(servicesRef.current);
  // };

  const keepArrowsInsideImg = (windHeight, windWidth) => {
    const proportionPhoto = 1.5;
    let photoWidth, photoHeight;
    if (windHeight >= windWidth) {
      photoWidth = windWidth;
    } else {
      photoHeight = windHeight;
      photoWidth = photoHeight * proportionPhoto;
    }
    setArrowMargins(photoWidth, windWidth);
  };

  const hideResize = () => {
    console.log("hideResize Fn");
    const { current } = appearDivsRef;
    // const { serviceAppearRef, animShow1, animHide1 } = state;
    // const { serviceAppearRef, animShow1, animHide1 } = state;
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error!"));
      else {
        for (let i = 0; i < current.length; i++) {
          // usuwamy klasę 'bounceIn'
          if ($(current[i]).hasClass(animShow1[0])) {
            $(current[i]).removeClass(animShow1[0]);
          }
          // const classToRemove = function (index, css) {
          //   return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
          // };
          // console.log(classToRemove);
          // $(current[i]).removeClass(classToRemove);
          $(current[i]).removeClass(function (index, css) {
            // console.log(css); // list of classes
            return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
          });
          $(current[i]).addClass(animHide1[0]);
          // $(serviceAppearRef[i]).removeClass("inView").addClass("NotInView");
          $(current[i]).removeClass("inView");
          $(current[i]).addClass("NotInView");
          // console.log("loop");
          // console.log(serviceAppearRef[i]);
        }
        // console.log("hideResize END");
        resolve();
      }
    });
  };

  const handleHideResize = async () => {
    console.log("handleHideResize Fn");
    await setStateAsync("setResizeFlag", resizeFlag, true);
    await hideResize();
    await setStateAsync("setResizeFlag", resizeFlag, false);
    // console.log("handleHideResize 2");
    // console.log(pageFrontScrollVar.current);
    handleAppearing(pageFrontScrollVar.current);
  };

  // (
  //   showDiv.oneRowOfDivs,
  //   showDiv.divsToShowNumber,
  //   rowInd,
  //   appearTime
  // );

  const showDivsAnimation = (oneDiv, rowLength, rowIndex, time) => {
    // const {
    //   animShow1,
    //   animShow2,
    //   animShow3,
    //   animShow4,
    //   animHide1,
    //   animHide2,
    //   animHide3,
    //   animHide4,
    // } = state;

    console.log("showDivsAnimation");

    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error"));
      else {
        if (rowIndex >= 4) {
          const maxIndexLength =
            animShow4.length * Math.floor(rowIndex / animShow4.length);
          // console.log(maxIndexLength);
          rowIndex = rowIndex - maxIndexLength;
        }
        if (rowLength > 4) {
          rowLength = 4;
        }
        const arrShowName = eval("animShow" + rowLength);
        // const arrHideName = eval("animHide" + rowLength);
        setTimeout(async () => {
          // console.log("showDivsAnimation setTimeOut");
          // resolve({

          // let arrShowN = `${state.}eval("animShow" + rowLength`);
          // let arrHideN = eval("animHide" + rowLength);
          // arrShowN = eval(state + arrShowN);
          // console.log(rowLength);
          // console.log(arrShowN);
          // await setStateAsync({
          //   arrShowName: arrShowN,
          //   arrHideName: arrHideN,
          // });
          // arrShowName = eval("animShow" + l),
          // arrHideName = eval("animHide" + l),
          // console.log(rowIndex);
          // console.log(state.arrShowName);
          // console.log(state.arrHideName);
          if ($(oneDiv).hasClass(animHide1[0])) {
            $(oneDiv).removeClass(animHide1[0]);
            // console.log("remove fadeOutDown");
          } else {
            // $(oneDiv).removeClass(state.arrHideName[rowIndex]);
            $(oneDiv).removeClass(function (index, css) {
              // console.log(css);
              return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
            });
          }
          $(oneDiv).addClass(arrShowName[rowIndex]);
          // $(oneDiv).addClass("appeared");

          // COUNTING
          // ctrlCount.checkIfStartCounting(textTab.length, tc);

          // showFlipBack: (function () {
          // if ($(d).hasClass("counting")) {
          // self.showFlipBack($(d).closest(".flip-card-front").next()[0]);
          // controller.changeStyle.rmClass($(d).closest('.flip-card-front').next()[0],'visible');
          // controller.changeStyle.addCl($(d).closest('.flip-card-front').next()[0], 'notvisible');
          // }
          // })(),
          // });
        }, time);
        resolve(arrShowName);
        // }
        // else {
        //   setTimeout(() => {
        //     resolve({
        //       tabs: [(arrShowName = animShow4), (arrHideName = animHide4)],
        //       addShClass: (function () {
        //         if ($(d).hasClass(animHide1[0])) {
        //           controller.changeStyle.rmClass(d, animHide1[0]);
        //         } else {
        //           if (ind < arrShowName.length) {
        //             controller.changeStyle.rmClass(d, arrHideName[ind]);
        //           } else {
        //             let y = Math.floor(ind / arrShowName.length);
        //             controller.changeStyle.rmClass(
        //               d,
        //               arrHideName[ind - arrHideName.length * y]
        //             );
        //           }
        //         }
        //         if (ind < arrShowName.length) {
        //           controller.changeStyle.addCl(d, arrShowName[ind]);
        //         } else {
        //           let y = Math.floor(ind / arrShowName.length);
        //           controller.changeStyle.addCl(
        //             d,
        //             arrShowName[ind - arrShowName.length * y]
        //           );
        //         }
        //         controller.changeStyle.addCl(d, "appeared");
        //         // COUNTING
        //         ctrlCount.checkIfStartCounting(textTab.length, tc);
        //       })(),
        //       showFlipBack: (function () {
        //         if ($(d).hasClass("counting")) {
        //           self.showFlipBack($(d).closest(".flip-card-front").next()[0]);
        //         }
        //       })(),
        //     });
        //   }, t);
        // }
      }
    });
  };

  const hideDivsAnimation = (oneDiv, rowLength, rowIndex, time) => {
    // const {
    //   animShow1,
    //   animShow2,
    //   animShow3,
    //   animShow4,
    //   animHide1,
    //   animHide2,
    //   animHide3,
    //   animHide4,
    // } = state;

    console.log("hideDivsAnimation");
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error"));
      else {
        if (rowIndex >= 4) {
          const maxIndexLength =
            animShow4.length * Math.floor(rowIndex / animShow4.length);
          rowIndex = rowIndex - maxIndexLength;
        }
        if (rowLength > 4) {
          rowLength = 4;
        }
        // const arrShowName = eval("animShow" + rowLength);
        const arrHideName = eval("animHide" + rowLength);
        setTimeout(async () => {
          // await setStateAsync({
          //   arrShowName: arrShowN,
          //   arrHideName: arrHideN,
          // });

          // console.log(state.arrShowName[rowIndex]);
          // console.log(state.arrHideName[rowIndex]);
          if ($(oneDiv).hasClass(animShow1[0])) {
            $(oneDiv).removeClass(animShow1[0]);
          } else {
            // $(oneDiv).removeClass(state.arrHideName[rowIndex]);
            $(oneDiv).removeClass(function (index, css) {
              // console.log(css);
              return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
            });
          }
          // $(oneDiv).addClass(state.arrShowName[rowIndex]);

          // $(oneDiv).removeClass(state.arrShowName[rowIndex]);
          $(oneDiv).addClass(arrHideName[rowIndex]);

          // controller.changeStyle.rmClass(d, tabShName[ind]);
          // controller.changeStyle.addCl(d, tabHName[ind]);
          // controller.changeStyle.rmClass(d, "appeared");
          // hideFlipBack: (function () {
          //   if ($(d).hasClass("counting")) {
          //     self.hideFlipBack($(d).closest(".flip-card-front").next()[0]);
          //   }
          // })(),
        }, time / 3);
        resolve(arrHideName);
        // }
        // else {
        //   setTimeout(() => {
        //     resolve({
        //       tabs: [(tabShName = animShow4), (tabHName = animHide4)],
        //       addShClass: (function () {
        //         if (ind < tabHName.length) {
        //           controller.changeStyle.rmClass(d, tabShName[ind]);
        //           controller.changeStyle.addCl(d, tabHName[ind]);
        //         } else {
        //           let y = Math.floor(ind / tabHName.length);
        //           controller.changeStyle.rmClass(
        //             d,
        //             tabShName[ind - tabShName.length * y]
        //           );
        //           controller.changeStyle.addCl(
        //             d,
        //             tabHName[ind - tabHName.length * y]
        //           );
        //         }
        //         controller.changeStyle.rmClass(d, "appeared");
        //         // COUNTING
        //         ctrlCount.checkIfStartCounting(textTab.length, tc);
        //       })(),
        //       hideFlipBack: (function () {
        //         if ($(d).hasClass("counting")) {
        //           self.hideFlipBack($(d).closest(".flip-card-front").next()[0]);
        //         }
        //       })(),
        //     });
        //   }, time / 3);
        // }
      }
    });
  };

  // if (
  // windowHeight >= getDivTop.elTop + getDivTop.elHeight &&
  // $(serviceAppearRef[i]).hasClass("NotInView")
  // )
  const showDiv = (
    indexInAllAppearDivs,
    elem,
    elemTopConst,
    elemNext,
    elemNextTopConst
  ) => {
    return new Promise(async (resolve, reject) => {
      // let elemNextTopConst = null;
      // if (elemNext != null) {
      //   elemNextTopConst = elemNext.offsetTop;
      // }
      console.log("showDiv Fn");
      if (reject.length > 1) reject(new Error("Error"));
      else {
        // resolve(
        // (async () => {
        if (elemTopConst === elemNextTopConst && elemNext != null) {
          // console.log("remove NotInView 1");
          $(elem).removeClass("NotInView");
          $(elem).addClass("inView");
          // console.log("setStateAsync 1");
          // console.log(divsToShowWithClassInView);

          // await setStateAsync("setDivsToShowWithClassInView", (prevS) => [
          //   ...prevS,
          //   elem,
          // ]);

          // setDivsToShowWithClassInView((prev) => [...prev, elem]);

          // await setStateAsync(
          //   "setDivsToShowWithClassInView",
          //   divsToShowWithClassInView,
          //   elem
          // );
          // await setStateAsync("setDivsToShowWithClassInView", [
          //   ...divsToShowWithClassInView,
          //   elem,
          // ]);

          // await setStateAsync((prevState) => {
          //   return {
          //     divsToShowInOneRow: prevState.divsToShowInOneRow + 1,
          //     divsToShowWithClassInView: [
          //       ...prevState.divsToShowWithClassInView,
          //       elem,
          //     ],
          //   };
          // });

          // console.log(state.divsToShowWithClassInView);
          // await setStateAsync({
          //   divsToShowInOneRow: state.divsToShowInOneRow + 1,
          //   divsToShowWithClassInView: [...state.divsToShowWithClassInView, elem],
          // });
          // console.log(state.divsToShowInOneRow);
        } else if (
          elemTopConst !== elemNextTopConst ||
          elemNext === null ||
          indexInAllAppearDivs === appearDivsRef.current.length - 1
        ) {
          // console.log("remove NotInView 2");
          $(elem).removeClass("NotInView");
          $(elem).addClass("inView");
          // console.log("setStateAsync 2");
          // console.log(divsToShowWithClassInView);
          // console.log(state.divsToShowInOneRow);
          // console.log(state.divsToShowWithClassInView);

          // await setStateAsync("setDivsToShowWithClassInView", (prevS) => [
          //   ...prevS,
          //   elem,
          // ]);

          // setDivsToShowWithClassInView((prev) => [...prev, elem]);

          // await setStateAsync(
          //   "setDivsToShowWithClassInView",
          //   divsToShowWithClassInView,
          //   elem
          // );

          // await setStateAsync("setDivsToShowWithClassInView", [
          //   ...divsToShowWithClassInView,
          //   elem,
          // ]);

          //   await setStateAsync((prevState) => {
          //     return {
          //       // divsToShowInOneRow: prevState.divsToShowInOneRow + 1,
          //       divsToShowWithClassInView: [
          //         ...prevState.divsToShowWithClassInView,
          //         elem,
          //       ],
          //     };
          //   });
        }

        resolve({
          // divsToShow: divsToShowWithClassInView,
          element: elem,
        });
      }
    });
  };

  // hiding elements
  const hideDiv = (
    indexInAllAppearDivs,
    elem,
    elemTopConst,
    elemNext,
    elemNextTopConst
  ) => {
    return new Promise(async (resolve, reject) => {
      // let elemNextTopConst = null;
      // if (elemNext != null) {
      //   elemNextTopConst = elemNext.offsetTop;
      // }
      console.log("hideDiv Fn");
      if (reject.length > 1) reject(new Error("Error"));
      else {
        if (elemNextTopConst === elemTopConst && elemNext != null) {
          $(elem).removeClass("inView");
          $(elem).addClass("NotInView");
          // console.log("setStateAsync 4");

          // await setStateAsync("setDivsToHideWithClassNotInView", (prevS) => [
          //   ...prevS,
          //   elem,
          // ]);

          // await setStateAsync(
          //   "setDivsToHideWithClassNotInView",
          //   divsToHideWithClassNotInView,
          //   elem
          // );
          // setDivsToHideWithClassNotInView((prev) => [...prev, elem]);

          // await setStateAsync("setDivsToHideWithClassNotInView", [
          //   ...divsToHideWithClassNotInView,
          //   elem,
          // ]);

          // await setStateAsync((prevState) => {
          //   return {
          //     divsToHideInOneRow: prevState.divsToHideInOneRow + 1,
          //     divsToHideWithClassNotInView: [
          //       ...prevState.divsToHideWithClassNotInView,
          //       elem,
          //     ],
          //   };
          // });

          // await setStateAsync({
          //   divsToHideInOneRow: state.divsToHideInOneRow + 1,
          //   divsToHideWithClassNotInView: [...state.divsToHideWithClassNotInView, elem],
          // });
        } else if (
          elemNextTopConst !== elemTopConst ||
          elemNext === null ||
          indexInAllAppearDivs === appearDivsRef.current.length - 1
        ) {
          $(elem).removeClass("inView");
          $(elem).addClass("NotInView");
          // controller.changeStyle.rmClass(elem, "inView");
          // controller.changeStyle.addCl(elem, "NotInView");
          // nDivsToHide++;
          // appClRow.push(elem);
          // console.log("setStateAsync 5");

          // await setStateAsync("setDivsToHideWithClassNotInView", (prevS) => [
          //   ...prevS,
          //   elem,
          // ]);

          // await setStateAsync(
          //   "setDivsToHideWithClassNotInView",
          //   divsToHideWithClassNotInView,
          //   elem
          // );
          // setDivsToHideWithClassNotInView((prev) => [...prev, elem]);

          // await setStateAsync("setDivsToHideWithClassNotInView", [
          //   ...divsToHideWithClassNotInView,
          //   elem,
          // ]);

          //   await setStateAsync((prevState) => {
          //     return {
          //       // divsToHideInOneRow: prevState.divsToHideInOneRow + 1,
          //       divsToHideWithClassNotInView: [
          //         ...prevState.divsToHideWithClassNotInView,
          //         elem,
          //       ],
          //     };
          //   });
        }
        resolve({
          // divsToHide: divsToHideWithClassNotInView,
          element: elem,
          // divsToHideNumber: state.divsToHideInOneRow,
        });
      }
      // })()
      // );
    });
  };

  const getDivTopVal = (frontScroll, elem) => {
    // console.log("getDivTopVal Fn");
    return new Promise((resolve, reject) => {
      if (reject.length > 1)
        reject(new Error("Error to get div appear top value"));
      else {
        resolve({
          elem: elem,
          elTopConst: elem.offsetTop,
          // elTop: elem.offsetTop - pageFrontScrollBar,
          // elTop: elem.offsetTop - pageFrontScrollVar.current,
          elTop: elem.offsetTop - frontScroll,
          elHeight: elem.offsetHeight / 2,
          elNext: elem.nextElementSibling,
        });
      }
    });
  };

  const handleAppearing = async (pFrontScroll) => {
    // const {
    //   pageFrontScrollBar,
    //   serviceAppearRef,
    //   windowHeight,
    //   appearTime,
    //   divsToShowWithClassInView,
    //   divsToHideWithClassNotInView,
    // } = state;
    const { current } = appearDivsRef;
    let divsToShowInOneRow = [];
    let divsToHideInOneRow = [];
    // vH=window.innerHeight;
    // number of divs to Appeat and to Hide
    // divsToShowInOneRow = 0;
    // divsToHideInOneRow = 0;
    // appClRow = [];

    // console.log("handleAppearing");
    // console.log("setStateAsync 0");
    // console.log(state.divsToShowInOneRow);
    // console.log(state.divsToHideInOneRow);
    // console.log(divsToShowWithClassInView);
    // console.log(divsToHideWithClassNotInView);
    // await setStateAsync("setDivsToShowWithClassInView", "reset", []);
    // setDivsToShowWithClassInView([]);
    // console.log("setStateAsync 1.1");
    // await setStateAsync("setDivsToHideWithClassNotInView", "reset", []);
    // setDivsToHideWithClassNotInView([]);
    // console.log("setStateAsync 1.2");

    // divsToShowInOneRow: 0,
    // divsToHideInOneRow: 0,
    // console.log(divsToShowWithClassInView);
    // console.log(divsToHideWithClassNotInView);
    try {
      // console.log("try");
      let getDivTop,
        elNextTopConst = null;
      // showDivVar,
      // hideDivVar;
      for (let i = 0; i < current.length; i++) {
        // console.log("try loop");
        // console.log(pageFrontScrollVar.current);
        // console.log(pageFrontScrollBar);
        // console.log(windowHeight);
        // getDivTop = await getDivTopVal(pageFrontScrollVar.current, current[i]);
        getDivTop = await getDivTopVal(pFrontScroll, current[i]);
        // console.log(getDivTop.elem);
        // console.log(getDivTop.elHeight);
        // console.log(getDivTop.elTop);
        // console.log(current[i].classList);
        // let elNextTopConst = null;
        if (getDivTop.elNext != null) {
          // console.log("getDivTop.elNext != null");
          elNextTopConst = getDivTop.elNext.offsetTop;
        }
        if (
          windowHeight >= getDivTop.elTop + getDivTop.elHeight &&
          $(current[i]).hasClass("NotInView")
        ) {
          // console.log("has class NotInView");
          // tu gdzieś trzeba zrobić pętlę żeby uzyskać oneRowOfDivs.length
          const showDivVar = await showDiv(
            i,
            getDivTop.elem,
            getDivTop.elTopConst,
            getDivTop.elNext,
            elNextTopConst
          );
          divsToShowInOneRow.push(showDivVar.element);
          // console.log(getDivTop.elem);
          // console.log(showDiv.oneRowOfDivs);
        } else if (
          windowHeight < getDivTop.elTop + getDivTop.elHeight &&
          $(current[i]).hasClass("inView")
        ) {
          // console.log("has class inView");
          const hideDivVar = await hideDiv(
            i,
            current[i],
            getDivTop.elTopConst,
            getDivTop.elNext,
            elNextTopConst
          );
          divsToHideInOneRow.push(hideDivVar.element);
        }
      }
      // po skończeniu loopowania wszystkich divów pokazujemy lub ukrywamy wybrane divy
      // if (divsToShowWithClassInView.length > 0) {
      if (divsToShowInOneRow.length > 0) {
        // console.log(showDiv.oneRowOfDivs);
        let rowInd = 0;
        // let rowLength = divsToShowWithClassInView.length;
        let rowLength = divsToShowInOneRow.length;
        // console.log("call showDivsAnimation");
        // console.log(rowLength);
        while (rowInd < rowLength) {
          await showDivsAnimation(
            // divsToShowWithClassInView[rowInd],
            divsToShowInOneRow[rowInd],
            rowLength,
            rowInd,
            appearTime
          );
          // console.log(rowInd);
          rowInd++;
        }
        // if (resizeFlag === true) {
        //   await setStateAsync("setResizeFlag", resizeFlag, false);
        // }
      }
      // if (divsToHideWithClassNotInView.length > 0) {
      if (divsToHideInOneRow.length > 0) {
        // console.log(hideDiv.oneRowOfDivs);
        // console.log(state.divsToHideWithClassNotInView);
        let rowInd = 0;
        // let rowLength = divsToHideWithClassNotInView.length;
        let rowLength = divsToHideInOneRow.length;
        // console.log(rowLength);
        // console.log("call hideDivsAnimation");
        // console.log(rowLength);
        while (rowInd < rowLength) {
          await hideDivsAnimation(
            // divsToHideWithClassNotInView[rowInd],
            divsToHideInOneRow[rowInd],
            rowLength,
            rowInd,
            appearTime
          );
          // console.log(rowInd);
          rowInd++;
        }
        // if (resizeFlag === true) {
        //   await setStateAsync("setResizeFlag", resizeFlag, false);
        // }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="pagefront frontMain-pagefront" ref={pageFrontRef}>
      {/* <Hamburger /> */}
      <MenuIcon />
      <Article getClasses={() => "align-middle"}>
        {/* <SectSlider /> */}
        <CarouselSlider
          windHeight={windowHeight}
          windWidth={windowWidth}
          keepArrows={keepArrowsInsideImg}
          ref={carouselSliderRef}
          // ref={addToRefs}
        />
        {/* <CarouselBtstrpSlider /> */}
        {/* <AboutSec /> */}
        {/* <About ref={aboutRef} /> */}
      </Article>
      <Article getClasses={() => "align-middle"}>
        {/* <Services ref={() => servArrRef.push(servicesRef)} /> */}
        {/* <Services arrRef={(iconRef) => (servicesRef = iconRef)} /> */}
        {/* <Services arrRef={(ref) => servicesRef.push(ref)} /> */}
        {/* <Services ref={(ref) => servicesRef.push(ref)} /> */}
        {/* <Services ref={servicesRef.current} /> */}
        {/* <Services
            ref={(ref) => (servicesRef = [...servicesRef, ref])}
          /> */}
        {/* <Services
            ref={(icon) =>
              (servArrRef.current = [...servArrRef.current, icon])
            }
          /> */}
        {/* <Services arrRef={handleRefs} /> */}
        <Services ref={addToRefs} />
        {/* <Services
            ref={(icon) =>
              (servicesRef.current = [...servicesRef.current, icon])
            }
          /> */}
        <Skills ref={addToRefs} />
        {/* <SkillsSect ref={addToRefs} /> */}
        {/* <div>Aboutappear: {aboutAppear.current ? "true" : "false"}</div> */}
        <div>{counter}</div>
        <button onClick={() => setCounter((c) => c + 1)}>
          Click to incr counter value
        </button>{" "}
        <br />
        <input
          type="text"
          value={name}
          // onChange={(e) => setName(e.target.value)}
          onChange={(e) => callSetName(e.target.value)}
        />
        <div>My name is {name} </div>
        <div>This page has been rendered {renderCountRef.current} </div>
        <div>Render index = {renderIndex} </div>
        {/* <div>{divsToShowWithClassInView}</div> */}
        {/* <div>{divsToHideWithClassNotInView}</div> */}
      </Article>
    </main>
  );
}

export default FrontPage;

// const showOrHide = await showOrHideDiv(
//   windowHeight,
//   i,
//   serviceAppearRef[i],
//   getDivTop.elTopConst,
//   getDivTop.elTop,
//   getDivTop.elHeight,
//   getDivTop.elNext
// );
// console.log("await")
