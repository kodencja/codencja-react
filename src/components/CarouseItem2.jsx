import React from "react";
import SliderHeaders from "./SliderHeaders";

function CarouseItem(props) {
  const { photo, indexN, getHeaders, addClassCrsl } = props;
  //   console.log(indexN);

  return (
    <div className={addClassCrsl(indexN)} key={indexN}>
      <img
        src={photo}
        // src={this.state.carouselItems[2]}
        alt="Slide One"
        className="carous-img carous-item-img"
      />
      <SliderHeaders
        getHeadersCaption={getHeaders}
        key={indexN}
        getIndexNo={indexN}
      />
    </div>
  );
}

export default CarouseItem;
