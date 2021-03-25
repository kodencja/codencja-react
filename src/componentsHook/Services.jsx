import React, { useState, useEffect, useRef, useMemo } from "react";
import $ from "jquery";

const txtSerives = [
  "UI Designing Front-End Developing Back-End Support",
  "Languagues Frameworks Technologies MVC\u00A0Pattern",
  "Coding Graphic Custom-made &\u00A0Standard",
  "Fully Responsive For\u00A0All Displays",
  "Innovative Ideas Sync\u00A0/ Async",
  "Projects for Individuals &\u00A0Companies",
  "High Quality Clear, Fresh &\u00A0Interactive",
  "Consultations Web Design &\u00A0Content",
];

const iconNames = [
  "flaticon-layers",
  "flaticon-code",
  "flaticon-mechanism",
  "flaticon-devices",
  "icon-lightbulb",
  "icon-sitemap",
  "flaticon-diamond",
  "flaticon-support",
];

// function Services(props) {
const Services = React.forwardRef((props, ref) => {
  const sectionRef = useRef();
  // const iconRef = useRef([]);
  // let iconRef = useRef([]);
  // const iconRef = useRef(null);
  // iconRef.current = [];

  // let iconCopyRef = [];
  // const refs = useRef([]);
  // const handleRefs = (refs) => {
  //   useMemo(() => {
  //     return (ref = refs);
  //   }, [iconRef]);
  // };
  // let icRefer;
  // let icRef = useMemo(() => {
  //   for (let i = 0; i < iconRef; i++) {
  //     if (iconRef[i] != null) icRefer[i] = iconRef[i];
  //   }
  //   return icRefer;
  // }, []);

  console.log("Services Render");

  useEffect(() => {
    console.log("Services mounted");
    // console.log(sectionRef.current);
    // console.log($(sectionRef.current).attr("class").split(/\s+/));
    // console.log($(sectionRef.current).prop("classList"));
    // console.log($(sectionRef.current).prop("classList")[1]);
    // console.log($(sectionRef.current).prop("classList").value);
    // console.log(iconRef);
    // console.log(iconRef.current);
    // props.arrRef(iconRef.current);
    // iconRef.forEach((el)=> {el=useRef()})
    // iconCopyRef.length = iconRef.length;
    // for(let i=0; i<iconRef.length; i++){
    // handleRefs(iconRef);
    // console.log(refs);
    // }
    // console.log(icRefer);
    // props.arrRef(iconRef.current);
    // ref = iconRef;
  }, []);

  // const addToRefs = (el) => {
  //   if (el && !iconRef.current.includes(el)) {
  //     iconRef.current.push(el);
  //   }
  //   console.log(iconRef.current);
  // };

  // const refs = useMemo(() => {
  //   console.log("Memo service");
  //   // ref = iconRef.current;
  //   props.arrRef(iconRef.current);
  // }, [iconRef.current]);

  const serviceDivs = txtSerives.map((txt, index) => {
    // console.log("service");
    let servDiv;
    if (index < 6) {
      // console.log(index);
      servDiv = (
        <div
          className="col-sm-4 box appear row-box animated NotInView fadeOutDown"
          data-controller="Appear"
          key={index}
          // ref={ref}
          // ref={(ref) => (ref[index] = ref)}
          // ref={(ref) => (iconRef[index] = ref)}
          // ref={(ref) => (iconRef.current = [...iconRef.current, ref])}
          // ref={(ref) => props.arrRef(ref)}
          // ref={props.arrRef(ref)}
          // ref={props.arrRef(iconRef[index])}
          // ref={ref}
          ref={ref}
          // ref={ref = ref[index]}
          // ref={addToRefs}
        >
          <i className={iconNames[index]}></i>
          <div className="infotxt mt-1">
            <p className="h4">{txt}</p>
          </div>
        </div>
      );
    } else {
      // console.log(index);
      servDiv = (
        <div
          className="col-sm-6 box appear row-box animated NotInView fadeOutDown"
          data-controller="Appear"
          key={index}
          // ref={(ref) => (iconRef[index] = ref)}
          // ref={(ref) => props.arrRef(ref)}
          // ref={props.arrRef(ref)}
          ref={ref}
          // ref={ref[index]}
          // ref={(ref) => (iconRef.current = [...iconRef.current, ref])}
          // ref={addToRefs}
        >
          <i className={iconNames[index]}></i>
          <div className="infotxt mt-1">
            <p className="h4">{txt}</p>
          </div>
        </div>
      );
    }
    return servDiv;
  });

  return (
    <section
      className="services section photo3 art-sect text-center"
      data-no="2"
      data-ctrlnav="ScrollNav"
      // data-ref={props.arrRef(iconRef)}
      ref={sectionRef}
    >
      <header className="title sec-title">SERVICES</header>
      <div className="container sec-cont py-3">
        <div className="row ">{serviceDivs}</div>
      </div>
    </section>
  );
  // }
});

// export default Services;
export default React.memo(Services);
