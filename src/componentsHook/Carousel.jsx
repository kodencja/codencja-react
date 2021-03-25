import React, { useState, useEffect, useCallback, useMemo } from "react";
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

const carouselItemIndicators = [
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
];
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
  [
    "For individuals & companies",
    "Portfolios, blogs, online-shops",
    "adjusted to Customer expectations",
  ],
  ["Desktop, Tablet, Mobile", "MVC Pattern", "standard & original templates"],
  ["Meeting high standards", "Update with new trends and technology"],
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

// export const logMsg = (txt) => {
//   const msgDisplay = () => {
//     console.log("msgDisplay!");
//   };

//   <CarouselSlider logs={msgDisplay} />;
//   console.log("logMsg Fn");
//   // <CarouselSlider log= />;
//   return txt + " morning!";
// };

// export const setArrowMargins = (photoWidth, windWidth) => {
//   // const { btnPrev, btnNext } = this.state;
//   if (windWidth > photoWidth) {
//     const mrgnExt = (windWidth - photoWidth) / 2.35;
//     setCss(btnPrev, "margin-left", mrgnExt + "px");
//     setCss(btnNext, "margin-right", mrgnExt + "px");
//   } else {
//     setCss(btnPrev, "margin-left", 0);
//     setCss(btnNext, "margin-right", 0);
//   }
// };

// export const keepArrowsInsideImg = (windHeight, windWidth) => {
//   const proportionPhoto = 1.5;
//   let photoWidth, photoHeight;
//   if (windHeight >= windWidth) {
//     photoWidth = windWidth;
//   } else {
//     photoHeight = windHeight;
//     photoWidth = photoHeight * proportionPhoto;
//   }
// setArrowMargins(photoWidth, windWidth);
// this.setState({ photoWidth }, () => {
// this.setArrowMargins(this.state.photoWidth, windWidth);
// console.log(this.state.photoWidth);
// console.log(windHeight);
// console.log(windWidth);
// });
// };

// class CarouselSlider extends Component {
// function CarouselSlider({ windHeight, windWidth }) {
export const CarouselSl = React.forwardRef(({ windHeight, windWidth }, ref) => {
  // ({ windHeight, windWidth }, ref) => {
  const [captionsRef, setCaptionsRef] = useState();
  const [btnPrev, setBtnPrev] = useState();
  const [btnNext, setBtnNext] = useState();
  // const [photoWidth, setPhotoWidth] = useState(0);
  const [msg, setMsg] = useState("");

  const secSliderRef = React.createRef();
  const crslItemRef = React.createRef();
  // captionsRef = React.createRef([]);
  const captionsRefer = [];

  useEffect(() => {
    console.log("CarouselSlider Rendered!");
    console.log(btnPrev);
    console.log(btnNext);
  });

  useEffect(() => {
    console.log("useEffect 0 run - setPhotoWidth(keepArrows())");
    // setPhotoWidth(keepArrows(windHeight, windWidth));
    // keepArrows(windHeight, windWidth);
    // asyncSetStateCall();
    console.log(captionsRefer);
    setCaptionsRef([...captionsRefer]);

    // keepArrowsInsideImg(windHeight, windWidth)
    // keepArrowsInsideImg(windHeight, windWidth)
    // const msg2 = logMsg("Sunny");
    // console.log(logs);
    // console.log(windHeight);
    // setMsg(msg2);
  }, []);

  useEffect(() => {
    console.log("useEffect btnPrev btnNext");
    const btnPrevC = secSliderRef.current.element.childNodes[2];
    const btnNextC = secSliderRef.current.element.childNodes[3];
    setBtnPrev(btnPrevC);
    setBtnNext(btnNextC);
    // console.log(btnPrev);
    // console.log(btnNext);
    // }, [btnPrev, btnNext]);
  }, []);

  // const callSetPhotoWidth = (phWidth) => {
  // const callSetPhotoWidth = useCallback(() => {
  // console.log(phWidth);
  //   console.log("callSetPhotoWidth");
  //   return new Promise((resolve, reject) => {
  //     if (reject.length > 1) reject(new Error("Error in callSetPhotoWidth!"));
  //     else {
  // setPhotoWidth(phWidth);
  // console.log(phWidth);
  // resolve(phWidth);
  // setPhotoWidth(keepArrows(windHeight, windWidth));
  // console.log(keepArrows());
  // const phWidth = keepArrows();
  //   const phWidth = keepArrows(windHeight, windWidth);
  // setPhotoWidth(keepArrows());
  //   console.log(phWidth);
  //   resolve(phWidth);
  // }
  //   });
  // };
  // }, [windWidth]);
  // }, [keepArrows]);

  // const asyncSetStateCall = useCallback(
  //   async (btnPrevVar, btnNextVar) => {
  //     console.log("asyncSetStateCall");
  //     console.log(btnPrevVar);
  //     console.log(windHeight);
  //     console.log(windWidth);
  //     // const photoW = await callSetPhotoWidth(keepArrows(windHeight, windWidth));
  //     const photoW = await callSetPhotoWidth();
  //     console.log(photoW);
  //     // if (photoW > 0) {
  //     // console.log(btnPrev);
  //     console.log(btnNext);
  //     // setCss(btnPrev, "margin-left", 200 + "px");
  //     // setCss(btnNext, "margin-right", 200 + "px");
  //     setArrowMargins(photoW, windWidth, btnPrevVar, btnNextVar);
  //     // }
  //     // }, [windWidth, windHeight]);
  //   },
  //   [windWidth]
  // );

  useEffect(() => {
    console.log("useEffect asyncSetStateCall");
    console.log(btnPrev);
    console.log(btnNext);
    keepArrowsInsideImg(btnPrev, btnNext);
    return () => {
      keepArrowsInsideImg();
    };
    // }, [keepArrows]);
    // }, [windWidth]);
  }, [btnPrev, windWidth, windHeight]);
  // }, [btnPrev, btnNext]);
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect setArrowMargins");
  //   setArrowMargins();
  // }, [photoWidth]);

  // console.log("photoWidth: " + photoWidth);
  console.log("windWidth: " + windWidth);
  console.log("windHeight: " + windHeight);

  // useEffect(() => {
  // setMsg(logs());
  // console.log(msg);
  // return () => {
  //   logs();
  // };
  // }, [logs]);

  // const msgShow = () => {
  //   console.log("msgShow from Carousel");
  // };

  const keepArrowsInsideImg = useCallback(
    (btnPrevVar, btnNextVar) => {
      console.log("windWidth - " + windWidth);
      const proportionPhoto = 1.5;
      let photoWidth, photoHeight;
      if (windHeight >= windWidth) {
        photoWidth = windWidth;
      } else {
        photoHeight = windHeight;
        photoWidth = photoHeight * proportionPhoto;
      }
      console.log(photoWidth);
      // return { photoWidth, windWidth };
      //   return photoWidth;
      setArrowMargins(photoWidth, windWidth, btnPrevVar, btnNextVar);
      // },[windowWidth, windowHeight]);
      // };
    },
    [windWidth, windHeight]
  );

  const setArrowMargins = useCallback(
    // const setArrowMargins =
    (photoW, windWidth, btnP, btnN) => {
      // const setArrowMargins = () => {
      console.log("setArrowMargins Fn");
      console.log(photoW);
      console.log(windWidth);
      // console.log(btnPrev);
      // console.log(btnNext);
      // const { btnPrev, btnNext } = this.state;
      if (windWidth > photoW) {
        const mrgnExt = (windWidth - photoW) / 2.35;
        // setCss(btnPrev, "margin-left", mrgnExt + "px");
        // setCss(btnNext, "margin-right", mrgnExt + "px");
        setCss(btnP, "margin-left", mrgnExt + "px");
        setCss(btnN, "margin-right", mrgnExt + "px");
      } else {
        // setCss(btnPrev, "margin-left", 0);
        // setCss(btnNext, "margin-right", 0);
        setCss(btnP, "margin-left", 0);
        setCss(btnN, "margin-right", 0);
      }
      // };
    },
    [windWidth, windHeight]
  );

  const handleNextSlide = (ind) => {
    // console.log(ind);
    // const {
    //   animShowArr2,
    //   animShowArr3,
    //   animShowArr4,
    //   nonVisibileClass,
    //   captionsRef,
    // } = this.state;
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

  const handlePrevSlide = (ind) => {
    // const {
    //   animShowArr2,
    //   animShowArr3,
    //   animShowArr4,
    //   nonVisibileClass,
    //   carouselItemsPhotos,
    //   captionsRef,
    // } = this.state;
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

  const setCss = (div, property, val) => {
    $(div).css(property, val);
    // console.log(property);
    // console.log(val);
    // console.log(div);
  };

  // const setArrowMargins = (photoWidth, windWidth) => {
  //   // const { btnPrev, btnNext } = this.state;
  //   if (windWidth > photoWidth) {
  //     const mrgnExt = (windWidth - photoWidth) / 2.35;
  //     setCss(btnPrev, "margin-left", mrgnExt + "px");
  //     setCss(btnNext, "margin-right", mrgnExt + "px");
  //   } else {
  //     setCss(btnPrev, "margin-left", 0);
  //     setCss(btnNext, "margin-right", 0);
  //   }
  // };

  // ustawienie położenia strzałek kontrolnych prev i next w trakcie resize
  // setArrowPosition = async function (vH, vW) {
  //   try {
  //     imgWidth = await self.getImgSize(vH, vW);
  //     await self.setMrgnArr(imgWidth, vW);
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  // const keepArrowsInsideImg = (windHeight, windWidth) => {
  //   const proportionPhoto = 1.5;
  //   let photoWidth, photoHeight;
  //   if (windHeight >= windWidth) {
  //     photoWidth = windWidth;
  //   } else {
  //     photoHeight = windHeight;
  //     photoWidth = photoHeight * proportionPhoto;
  //   }
  //   setArrowMargins(photoWidth, windWidth);
  // // this.setState({ photoWidth }, () => {
  // // this.setArrowMargins(this.state.photoWidth, windWidth);
  // // console.log(this.state.photoWidth);
  // // console.log(windHeight);
  // // console.log(windWidth);
  // // });
  // };

  // const { carouselHead, captionsClass, nonVisibileClass } = this.state;

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

  const carouselItemList = carouselItemsPhotos.map((photo, index) => {
    // const newRef = React.createRef();
    // this.captionsRef.push(newRef);
    return (
      <Carousel.Item key={index} ref={crslItemRef}>
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
          ref={(ref) => (captionsRefer[index] = ref)}
        >
          {carslHeaders(index)}
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <center>
      <section
        id="slider"
        className="section slider article-slider"
        data-no="0"
        data-ctrlnav="ScrollNav"
        ref={ref}
      >
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
          // onSlid={(el) => console.log(el)}
          // onSelect={(activeIndex) => console.log(activeIndex)}
        >
          {carouselItemList}
        </Carousel>
      </section>
    </center>
  );
});
// export default msgShow;
// export default CarouselSlider;
