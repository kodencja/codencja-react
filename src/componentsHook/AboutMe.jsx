import React, { useEffect } from "react";
import phI from "../img/ja_odb4-2.jpg";
import WriteText from "./WriteText";

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
    textAppearStart,
    // onAboutTxtAppear,
    // windHeight,
  } = props;

  useEffect(() => {
    console.log("About Me render every time");
  });

  const sectionStyle = {
    // console.log("section style");
    backgroundImage: "url(" + phI + ")",
    backgroundPosition: "right",
  };

  return (
    <section
      className="section photo2 bgr-center text-center"
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
    </section>
  );
});

// export default React.forwardRef(About);
export default React.memo(About);
