import React, { useEffect, useRef, memo } from "react";
import CountUp from "react-countup";
import("../css/skills.css");

const hardSkills = [
  "HTML5",
  "CSS3",
  "JS(ES6)",
  "jQUERY",
  "REDUX",
  "REACT.JS",
  "Bootstrap",
  "SASS",
  "TypeScript",
  "NodeJS",
  "Express.js",
  "GIT",
];
const hardSkillsPercent = [75, 75, 75, 75, 70, 75, 75, 70, 70, 60, 65, 70];

const softSkills = [
  "NPM",
  "REST API",
  "EJS View",
  "mongoDB",
  "C++",
  "PHP",
  "MySQL",
  "MVC",
  "BEM",
  "PhotoShop",
  "Illustrator",
  "Premiere",
];

const softQuotation = [
  "...",
  "First,",
  "solve",
  "the",
  "problem.",
  "Then,",
  "write",
  "the",
  "code",
  " - ",
  "John",
  "Johnson",
];

const hardQuotation = [
  "The most",
  "important",
  "property",
  "of a",
  "program is",
  "whether it",
  "accomp- lishes",
  "the intention",
  "of its",
  "user.",
  "- C.A.R.",
  "Hoare",
];

const countingTime = 7;

const Skills = ({ handleStartCount, skillsDivs, refProp, onTitleAnim }) => {
  const skillsRef = useRef([]);

  useEffect(() => {
    console.log("Skills Comp. mounted");
    if (skillsRef.current.length > 0) {
      skillsDivs(skillsRef.current);
    }
  }, []);

  const addToSkillsRef = (el) => {
    if (el && el !== undefined && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
  };

  const hardSkillsCircles = hardSkills.map((skill, index) => {
    return (
      <div
        className="flip-card col-md-4 mx-4 mb-4 mt-5 px-0 animated NotInView fadeOutDown"
        key={index}
        ref={addToSkillsRef}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className={"row-counting counting count-hard-" + index}>
              <div className="percent counting-percent">
                <CountUp
                  end={
                    handleStartCount[index] === false
                      ? 0
                      : hardSkillsPercent[index]
                  }
                  duration={countingTime}
                  suffix="%"
                  delay={2}
                >
                  {({ countUpRef }) => (
                    <div style={{ fontWeight: "bold" }}>
                      <div ref={countUpRef}></div>
                    </div>
                  )}
                </CountUp>
              </div>
              <div className="skillName counting-skillName">{skill}</div>
            </div>
          </div>
          <div className={"flip-card-back row-counting flipBgrColor" + index}>
            <div
              className={
                index > hardSkills.length - 3
                  ? "flip-back-quote authorFontStyle"
                  : "flip-back-quote"
              }
            >
              {hardQuotation[index]}
            </div>
          </div>
        </div>
      </div>
    );
  });

  const softSkillsCircles = softSkills.map((skill, index) => {
    return (
      <div
        className="flip-card col-md-4 mx-4 mb-4 mt-5 px-0 animated NotInView fadeOutDown"
        key={index}
        ref={addToSkillsRef}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div
              className={"row-counting counting soft-row count-soft-" + index}
            >
              <div className="skillName counting-skillName">{skill}</div>
            </div>
          </div>
          <div className={"flip-card-back row-counting flipBgrColor" + index}>
            <div
              className={
                index > softSkills.length - 3
                  ? "flip-back-quote authorFontStyle"
                  : "flip-back-quote"
              }
            >
              {softQuotation[index]}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <header className="title sec-title title-col-bright title-bgr-dark">
        {onTitleAnim("TECHNICAL\u00A0SKILLS")}
      </header>
      <div className="container sec-cont">
        <div className="align-middle py-4">
          <header className="skills-header">Hard Skills</header>
          <div className="row justify-content-center skills-row">
            {hardSkillsCircles}
          </div>
          <header className="skills-header">Soft Skills</header>
          <div className="row justify-content-center skills-row">
            {softSkillsCircles}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default memo(Skills);
