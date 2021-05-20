import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import $, { speed } from "jquery";
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
import AboutMe from "./AboutMe";
import useAppear from "./customHooks/useAppear";
import useParallaxBgrImage from "./customHooks/useParallaxBgrImage";
import Projects from "./Projects";

const animShow4 = ["fadeInLeft", "fadeInDown", "fadeInUp", "fadeInRight"];
const animShow3 = ["fadeInLeft", "fadeInUp", "fadeInRight"];
const animShow2 = ["fadeInLeft", "fadeInRight"];
const animShow1 = ["bounceIn"];

const animHide4 = ["fadeOutLeft", "fadeOutDown", "fadeOutUp", "fadeOutRight"];
const animHide3 = ["fadeOutLeft", "fadeOutDown", "fadeOutRight"];
const animHide2 = ["fadeOutLeft", "fadeOutRight"];
const animHide1 = ["fadeOutDown"];
const appearTimeScroll = 1000,
  appearTimeResizeAndHide = 5,
  speedToMoveBgrImg = 2.5,
  hem = 1;

function FrontPage(props) {
  // useState, usereducer używam tylko wtedy gdy potrzebuję, aby zmiana danej wartości była widoczna przez JSX w częsci return() lub by coś uruchamiała jak 'dependecies' np. przy useEffect; w przeciwnym razie wystarczy użyć useRef()
  const [counter, setCounter] = useState(0);
  //servicesRef.current = [] DEFINED WITHOUT CONSTRUCTOR
  // const [pageFrontScrollBar, setPageFrontScrollBar] = useState(1);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  // const [resizeFlag, setResizeFlag] = useState(false);

  // custom hook dealing with selected div's appearing - the divs to be appeared are passed as an argument to 'handleAppearing' function; useAppear at the beginning is given a serie of animations' array to show or hide the selected divs step by step in one row
  const { handleAppearing, divJustAppeared } = useAppear(
    animShow1,
    animShow2,
    animShow3,
    animShow4,
    animHide1,
    animHide2,
    animHide3,
    animHide4
  );

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

  const sliderSectRef = useRef();
  const servicesSectRef = useRef();
  const skillsSectRef = useRef();
  const projectsSectRef = useRef();
  const contactSectRef = useRef();
  const allSectionsRef = useRef([]);

  const divsWithMovingBgrImage = useRef([]);
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

  // elements of appearDivsRef
  const servicesRef = useRef([]);
  const skillsRef = useRef([]);
  const appearDivsRef = useRef([]);

  const [ifStartCount, setIfStartCount] = useState([]);
  const [aboutTxtStart, setAboutTxtStart] = useState(false);
  const { handleParallaxBgrImg, setSizeParallaxBackgroundImage } =
    useParallaxBgrImage(windowHeight);
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
    if (
      $(divJustAppeared).find(".counting").length > 0 &&
      !divJustAppeared.classList.contains("countStarted")
    ) {
      console.log("COUNTING OBJECT");
      const index = skillsRef.current.indexOf(divJustAppeared);

      startCountFlag(divJustAppeared, index);
    }
  }, [divJustAppeared]);

  // tutaj trzeba dać tę funkcję 'keepArrowsInsideImg', bo gdy da się ją wewnątrz funkcji 'handleScroll' to poniższa funkjca widzi tylko pierowtne wartości windowWidth i windowHeight a tutaj widzi te uaktualnione w useState !!! WAŻNE !!!

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

    if (divsWithMovingBgrImage.current.length <= 0) {
      divsWithMovingBgrImage.current = [
        aboutRef.current,
        skillsSectRef.current,
      ];
    }

    for (let i = 0; i < skillsRef.current.length; i++) {
      setIfStartCount((prevTab) => [...prevTab, false]);
    }
    // console.log(appearDivsRef.current);
    // console.log(allSectionsRef.current);
  }, []);

  useEffect(() => {
    // const msgFromCarousel = logMsg("Good");
    // console.log(msgFromCarousel);
    console.log("useEffect-4");
    // console.log(sliderSectRef.current);
    // console.log(servicesSectRef.current);
    // console.log(aboutRef.current);
    // console.log($(aboutRef.current).offset().top);
    // console.log(aboutRef.current.offsetTop);
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

    menuUl.current = $(mainmenuRef.current).find("ul");
    linkBtnInMenu.current = $(menuUl.current).find("div.nav-link");
    // console.log(linkBtnInMenu.current);

    for (let i = 0; i < linkBtnInMenu.current.length; i++) {
      linkBtnInMenu.current[i].addEventListener("click", (event) => {
        scrollLink(event, i);
      });
    }

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

      for (let i = 0; i < linkBtnInMenu.current.length; i++) {
        linkBtnInMenu.current[i].removeEventListener("click", (event) => {
          scrollLink(event, i);
        });
      }
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

  useEffect(() => {
    setSizeParallaxBackgroundImage(
      divsWithMovingBgrImage.current,
      pageFrontScrollVar.current
    );
  }, [divsWithMovingBgrImage]);

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
          {
            scrollTop:
              pageFrontScrollVarBeforeTilt.current +
              allSectionsTopRef.current[sectionNumber],
          },
          790
        );
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
  };

  // function responsible for tilting the pagefront div and uncovering or covering nav menu
  const movePageFront = () => {
    console.log("movePageFront Fn");
    // console.log(menuIsOpened.current);
    if (menuIsOpened.current === false) {
      getSectionsTop();
      frontRef.current.classList.add("tilt");
      pageFrontRef.current.classList.add("overflow-hidden");

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

  const handleResize = async () => {
    console.log("handleResize Fn");
    // setWindowWidth(window.innerWidth);
    // await setStateAsync("setWindowWidth", windowWidth, window.innerWidth);
    await setWindowWidth(window.innerWidth, windowWidth);
    // await setWindowHeight(window.innerHeight);
    await setWindowHeight(window.innerHeight, windowHeight);
    // await setStateAsync("setWindowHeight", windowHeight, window.innerHeight);

    handleHideResize();
  };

  const handleScroll = () => {
    // const handleScroll = useCallback(async () => {
    // console.log("handleScroll fn");
    if (resizeFlag === false) {
      const pFrontScroll = $(pageFrontRef.current).scrollTop();

      pageFrontScrollVar.current = pFrontScroll;

      handleParallaxBgrImg(
        divsWithMovingBgrImage.current,
        pageFrontScrollVar.current
      );

      handleAppearing(
        windowHeight,
        pFrontScroll,
        appearTimeScroll,
        appearDivsRef.current
      );

      if (
        aboutTxtStart === false &&
        $(aboutRef.current).offset().top + windowHeight / 2 <= windowHeight
      ) {
        setAboutTxtStart(true);
      }
    }
  };

  // const addToRefs = (el) => {
  // catching divs to be passed to handleAppearing function
  // 'ref' tiggering 'addToRefs' function pertains to relevant divs inside 'service' and 'skills' section, not to the sections itself, since the 'ref' is being forwarded to these components and then used in the relevant divs which are to be appeared
  const addToRefs = useCallback(
    // const addToRefs = useMemo(
    (el) => {
      // console.log("add to Refs");
      if (el && el !== null) {
        const parentArr = $(el).parents();

        [...parentArr].forEach((element) => {
          // console.log(element);
          if (element.classList.contains("services")) {
            // console.log("class contains");
            // console.log(el);
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
    },
    // [servicesRef.current, skillsRef.current]
    [servicesRef, skillsRef]
  );

  const hideResize = () => {
    const { current } = appearDivsRef;
    // const { serviceAppearRef, animShow1, animHide1 } = state;
    // const { serviceAppearRef, animShow1, animHide1 } = state;
    return new Promise((resolve, reject) => {
      if (current === undefined)
        reject(new Error("Error to read divs' reference!"));
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
    // handleAppearing(pageFrontScrollVar.current, appearTimeResizeAndHide);
    handleAppearing(
      windowHeight,
      pageFrontScrollVar.current,
      appearTimeResizeAndHide,
      appearDivsRef.current
    );
    setSizeParallaxBackgroundImage(
      divsWithMovingBgrImage.current,
      pageFrontScrollVar.current
    );
    console.log("handleAppearing Fn AFTER RESIZE");
  };

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
          {/* <Article getClasses={() => "align-middle"}> */}
          {/* <SectSlider /> */}
          <Slider
            windHeight={windowHeight}
            windWidth={windowWidth}
            // photoWidth={handlePhotoWidth}
            // keepArrows={keepArrowsInsideImg}
            ref={sliderSectRef}
            // ref={addToRefs}
          />
          <AboutMe ref={aboutRef} textAppearStart={aboutTxtStart} />
          {/* </Article> */}
          {/* <Article getClasses={() => "align-middle"}> */}
          <Services ref={addToRefs} refProp={servicesSectRef} />
          <Skills
            ref={addToRefs}
            handleStartCount={ifStartCount}
            refProp={skillsSectRef}
          />
          {/* </Article> */}
          {/* <Article getClasses={() => "align-middle"}> */}
          <Projects ref={projectsSectRef} />
          {/* <section
              style={{
                backgroundColor: "greenyellow",
                // color: "black",
                textAlign: "center",
                height: "100vh",
              }}
              ref={projectsSectRef}
            >
              Projects
            </section> */}
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
          {/* </Article> */}
        </main>
      </div>
    </div>
  );
}

export default FrontPage;
