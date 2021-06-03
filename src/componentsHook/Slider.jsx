import React, { useState, useEffect, useRef, memo } from "react";
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
import("../css/slider.css");
// import { getAllByDisplayValue } from "@testing-library/react";

const carouselItemsPhotos = [
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
];
const carouselHead = [
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
  ["Modern Framework", "REACT.JS", "Interactive & Animated"],
  [
    "Desktop, Tablet, Mobile",
    "Caring of details",
    "standard & original templates",
  ],
  ["Meeting high standards", "adjusted to Customer expectations"],
  ["creative design animations", "with one to one swipe movement!"],
  ["Flexible working time"],
  ["until the project is done"],
];
const nonVisibileClass = "notvisible";
const captionsClass = "carl-caption-capt animated";
const animShowArr1 = "fadeInDown";
const animShowArr2 = ["fadeInDown", "fadeInUp"];
const animShowArr3 = ["fadeInDown", "fadeInLeft", "fadeInRight"];
const animShowArr4 = [
  "fadeInDown",
  "bounceInLeft",
  "fadeInLeft",
  "fadeInRight",
];

const Slider = React.forwardRef(({ windHeight, windWidth }, ref) => {
  const [btnPrev, setBtnPrev] = useState();
  const [btnNext, setBtnNext] = useState();
  const [photoWidth, setPhotoWidth] = useState(0);
  const [photoWindowWidthDifference, setPhotoWindowWidthDifference] =
    useState(0);

  const secSliderRef = React.createRef();
  const captionsRef = useRef([]);

  useEffect(() => {
    console.log("Slider Comp. mounted!");
  }, []);

  useEffect(() => {
    const btnPrevC = secSliderRef.current.element.childNodes[2];
    const btnNextC = secSliderRef.current.element.childNodes[3];
    setBtnPrev(btnPrevC);
    setBtnNext(btnNextC);
  }, []);

  useEffect(() => {
    // console.log("useEffect setPhotoWidth");
    let phWidth;
    const proportionOfPhoto = 1.5;
    if (windHeight * proportionOfPhoto >= windWidth) {
      phWidth = windWidth;
    } else {
      phWidth = windHeight * proportionOfPhoto;
    }
    setPhotoWidth(phWidth);
    setPhotoWindowWidthDifference(windWidth - phWidth);
  }, [windWidth, windHeight]);

  useEffect(() => {
    // console.log("useEffect keepArrows");

    if (typeof btnPrev !== "undefined" && typeof btnNext !== "undefined") {
      keepArrowsInsideImg(btnPrev, btnNext);
    }
  }, [photoWindowWidthDifference]);

  const addToCaptionsRef = (el) => {
    if (el && !captionsRef.current.includes(el)) {
      // console.log("addToCaptionsRef Fn");
      captionsRef.current.push(el);
    }
  };

  // ta funkcja reaguje na zmianę różnicy pomiedzy wartością photoWidth a windowWidth aby utrzymać strzałki wewnątrz szerokości zdjęcia  /  this function reacts to any changes of difference between values of photoWidth and windowWidth to keep arrows of carousel inside the photo's width
  const keepArrowsInsideImg = (btnPrevVar, btnNextVar) => {
    setArrowMargins(photoWidth, windWidth, btnPrevVar, btnNextVar);
  };

  const setArrowMargins = (photoW, windWidth, btnP, btnN) => {
    if (windWidth > photoW) {
      const mrgnExt = (windWidth - photoW) / 2.35;
      setCss(btnP, "margin-left", mrgnExt + "px");
      setCss(btnN, "margin-right", mrgnExt + "px");
    } else {
      setCss(btnP, "margin-left", 0);
      setCss(btnN, "margin-right", 0);
    }
  };

  const handleNextSlide = (ind) => {
    const captionsNextArray = captionsRef.current[ind].childNodes;

    let animationArray;
    if (captionsNextArray.length < 3) animationArray = animShowArr2;
    else if (captionsNextArray.length === 3) animationArray = animShowArr3;
    else if (captionsNextArray.length > 3) animationArray = animShowArr4;
    for (let i = 0; i < captionsNextArray.length; i++) {
      captionsNextArray[i].classList.remove(nonVisibileClass);
      captionsNextArray[i].classList.add(animationArray[i]);
    }
  };

  const handlePrevSlide = (ind) => {
    let index;
    ind === 0 ? (index = carouselItemsPhotos.length - 1) : (index = ind - 1);
    const captionsPrevArray = captionsRef.current[index].childNodes;

    let animationArray;
    if (captionsPrevArray.length < 3) animationArray = animShowArr2;
    else if (captionsPrevArray.length === 3) animationArray = animShowArr3;
    else if (captionsPrevArray.length > 3) animationArray = animShowArr4;

    for (let i = 0; i < captionsPrevArray.length; i++) {
      captionsPrevArray[i].classList.remove(animationArray[i]);
      captionsPrevArray[i].classList.add(nonVisibileClass);
    }
  };

  const setCss = (div, property, val) => {
    // console.log("setCss FN");
    $(div).css(property, val);
  };

  const carslHeaders = (index) => {
    // console.log("carslHeaders Fn");
    const carslCaptions = carouselHead[index].map((header, index2) => {
      let carslCaption;
      if (index2 === 1 && index === 1) {
        carslCaption = (
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
      return carslCaption;
    });
    return carslCaptions;
  };

  const carouselItemList = carouselItemsPhotos.map((photo, index) => {
    return (
      <Carousel.Item key={index}>
        <img
          src={photo}
          alt={"Slide " + index}
          className="carous-img carous-item-img"
        />
        <Carousel.Caption key={index} ref={addToCaptionsRef}>
          {carslHeaders(index)}
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <>
      <Carousel
        style={{ position: "relative" }}
        fade={true}
        ref={secSliderRef}
        onSlide={(ind) => {
          handleNextSlide(ind);
        }}
        onSlid={(ind) => {
          handlePrevSlide(ind);
        }}
      >
        {carouselItemList}
      </Carousel>
    </>
  );
});

export default memo(Slider);
