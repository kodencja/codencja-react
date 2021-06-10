import React, { useEffect, useRef } from "react";
import("../css/services.css");

const txtSerives = [
  "UI Designing Frontend\u00A0Developing Backend\u00A0Support",
  "Modern Frameworks &\u00A0Technologies REACT\u00A0JS\u00A0HOOKS",
  "Coding Graphic Custom-made &\u00A0Standard",
  "Fully Responsive For\u00A0All Displays",
  "Innovative Ideas Sync\u00A0/ Async",
  "Projects for Individuals &\u00A0Companies",
  "Clear, Interactive &\u00A0Animated",
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

const Services = (props) => {
  const serviceDivsRef = useRef([]);

  // console.log("Services Render");

  // useEffect(() => {
  //   props.refProp = sectionRef.current;
  // }, [sectionRef]);

  useEffect(() => {
    console.log("Services Comp. mounted");
    if (serviceDivsRef.current.length > 0) {
      props.servicesDivs(serviceDivsRef.current);
    }
  }, []);

  const addToServiceRef = (el) => {
    if (el && el !== undefined && !serviceDivsRef.current.includes(el)) {
      serviceDivsRef.current.push(el);
    }
  };

  const serviceDivs = txtSerives.map((txt, index) => {
    // class 'animated' is connected with stylesheet file "anims.css"
    let servDiv;
    if (index < 6) {
      servDiv = (
        <div
          className="col-sm-4 box row-box animated NotInView fadeOutDown"
          key={index}
          ref={addToServiceRef}
        >
          <i className={iconNames[index]}></i>
          <div className="infotxt mt-1">
            <p className="h4">{txt}</p>
          </div>
        </div>
      );
    } else {
      servDiv = (
        <div
          className="col-sm-6 box row-box animated NotInView fadeOutDown"
          key={index}
          ref={addToServiceRef}
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
    <React.Fragment>
      <header className="title sec-title">SERVICES</header>
      <div className="container sec-cont py-3">
        <div className="row ">{serviceDivs}</div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Services);
