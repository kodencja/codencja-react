import React, { Component } from "react";
import $ from "jquery";
import SliderHeaders from "./SliderHeaders";

class CarouseItem extends Component {
  state = {
    visibilityClass: "notvisible",
  };

  sliderHeadersRef = React.createRef();
  carouselItemRef = React.createRef();

  componentDidMount() {
    // this.props.classNameList();
    // this.getVisibilityClass();
    // });
    // console.log(this.carouselItemRef.current.classList);
  }

  // componentDidUpdate() {
  //   this.getVisibilityClass();
  // }

  getVisibilityClass = () => {
    let carouselItem = this.carouselItemRef.current;
    console.log(carouselItem);
    // carouselItem.forEach((element) => {
    this.setState({
      visibilityClass: this.props.getVisibilityClass(carouselItem),
    });
  };

  render() {
    const { photo, indexN, getHeaders, addClassCrsl } = this.props;
    // console.log(this.sliderHeadersRef);
    // console.log(
    //   <SliderHeaders
    //     getHeadersCaption={getHeaders}
    //     key={indexN}
    //     getIndexNo={indexN}
    //   />
    // );
    // if ($(this.carouselItemRef.current).hasClass("active")) {
    //   console.log("Active class!");
    //   console.log(this.carouselItemRef.current);
    // } else {
    //   console.log("Not active class");
    // }

    return (
      <div
        className={addClassCrsl(indexN)}
        key={indexN}
        ref={this.carouselItemRef}
      >
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
          ref={this.sliderHeadersRef}
          getCaptsTab={this.props.getCaptsTab}
          parentClassName={this.props.classNameList}
          // getVisibleClass={this.state.visibilityClass}
          getVisibleClass={this.props.getVisibilityClass}
        />
      </div>
    );
  }
}

export default CarouseItem;

// componentDidMount() {
// B

// if (this.sliderHeadersRef.current !== null) {
// this.props.getCaptions(
//   this.sliderHeadersRef.current.headersCaptsRef.current.childNodes
// );
// console.log(this.sliderHeadersRef.current.headersCapts.current);
// console.log($(this.sliderHeadersRef.current.headersCapts.current));
// console.log(
//   $(this.sliderHeadersRef.current.headersCapts.current).children()
// );
// this.captsTab.push(this.sliderHeadersRef.current.headersCapts.current);
// this.props.getCaptsTab(
//   this.sliderHeadersRef.current.headersCapts.current
// );
// let captsVar;
// if (this.state.headerCaptsTab.length > 0) {
//   captsVar = [...this.state.headerCaptsTab];
// } else {
//   captsVar = this.state.headerCaptsTab;
// }
// let captionChildren = $(
//   this.sliderHeadersRef.current.headersCapts.current
// ).children();
// this.captsVar.push(div);
// this.setState(
//   {
//     headerCaptsTab: [captsVar, captionChildren],
//   },
//   () => console.log(this.state.headerCaptsTab)
// );
// }
// }
