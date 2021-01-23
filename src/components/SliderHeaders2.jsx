import React from "react";

function SliderHeaders(props) {
  // const headersTab = props.getHeaders;
  // console.log(headersTab);
  // console.log(headersTab.length);
  // let indexNo = props.getCurrentCarouselHeadIndexNo;
  let indexNo = props.getIndexNo;
  // let keyNo = indexNo;
  // console.log(indexNo); // 27
  // const parentIndex = props.getIndexNoOfParent;
  // console.log(parentIndex);
  let carslCaption;
  // props.indexNumber();

  const carslHeaders = props.getHeadersCaption.map((header, index2) => {
    // console.log(header);

    // for (let i = 0; i < header.length; i++) {
    if (index2 === 0) {
      carslCaption = (
        // <div className="capt carl-caption-capt head1" key={indexNo}>
        <div className="capt carl-caption-capt head1" key={index2}>
          {header}
        </div>
      );
    } else if (indexNo === 1 && index2 === 1) {
      // console.log(header); //  /static/media/sign50.acbc5413.png
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

    // return carslCaption;
    // }

    // indexNo--;

    // return (
    //   <div className="capt carl-caption-capt head1" key={indexNo--}>
    //     {header}
    //   </div>
    // );

    // console.log(carslCaption);

    return carslCaption;
  });

  // console.log(carslHeaders);

  return (
    <div
      // className="carousel-caption text-center justify-content-center"
      className="carousel-caption"
      // key={parentIndex}
    >
      {carslHeaders}
    </div>
  );
}

export default SliderHeaders;

{
  /* <div
className="carousel-caption text-center justify-content-center"
key={index}
>
<div className="capt carl-caption-capt head1">
  Web-Developing & Designing
</div>
<div className="capt carl-caption-capt">Front & Back End Support</div>
</div> */
}
