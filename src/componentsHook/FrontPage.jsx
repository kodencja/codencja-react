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
// import { CarouselSlider, logMsg } from "./CarouselSlider";
import Slider from "./Slider";
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
const appearTimeScroll = 1000;
const appearTimeResizeAndHide = 5;

const countingText = [
  "HTML",
  "CSS",
  "JS",
  "Bootstrap",
  "Webpack",
  "NodeJS",
  "PHP",
  "MySQL",
  "mongoDB",
  "GIT",
  "C++",
  "REACT",
];

function FrontPage() {
  const [counter, setCounter] = useState(0);
  //servicesRef.current = [] DEFINED WITHOUT CONSTRUCTOR
  const [pageFrontScrollBar, setPageFrontScrollBar] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
  const [countedFlag, setCountedFlag] = useState({ div: "undefined", ind: 0 });

  const pageFrontScrollVar = useRef(0);
  const carouselSliderRef = useRef();
  const pageFrontRef = useRef();
  // const aboutRef = useRef();
  const aboutAppear = useRef(false);
  const servicesRef = useRef([]);
  const skillsRef = useRef([]);
  const appearDivsRef = useRef([]);
  const [ifStartCount, setIfStartCount] = useState([]);
  // const renderCountRef = React.createRef(1);

  // const carouselSliderRef = React.createRef();
  // const pageFrontRef = React.createRef();
  // const aboutRef = React.createRef();
  // const servicesRef = React.createRef();
  // const skillsRef = React.createRef();
  // const appearDivsRef = React.createRef();
  const renderCountRef = React.createRef(1);

  useEffect(() => {
    // console.log("FRONTPage rendered!");
    // console.log(ifStartCount);
  });

  // tutaj trzeba dać tę funkcję 'keepArrowsInsideImg', bo gdy da się ją wewnątrz funkcji 'handleScroll' to poniższa funkjca widzi tylko pierowtne wartości windowWidth i windowHeight a tutaj widzi te uaktualnione w useState !!! WAŻNE !!!
  useEffect(() => {
    console.log(windowWidth);
    // console.log(carouselSliderRef);
    // console.log(carouselSliderRef.current);
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
    // console.log(pageFrontRef.current);

    setRenderIndex((prevInd) => prevInd + 1);
    return () => {
      setRenderIndex();
    };
  }, [setRenderIndex]);

  useEffect(() => {
    console.log("FRONTPAGE useEffect-3");
    // renderCountRef.current = renderCountRef.current + 1;
    // console.log(pageFrontRef.current);
    // console.log(carouselSliderRef.current);
    // console.log(servicesRef.current);
    // console.log(skillsRef.current);
    // console.log(appearDivsRef.current);
    // console.log(appearDivsRef.current.length);
    if (appearDivsRef.current.length <= 0) {
      appearDivsRef.current = [
        ...appearDivsRef.current,
        ...servicesRef.current,
        ...skillsRef.current,
      ];
    }
    for (let i = 0; i < skillsRef.current.length; i++) {
      setIfStartCount((prevTab) => [...prevTab, false]);
    }
    // console.log(appearDivsRef.current);
  }, []);

  useEffect(() => {
    // const msgFromCarousel = logMsg("Good");
    // console.log(msgFromCarousel);
    console.log("useEffect-4");
    // console.log(servicesRef.current);
    // console.log(skillsRef.current);
    window.addEventListener("resize", handleResize);

    // console.log(pageFrCurrent);
    pageFrontRef.current.addEventListener("scroll", () => {
      // if (resizeFlag === false) {
      // console.log("scroll listener");
      handleScroll();
      // handleAppearing();
      // }
    });
    const pageFrCurrent = pageFrontRef.current;

    return () => {
      window.removeEventListener("resize", handleResize);
      pageFrCurrent.removeEventListener("scroll", () => {
        handleScroll();
        // handleAppearing();
      });
    };
  }, []);

  useEffect(() => {
    // console.log(countedFlag);
    // console.log(ifStartCount);
    if (countedFlag.div !== "undefined") {
      const newStartCountArr = [...ifStartCount];
      newStartCountArr[countedFlag.ind] = true;
      // console.log(newStartCountArr);

      setIfStartCount(newStartCountArr);
    }
    // countedFlag.div.classList.add("countStarted)");
  }, [countedFlag]);

  const callSetName = useCallback(
    (elTargetVal) => {
      setName(elTargetVal);
    },
    [setName]
  );

  const startCountFlag = (oneDiv, index) => {
    // console.log("startCountFlag function!");
    // console.log(countedFlag);
    // const objCount = {div: oneDiv, ind: index};
    const objCount = { ...countedFlag };
    objCount.div = oneDiv;
    objCount.ind = index;
    setCountedFlag(objCount);
    oneDiv.classList.add("countStarted)");
  };

  // const startCounting = useCallback(
  //   (oneDiv, index) => {
  //     // const startCounting = (oneDiv, index) => {
  //     console.log("startCounting Fn");
  //     // if (countIndex.current > 0) {
  //     // countIndex.current++;
  //     // }
  //     console.log(ifStartCount);
  //     const newStartCountArr = [...ifStartCount];
  //     newStartCountArr[index] = true;
  //     console.log(newStartCountArr);

  //     setIfStartCount(newStartCountArr);
  //     oneDiv.classList.add("countStarted)");
  //     // };
  //   },
  //   [ifStartCount]
  // );

  const setStateAsync = (setterName, oldState, newState) => {
    // console.log("Promise setState Async");
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error! in setStateAsync"));
      else {
        const nameSetter = eval(setterName);
        // const nameVar = eval(varName);
        // console.log(setterName);
        // console.log(varName);
        // console.log(nameVar);
        // console.log(oldState);
        // console.log(newState);
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
    // console.log("windowWidth - " + windowWidth);
    // console.log(carouselSliderRef.current);
    handleHideResize();
    // carouselSliderRef.current.keepArrowsInsideImg(windowHeight, windowWidth);
    // carouselSliderRef.current.keepArrowsInsideImg(
    //   window.innerHeight,
    //   window.innerWidth
    // );
  };

  const handleScroll = async () => {
    // const handleScroll = useCallback(async () => {
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
      handleAppearing(pFrontScroll, appearTimeScroll);

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
    // }, [pageFrontRef.current]);
    // }, []);
  };

  // const addToRefs = (el) => {
  const addToRefs = useCallback(
    // const addToRefs = useMemo(
    (el) => {
      // console.log("add to Refs");
      // console.log(el);
      // console.log($(el).parent());
      // console.log($(el).parents());
      // console.log($(el).parents()[1]);
      if (el && el !== null) {
        const parentArr = $(el).parents();
        // console.log(appearDivsRef.current);
        // console.log(servicesRef.current);
        // console.log(skillsRef.current);

        // console.log(parentArr);
        // console.log(parentArr.length);
        // for (let i = 0; i < parentArr.length; i++) {
        //   console.log(parentArr[i]);
        // }
        // if (appearDivsRef.current === null) {
        //   console.log("appearDivsRef.current = null");
        //   appearDivsRef.current = [];
        // }
        // if (skillsRef.current === null) {
        //   console.log("skillsRef.current = null");
        //   skillsRef.current = [];
        // }
        // if (servicesRef.current === null) {
        //   console.log("servicesRef.current = null");
        //   servicesRef.current = [];
        // }

        [...parentArr].forEach((element) => {
          // console.log(element);
          if (element.classList.contains("services")) {
            // console.log("class contains");
            if (!servicesRef.current.includes(el)) {
              servicesRef.current.push(el);
              console.log("servicesRef.current.push");
            }
          } else if (element.classList.contains("skills")) {
            // console.log("class contains");
            if (!skillsRef.current.includes(el)) {
              skillsRef.current.push(el);
              console.log("skillsRef.current.push");
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
    // [servicesRef.current, skillsRef.current]
    [servicesRef, skillsRef]
  );

  const hideResize = () => {
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

          $(current[i]).removeClass(function (index, css) {
            // console.log(css); // list of classes
            return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
          });
          $(current[i]).addClass(animHide1[0]);
          // $(serviceAppearRef[i]).removeClass("inView").addClass("NotInView");
          $(current[i]).removeClass("inView");
          $(current[i]).addClass("NotInView");
        }
        // console.log("hideResize END");
        resolve();
      }
    });
  };

  const handleHideResize = async () => {
    // console.log("handleHideResize Fn");
    console.log("setResizeFlag Fn BEFORE");
    await setStateAsync("setResizeFlag", resizeFlag, true);
    console.log("hideResize Fn BEFORE");
    await hideResize();
    console.log("hideResize Fn AFTER");
    await setStateAsync("setResizeFlag", resizeFlag, false);
    console.log("setResizeFlag Fn AFTER");
    handleAppearing(pageFrontScrollVar.current, appearTimeResizeAndHide);
    console.log("handleAppearing Fn AFTER RESIZE");
  };

  // resolve must be inside setTimeout function otherwise the result will be executed immediately after invoking the Promise
  // showDivsAnimation(divsToShowInOneRow[rowInd], rowLength, rowInd, appearTime);
  const showDivsAnimation = (oneDiv, rowLength, rowIndex, time) => {
    // console.log("showDivsAnimation");
    // console.log(oneDiv);
    // console.log(time);
    // console.log("rowLength: " + rowLength);
    // console.log("rowIndex: " + rowIndex);

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
        setTimeout(() => {
          // resolve(function () {
          if ($(oneDiv).hasClass(animHide1[0])) {
            $(oneDiv).removeClass(animHide1[0]);
            // console.log("remove fadeOutDown");
          } else {
            $(oneDiv).removeClass(function (index, css) {
              // console.log(css);
              return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
            });
          }
          $(oneDiv).addClass(arrShowName[rowIndex]);

          // console.log(countDiv.prop("classList"));

          if (
            $(oneDiv).find(".counting").length > 0 &&
            !oneDiv.classList.contains("countStarted")
          ) {
            // console.log("COUNTING OBJECT");
            // console.log($(oneDiv).find(".counting2").children()[0]);
            // console.log($(oneDiv).find(".counting"));
            // console.log($(oneDiv).find(".counting").lastChild);
            // startCounting(oneDiv, $(oneDiv).find(".counting").children()[0]);
            // if ($(oneDiv).find(".counting") !== "undefined") {
            // console.log(skillsRef.current);
            const index = skillsRef.current.indexOf(oneDiv);
            // console.log(index);
            // console.log(ifStartCount);
            // if (ifStartCount[index] === false) {
            // startCounting(oneDiv, index);
            startCountFlag(oneDiv, index);
            // }
            // startCounting(oneDiv, $(oneDiv).find(".counting").children()[0]);
            // console.log($(oneDiv).closest("flip-card-front"));
          }
          // });

          // showFlipBack: (function () {
          // if ($(d).hasClass("counting")) {
          // self.showFlipBack($(d).closest(".flip-card-front").next()[0]);
          // controller.changeStyle.rmClass($(d).closest('.flip-card-front').next()[0],'visible');
          // controller.changeStyle.addCl($(d).closest('.flip-card-front').next()[0], 'notvisible');
          // }
          // })(),
          // });
          resolve(arrShowName);
        }, time);
      }
    });
  };

  const hideDivsAnimation = (oneDiv, rowLength, rowIndex, time) => {
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
        setTimeout(() => {
          if ($(oneDiv).hasClass(animShow1[0])) {
            $(oneDiv).removeClass(animShow1[0]);
          } else {
            // $(oneDiv).removeClass(state.arrHideName[rowIndex]);
            $(oneDiv).removeClass(function (index, css) {
              // console.log(css);
              return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
            });
          }
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
      // console.log("showDiv Fn");
      if (reject.length > 1) reject(new Error("Error"));
      else {
        // resolve(
        // (async () => {
        if (elemTopConst === elemNextTopConst && elemNext != null) {
          // console.log("remove NotInView 1");
          $(elem).removeClass("NotInView");
          $(elem).addClass("inView");
          // console.log("setStateAsync 1");
        } else if (
          elemTopConst !== elemNextTopConst ||
          elemNext === null ||
          indexInAllAppearDivs === appearDivsRef.current.length - 1
        ) {
          // console.log("remove NotInView 2");
          $(elem).removeClass("NotInView");
          $(elem).addClass("inView");
          // console.log("setStateAsync 2");
        }

        resolve({
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
      // console.log("hideDiv Fn");
      if (reject.length > 1) reject(new Error("Error"));
      else {
        if (elemNextTopConst === elemTopConst && elemNext != null) {
          $(elem).removeClass("inView");
          $(elem).addClass("NotInView");
          // console.log("setStateAsync 4");
        } else if (
          elemNextTopConst !== elemTopConst ||
          elemNext === null ||
          indexInAllAppearDivs === appearDivsRef.current.length - 1
        ) {
          $(elem).removeClass("inView");
          $(elem).addClass("NotInView");
          // console.log("setStateAsync 5");
        }
        resolve({
          element: elem,
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

  const handleAppearing = async (pFrontScroll, appearTime) => {
    const { current } = appearDivsRef;
    let divsToShowInOneRow = [];
    let divsToHideInOneRow = [];
    try {
      // console.log("try");
      let getDivTop,
        elNextTopConst = null;
      // showDivVar,
      // hideDivVar;
      for (let i = 0; i < current.length; i++) {
        // console.log("try loop");
        getDivTop = await getDivTopVal(pFrontScroll, current[i]);
        // console.log(getDivTop.elem);
        // console.log(getDivTop.elHeight);
        // console.log(getDivTop.elTop);
        // console.log(current[i].classList);
        // let elNextTopConst = null;
        // console.log("getDivTop after");
        if (getDivTop.elNext != null) {
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
          // console.log("showDivVar after");
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
        // console.log("call showDivsAnimation before");
        // console.log(rowLength);
        // await callShowDivsAnimation(divsToShowInOneRow, appearTime);
        // console.log("call showDivsAnimation after");
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
      }
      if (divsToHideInOneRow.length > 0) {
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
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAwait = () => {};

  return (
    <main className="pagefront frontMain-pagefront" ref={pageFrontRef}>
      {/* <Hamburger /> */}
      <MenuIcon />
      <Article getClasses={() => "align-middle"}>
        {/* <SectSlider /> */}
        <Slider
          windHeight={windowHeight}
          windWidth={windowWidth}
          // photoWidth={handlePhotoWidth}
          // keepArrows={keepArrowsInsideImg}
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
        {/* <Skills ref={addToRefs} handleStartCount={startCountFlag} /> */}
        <Skills ref={addToRefs} handleStartCount={ifStartCount} />
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

// const showDivsAnimation = (oneDiv, rowLength, rowIndex, time) => {
//   console.log("showDivsAnimation");
//   console.log(oneDiv);
//   console.log("rowLength: " + rowLength);
//   console.log("rowIndex: " + rowIndex);

//   return new Promise((resolve, reject) => {
//     if (reject.length > 1) reject(new Error("Error"));
//     else {
//       if (rowIndex >= 4) {
//         const maxIndexLength =
//           animShow4.length * Math.floor(rowIndex / animShow4.length);
//         // console.log(maxIndexLength);
//         rowIndex = rowIndex - maxIndexLength;
//       }
//       if (rowLength > 4) {
//         rowLength = 4;
//       }
//       const arrShowName = eval("animShow" + rowLength);
//       // const arrHideName = eval("animHide" + rowLength);
//       setTimeout(() => {
//         if ($(oneDiv).hasClass(animHide1[0])) {
//           $(oneDiv).removeClass(animHide1[0]);
//           // console.log("remove fadeOutDown");
//         } else {
//           $(oneDiv).removeClass(function (index, css) {
//             // console.log(css);
//             return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
//           });
//         }
//         $(oneDiv).addClass(arrShowName[rowIndex]);

//         // console.log(countDiv.prop("classList"));

//         if (
//           $(oneDiv).find(".counting").length > 0 &&
//           !oneDiv.classList.contains("countStarted")
//         ) {
//           console.log("COUNTING OBJECT");
//           // console.log($(oneDiv).find(".counting2").children()[0]);
//           // console.log($(oneDiv).find(".counting"));
//           // console.log($(oneDiv).find(".counting").lastChild);
//           // startCounting(oneDiv, $(oneDiv).find(".counting").children()[0]);
//           // if ($(oneDiv).find(".counting") !== "undefined") {
//           // console.log(skillsRef.current);
//           const index = skillsRef.current.indexOf(oneDiv);
//           console.log(index);
//           // console.log(ifStartCount);
//           // if (ifStartCount[index] === false) {
//           // startCounting(oneDiv, index);
//           startCountFlag(oneDiv, index);
//           // }
//           // startCounting(oneDiv, $(oneDiv).find(".counting").children()[0]);
//           // console.log($(oneDiv).closest("flip-card-front"));
//         }

//         // showFlipBack: (function () {
//         // if ($(d).hasClass("counting")) {
//         // self.showFlipBack($(d).closest(".flip-card-front").next()[0]);
//         // controller.changeStyle.rmClass($(d).closest('.flip-card-front').next()[0],'visible');
//         // controller.changeStyle.addCl($(d).closest('.flip-card-front').next()[0], 'notvisible');
//         // }
//         // })(),
//         // });
//       }, time);
//       // resolve(arrShowName);
//     }
//   });
// };

// const showMsg = (nr) => {
//   return new Promise((resolve, reject) => {
//     if (reject.length > 1) reject(new Error("Error to show msg"));
//     else {
//       setTimeout(() => {
//         resolve(nr + 10);
//       }, 2000);
//     }
//   });
// };

// const callShowDivsAnimation = async (divsInOneRow, time) => {
//   console.log("callAnimPromSh");
//   console.log(divsInOneRow.length);
//   // console.log("a: " + a);
//   // console.log(divsInOneRow[0]);
//   // console.log(divsInOneRow[1]);
//   // console.log(divsInOneRow[2]);

//   let rowInd = 0;
//   // let rowLength = divsToShowWithClassInView.length;
//   let rowLength = divsInOneRow.length;
//   // console.log("call showDivsAnimation");
//   // console.log(rowLength);
//   // await callShowDivsAnimation(divsToShowInOneRow,appearTime)

//   try {
//     while (rowInd < rowLength) {
//       await showDivsAnimation(
//         // divsToShowWithClassInView[rowInd],
//         divsInOneRow[rowInd],
//         rowLength,
//         rowInd,
//         appearTime
//       );
//       // const number1 = await showMsg(rowInd);
//       // console.log("Message nr " + number1);
//       // console.log(rowInd);
//       rowInd++;
//     }

//     // for (let i = 0; i < rowLength; i++) {
//     //   setTimeout(async () => {
//     //     showDivsAnimation(
//     //       // divsToShowWithClassInView[rowInd],
//     //       divsInOneRow[i],
//     //       rowLength,
//     //       i,
//     //       appearTime
//     //     );
//     //     await showMsg(i);
//     //     console.log("Message nr " + i);
//     //   }, time * i);

//     // console.log(rowInd);
//     // }
//   } catch (error) {
//     console.log(new Error(error));
//   }
// };
