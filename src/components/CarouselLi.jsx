import React from "react";

function CarouselLi(props) {
  return <li className={"carousel-li " + props.carItem}></li>;
}

export default CarouselLi;

// const forwardLiCrsl = React.forwardRef((props, ref) => {
//   return <li className={"carousel-li " + props.carItem} ref={ref}></li>;
// });

// export default forwardLiCrsl;
