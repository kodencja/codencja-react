import React, { Component } from "react";
import $ from "jquery";
import Carousel from "react-bootstrap/Carousel";
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
import { getAllByDisplayValue } from "@testing-library/react";

class CarouselSlider extends Component {
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
    // captionsClass1: "capt carl-caption-capt animated head1",
    // captionsClass2: "capt carl-caption-capt animated",
    captionsClass: "carl-caption-capt animated",
    // captionsClassSign: "carl-caption-capt animated sign carl-caption-sign",
    animShowArr1: "fadeInDown",
    animShowArr2: ["fadeInDown", "fadeInUp"],
    animShowArr3: ["fadeInDown", "fadeInLeft", "fadeInRight"],
    animShowArr4: ["fadeInDown", "bounceInLeft", "fadeInLeft", "fadeInRight"],
    crslItem: "",
    captionsRef: "",
    btnPrev: "",
    btnNext: "",
    photoWidth: "",
  };

  secSliderRef = React.createRef();
  crslItemRef = React.createRef();
  // captionsRef = React.createRef([]);
  captionsRef = [];

  // carl-caption-capt

  componentDidMount() {
    console.log("Carousel componentDidMount");
    const { windHeight, windWidth } = this.props;
    // const captions = React.createRef([$("carl-caption-capt")]);
    // console.log(this.captions);
    // console.log(React.createRef([$("capt")]));
    // console.log(React.createRef($("capt")));
    // console.log(React.createRef(this.secSliderRef));
    // console.log(btnNext);
    // console.log("componentDidMount");
    // console.log(this.secSliderRef);
    console.log(this.captionsRef);
    // console.log(this.crslItemRef);
    // console.log($(this.crslItemRef));
    // console.log(this.captionsRef.current);
    // console.log(this.secSliderRef.current.element);
    // console.log($(this.secSliderRef.current.element[0]));
    // this.setState({ sliderJQ: this.secSliderRef });
    // console.log($(this.secSliderRef.current));

    // const windowWidth = window.innerWidth;
    // const windowHeigth = window.innerHeight;
    // console.log(windowWidth + ", " + windowHeigth);
    const btnPrev = this.secSliderRef.current.element.childNodes[2];
    const btnNext = this.secSliderRef.current.element.childNodes[3];

    this.setState(
      { captionsRef: [...this.captionsRef], btnPrev, btnNext },
      () => {
        // console.log(this.state.captionsRef)
        // console.log(this.state.btnNext);
        // console.log(this.state.btnPrev);
      }
    );

    // window.addEventListener("resize", this.handleResize);
    // this.keepArrowsInsideImg(windowHeight, windowWidth);
    this.keepArrowsInsideImg(windHeight, windWidth);
  }

  componentDidUpdate() {
    // this.keepArrowsInsideImg(this.props.windHeight, this.props.windWidth);
  }

  // componentWillUnmount() {
  //   window.addEventListener("resize", this.handleResize);
  // }

  // handleResize = () => {
  //   this.setState(
  //     { windowWidth: window.innerWidth, windowHeight: window.innerHeight },
  //     () => {
  //       console.log(this.state.windowWidth + ", " + this.state.windowHeight);
  //       this.keepArrowsInsideImg(
  //         this.state.windowHeight,
  //         this.state.windowWidth
  //       );
  //     }
  //   );
  // };

  handleNextSlide = (ind) => {
    // console.log(ind);
    const {
      animShowArr2,
      animShowArr3,
      animShowArr4,
      nonVisibileClass,
      captionsRef,
    } = this.state;
    const captionsCopy = [...captionsRef];
    // const captionNext = captionsCopy[ind];
    // console.log(captionsCopy);
    // console.log(captionsCopy[i].childNodes[0].className);
    const captionsNextArray = captionsCopy[ind].childNodes;
    // console.log(captionsNextArray);
    // console.log(captionsArray[0]);

    let animationArray;
    if (captionsNextArray.length < 3) animationArray = animShowArr2;
    else if (captionsNextArray.length === 3) animationArray = animShowArr3;
    else if (captionsNextArray.length > 3) animationArray = animShowArr4;
    // captionsCopy[i].childNodes[0].className += " " + this.state.visibileClass + " "+ this.state.fadeInDown;
    for (let i = 0; i < captionsNextArray.length; i++) {
      captionsNextArray[i].classList.remove(nonVisibileClass);
      captionsNextArray[i].classList.add(animationArray[i]);
    }

    // console.log(captionsNextArray);
    // console.log([...this.state.captionsRef]);

    // captionsCopy[ind].childNodes[0].classList.remove(this.state.nonVisibileClass);
    // captionsCopy[ind].childNodes[0].classList.add(this.state.fadeInDown);
    // console.log(captionsCopy[i].childNodes[0].className);
  };

  handlePrevSlide = (ind) => {
    const {
      animShowArr2,
      animShowArr3,
      animShowArr4,
      nonVisibileClass,
      carouselItemsPhotos,
      captionsRef,
    } = this.state;
    let index;
    ind === 0 ? (index = carouselItemsPhotos.length - 1) : (index = ind - 1);
    // console.log(index);
    const captionsCopy = [...captionsRef];
    // const captionNext = captionsCopy[ind];
    // console.log(captionsCopy);
    // console.log(captionsCopy[i].childNodes[0].className);
    const captionsPrevArray = captionsCopy[index].childNodes;
    // console.log(captionsNextArray);
    // console.log(captionsArray[0]);

    let animationArray;
    if (captionsPrevArray.length < 3) animationArray = animShowArr2;
    else if (captionsPrevArray.length === 3) animationArray = animShowArr3;
    else if (captionsPrevArray.length > 3) animationArray = animShowArr4;
    // captionsCopy[i].childNodes[0].className += " " + this.state.visibileClass + " "+ this.state.fadeInDown;
    for (let i = 0; i < captionsPrevArray.length; i++) {
      captionsPrevArray[i].classList.remove(animationArray[i]);
      captionsPrevArray[i].classList.add(nonVisibileClass);
    }
  };

  setCss = (div, property, val) => {
    $(div).css(property, val);
    // console.log(property);
    // console.log(val);
    // console.log(div);
  };

  setArrowMargins = (photoWidth, windWidth) => {
    const { btnPrev, btnNext } = this.state;
    if (windWidth > photoWidth) {
      const mrgnExt = (windWidth - photoWidth) / 2.35;
      this.setCss(btnPrev, "margin-left", mrgnExt + "px");
      this.setCss(btnNext, "margin-right", mrgnExt + "px");
    } else {
      this.setCss(btnPrev, "margin-left", 0);
      this.setCss(btnNext, "margin-right", 0);
    }
  };

  // ustawienie położenia strzałek kontrolnych prev i next w trakcie resize
  // setArrowPosition = async function (vH, vW) {
  //   try {
  //     imgWidth = await self.getImgSize(vH, vW);
  //     await self.setMrgnArr(imgWidth, vW);
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  keepArrowsInsideImg = (windHeight, windWidth) => {
    const proportionPhoto = 1.5;
    let photoWidth, photoHeight;
    if (windHeight >= windWidth) {
      photoWidth = windWidth;
    } else {
      photoHeight = windHeight;
      photoWidth = photoHeight * proportionPhoto;
    }
    this.setState({ photoWidth }, () => {
      this.setArrowMargins(this.state.photoWidth, windWidth);
      // console.log(this.state.photoWidth);
      // console.log(windHeight);
      // console.log(windWidth);
    });
  };

  render() {
    const { carouselHead, captionsClass, nonVisibileClass } = this.state;

    const carslHeaders = (index) => {
      const carslCaptions = carouselHead[index].map((header, index2) => {
        // let i = 0;
        // while (i < 100000000) i++;
        let carslCaption;
        if (index2 === 1 && index === 1) {
          carslCaption = (
            // <div className={this.state.captionsClassSign} key={index2}>
            <div
              className={
                captionsClass + " sign carl-caption-sign " + nonVisibileClass
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
                  ? `${captionsClass} capt head1`
                  : index !== 0 && index2 === 0
                  ? `${captionsClass} capt head1 ${nonVisibileClass}`
                  : `${captionsClass} capt ${nonVisibileClass}`
              }
              key={index2}
            >
              {header}
            </div>
          );
        }
        // console.log(carslCaption);
        return carslCaption;
      });

      // console.log(carslCaptions);
      return carslCaptions;
    };

    const carouselItemList = this.state.carouselItemsPhotos.map(
      (photo, index) => {
        // const newRef = React.createRef();
        // this.captionsRef.push(newRef);
        return (
          <Carousel.Item key={index} ref={this.crslItemRef}>
            {/* <center> */}
            <img
              src={photo}
              alt={"Slide " + index}
              className="carous-img carous-item-img"
            />
            {/* </center> */}
            {/* <Carousel.Caption key={index} ref={newRef}> */}
            <Carousel.Caption
              key={index}
              ref={(ref) => (this.captionsRef[index] = ref)}
            >
              {carslHeaders(index)}
            </Carousel.Caption>
          </Carousel.Item>
        );
      }
    );

    return (
      <center>
        <section
          id="slider"
          className="section slider article-slider"
          data-no="0"
          data-ctrlnav="ScrollNav"
        >
          <Carousel
            style={{ position: "relative" }}
            fade={true}
            ref={this.secSliderRef}
            onSlide={(ind) => {
              this.handleNextSlide(ind);
            }}
            onSlid={(ind) => {
              this.handlePrevSlide(ind);
            }}
            // onSlid={(el) => console.log(el)}
            // onSelect={(activeIndex) => console.log(activeIndex)}
          >
            {carouselItemList}
          </Carousel>
        </section>
      </center>
    );
  }
}

export default CarouselSlider;
