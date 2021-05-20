import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  memo,
} from "react";
import CountUp from "react-countup";

// function getFlipBackQuoteClass(ind) {

// const txtSkillsQuotation = [
//   "The most",
//   "important",
//   "property of",
//   "a program",
//   "is",
//   "whether it",
//   "accomp- lishes",
//   "the intention",
//   "of its",
//   "user.",
//   "- C.A.R.",
//   "Hoare",
// ];

const txtSkillsQ = [
  "The",
  "most",
  "important",
  "property",
  "of a",
  "program",
  "is",
  "whether it",
  "accomp- lishes",
  "the",
  "intention",
  "of its",
  "user.",
  "- C.A.R.",
  "Hoare",
];
const countEnds = [75, 75, 70, 70, 75, 75, 75, 65, 65, 65, 55, 55, 60, 70, 50];
const countingTime = 7;

const Skills = React.forwardRef(({ handleStartCount, refProp }, ref) => {
  //
  const [countTextArr, setCountTextArr] = useState([
    "HTML5",
    "CSS3",
    "JS",
    "jQUERY",
    "REACT.JS",
    "HOOKS",
    "Bootstrap",
    "NodeJS",
    "NPM",
    "Express.js",
    "PHP",
    "MySQL",
    "mongoDB",
    "GIT",
    "C++",
  ]);

  // const [txtSkillsQuotation, setTxtSkillsQuotation] = useState([...txtSkillsQ]);
  // const [txtSkillsQuotation, setTxtSkillsQuotation] = useState([
  //   "The most",
  //   "important",
  //   "property of",
  //   "a program",
  //   "is",
  //   "whether it",
  //   "accomp- lishes",
  //   "the intention",
  //   "of its",
  //   "user.",
  //   "- C.A.R.",
  //   "Hoare",
  // ]);

  const [counter, setCounter] = useState(0);
  // const [counter2, setCounter2] = useState(0);

  const numberRef = useRef(2);

  useEffect(() => {
    // console.log("Skills render");
    // console.log(handleStartCount);
  });

  // useEffect(() => {
  //   handleStartCount();
  // }, [handleStartCount]);

  const changeCountText = () => {
    // const changeCountText = useMemo(() => {
    // return{
    console.log("changeCountText");
    console.log(countTextArr);
    return setCountTextArr([
      "REACT",
      "C++",
      "GIT",
      "mongoDB",
      "MySQL",
      "PHP",
      "NodeJS",
      "Webpack",
      "Bootstrap",
      "JS",
      "CSS",
      "HTML",
    ]);
  };
  // }, [countTextArr]);

  // const countText = useMemo(
  //   () => [
  //     "HTML",
  //     "CSS",
  //     "JS",
  //     "Bootstrap",
  //     "Webpack",
  //     "NodeJS",
  //     "PHP",
  //     "MySQL",
  //     "mongoDB",
  //     "GIT",
  //     "C++",
  //     "REACT",
  //   ],
  //   []
  // );

  // const txtSkillsQ = useMemo(
  //   () => [
  //     "The most",
  //     "important",
  //     "property of",
  //     "a program",
  //     "is",
  //     "whether it",
  //     "accomp- lishes",
  //     "the intention",
  //     "of its",
  //     "user.",
  //     "- C.A.R.",
  //     "Hoare",
  //   ],
  //   // [numberRef.current]
  //   []
  // );

  useEffect(() => {
    // setCircleB(circleBoxes);
    // console.log(countTextArr);
    // console.log(txtSkillsQuotation);
    // circleBoxes();
    // setCircleB([...circleB, circleBoxes]);
    console.log("Skills mounted");
    // console.log(txtSkillsQuotation);
    // getCircleBoxes(txtSkillsQuotation);
    // console.log(circleBoxesMemo);
    // console.log(circleB);
    // }, []);
  }, []);

  //   const getFlipBackQuoteClass = useMemo(
  //     (ind) => {
  //       let classes;
  //       console.log("classes");
  //       classes = ind > 9 ? "flip-back-quote authorFontStyle" : "flip-back-quote";
  //       return classes;
  //     },
  //     [circleB]
  //   );

  const increment = () => {
    setCounter(counter + 1);
    // numberRef.current = counter;
  };

  const circleBoxes = useMemo(() => {
    // const circleBoxes = useCallback(() => {
    // console.log(txtSkillsQuotation);
    // console.log("circles");
    // return txtSkillsQuotation.map((txt, index) => {
    // return txtSkillsQuotation.map((txt, index) => {
    return txtSkillsQ.map((txt, index) => {
      let divsArrSkills;

      divsArrSkills = (
        <div
          className="flip-card col-md-4 mx-4 mb-4 mt-5 px-0 animated NotInView fadeOutDown"
          key={index}
          ref={ref}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div
                className={"row-counting counting count" + index}
                data-controller="Appear"
              >
                {/* {countTextArr[index]} */}
                <div className="percent counting-percent">
                  {/* {props.handleStartCount[index] >= 0 ? props.handleStartCount[index] : ""}% */}
                  {/* <CountUp end={countEnds[index]} duration={5} suffix="%"> */}
                  <CountUp
                    end={
                      handleStartCount[index] === false ? 0 : countEnds[index]
                    }
                    duration={countingTime}
                    suffix="%"
                    delay={2}
                  >
                    {({ countUpRef }) => (
                      <div style={{ fontWeight: "bold" }}>
                        <div ref={countUpRef}></div>
                        {/* <button onClick={start}>Start</button> */}
                      </div>
                    )}
                  </CountUp>
                </div>
                <div className="skillName counting-skillName">
                  {countTextArr[index]}
                </div>
                {/* {countText[index]} */}
                {/* {index + numberRef.current} */}
              </div>
            </div>
            <div className={"flip-card-back row-counting flipBgColor" + index}>
              {/* <div className={(index) => getFlipBackQuoteClass}>{txt}</div> */}
              <div
                className={
                  index > 12
                    ? "flip-back-quote authorFontStyle"
                    : "flip-back-quote"
                }
              >
                {txt}
              </div>
            </div>
          </div>
        </div>
      );
      // console.log(divsArrSkills);

      return divsArrSkills;
    });
    // }, [txtSkillsQuotation, ref]);
    // }, [txtSkillsQuotation, countText, ref]);
    // }, [txtSkillsQuotation, countTextArr, ref]);
  }, [countTextArr, handleStartCount, ref]);

  return (
    <section
      className="skills section bgr-cov-norp text-center pb-4"
      data-no="3"
      data-ctrlnav="ScrollNav"
      ref={refProp}
    >
      <header className="title sec-title title-col-bright title-bgr-dark">
        SKILLS PILLS
      </header>
      <div style={{ color: "white" }}>{counter}</div>
      <button onClick={increment}>Click</button>
      {/* <button onClick={increment}>Click</button> */}
      <button onClick={changeCountText}>changeCountText Button</button>
      <div className="container sec-cont">
        <div className="row justify-content-center align-middle py-4">
          {circleBoxes}
          {/* {circleBoxesMemo} */}
          {/* {circleB} */}
        </div>
      </div>
    </section>
  );
});

// export default Skills;
export default memo(Skills);
