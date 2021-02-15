import React, { useState, useEffect, useMemo } from "react";

// function getFlipBackQuoteClass(ind) {

const Skills = React.forwardRef((props, ref) => {
  const txtSkillsQuotation = [
    "The most",
    "important",
    "property of",
    "a program",
    "is",
    "whether it",
    "accomp- lishes",
    "the intention",
    "of its",
    "user.",
    "- C.A.R.",
    "Hoare",
  ];

  const [circleB, setCircleB] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // setCircleB(circleBoxes);
    // console.log(circleB);
    // circleBoxes();
    // setCircleB([...circleB, circleBoxes]);
    console.log("Skills mounted");
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
  };

  // const circleBoxes = useMemo(() => {
  //   console.log(txtSkillsQuotation);
  //   txtSkillsQuotation.map((txt, index) => {
  //     let divsArrSkills;
  //     console.log("circles");
  //     divsArrSkills = (
  //       <div
  //         className="flip-card col-md-4 mx-4 mb-4 mt-5 px-0 appear animated NotInView fadeOutDown"
  //         key={index}
  //         ref={ref}
  //       >
  //         <div className="flip-card-inner">
  //           <div className="flip-card-front">
  //             <div
  //               className={"row-counting counting count" + index}
  //               data-controller="Appear"
  //             ></div>
  //           </div>
  //           <div className={"flip-card-back row-counting flipBgColor" + index}>
  //             {/* <div className={(index) => getFlipBackQuoteClass}>{txt}</div> */}
  //             <div
  //               className={
  //                 index > 9
  //                   ? "flip-back-quote authorFontStyle"
  //                   : "flip-back-quote"
  //               }
  //             >
  //               {txt}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //     // console.log(divsArrSkills);

  //     return divsArrSkills;
  //   });
  // }, [circleB]);

  const circleBoxes = txtSkillsQuotation.map((txt, index) => {
    let divsArrSkills;
    console.log("circles");
    divsArrSkills = (
      <div
        className="flip-card col-md-4 mx-4 mb-4 mt-5 px-0 appear animated NotInView fadeOutDown"
        key={index}
        ref={ref}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div
              className={"row-counting counting count" + index}
              data-controller="Appear"
            ></div>
          </div>
          <div className={"flip-card-back row-counting flipBgColor" + index}>
            {/* <div className={(index) => getFlipBackQuoteClass}>{txt}</div> */}
            <div
              className={
                index > 9
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
    return divsArrSkills;
  });

  return (
    <section
      className="skills section sec4 bgr-cov-norp text-center pb-4"
      data-no="3"
      data-ctrlnav="ScrollNav"
    >
      <header className="title sec-title title-col-bright title-bgr-dark">
        SKILLS
      </header>
      <div style={{ color: "white" }}>{counter}</div>
      <button onClick={increment}>Click</button>
      <div className="container sec-cont">
        <div className="row justify-content-center align-middle py-4">
          {circleBoxes}
          {/* {circleB} */}
        </div>
      </div>
    </section>
  );
});

export default React.memo(Skills);
