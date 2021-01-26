import React, { Component } from "react";
import $ from "jquery";
import Carousel from "react-multi-carousel";
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

class CarouselBtstrpSlider extends Component {
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
    activeClass: "active",
    carouselItemClass: "carousel-item ",
    animatedClass: "animated",
    nonVisibileClass: "notvisible",
    visibileClass: "visible",
    captionsClass1: "capt carl-caption-capt animated head1",
    captionsClass2: "capt carl-caption-capt animated",
    captionsClass: "carl-caption-capt animated",
    captionsClassSign: "carl-caption-capt animated sign carl-caption-sign",
    animShTab1: "fadeInDown",
    animShTab2: ["fadeInDown", "fadeInUp"],
    animShTab3: ["fadeInDown", "fadeInLeft", "fadeInRight"],
    animShTab4: ["fadeInDown", "bounceInLeft", "fadeInLeft", "fadeInRight"],
    sliderJQ: "",
    crslItem: "",
    captionCurrentDiv: "",
    captionCurrentClass: "",
    captionsRef: "",
    fadeInDown: "fadeInDown",
    prevBtn: "",
    nextBtn: "",
    carouselListChildren: [],
    headerCaptsTab: [],
    captsTab: [],
    empty: {},
    nextSlide: {},
  };

  // slider.on("slid.bs.carousel", () => {
  // console.log("slid.bs.carousel");
  // this.captionsAnimation($(".carousel-item.active"), crslItems);
  // });

  secSliderRef = React.createRef();
  crslItemRef = React.createRef();
  // captionsRef = React.createRef([]);
  captionsRef = [];

  componentDidMount() {
    console.log("componentDidMount");
    // console.log(this.secSliderRef);
    console.log(this.captionsRef);
    // console.log(this.crslItemRef);
    // console.log($(this.crslItemRef));
    // console.log(this.captionsRef.current);
    console.log(this.secSliderRef.current.element);
    // console.log($(this.secSliderRef.current.element[0]));
    // this.setState({ sliderJQ: this.secSliderRef });
    // console.log($(this.secSliderRef.current));

    this.setState({ captionsRef: [...this.captionsRef] }, () =>
      console.log(this.state.captionsRef)
    );

    // $(this.secSliderRef.current.element).on("slid.bs.carousel", () => {
  }

  handleNextSlide = (ind) => {
    // console.log(ind);
    const captionsCopy = [...this.state.captionsRef];
    // const captionNext = captionsCopy[ind];
    // console.log(captionsCopy);
    // console.log(captionsCopy[i].childNodes[0].className);
    const captionsNextArray = captionsCopy[ind].childNodes;
    // console.log(captionsNextArray);
    // console.log(captionsArray[0]);

    let animationArray;
    if (captionsNextArray.length < 3) animationArray = this.state.animShTab2;
    else if (captionsNextArray.length === 3)
      animationArray = this.state.animShTab3;
    else if (captionsNextArray.length > 3)
      animationArray = this.state.animShTab4;
    // captionsCopy[i].childNodes[0].className += " " + this.state.visibileClass + " "+ this.state.fadeInDown;
    for (let i = 0; i < captionsNextArray.length; i++) {
      captionsNextArray[i].classList.remove(this.state.nonVisibileClass);
      captionsNextArray[i].classList.add(animationArray[i]);
    }

    // console.log(captionsNextArray);
    // console.log([...this.state.captionsRef]);

    // captionsCopy[ind].childNodes[0].classList.remove(this.state.nonVisibileClass);
    // captionsCopy[ind].childNodes[0].classList.add(this.state.fadeInDown);
    // console.log(captionsCopy[i].childNodes[0].className);
  };

  handlePrevSlide = (ind) => {
    let index;
    ind === 0
      ? (index = this.state.carouselItemsPhotos.length - 1)
      : (index = ind - 1);
    console.log(index);
    const captionsCopy = [...this.state.captionsRef];
    // const captionNext = captionsCopy[ind];
    // console.log(captionsCopy);
    // console.log(captionsCopy[i].childNodes[0].className);
    const captionsPrevArray = captionsCopy[index].childNodes;
    // console.log(captionsNextArray);
    // console.log(captionsArray[0]);

    let animationArray;
    if (captionsPrevArray.length < 3) animationArray = this.state.animShTab2;
    else if (captionsPrevArray.length === 3)
      animationArray = this.state.animShTab3;
    else if (captionsPrevArray.length > 3)
      animationArray = this.state.animShTab4;
    // captionsCopy[i].childNodes[0].className += " " + this.state.visibileClass + " "+ this.state.fadeInDown;
    for (let i = 0; i < captionsPrevArray.length; i++) {
      captionsPrevArray[i].classList.remove(animationArray[i]);
      captionsPrevArray[i].classList.add(this.state.nonVisibileClass);
    }
  };

  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    const carslHeaders = (index) => {
      const carslCaptions = this.state.carouselHead[index].map(
        (header, index2) => {
          let carslCaption;
          if (index2 === 1 && index === 1) {
            carslCaption = (
              // <div className={this.state.captionsClassSign} key={index2}>
              <div
                className={
                  this.state.captionsClass +
                  " sign carl-caption-sign " +
                  this.state.nonVisibileClass
                }
                key={index2}
              >
                <img src={header} alt="50 ideas/h" className="sign-img"></img>
              </div>
            );
          } else {
            carslCaption = (
              <div
                className={
                  index === 0
                    ? `${this.state.captionsClass} capt head1`
                    : index !== 0 && index2 === 0
                    ? `${this.state.captionsClass} capt head1 ${this.state.nonVisibileClass}`
                    : `${this.state.captionsClass} capt ${this.state.nonVisibileClass}`
                }
                key={index2}
              >
                {header}
              </div>
            );
          }
          // console.log(carslCaption);
          return carslCaption;
        }
      );

      // console.log(carslCaptions);
      return carslCaptions;
    };

    const carouselItemList = this.state.carouselItemsPhotos.map(
      (photo, index) => {
        // const newRef = React.createRef();
        // this.captionsRef.push(newRef);
        return (
          <div className="carousel-item" key={index} ref={this.crslItemRef}>
            {/* <center> */}
            <img
              src={photo}
              alt={"Slide " + index}
              className="carous-img carous-item-img"
            />
            {/* <Carousel.Caption key={index} ref={newRef}> */}
            <div
              className="carousel-caption"
              key={index}
              ref={(ref) => (this.captionsRef[index] = ref)}
            >
              {carslHeaders(index)}
            </div>
            {/* </center> */}
          </div>
        );
      }
    );

    return (
      <section
        id="slider"
        className="section slider article-slider"
        data-no="0"
        data-ctrlnav="ScrollNav"
      >
        <Carousel
          responsive={responsive}
          style={{ position: "relative" }}
          fade={true}
          ref={this.secSliderRef}
          beforeChange={(ind) => {
            this.handleNextSlide(ind);
          }}
          afterChange={(ind) => {
            this.handlePrevSlide(ind);
          }}
          // onSlid={(el) => console.log(el)}
          // onSelect={(activeIndex) => console.log(activeIndex)}
        >
          {/* {carouselItemList} */}
          <div>Item 1</div>
          <div>item 2</div>
          <div>Item 3</div>
        </Carousel>
      </section>
    );
  }
}

export default CarouselBtstrpSlider;

{
  /* <div className="carousel-item">
<img
  src={photo1}
  alt={"Slide 1"}
  className="carous-img carous-item-img"
/> */
}
{
  /* <Carousel.Caption key={index} ref={newRef}> */
}
{
  /* <div className="carousel-caption">
  <div
    className={
      this.state.captionsClass + " sign carl-caption-sign "
    }
  >
    <img src={sign50} alt="50 ideas/h" className="sign-img"></img>
  </div>
</div>
</div> */
}
