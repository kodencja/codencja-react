import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

// function getFlipBackQuoteClass(ind) {

const SkillsSect = React.forwardRef((props, ref) => {
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

  const countText = [
    "HTML",
    "CSS",
    "JS",
    "Bootstrap",
    "Webpack",
    "NodeJS",
    "PHP",
    "MySQL",
    "mongoDB",
    "GIT",
    "C++",
    "REACT",
  ];

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const numberRef = useRef(2);

  //   const [circleBox, setCircleBox] = useState(() => {
  //     txtSkillsQuotation.map((txt, index) => {
  //       let divsArrSkills;
  //       // console.log("circles");
  //       divsArrSkills = (
  //         <div
  //           className="flip-card col-md-4 mx-4 mb-4 mt-5 px-0 appear animated NotInView fadeOutDown"
  //           key={index}
  //           ref={ref}
  //         >
  //           <div className="flip-card-inner">
  //             <div className="flip-card-front">
  //               <div
  //                 className={"row-counting counting count" + index}
  //                 data-controller="Appear"
  //               >
  //                 {/* {countText[index]} */}
  //                 {/* {setCounter2(counter2 + index)} */}
  //                 {index + numberRef.current}
  //               </div>
  //             </div>
  //             <div className={"flip-card-back row-counting flipBgColor" + index}>
  //               {/* <div className={(index) => getFlipBackQuoteClass}>{txt}</div> */}
  //               <div
  //                 className={
  //                   index > 9
  //                     ? "flip-back-quote authorFontStyle"
  //                     : "flip-back-quote"
  //                 }
  //               >
  //                 {txt}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       );
  //       console.log("circles");
  //       // setCircleB([...circleB, divsArrSkills]);
  //       return divsArrSkills;
  //     });
  //   });

  useEffect(() => {
    // setCircleB(circleBoxes);
    console.log(circleBox);
    // circleBoxes();
    // setCircleB([...circleB, circleBoxes]);
    console.log("Skills mounted");
    // getCircleBoxes(txtSkillsQuotation);
    // console.log(circleBoxesMemo);
    // console.log(circleB);
    callSetCircleBox();
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
    numberRef.current = counter;
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
  // const getCircleBoxes = (txtSkillsQuotation) => {
  const circleBoxes = txtSkillsQuotation.map((txt, index) => {
    let divsArrSkills;
    // console.log("circles");
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
            >
              {/* {countText[index]} */}
              {/* {setCounter2(counter2 + index)} */}
              {index + numberRef.current}
            </div>
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
    console.log("circles 2");
    // setCircleB([...circleB, divsArrSkills]);
    return divsArrSkills;
  });
  // setCircleB([...circleB, circleBoxes]);

  // return circleBoxes;
  // };

  //   const [circleBox, setCircleBox] = useState(circleBoxes);
  const [circleBox, setCircleBox] = useState(circleBoxes);
  const callSetCircleBox = useCallback(() => {
    //   const callSetCircleBox = useMemo(() => {
    // console.log(circleBoxes);
    setCircleBox(circleBoxes);
  }, [setCircleBox]);
  // const circleBoxesMemo = useMemo(() => {
  // console.log("Memo call");
  // getCircleBoxes(txtSkillsQuotation);
  // setCircleB([...circleB, getCircleBoxes(txtSkillsQuotation)]);
  // return circleB;
  // }, [circleB]);

  // const circleBoxesMemo = useMemo(() => getCircleBoxes(txtSkillsQuotation), [
  //   txtSkillsQuotation,
  // ]);

  // const circleBoxesMemo = useCallback(
  // const circleBoxesMemo = useMemo(
  // () => setCircleB([...circleB, getCircleBoxes(txtSkillsQuotation)]),
  // () => {
  // getCircleBoxes(txtSkillsQuotation);
  //     setCircleB([...circleB, circleBoxes]);
  //     console.log(circleB);
  //     return circleB;
  //   },
  //   [circleB]
  // );

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
          {/* {circleBox} */}
          {/* {circleBoxesMemo} */}
          {/* {circleB} */}
          {/* {callSetCircleBox} */}
          {circleBox}
        </div>
      </div>
    </section>
  );
});

export default React.memo(SkillsSect);
