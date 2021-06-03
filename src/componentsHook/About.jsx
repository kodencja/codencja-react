import React, { useEffect } from "react";
// import phI from "../img/ja_odb4-2.jpg";
import WriteText from "./WriteText";
import "../css/about.css";

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

const About = (props) => {
  const { textAppearStart } = props;

  useEffect(() => {
    // console.log("About Me render every time");
    console.log("About Comp.");
  }, []);

  return (
    <React.Fragment>
      <header className="title sec-title title-col-bright title-bgr-dark-bright-grad">
        {aboutTitle}
      </header>
      <div className="container sec-cont">
        <WriteText
          textAppearStart={textAppearStart}
          pauseBetweenNewSentenceAppear={1200}
          pauseAfterAllTextsDisplayed={1800}
          pauseBeforeOneSubTitleSentenceFadeOut={800}
          timeToDisplayText1={180}
          timeToDisplayText2={100}
          mainTitle={mainTitle}
          subTitles={subTitles}
        />
      </div>
    </React.Fragment>
  );
};

export default React.memo(About);
