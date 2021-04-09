import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import $ from "jquery";
import phI from "../img/ja_odb4-2.jpg";
import useStateAsync from "./customHooks/useStateAsync";

const aboutTitle = "ABOUT ME";
const mainTitle = "Krzysztof Lalik";
const subTitles = [
  "Front-end Developing",
  "Back-end Supporting",
  "Programming & designing websites",
  "Fully responsive & interactive",
  "Individuals & Companies",
  "Sync & Async",
  "MVC Pattern",
  "Desktop, Tablet, Mobile",
];

const timeToDisplayTxt1 = 180;
const timeToDisplayTxt2 = 100;
const pause1 = 1500;
const pause2 = 1800;
const pause3 = 1200;

// function About(props) {
const About = React.forwardRef((props, ref) => {
  const {
    // scrollPageFrontValue,
    aboutTxtAppear,
    // onAboutTxtAppear,
    // windHeight,
  } = props;
  // const currentSubTtitle = useRef("Front-end Developing");
  // const [currentSubTtitle, setCurrentSubTtitle] = useState(subTitles[0]);
  // currentSubTtitle - musi być w useState a nie w useRef, bo jego zmiana musi wyrenderować nowe zdanie w jsx
  // const [currentSubTtitle, setCurrentSubTtitle] = useStateAsync(subTitles[0]);
  const [currentSubTtitle, setCurrentSubTtitle] = useStateAsync("", 1000);
  const [spanSubChange, setSpanSubChange] = useState(false);

  const mainTxtShown = useRef(false);

  const subTxtCurrentIndex = useRef(0);

  // const spanMainTitleRefTab = useRef([]);
  // const spanSubTitleRefTab = useRef([]);
  const visibility = useRef("hidden");

  // const mainTxt = React.createRef();
  // const subTxt = React.createRef();

  // mainTxtRef - reference to the div embracing the mainTitle within spanMainTitleRef.current
  // const mainTxtRef = React.createRef();
  const mainTxtRef = useRef();

  // subTxtRef - reference to the div embracing the currentSubTtitle within spanSubTitleRef.current
  // const subTxtRef = React.createRef();
  const subTxtRef = useRef();

  // reference array to mainTitle 's each letter embraced around span
  const spanMainTitleRef = useRef([]);

  // reference array to currentSubTtitle 's each letter embraced around span
  const spanSubTitleRef = useRef([]);

  // componentDidMount() {
  // console.log("about componentDidMount");
  // let flagC = true;
  // console.log(this.mainTxt);
  // console.log(this.state.currentSubTtitle);
  //   this.setState({
  //     spanMainTitleRefTab: [...this.spanMainTitleRef],
  //     spanSubTitleRefTab: [...this.spanSubTitleRef],
  //   });
  // }

  // if (el && el !== null) {
  //   (!servicesRef.current.includes(el))
  // }

  useEffect(() => {
    console.log("About render every time");
  });

  useEffect(() => {
    if (aboutTxtAppear === true) {
      console.log("useEffect spanMainTitleRef");
      // callDisplay(spanMainTitleRef.current, 0, subTxtCurrentIndex.current);
      display(spanMainTitleRef.current, 0, subTxtCurrentIndex.current);
    }
  }, [aboutTxtAppear]);

  useEffect(() => {
    // console.log(spanSubTitleRef.current[0]);
    // console.log(spanSubTitleRef.current[3]);
    // console.log(spanSubTitleRef.current.length);
    if (mainTxtShown.current === true && spanSubTitleRef.current.length > 0) {
      // console.log("useEffect spanSubTitleRef");
      // callDisplay(spanSubTitleRef.current, 0, subTxtCurrentIndex.current);
      display(spanSubTitleRef.current, 0, subTxtCurrentIndex.current);
    }
  }, [spanSubChange]);
  // }, [mainTxtShown]);

  // const subTitleAddRef = useCallback(
  const subTitleAddRef = (el) => {
    if (el && el !== null && !spanSubTitleRef.current.includes(el)) {
      // console.log("subTitleAddRef Fn");
      spanSubTitleRef.current.push(el);
      // console.log("sub span pushed!");
    }
  };
  // [spanSubTitleRef, spanSubChange]
  // [spanSubTitleRef]
  // );

  const mainTitleAddRef = useCallback(
    (el) => {
      if (el && el !== null && !spanMainTitleRef.current.includes(el)) {
        spanMainTitleRef.current.push(el);
      }
    },
    [spanMainTitleRef]
  );

  // resolve tutaj to pusty callback, ale musi być, żeby Promise mógł cos zwrócić, bo inaczej wyrzuci błąd
  // const setStateAsync = (state) => {
  // console.log("Promise");
  //   return new Promise((resolve, reject) => {
  //     if (reject.length > 1) reject(new Error("Error!"));
  //     else {
  //       this.setState(state, resolve);
  //     }
  //   });
  // };

  // await setStateAsync("setWindowWidth", windowWidth, window.innerWidth);
  // await setStateAsync("setResizeFlag", resizeFlag, true);

  // spanTab - spanMainTitleRef or spanSubTitleRef
  // iSubTab - subTxtCurrentIndex
  const display = (spanTab, i, iSubTab) => {
    // const {
    //   mainTxtShown,
    //   pause1,
    //   spanMainTitleRefTab,
    //   spanSubTitleRefTab,
    //   subTxtCurrentIndex,
    //   timeToDisplayTxt1,
    //   timeToDisplayTxt2,
    // } = this.state;
    if (subTxtRef.current.classList.contains("fadeOutFast")) {
      subTxtRef.current.classList.remove("fadeOutFast");
    }
    if (subTxtRef.current.classList.contains("fadeOut")) {
      subTxtRef.current.classList.remove("fadeOut");
    }
    if (mainTxtRef.current.classList.contains("fadeOut")) {
      mainTxtRef.current.classList.remove("fadeOut");
    }

    // if the mainTitle has not been displayed yet
    if (mainTxtShown.current === false) {
      //   const spansArray = [...this.state.spanMainTitleRefTab];
      if (i < spanTab.length) {
        displayOneSentence(spanTab, i, iSubTab, timeToDisplayTxt1);
      } else {
        // set current index of the span array to 0
        i = 0;
        mainTxtShown.current = true;
        setTimeout(async () => {
          // console.log("call spanSub first");
          // this.setState({ mainTxtShown: true }, () => {
          // display(spanSubTitleRef.current, i, subTxtCurrentIndex);
          await setCurrentSubTtitle(
            subTitles[subTxtCurrentIndex.current],
            currentSubTtitle
          );
          // });
        }, pause1);
      }
    }
    // if the mainTitle has already been displayed
    else {
      // if index of the particular sentence from subTitle array has not reached its last element
      if (i < spanTab.length) {
        // console.log("call spanSub next");
        displayOneSentence(spanTab, i, iSubTab, timeToDisplayTxt2);
      }
      // if index of the particular sentence from subTitle array has reached its last element (letter)
      else {
        // i = 0;
        // console.log("call spanSub last");
        // if(subTxtCurrentIndex.current <=0){
        // console.log(subTxtRef.current);
        // }
        subTxtCurrentIndex.current++;
        // here we have to clear spanSubTitleRef.current since another spans with another letter will have to be stored in this reference
        spanSubTitleRef.current = [];

        // // if index of the subTitles array HAS NOT reached its last element (sentence) = if index of the subTitles array is less or equal to its last element (sentence)
        if (subTxtCurrentIndex.current < subTitles.length) {
          setTimeout(() => {
            // console.log(subTxtRef.current);
            subTxtRef.current.classList.add("fadeOutFast");
            setTimeout(async () => {
              spanTab.forEach((span) => {
                $(span).css("visibility", "hidden");
              });
              await setCurrentSubTtitle(
                subTitles[subTxtCurrentIndex.current],
                currentSubTtitle
              );
            }, pause1 / 2);
          }, pause3 / 2);
        }

        // if index of the subTitles array HAS REACHED its last element (sentence) - so what to do next
        else {
          // console.log(subTxtRef.current);
          setTimeout(() => {
            mainTxtRef.current.classList.add("fadeOut");
            subTxtRef.current.classList.add("fadeOut");
            subTxtCurrentIndex.current = 0;
            mainTxtShown.current = false;

            setTimeout(() => {
              spanTab.forEach((span) => {
                $(span).css("visibility", "hidden");
              });
              spanMainTitleRef.current.forEach((span) => {
                $(span).css("visibility", "hidden");
              });
              // await setCurrentSubTtitle(
              //   subTitles[subTxtCurrentIndex.current],
              //   currentSubTtitle
              // );
              // console.log("subTxtCurrentIndex.current < subTitles.length");

              setTimeout(() => {
                display(
                  spanMainTitleRef.current,
                  0,
                  subTxtCurrentIndex.current
                );
              }, pause1);
            }, pause1);
          }, pause2);
        }

        // $(subTxtRef.current).html("");

        // callDisplay(spanSubTitleRef.current, i, subTxtCurrentIndex.current);
      }
    }
  };

  //
  // const displayOneSentence = (spanTab, i, titleRefTab, iSubTab, time) => {
  const displayOneSentence = (spanTab, i, iSubTab, time) => {
    setTimeout(() => {
      $(spanTab[i]).css("visibility", "visible");
      //   spansArray[i] = el;
      i++;
      // this.setState({ spanMainTitleRefTab: spansArray }, () => {
      // setState({ titleRefTab: spanTab }, () => {
      // console.log(this.state.spanMainTitleRefTab);
      // display(titleRefTab, i, iSubTab);
      // });
      display(spanTab, i, iSubTab);
    }, time);
  };

  // sectionStyle = () => {
  // console.log("section style");
  //   return {
  //     backgroundImage: "url(" + phI + ")",
  //     backgroundPosition: "right",
  //   };
  // };
  const sectionStyle = {
    // console.log("section style");
    backgroundImage: "url(" + phI + ")",
    backgroundPosition: "right",
  };

  // const {
  //   mainTitle,
  //   aboutTitle,
  //   currentMainTitle,
  //   currentSubTtitle,
  // } = this.state;

  // mainTitle divided into each letter embraced around span
  const mainTitleSpans = useMemo(() => {
    return [...mainTitle].map((letter, ind) => {
      // console.log("mainTitleSpan");
      // if(ind>= this.state)
      return (
        <span
          // style={mainTxtShown.current === false ? { visibility: visibility } : ''}
          style={
            mainTxtShown.current === false
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          key={ind}
          ref={mainTitleAddRef}
          // ref={(ref) => (this.spanMainTitleRef[ind] = ref)}
        >
          {letter}
        </span>
      );
    });
  }, [mainTitle]);

  // const mainTitleSpansMemo = React.memo([...mainTitleSpans]);

  // currentSubTtitle divided into each letter embraced around span
  const subTitleSpans = useMemo(() => {
    if (currentSubTtitle.length > 0) {
      const subTitleArray = [...currentSubTtitle].map((letter, ind) => {
        // console.log("subTitleSpans");
        // console.log([...currentSubTtitle]);
        // console.log(this.spanSubTitleRefTab);
        return (
          <span
            // style={{ visibility: visibility }}
            style={{ visibility: "hidden" }}
            key={ind}
            ref={subTitleAddRef}
            // ref={(ref) => (this.spanSubTitleRef[ind] = ref)}
            // ref={(ref) => this.setState(spanSubTitleRefTab: [ref)}
            //   ref={(ref) =>
            //     this.state((prevState) => {
            //       return {
            //         spanSubTitleRefTab: [...prevState.spanSubTitleRefTab, ref],
            //       };
            //     })
            //   }
          >
            {letter}
          </span>
        );
      });
      // setSpanSubChange let spanSubTitleRef.current to be filled out only after currentSubTtitle and consequently  subTitleSpans have changed, not earlier
      setSpanSubChange(!spanSubChange);
      // console.log("setSpanSubChange after");
      return subTitleArray;
    } else {
      return null;
    }
  }, [currentSubTtitle]);

  return (
    <section
      className="section photo2 parallax art-sect bgr-center text-center"
      data-no="1"
      data-ctrlnav="ScrollNav"
      style={sectionStyle}
      ref={ref}
    >
      <header className="title sec-title title-col-bright title-bgr-dark-bright-grad">
        {aboutTitle}
      </header>
      {/* <img src={phI} alt="Me" className="photo2" /> */}
      <div className="container sec-cont">
        <div className="row justify-content-left cont-about-me about-me align-left">
          <div
            className="text1 row-text1 col-sm-10 mb-4 h1 animated "
            ref={mainTxtRef}
          >
            {/* {currentMainTitle} */}
            {mainTitleSpans}
            {/* {mainTitleSpansMemo} */}
          </div>
          <div
            className="text2 row-text2 col-sm-10 mb-4 h2 animated "
            ref={subTxtRef}
          >
            {subTitleSpans}
          </div>
        </div>
      </div>
    </section>
  );
});

// export default React.forwardRef(About);
export default React.memo(About);

// this.spanSubTitleRefTab = [];
// let currSpanTabLeng = this.spanSubTitleRefTab.length;
// let correctedArrayByLength;
// let difference = Math.abs(currSpanTabLeng - prevSpanTabLeng);
// let longer;
// if (currSpanTabLeng < prevSpanTabLeng) {
// currSpanTabLeng > prevSpanTabLeng ? longer=currSpanTabLeng : longer=prevSpanTabLeng;

//   for (let i = 0; i < difference; i++) {
//     this.spanSubTitleRefTab.pop();
//   }
// }

// console.log(this.spanSubTitleRefTab);
// console.log(this.spanSubTitleRefTab.length);
// console.log(this.state.currentSubTtitle);
// console.log(this.state.currentSubTtitle.length);
