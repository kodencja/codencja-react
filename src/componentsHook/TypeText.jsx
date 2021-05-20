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

function WriteText({ aboutTxtAppear }) {
  // currentSubTitle - musi być w useState a nie w useRef, bo jego zmiana musi wyrenderować nowe zdanie w jsx
  const [currentSubTitle, setcurrentSubTitle] = useStateAsync("", 1000);
  const [spanSubChange, setSpanSubChange] = useState(false);

  const mainTxtShown = useRef(false);

  const subTxtCurrentIndex = useRef(0);

  // mainTxtRef - reference to the div embracing the mainTitle within spanMainTitleRef.current
  const mainTxtRef = useRef();

  // subTxtRef - reference to the div embracing the currentSubTitle within spanSubTitleRef.current
  const subTxtRef = useRef();

  // reference array to mainTitle 's each letter embraced around span
  const spanMainTitleRef = useRef([]);

  // reference array to currentSubTitle 's each letter embraced around span
  const spanSubTitleRef = useRef([]);

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
    // console.log(spanSubTitleRef.current[3]);
    // console.log(spanSubTitleRef.current.length);
    if (mainTxtShown.current === true && spanSubTitleRef.current.length > 0) {
      // console.log("useEffect spanSubTitleRef");
      // callDisplay(spanSubTitleRef.current, 0, subTxtCurrentIndex.current);
      display(spanSubTitleRef.current, 0, subTxtCurrentIndex.current);
    }
  }, [spanSubChange]);

  // const subTitleAddRef = useCallback(
  const subTitleAddRef = (el) => {
    if (el && el !== null && !spanSubTitleRef.current.includes(el)) {
      // console.log("subTitleAddRef Fn");
      spanSubTitleRef.current.push(el);
      // console.log("sub span pushed!");
    }
  };

  const mainTitleAddRef = useCallback(
    (el) => {
      if (el && el !== null && !spanMainTitleRef.current.includes(el)) {
        spanMainTitleRef.current.push(el);
      }
    },
    [spanMainTitleRef]
  );

  // spanTab - spanMainTitleRef or spanSubTitleRef
  // iSubTab - subTxtCurrentIndex
  const display = (spanTab, i, iSubTab) => {
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

          await setcurrentSubTitle(
            subTitles[subTxtCurrentIndex.current],
            currentSubTitle
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
        subTxtCurrentIndex.current++;
        // here we have to clear spanSubTitleRef.current since another spans with another letter will have to be stored in this reference
        spanSubTitleRef.current = [];

        // if index of the subTitles array HAS NOT reached its last element (sentence) = if index of the subTitles array is less or equal to its last element (sentence)
        if (subTxtCurrentIndex.current < subTitles.length) {
          setTimeout(() => {
            // console.log(subTxtRef.current);
            subTxtRef.current.classList.add("fadeOutFast");
            setTimeout(async () => {
              spanTab.forEach((span) => {
                $(span).css("visibility", "hidden");
              });
              await setcurrentSubTitle(
                subTitles[subTxtCurrentIndex.current],
                currentSubTitle
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
      }
    }
  };

  //
  // const displayOneSentence = (spanTab, i, titleRefTab, iSubTab, time) => {
  const displayOneSentence = (spanTab, i, iSubTab, time) => {
    setTimeout(() => {
      $(spanTab[i]).css("visibility", "visible");
      i++;
      display(spanTab, i, iSubTab);
    }, time);
  };

  const sectionStyle = {
    // console.log("section style");
    backgroundImage: "url(" + phI + ")",
    backgroundPosition: "right",
  };

  // mainTitle divided into each letter embraced around span
  const mainTitleSpans = useMemo(() => {
    return [...mainTitle].map((letter, ind) => {
      // console.log("mainTitleSpan");
      return (
        <span
          style={
            mainTxtShown.current === false
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          key={ind}
          ref={mainTitleAddRef}
        >
          {letter}
        </span>
      );
    });
  }, [mainTitle]);

  // currentSubTitle divided into each letter embraced around span
  const subTitleSpans = useMemo(() => {
    if (currentSubTitle.length > 0) {
      const subTitleArray = [...currentSubTitle].map((letter, ind) => {
        // console.log("subTitleSpans");

        return (
          <span style={{ visibility: "hidden" }} key={ind} ref={subTitleAddRef}>
            {letter}
          </span>
        );
      });

      // ta poniższa linia uruchamia ciąg wyświetlania subTitles
      // setSpanSubChange let spanSubTitleRef.current to be filled out only after currentSubTitle and consequently  subTitleSpans have changed, not earlier
      setSpanSubChange(!spanSubChange);
      // console.log("setSpanSubChange after");
      return subTitleArray;
    } else {
      return null;
    }
  }, [currentSubTitle]);

  return (
    <div>
      <div
        className="text1 row-text1 col-sm-10 mb-4 h1 animated "
        ref={mainTxtRef}
      >
        {mainTitleSpans}
      </div>
      <div
        className="text2 row-text2 col-sm-10 mb-4 h2 animated "
        ref={subTxtRef}
      >
        {subTitleSpans}
      </div>
    </div>
  );
}

export default WriteText;
