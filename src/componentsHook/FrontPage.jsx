import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
// react components
import Slider from "./Slider";
import MenuIcon from "./MenuIcon";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills.jsx";
import Projects from "./Projects";
import Contact from "./Contact";

// custom hooks
import useAppear from "./customHooks/useAppear";
import useParallaxBgrImage from "./customHooks/useParallaxBgrImage";
import useStateAsync from "./customHooks/useStateAsync";
import useHide from "./customHooks/useHide";
import useScrollTo from "./customHooks/useScrollTo";
import useMoveFrontPage from "./customHooks/useMoveFrontPage";

const animShow4 = ["fadeInLeft", "fadeInDown", "fadeInUp", "fadeInRight"];
const animShow3 = ["fadeInLeft", "fadeInUp", "fadeInRight"];
const animShow2 = ["fadeInLeft", "fadeInRight"];
const animShow1 = ["bounceIn"];

const animHide4 = ["fadeOutLeft", "fadeOutDown", "fadeOutUp", "fadeOutRight"];
const animHide3 = ["fadeOutLeft", "fadeOutDown", "fadeOutRight"];
const animHide2 = ["fadeOutLeft", "fadeOutRight"];
const animHide1 = ["fadeOutDown"];
const appearTimeScroll = 1000,
  appearTimeResizeAndHide = 5;

function FrontPage(props) {
  // useState, usereducer używam tylko wtedy gdy potrzebuję, aby zmiana danej wartości była widoczna przez JSX w częsci return() lub by coś uruchamiała jak 'dependecies' np. przy useEffect; w przeciwnym razie wystarczy użyć useRef()
  // DEFINE VARIABLES AND METHODS
  const [counter, setCounter] = useState(0);
  //servicesRef.current = [] DEFINED WITHOUT CONSTRUCTOR

  const [windowWidth, setWindowWidth] = useStateAsync(window.innerWidth);
  const [windowHeight, setWindowHeight] = useStateAsync(window.innerHeight);
  // const [resizeFlag, setResizeFlag] = useStateAsync(false);

  const [name, setName] = useState("");
  const [renderIndex, setRenderIndex] = useState(0);
  const [countedFlag, setCountedFlag] = useState({ div: "undefined", ind: 0 });

  // pageFrontScrollVar = $(pageFrontRef.current).scrollTop();
  const mainmenuRef = useRef();
  const frontMainRef = useRef();
  const pageFrontScrollVar = useRef(0);
  const pageFrontScrollVarBeforeTilt = useRef(0);
  const pageFrontRef = useRef();
  const aboutRef = useRef();

  const sliderSectRef = useRef();
  const servicesSectRef = useRef();
  const skillsSectRef = useRef();
  const projectsSectRef = useRef();
  const contactSectRef = useRef();
  const allSectionsRef = useRef([]);

  const divsWithMovingBgrImage = useRef([]);
  const menuIconRef = useRef();
  const menuUl = useRef();
  const linkBtnInMenu = useRef([]);

  // elements of appearDivsRef
  const servicesRef = useRef([]);
  const skillsRef = useRef([]);
  const appearDivsRef = useRef([]);

  const [ifStartCount, setIfStartCount] = useState([]);
  const [aboutTxtStart, setAboutTxtStart] = useState(false);

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
  const { handleParallaxBgrImg, setSizeParallaxBackgroundImage } =
    useParallaxBgrImage(windowHeight);

  const { handleHideAfterResize, resizeFlag = false } = useHide();
  const { scrollLink } = useScrollTo();
  const { moveFrontPage, allSectionsTopRef } = useMoveFrontPage();
  // const renderCountRef = React.createRef(1);

  const renderCountRef = React.createRef(1);

  // USEEFFECT LISTENERS
  // check if start Counting in appeared divs
  useEffect(() => {
    // if div that just appeared on the screen contains class 'counting'
    if (
      $(divJustAppeared).find(".counting").length > 0 &&
      !divJustAppeared.classList.contains("countStarted")
    ) {
      // console.log("COUNTING OBJECT");
      const index = skillsRef.current.indexOf(divJustAppeared);
      startCountFlag(divJustAppeared, index);
    }
  }, [divJustAppeared]);

  useEffect(() => {
    console.log("useEffect-2");

    setRenderIndex((prevInd) => prevInd + 1);
    return () => {
      setRenderIndex();
    };
  }, [setRenderIndex]);

  useEffect(() => {
    // console.log("FRONTPAGE useEffect-3");
    // renderCountRef.current = renderCountRef.current + 1;

    if (appearDivsRef.current.length <= 0) {
      appearDivsRef.current = [...servicesRef.current, ...skillsRef.current];
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
  }, []);

  // SET EVENT LISTENERS
  useEffect(() => {
    // console.log("useEffect-4");
    const pageFrCurrent = pageFrontRef.current;
    const menuIconCurrent = menuIconRef.current;
    const pageFrontScrollValueBeforeTilt = pageFrontScrollVarBeforeTilt.current;
    const allSectionsRefer = allSectionsRef.current;
    const allSectionsTopRefer = allSectionsTopRef.current;
    const frontMainRefer = frontMainRef.current;
    const pageFrontRefer = pageFrontRef.current;
    const menuIconRefer = menuIconRef.current;

    menuUl.current = $(mainmenuRef.current).find("ul");
    linkBtnInMenu.current = $(menuUl.current).find("div.nav-link");

    const ulInMenu = menuUl.current;

    menuIconRef.current.addEventListener("click", () => {
      console.log("menuIcon clicked");
      pageFrontScrollVarBeforeTilt.current = pageFrontScrollVar.current;
      // move frontPage to the right position - open or closed
      moveFrontPage(
        pageFrontScrollVarBeforeTilt.current,
        allSectionsRef.current,
        frontMainRef.current,
        pageFrontRef.current,
        menuIconRef.current,
        menuUl.current
      );
    });
    window.addEventListener("resize", handleResize);

    pageFrontRef.current.addEventListener("scroll", handleScroll);

    for (let i = 0; i < linkBtnInMenu.current.length; i++) {
      linkBtnInMenu.current[i].addEventListener("click", (event) => {
        pageFrontScrollVarBeforeTilt.current = pageFrontScrollVar.current;
        // move frontPage to the right position - open or closed
        moveFrontPage(
          pageFrontScrollVarBeforeTilt.current,
          allSectionsRef.current,
          frontMainRef.current,
          pageFrontRef.current,
          menuIconRef.current,
          menuUl.current
        );

        scrollLink(
          i,
          allSectionsRef.current,
          allSectionsTopRef.current,
          pageFrontRef.current,
          pageFrontScrollVarBeforeTilt.current
        );
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      pageFrCurrent.removeEventListener("scroll", () => {
        handleScroll();
      });
      menuIconCurrent.removeEventListener("click", () => {
        // console.log("menuIcon clicked");
        moveFrontPage(
          pageFrontScrollValueBeforeTilt,
          allSectionsRefer,
          frontMainRefer,
          pageFrontRefer,
          menuIconRefer,
          ulInMenu
        );
      });

      for (let i = 0; i < linkBtnInMenu.current.length; i++) {
        linkBtnInMenu.current[i].removeEventListener("click", (event) => {
          scrollLink(
            i,
            allSectionsRefer,
            allSectionsTopRefer,
            pageFrontRefer,
            pageFrontScrollValueBeforeTilt
          );
        });
      }
    };
  }, []);

  // check if start counting or not in the appeared divs
  useEffect(() => {
    if (countedFlag.div !== "undefined") {
      const newStartCountArr = [...ifStartCount];
      newStartCountArr[countedFlag.ind] = true;
      setIfStartCount(newStartCountArr);
    }
    // countedFlag.div.classList.add("countStarted)");
  }, [countedFlag]);

  // SET SIZE OF BACKGROUND IMAGE IN PARALLAX DIVS
  useEffect(() => {
    setSizeParallaxBackgroundImage(
      divsWithMovingBgrImage.current,
      pageFrontScrollVar.current
    );
  }, [divsWithMovingBgrImage]);

  useEffect(() => {
    // console.log("useEffect resizeFlag");
    if (resizeFlag === false) {
      // console.log("useEffect resizeFlag false");
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
    }
  }, [resizeFlag]);

  const callSetName = useCallback(
    (elTargetVal) => {
      setName(elTargetVal);
    },
    [setName]
  );

  const startCountFlag = (oneDiv, index) => {
    const objCount = { ...countedFlag };
    objCount.div = oneDiv;
    objCount.ind = index;
    setCountedFlag(objCount);
    oneDiv.classList.add("countStarted)");
  };

  //   console.log($(mainTxtRef.current).offset().top); - z wartościami po przecinku i bez 'px'
  //   console.log(mainTxtRef.current.offsetTop); - bez wartości po przecinku i bez 'px

  const handleScroll = () => {
    // const handleScroll = useCallback(async () => {
    // console.log("handleScroll fn");
    if (resizeFlag === false) {
      const pFrontScroll = $(pageFrontRef.current).scrollTop();

      pageFrontScrollVar.current = pFrontScroll;

      handleParallaxBgrImg(divsWithMovingBgrImage.current, pFrontScroll);

      handleAppearing(
        windowHeight,
        pFrontScroll,
        appearTimeScroll,
        appearDivsRef.current
      );
      // start to show text in 'About me' section or not
      if (
        aboutTxtStart === false &&
        $(aboutRef.current).offset().top + windowHeight / 2 <= windowHeight
      ) {
        setAboutTxtStart(true);
      }
    }
  };

  // catching divs to be passed to handleAppearing function
  // 'ref' tiggering 'addToRefs' function pertains to relevant divs inside 'service' and 'skills' sections, not to the sections itself, since the 'ref' is being forwarded to these components and then used in the relevant divs which are to be appeared when they rich page view's area
  const addToRefs = useCallback(
    (el) => {
      // console.log("add to Refs");
      if (el && el !== null) {
        const parentArr = $(el).parents();
        [...parentArr].forEach((element) => {
          if (element.classList.contains("services")) {
            if (!servicesRef.current.includes(el)) {
              servicesRef.current.push(el);
            }
          } else if (element.classList.contains("skills")) {
            if (!skillsRef.current.includes(el)) {
              skillsRef.current.push(el);
            }
          }
        });
      }
    },
    [servicesRef, skillsRef]
  );

  const handleResize = async () => {
    // console.log("handleResize Fn");
    await setWindowWidth(window.innerWidth, windowWidth);
    await setWindowHeight(window.innerHeight, windowHeight);
    handleHideAfterResize(appearDivsRef, animShow1, animHide1);
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

      <div className="frontMain body-frontMain" ref={frontMainRef}>
        <main className="pagefront frontMain-pagefront" ref={pageFrontRef}>
          <MenuIcon ref={menuIconRef} />
          <Slider
            windHeight={windowHeight}
            windWidth={windowWidth}
            ref={sliderSectRef}
          />
          <About ref={aboutRef} textAppearStart={aboutTxtStart} />
          <Services ref={addToRefs} refProp={servicesSectRef} />
          <Skills
            ref={addToRefs}
            handleStartCount={ifStartCount}
            refProp={skillsSectRef}
          />
          <Projects ref={projectsSectRef} />
          <Contact ref={contactSectRef} />
          <div>{counter}</div>
          <button onClick={() => setCounter((c) => c + 1)}>
            Click to incr counter value
          </button>{" "}
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => callSetName(e.target.value)}
          />
          <div>My name is {name} </div>
          <div>This page has been rendered {renderCountRef.current} </div>
          <div>Render index = {renderIndex} </div>
        </main>
      </div>
    </div>
  );
}

export default FrontPage;
