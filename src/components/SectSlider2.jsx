import React, { Component } from "react";
// import "../../bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import CarouselLi from "./CarouselLi";
import photo1 from "../img/coding-924920_1280.jpg";
import photo2 from "../img/iphone_and_ipad-wallpaper-1280x853.jpg";
import sign50 from "../img/sign50.png";
import photo3 from "../img/programming-1857236_1280.jpg";
import photo4 from "../img/matrix_1280.jpg";
import photo5 from "../img/ja_odb4-1.jpg";
import photo6 from "../img/web-design-2906159_1280.jpg";
import photo7 from "../img/html5-386614_1280.jpg";
import photo8 from "../img/code-2620118_1280.jpg";
import photo9 from "../img/programming-1009134_1280.jpg";
import photo10 from "../img/monitors.jpg";
import photo11 from "../img/technology-785742_1280.jpg";
import photo12 from "../img/macbook-336704_1280.jpg";
import CarouseItem from "./CarouseItem";

class SectSlider extends Component {
  state = {
    carouselItemIndicators: [
      "item1 active",
      "item2",
      "item3",
      "item4",
      "item5",
      "item6",
      "item7",
      "item8",
      "item9",
      "item10",
      "item11",
      "item12",
    ],
    carouselItemsPhotos: [
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
      photo11,
      photo12,
    ],
    carouselHead2: {
      ph1: ["Web-Developing & Designing", "Front & Back End Support"],
      ph2: ["Up to", "ideas / h", "in built-up area"],
      ph3: ["To make sens", "to make order"],
      ph4: ["from tangle", "of non-decimal numbers"],
      ph5: ["Krzysztof Lalik", "Front-end developing", "Back-end supporting"],
      ph6: [
        "Programming & designing websites",
        "Eye-catching & functional",
        "Fully Responsive",
      ],
      ph7: [
        "For individuals & companies",
        "Portfolios, blogs, online-shops",
        "adjusted to Customer expectations",
      ],
      ph8: [
        "Desktop, Tablet, Mobile",
        "MVC Pattern",
        "standard & original templates",
      ],
      ph9: ["Meeting high standards", "Update with new trends and technology"],
      ph10: ["creative design animations", "with one to one swipe movement!"],
      ph11: ["Flexible working time"],
      ph12: ["until the project is done"],
    },

    carouselHead: [
      ["Web-Developing & Designing", "Front & Back End Support"],
      ["Up to", sign50, "ideas / h", "in built-up area"],
      ["To make sens", "to make order"],
      ["from tangle", "of non-decimal numbers"],
      ["Krzysztof Lalik", "Front-end developing", "Back-end supporting"],
      [
        "Programming & designing websites",
        "Eye-catching & functional",
        "Fully Responsive",
      ],
      [
        "For individuals & companies",
        "Portfolios, blogs, online-shops",
        "adjusted to Customer expectations",
      ],
      [
        "Desktop, Tablet, Mobile",
        "MVC Pattern",
        "standard & original templates",
      ],
      ["Meeting high standards", "Update with new trends and technology"],
      ["creative design animations", "with one to one swipe movement!"],
      ["Flexible working time"],
      ["until the project is done"],
    ],
    CrslClassActive: "active",
    CrslItemClass: "carousel-item ",
    // totalTabCarouselLength: 0,
    // carouselHeadIndexNumber: 0,
    // indexNumber: 0,
  };

  // countCrslHeaderTotalLength = () => {
  // this.state.carouselHead.forEach(() => {});
  //   this.state.carouselHead.reduce((prev, next) => {
  //     return prev + next.length;
  //   }, 0);
  // };

  // countCrslHeaderTotalLength = () => {
  // componentDidMount = () => {
  //   let totalLength = this.state.carouselHead.flat(Infinity).length;
  //   console.log(totalLength);
  //   this.setState({ totalTabCarouselLength: totalLength });
  // };

  // currentCarouselHeadIndexNo = () => {
  //   this.setState((prevState) => {
  //     console.log(this.state.carouselHeadIndexNumber);
  //     return { carouselHeadIndexNumber: prevState.carouselHeadIndexNumber + 1 };
  //   });
  // };

  // setIndexNumber = () =>
  //   this.setState({ indexNumber: this.state.indexNumber + 1 });

  secSliderRef = React.createRef();
  prevBtn = React.createRef();
  nextBtn = React.createRef();

  componentDidMount() {
    // console.log(this.secSliderRef);
    // console.log(this.secSliderRef.current);
    // this.secSliderRef.current.carousel({ interval: 5000 });
    // const slider = document.querySelector(".slider");
    // console.log(slider);
    // slider.carousel({ interval: 5000 });

    // select all divs that don't have class test
    // $( 'div' ).not( ".test" );
    // $( 'div:not(.test)' );  // <-- alternative

    const sliderR = $(this.secSliderRef.current);
    console.log(sliderR);
    sliderR.carousel({ interval: 5000 });

    const prevB = $(this.prevBtn.current);
    const nextB = $(this.nextBtn.current);
    // console.log(prevB);
    // console.log(nextB);

    // Enable Carousel Controls
    prevB.on("click", function () {
      sliderR.carousel("prev");
    });
    nextB.on("click", function () {
      sliderR.carousel("next");
    });

    // const sliderQ = $(".slider");
    // console.log(sliderQ);
    // sliderQ.carousel({ interval: 5000 });
  }

  handleAddClassCrsl = (ind) => {
    // console.log(ind);
    // console.log(this.state.CrslClassActive);
    // console.log(this.state.CrslItemClass);
    // console.log(this.state.CrslItemClass + this.state.CrslClassActive);
    let classes = this.state.CrslItemClass;
    classes += ind === 1 ? this.state.CrslClassActive : "";
    return classes;
  };

  render() {
    // const totalLength = this.state.carouselHead.flat(Infinity).length;

    const carouselIndicatorsList = this.state.carouselItemIndicators.map(
      (carousItem, index) => (
        // return <CarouselLi key={index} carItem={carousItem} />;
        // return <li className={"carousel-li " + carousItem} key={index}></li>;
        <CarouselLi key={index} carItem={carousItem} />
      )
    );

    const carouselItemList = this.state.carouselItemsPhotos.map(
      (photo, index) => (
        <CarouseItem
          photo={photo}
          key={index}
          getHeaders={this.state.carouselHead[index]}
          addClassCrsl={this.handleAddClassCrsl}
          indexN={index}
        />
      )
    );

    return (
      <section
        className="section slider article-slider carousel slide carousel-fade"
        data-no="0"
        data-ctrlnav="ScrollNav"
        ref={this.secSliderRef}
      >
        <ul className="carousel-indicators d-none d-sm-flex">
          {carouselIndicatorsList}
        </ul>
        <center>
          <div className="carousel-inner">{carouselItemList}</div>
        </center>
        {/* 
        <a className="carousel-control prev" href="#carousel" data-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>

        <a className="carousel-control next" href="#carousel" data-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a> */}

        <a
          className="carousel-control-prev"
          role="button"
          href="#carousel"
          ref={this.prevBtn}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          role="button"
          href="#carousel"
          ref={this.nextBtn}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </section>
    );
  }
}

export default SectSlider;

{
  /* <div className="carousel-inner"> */
}
{
  /* <div className="carousel-item active text-center justify-content-center"> */
}
// <img
// src="coding-924920_1280.jpg"
// src={photo0}
// src={this.state.carouselItems[2]}
//     alt="Slide One"
//     className="carous-img carous-item-img"
//   />
//   <div className="carousel-caption text-center justify-content-center">
//     <div className="capt carl-caption-capt head1">
//       Web-Developing & Designing
//     </div>
//     <div className="capt carl-caption-capt head2">
//       Front & Back End Support
//     </div>
//   </div>
// </div>
// </div>

// const carouselItemList = this.state.carouselItemsPhotos.map(
// (photo, index) => {
// console.log(index);
// console.log(this.state.carouselHead[index]);
// return (
//   <div className="carousel-item active" key={index}>
//     <img
//       src={photo}
// src={this.state.carouselItems[2]}
//   alt="Slide One"
//   className="carous-img carous-item-img"
// />
// <SliderHeaders
//   getHeaders={this.state.carouselHead[index]}
// indexNumber={this.setIndexNumber}
// getIndexNumber={this.state.indexNumber}
// getIndexNo={this.countCrslHeaderTotalLength}
// getIndexNo={this.state.totalTabCarouselLength}
// getCurrentCarouselHeadIndexNo={this.currentCarouselHeadIndexNo}
// getIndexNoOfParent={index}
//         key={index}
//       />
//     </div>
//   );
// }
// );
