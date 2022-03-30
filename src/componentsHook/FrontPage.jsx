import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  createRef,
  lazy,
  Suspense,
} from "react";
import $ from "jquery";
import MenuIcon from "./MenuIcon";

// custom hooks
import useAppear from "./customHooks/useAppear";
import useParallaxBgrImage from "./customHooks/useParallaxBgrImage";
import useStateAsync from "./customHooks/useStateAsync";
import useHide from "./customHooks/useHide";
import useScrollTo from "./customHooks/useScrollTo";
import useMoveFrontPage from "./customHooks/useMoveFrontPage";

const Slider = lazy(() => import("./Slider"));
const About = lazy(() => import("./About"));
const Services = lazy(() => import("./Services"));
const Skills = lazy(() => import("./Skills"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));

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
  // DEFINE VARIABLES AND METHODS
  const [windowWidth, setWindowWidth] = useStateAsync(window.innerWidth);
  const [windowHeight, setWindowHeight] = useStateAsync(window.innerHeight);

  const [countedFlag, setCountedFlag] = useState({ div: "undefined", ind: 0 });

  const mainmenuRef = createRef();
  const frontMainRef = useRef();
  const pageFrontScrollVar = useRef(0);
  const pageFrontScrollVarBeforeTilt = useRef(0);
  const pageFrontRef = useRef();
  const aboutSectRef = useRef();

  const sliderSectRef = useRef();
  const servicesSectRef = useRef();
  const skillsSectRef = useRef();
  const projectsSectRef = useRef();
  const contactSectRef = useRef();
  const allSectionsRef = useRef([]);

  const divsWithMovingBgrImage = useRef([]);
  const menuIconRef = useRef();
  const menuUl = createRef();
  const linkBtnInMenu = useRef([]);

  // elements of appearDivsRef
  const servicesRef = useRef([]);
  const skillsRef = useRef([]);
  const appearDivsRef = useRef([]);

  const [ifStartCount, setIfStartCount] = useState([]);
  const [aboutTxtStart, setAboutTxtStart] = useState(false);

  // CUSTOM HOOK dealing with selected div's appearing - the divs to be appeared are passed as an argument to 'handleAppearing' function; useAppear at the beginning is given a serie of animations' array to show or hide the selected divs step by step in one row
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

  // CUSTOM HOOK setting the right size and moving background image of divs embraced within "divsWithMovingBgrImage"
  const { handleParallaxBgrImg, setSizeParallaxBackgroundImage } =
    useParallaxBgrImage(windowHeight);

  // CUSTOM HOOK - hiding divs after resize to re-order their layout
  const { handleHideAfterResize, resizeFlag = false } = useHide();

  // CUSTOM HOOK - to scroll to the right section after clicking in the memu link
  const { scrollLink } = useScrollTo();

  // CUSTOM HOOK - handle FrontPage tilting and opening menu
  const { moveFrontPage, allSectionsTopRef } = useMoveFrontPage();
  // const { moveFrontPage, allSectionsTopRef } = useMoveFrontPage(transEnd);

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
    // console.log("FRONTPAGE useEffect-2");

    if (servicesRef.current !== null && servicesRef.current[0] !== undefined) {
      if (appearDivsRef.current.length <= 0) {
        appearDivsRef.current = [...servicesRef.current, ...skillsRef.current];
      }
    }

    if (allSectionsRef.current.length <= 0) {
      allSectionsRef.current = [
        sliderSectRef.current,
        aboutSectRef.current,
        servicesSectRef.current,
        skillsSectRef.current,
        projectsSectRef.current,
        contactSectRef.current,
      ];
    }

    if (divsWithMovingBgrImage.current.length <= 0) {
      divsWithMovingBgrImage.current = [aboutSectRef.current];
    }

    for (let i = 0; i < skillsRef.current.length; i++) {
      setIfStartCount((prevTab) => [...prevTab, false]);
    }
  }, [servicesRef.current]);

  // SET EVENT LISTENERS
  useEffect(() => {
    // console.log("useEffect-3");
    const pageFrCurrent = pageFrontRef.current;
    // const menuIconRefer = menuIconRef.current;

    window.addEventListener("resize", handleResize);
    pageFrontRef.current.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      pageFrCurrent.removeEventListener("scroll", () => {
        handleScroll();
      });
    };
  }, []);

  // SET EVENT LISTENERS
  useEffect(() => {
    const menuIconCurrent = menuIconRef.current;
    const pageFrontScrollValueBeforeTilt = pageFrontScrollVarBeforeTilt.current;
    const allSectionsRefer = allSectionsRef.current;
    const allSectionsTopRefer = allSectionsTopRef.current;
    const frontMainRefer = frontMainRef.current;
    const pageFrontRefer = pageFrontRef.current;
    const ulInMenu = menuUl.current;

    menuUl.current = $(mainmenuRef.current).find("ul");

    linkBtnInMenu.current = $(menuUl.current).find("div.nav-link");

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

    menuIconRef.current.addEventListener("click", () => {
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
      menuIconCurrent.removeEventListener("click", () => {
        moveFrontPage(
          pageFrontScrollValueBeforeTilt,
          allSectionsRefer,
          frontMainRefer,
          pageFrontRefer,
          menuIconCurrent,
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
        $(aboutSectRef.current).offset().top + windowHeight / 2 <= windowHeight
      ) {
        setAboutTxtStart(true);
      }
    }
  };

  const addToServiceRefer = (array) => {
    if (
      array &&
      array !== undefined &&
      array !== null &&
      !servicesRef.current.includes(array)
    ) {
      servicesRef.current = array;
    }
  };

  const addToSkillsRefer = (array) => {
    if (
      array &&
      array !== undefined &&
      array !== null &&
      !skillsRef.current.includes(array)
    ) {
      skillsRef.current = array;
    }
  };

  const handleResize = async () => {
    // console.log("handleResize Fn");
    await setWindowWidth(window.innerWidth, windowWidth);
    await setWindowHeight(window.innerHeight, windowHeight);
    handleHideAfterResize(appearDivsRef, animShow1, animHide1);
  };

  const titleAnimation = useCallback((word) => {
    // console.log("textAnimation Fn");
    const divLetter = [...word].map((letter, ind) => (
      <span
        className="title-anim"
        key={ind}
        style={{ animationDelay: `${0.2 * ind}s` }}
      >
        {letter}
      </span>
    ));
    return <div className="text-anim">{divLetter}</div>;
  }, []);

  return (
    <div>
      <div ref={mainmenuRef}>{props.children}</div>

      <div className="frontMain body-frontMain" ref={frontMainRef}>
        <main className="pagefront frontMain-pagefront" ref={pageFrontRef}>
          <div
            className="hamburger mx-0 pagefront-hamburger transform-scale-sm"
            ref={menuIconRef}
          >
            <MenuIcon />
          </div>
          <center>
            <section
              className="section slider article-slider"
              ref={sliderSectRef}
            >
              <Suspense fallback={<p>Loading...</p>}>
                <Slider windHeight={windowHeight} windWidth={windowWidth} />
              </Suspense>
            </section>
          </center>
          <section
            className="about section bgr-center text-center"
            ref={aboutSectRef}
          >
            <Suspense fallback={<p>Loading...</p>}>
              <About
                textAppearStart={aboutTxtStart}
                onTitleAnim={titleAnimation}
              />
            </Suspense>
          </section>
          <section
            className="services section text-center"
            ref={servicesSectRef}
          >
            <Suspense fallback={<p>Loading...</p>}>
              <Services
                servicesDivs={addToServiceRefer}
                onTitleAnim={titleAnimation}
              />
            </Suspense>
          </section>
          <section
            className="skills section bgr-cover-norepeat text-center pb-4"
            ref={skillsSectRef}
          >
            <Suspense fallback={<p>Loading...</p>}>
              <Skills
                handleStartCount={ifStartCount}
                skillsDivs={addToSkillsRefer}
                onTitleAnim={titleAnimation}
              />
            </Suspense>
          </section>
          <section
            className="projects section text-center"
            ref={projectsSectRef}
          >
            <Suspense fallback={<p>Loading...</p>}>
              <Projects onTitleAnim={titleAnimation} />
            </Suspense>
          </section>
          <section className="contact sec-cont-h" ref={contactSectRef}>
            <Suspense fallback={<p>Loading...</p>}>
              <Contact onTitleAnim={titleAnimation} />
            </Suspense>
          </section>
          <footer className="text-center mx-auto footer">
            &copy; {new Date().getFullYear()} <i>by</i> Codencja
          </footer>
        </main>
      </div>
    </div>
  );
}

export default FrontPage;
