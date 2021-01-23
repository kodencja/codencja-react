import React from "react";

const SliderHeaders = React.forwardRef((props, ref) => {
  let indexNo = props.getIndexNo;
  let carslCaption;

  const carslHeaders = props.getHeadersCaption.map((header, index2) => {
    if (index2 === 0) {
      carslCaption = (
        <div className="capt carl-caption-capt head1" key={index2}>
          {header}
        </div>
      );
    } else if (indexNo === 1 && index2 === 1) {
      carslCaption = (
        <div className="carl-caption-capt sign carl-caption-sign" key={index2}>
          <img src={header} alt="50 ideas/h" className="sign-img"></img>
        </div>
      );
    } else {
      carslCaption = (
        <div className="capt carl-caption-capt" key={index2}>
          {header}
        </div>
      );
    }

    return carslCaption;
  });

  // console.log(carslHeaders);

  return (
    <div className="carousel-caption" ref={ref}>
      {carslHeaders}
    </div>
  );
});

export default SliderHeaders;
