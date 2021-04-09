import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
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
import About from "./About";
import useStateAsync from "./customHooks/useStateAsync";

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

function FrontPage(props) {
  // useState, usereducer używam tylko wtedy gdy potrzebuję, aby zmiana danej wartości była widoczna przez JSX w częsci return() lub by coś uruchamiała jak 'dependecies' np. przy useEffect; w przeciwnym razie wystarczy użyć useRef()
  const [counter, setCounter] = useState(0);
  //servicesRef.current = [] DEFINED WITHOUT CONSTRUCTOR
  // const [pageFrontScrollBar, setPageFrontScrollBar] = useState(1);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  // const [resizeFlag, setResizeFlag] = useState(false);

  const [windowWidth, setWindowWidth] = useStateAsync(window.innerWidth);
  const [windowHeight, setWindowHeight] = useStateAsync(window.innerHeight);
  const [resizeFlag, setResizeFlag] = useStateAsync(false);

  const [name, setName] = useState("");
  const [renderIndex, setRenderIndex] = useState(0);
  const [countedFlag, setCountedFlag] = useState({ div: "undefined", ind: 0 });

  // pageFrontScrollVar = $(pageFrontRef.current).scrollTop();
  const mainmenuRef = useRef();
  const frontRef = useRef();
  const pageFrontScrollVar = useRef(0);
  const pageFrontScrollVarBeforeTilt = useRef(0);
  const pageFrontRef = useRef();
  const aboutRef = useRef();
  // const aboutAppear = useRef(false);
  const servicesRef = useRef([]);
  const skillsRef = useRef([]);

  const sliderSectRef = useRef();
  const servicesSectRef = useRef();
  const skillsSectRef = useRef();
  const projectsSectRef = useRef();
  const contactSectRef = useRef();
  const allSectionsRef = useRef([]);
  // vars for offsetTop of particular sections
  const sliderTop = useRef();
  const aboutTop = useRef();
  const serviceTop = useRef();
  const skillsTop = useRef();
  const projectsTop = useRef();
  const contactTop = useRef();
  const allSectionsTopRef = useRef([]);

  const menuIconRef = useRef();
  const menuUl = useRef();
  const linkBtnInMenu = useRef([]);

  const menuIsOpened = useRef(false);

  const appearDivsRef = useRef([]);
  const [ifStartCount, setIfStartCount] = useState([]);
  const [aboutTxtStart, setAboutTxtStart] = useState(false);
  // const renderCountRef = React.createRef(1);

  // const sliderSectRef = React.createRef();
  // const pageFrontRef = React.createRef();
  // const aboutRef = React.createRef();
  // const servicesRef = React.createRef();
  // const skillsRef = React.createRef();
  // const appearDivsRef = React.createRef();
  const renderCountRef = React.createRef(1);

  useEffect(() => {
    // console.log("FRONTPage rendered!");
    // console.log(ifStartCount);
    menuUl.current = $(mainmenuRef.current).find("ul");
    linkBtnInMenu.current = $(menuUl.current).find("div.nav-link");
    console.log(linkBtnInMenu.current);

    for (let i = 0; i < linkBtnInMenu.current.length; i++) {
      linkBtnInMenu.current[i].addEventListener("click", (event) => {
        scrollLink(event, i);
      });
    }

    return () => {
      for (let i = 0; i < linkBtnInMenu.current.length; i++) {
        linkBtnInMenu.current[i].removeEventListener("click", (event) => {
          scrollLink(event, i);
        });
      }
    };
  }, [menuIconRef]);

  // useEffect(() => {
  //   console.log(linkBtnInMenu.current);
  //   console.log(allSectionsRef.current);
  //   // for (let i = 0; i < allSectionsRef.current.length; i++) {
  //   for (let i = 0; i < allSectionsRef.current.length; i++) {
  //     linkBtnInMenu.current[i].addEventListener("click", (event) => {
  //       scrollLink(event, i);
  //     });
  //   }

  //   return () => {
  //     for (let i = 0; i < allSectionsRef.current.length; i++) {
  //       linkBtnInMenu.current[i].removeEventListener("click", (event) => {
  //         scrollLink(event, i);
  //       });
  //     }
  //   };
  // }, [allSectionsRef.current]);

  // if (allSectionsTopRef.current !== null) {
  //   for (let i = 0; i < allSectionsTopRef.current.length; i++) {
  //     linkBtnInMenu.current[i].addEventListener("click", (event) => {
  //       scrollLink(event, allSectionsTopRef.current[i]);
  //     });
  //   }
  // }

  // return () => {
  //   if (allSectionsTopRef.current !== null) {
  //     for (let i = 0; i < allSectionsTopRef.current.length; i++) {
  //       linkBtnInMenu.current[i].removeEventListener("click", (event) => {
  //         scrollLink(event, allSectionsTopRef.current[i]);
  //       });
  //     }
  //   }
  // };

  // tutaj trzeba dać tę funkcję 'keepArrowsInsideImg', bo gdy da się ją wewnątrz funkcji 'handleScroll' to poniższa funkjca widzi tylko pierowtne wartości windowWidth i windowHeight a tutaj widzi te uaktualnione w useState !!! WAŻNE !!!
  useEffect(() => {
    console.log(windowWidth);
    // console.log(sliderSectRef);
    // console.log(sliderSectRef.current);
    // sliderSectRef.current.keepArrowsInsideImg(windowHeight, windowWidth);
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
    // console.log(sliderSectRef.current);
    // console.log(servicesRef.current);
    // console.log(skillsRef.current);
    // console.log(appearDivsRef.current);
    // console.log(appearDivsRef.current.length);
    if (appearDivsRef.current.length <= 0) {
      appearDivsRef.current = [
        // ...appearDivsRef.current,
        ...servicesRef.current,
        ...skillsRef.current,
      ];
    }

    if (allSectionsRef.current.length <= 0) {
      allSectionsRef.current = [
        sliderSectRef.current,
        aboutRef.current,
        servicesSectRef.current,
        skillsSectRef.current,
        projectsSectRef.current,
        contactSectRef.current,
      ];
    }

    for (let i = 0; i < skillsRef.current.length; i++) {
      setIfStartCount((prevTab) => [...prevTab, false]);
    }
    // console.log(appearDivsRef.current);
    console.log(allSectionsRef.current);
  }, []);

  useEffect(() => {
    // const msgFromCarousel = logMsg("Good");
    // console.log(msgFromCarousel);
    console.log("useEffect-4");
    // console.log(sliderSectRef.current);
    // console.log(servicesSectRef.current);
    console.log(aboutRef.current);
    console.log($(aboutRef.current).offset().top);
    console.log(aboutRef.current.offsetTop);
    // console.log(servicesRef.current);
    // console.log(skillsRef.current);
    menuIconRef.current.addEventListener("click", () => {
      console.log("menuIcon clicked");
      movePageFront();
    });
    window.addEventListener("resize", handleResize);

    // console.log(pageFrCurrent);
    pageFrontRef.current.addEventListener("scroll", handleScroll);
    // pageFrontRef.current.addEventListener("scroll", () => {
    // if (resizeFlag === false) {
    // console.log("scroll listener");
    // handleScroll();
    // handleAppearing();
    // }
    // });
    const pageFrCurrent = pageFrontRef.current;
    const menuIconCurrent = menuIconRef.current;

    return () => {
      window.removeEventListener("resize", handleResize);
      pageFrCurrent.removeEventListener("scroll", () => {
        handleScroll();
        // handleAppearing();
      });
      menuIconCurrent.removeEventListener("click", () => {
        console.log("menuIcon clicked");
        movePageFront();
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

  // scroll to the selected section and re-tilt pageFront
  const scrollLink = (event, sectionNumber) => {
    // event.preventDefault();
    movePageFront();

    if (sectionNumber < allSectionsRef.current.length) {
      setTimeout(() => {
        $(pageFrontRef.current).animate(
          // { scrollTop: pageFrontScrollVar + sT[sectionNumber] },
          // { scrollTop: pageFrontScrollVar.current + 250 },
          {
            scrollTop:
              pageFrontScrollVarBeforeTilt.current +
              allSectionsTopRef.current[sectionNumber],
          },
          790
        );
        // console.log("scrollLink clicked");
        // console.log(allSectionsTopRef.current[sectionNumber]);
        // console.log(pageFrontScrollVar.current);
      }, 10);
    }
  };

  //   console.log($(mainTxtRef.current).offset().top); - z wartościami po przecinku i bez 'px'
  //   console.log(mainTxtRef.current.offsetTop); - bez wartości po przecinku i bez 'px

  // let's remember all sections top values and pageFront scrollTop value at the right moment i.e. before tilting
  const getSectionsTop = () => {
    allSectionsTopRef.current = [];
    pageFrontScrollVarBeforeTilt.current = pageFrontScrollVar.current;
    sliderTop.current =
      sliderSectRef.current.offsetTop - pageFrontScrollVar.current;
    aboutTop.current = aboutRef.current.offsetTop - pageFrontScrollVar.current;
    serviceTop.current =
      servicesSectRef.current.offsetTop - pageFrontScrollVar.current;

    skillsTop.current =
      skillsSectRef.current.offsetTop - pageFrontScrollVar.current;

    projectsTop.current =
      projectsSectRef.current.offsetTop - pageFrontScrollVar.current;

    contactTop.current =
      contactSectRef.current.offsetTop - pageFrontScrollVar.current;

    if (allSectionsTopRef.current.length <= 0) {
      allSectionsTopRef.current = [
        sliderTop.current,
        aboutTop.current,
        serviceTop.current,
        skillsTop.current,
        projectsTop.current,
        contactTop.current,
      ];
    }
    // console.log(allSectionsTopRef.current);
    // console.log(pageFrontScrollVar.current);
    // console.log(sliderTop.current);
    // console.log(aboutTop.current);
    // console.log(serviceTop.current);
    // console.log(skillsTop.current);
    // console.log(projectsTop.current);
    // console.log(contactTop.current);

    // const linkBtnInMenu = $(menuUl.current).find("div.nav-link");
    // console.log(linkBtnInMenu.current);
    // console.log(linkBtnInMenu.current[0]);
    // console.log(linkBtnInMenu.current[1]);

    // for (let i = 0; i < allSectionsTopRef.current.length; i++) {
    //   linkBtnInMenu.current[i].addEventListener("click", (event) => {
    //     scrollLink(event, allSectionsRef.current[i]);
    //   });
    // }
  };

  // function responsible for tilting the pagefront div and uncovering or covering nav menu
  const movePageFront = () => {
    console.log("movePageFront Fn");
    // console.log(menuIsOpened.current);
    // console.log(mainmenuRef.current);
    // const menuUl = $(mainmenuRef.current).find("ul");
    // console.log(menuUl[0]);
    // const linkBtnInMenu = $(menuUl).find(".nav-link");

    if (menuIsOpened.current === false) {
      getSectionsTop();
      frontRef.current.classList.add("tilt");
      pageFrontRef.current.classList.add("overflow-hidden");
      // console.log(menuIconRef.current);
      // console.log(menuIconRef.current.childNodes);
      menuIconRef.current.childNodes[0].classList.add("d-none");
      menuIconRef.current.childNodes[1].classList.remove("d-none");
      setTimeout(() => {
        frontRef.current.classList.add("darker");
      }, 320);

      setTimeout(() => {
        menuUl.current[0].classList.remove("swaying-out", "notvisible");
        menuUl.current[0].classList.add("visible", "swaying-in");
      }, 300);

      menuIsOpened.current = true;
    } else {
      menuUl.current[0].classList.remove("visible", "swaying-in");
      menuUl.current[0].classList.add("swaying-out", "notvisible");

      setTimeout(() => {
        frontRef.current.classList.remove("tilt", "darker");
        pageFrontRef.current.classList.remove("overflow-hidden");
        menuIconRef.current.childNodes[0].classList.remove("d-none");
        menuIconRef.current.childNodes[1].classList.add("d-none");
      }, 250);

      menuIsOpened.current = false;
    }
  };

  useEffect(() => {
    // const linkBtnInMenu = $(menuUl.current).find("div.nav-link");
    // console.log(linkBtnInMenu);
    // console.log(linkBtnInMenu[0]);
    // console.log(linkBtnInMenu[1]);
    // for (let i = 0; i < allSectionsTopRef.current.length; i++) {
    //   linkBtnInMenu[i].addEventListener("click", (event) => {
    //     scrollLink(event, allSectionsRef.current[i]);
    //   });
    // }
    // })
    // return () => {
    // }
  }, []);

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

  const handleResize = async () => {
    console.log("handleResize Fn");
    // setWindowWidth(window.innerWidth);
    // await setStateAsync("setWindowWidth", windowWidth, window.innerWidth);
    await setWindowWidth(window.innerWidth, windowWidth);
    // await setWindowHeight(window.innerHeight);
    await setWindowHeight(window.innerHeight, windowHeight);
    // await setStateAsync("setWindowHeight", windowHeight, window.innerHeight);
    // setWindowHeight(window.innerHeight);
    // console.log("windowWidth - " + windowWidth);
    // console.log(sliderSectRef.current);
    handleHideResize();
    // sliderSectRef.current.keepArrowsInsideImg(windowHeight, windowWidth);
    // sliderSectRef.current.keepArrowsInsideImg(
    //   window.innerHeight,
    //   window.innerWidth
    // );
  };

  const handleScroll = () => {
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
      // console.log(aboutRef.current);
      // console.log($(aboutRef.current).offset().top);

      if (
        aboutTxtStart === false &&
        $(aboutRef.current).offset().top + windowHeight / 2 <= windowHeight
      ) {
        setAboutTxtStart(true);
      }
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
    // await setStateAsync("setResizeFlag", resizeFlag, true);
    await setResizeFlag(true, resizeFlag);
    console.log("hideResize Fn BEFORE");
    await hideResize();
    console.log("hideResize Fn AFTER");
    await setResizeFlag(false, resizeFlag);
    // await setStateAsync("setResizeFlag", resizeFlag, false);
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

  // function that pass pageFront scrollTop() value to check when or if the about text starts being written
  // const scrollFrontVal = useMemo(() => {
  //   // const scrollFrontVal = () => {
  //   console.log(aboutTxtStart);
  //   console.log(pageFrontScrollVar.current);
  //   if (aboutTxtStart === false) {
  //     return pageFrontScrollVar.current;
  //   }
  //   // }
  // }, [pageFrontScrollVar.current, aboutTxtStart]);
  const sampleStyle = {
    backgroundColor: "blue",
    width: "auto",
    height: "50px",
    position: "fixed",
    left: "100px",
    top: "100px",
    zIndex: "100",
  };

  return (
    <div>
      <div ref={mainmenuRef}>{props.children}</div>

      <div className="frontMain body-frontMain" ref={frontRef}>
        <main className="pagefront frontMain-pagefront" ref={pageFrontRef}>
          {/* <Hamburger /> */}
          <MenuIcon ref={menuIconRef} />
          {/* <div style={sampleStyle}>Sample 1</div> */}
          <Article getClasses={() => "align-middle"}>
            {/* <SectSlider /> */}
            <Slider
              windHeight={windowHeight}
              windWidth={windowWidth}
              // photoWidth={handlePhotoWidth}
              // keepArrows={keepArrowsInsideImg}
              ref={sliderSectRef}
              // ref={addToRefs}
            />
            {/* <CarouselBtstrpSlider /> */}
            {/* <AboutSec /> */}
            {/* <About ref={aboutRef} /> */}
            <About
              ref={aboutRef}
              // scrollPageFrontValue={pageFrontScrollVar.current}
              // scrollPageFrontValue={scrollFrontVal}
              // windHeight={windowHeight}
              // onAboutTxtAppear={() => setAboutTxtStart(true)}
              aboutTxtAppear={aboutTxtStart}
            />
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
            <Services ref={addToRefs} refProp={servicesSectRef} />
            {/* <Services
            ref={(icon) =>
              (servicesRef.current = [...servicesRef.current, icon])
            }
          /> */}
            {/* <Skills ref={addToRefs} handleStartCount={startCountFlag} /> */}
            <Skills
              ref={addToRefs}
              handleStartCount={ifStartCount}
              refProp={skillsSectRef}
            />
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
          <Article getClasses={() => "align-middle"}>
            <section
              style={{
                backgroundColor: "greenyellow",
                // color: "black",
                textAlign: "center",
                height: "100vh",
              }}
              ref={projectsSectRef}
            >
              Projects
            </section>
            <section
              style={{
                backgroundColor: "royalblue",
                color: "ghostwhite",
                textAlign: "center",
                height: "100vh",
              }}
              ref={contactSectRef}
            >
              Contact
            </section>
          </Article>
        </main>
      </div>
    </div>
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
