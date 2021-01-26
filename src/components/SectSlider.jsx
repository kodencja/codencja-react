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
    visibilityClass: "notvisible",
    captionsClass1: "capt carl-caption-capt animated head1",
    captionsClass2: "capt carl-caption-capt animated",
    captionsClassSign: "carl-caption-capt sign animated carl-caption-sign",
    animShTab2: ["fadeInDown", "fadeInUp"],
    animShTab3: ["fadeInDown", "fadeInLeft", "fadeInRight"],
    animShTab4: ["fadeInDown", "bounceInLeft", "fadeInLeft", "fadeInRight"],
    sliderJQ: "",
    prevBtn: "",
    nextBtn: "",
    carouselListChildren: [],
    headerCaptsTab: [],
    captsTab: [],
    empty: {},
  };

  secSliderRef = React.createRef();
  prevB = React.createRef();
  nextB = React.createRef();
  carouselLiRef = React.createRef();
  crslItemRef = React.createRef();

  captionsTab = [];

  componentDidMount() {
    const sliderJQ = $(this.secSliderRef.current);
    const prevBtn = $(this.prevB.current);
    const nextBtn = $(this.nextB.current);
    // const carouselListChildren = this.carouselLiRef.current.childNodes;
    const carouselListChildren = $(this.carouselLiRef.current).children();
    const carouselItemActiveChildren = $(".carousel-item.active")
      .children()
      .children();
    const carouselItems = $(".carousel-item");

    // console.log(carouselItemActiveChildren);
    // console.log(carouselItems);

    // const carouselList = $(this.carouselLiRef);
    // const sliderHeadersQ = $(this.crslItemRef.current.sliderHeadersRef.current);
    // const sliderHeadersChildren = $(
    //   this.crslItemRef.current.sliderHeadersRef.current
    // ).children();
    const crslItemReference = $(this.crslItemRef.current);
    // const sliderJQ = $(this.secSliderRef.current);
    // let captsTab = [];
    // this.captsTab.push(
    //   this.crslItemRef.current.sliderHeadersRef.current.headersCaptsRef.current
    // );
    // console.log(this.captsTab);
    console.log(crslItemReference);
    // console.log(sliderJQ);
    console.log(this.crslItemRef.current);
    // console.log(this.crslItemRef.current.classList);
    // if ($(this.crslItemRef.current).hasClass("active")) {
    //   console.log("Active class!");
    // } else {
    //   console.log("Not active class");
    // }
    // console.log(this.crslItemRef.current.sliderHeadersRef.current);
    // console.log(this.crslItemRef.current.sliderHeadersRef.current.headersCaptsRef);
    // console.log(
    //   this.crslItemRef.current.sliderHeadersRef.current.headersCaptsRef.current
    // );

    // console.log(this.crslItemRef.current.carouselItemRef.current);

    this.setState(
      {
        sliderJQ,
        prevBtn,
        nextBtn,
        carouselListChildren,
        headerCaptsTab: [...this.captionsTab],
      },
      () => {
        this.nopauseSlider(this.state.sliderJQ);
        this.moveToLiCrsl(this.state.carouselListChildren, this.state.sliderJQ);
        this.captionsAnimChange(
          $(this.state.headerCaptsTab),
          carouselItemActiveChildren,
          this.state.sliderJQ,
          carouselItems
        );
      }
    );

    // console.log(carouselListChildren);
    // console.log(carouselListCurr.children());
    // console.log(carouselList);

    // const headersCaptsNode = $(".carousel-caption > div");

    // this.setState({ headerCaptsTab: [...this.captionsTab] }, () => {
    //   this.captionsAnimChange($(this.state.headerCaptsTab));
    // });

    // console.log(this.state.headerCaptsTab);
  }

  checkCrslItemClasses = () => {
    if (this.crslItemRef.current !== null)
      console.log(this.crslItemRef.current.carouselItemRef.current.classList);
  };

  // handleVisibilityClass = (div) => {
  handleVisibilityClass = (nr) => {
    // if (flag === true) {
    // this.crslItemRef.current.getVisibilityClass();
    // }
    // if ($(this.carouselItemRef.current).hasClass("active")) {
    // console.log("handleVisibilityClass!");
    // console.log(this.carouselItemRef.current);
    // if (this.crslItemRef.current !== null) {
    //   console.log(this.crslItemRef.current.carouselItemRef.current);
    //   return $(this.crslItemRef.current.carouselItemRef.current).hasClass(
    // if (this.crslItemRef.current !== null) {
    // console.log("handleVisibilityClass");
    //
    // let classVisibility;
    // if ($(div).not(".active")) classVisibility = this.state.visibilityClass;
    // return classVisibility;
    // return $(div).not(".active") ? this.state.visibilityClass : ''
    // return $(div).hasClass("active") ? "" : this.state.visibilityClass;
    // let classes;
    // if (nr === 1) classes = this.state.captionsClass1;
    // else if (nr === 3) classes = this.state.captionsClassSign;
    // else classes = this.state.captionsClass2;

    // console.log(classes);

    // return classes;

    return nr === 1
      ? this.state.captionsClass1
      : nr === 3
      ? this.state.captionsClassSign
      : this.state.captionsClass2;

    //"notvisible";
    // }
    // }
  };

  // A
  handleGetCaptsTab = (div) => {
    this.captionsTab.push(div);
  };

  hideAllCaptionsFirst = (captsHeadDivs, crslItems, crslItemActiveChildren) => {
    // ukryj wszystkie captions na wstępie
    for (let i = 0; i < crslItems.length; i++) {
      if ($(crslItems[i]).hasClass("active")) {
        // $(crslItems[i]).children().children()
      }
      // crslItemActiveChildren.removeClass(this.state.visibilityClass);
      // crslItemActiveChildren.removeClass(this.state.visibilityClass);
      // addCl(els[i], 'animated notvisible');
      // controller.changeStyle.rmClass(captChil, 'notvisible');
    }
  };

  captionsAnimChange = (
    captsHeadDivs,
    crslItemActiveChildren,
    slider,
    crslItems
  ) => {
    console.log(captsHeadDivs);
    console.log(crslItemActiveChildren);
    console.log(slider);
    console.log(crslItems);
    this.hideAllCaptionsFirst(captsHeadDivs, crslItems, crslItemActiveChildren);
    slider.on("slid.bs.carousel", () => {
      // console.log("slid.bs.carousel");
      this.captionsAnimation($(".carousel-item.active"), crslItems);
    });
    // this.captChange(
    //   captions,
    //   $(".carousel-item.active").children().children(),
    //   el,
    //   $(".carousel-item")
    // );
    // this.setArrowPos(vH, vW);

    //   captChange = (captEls, captChil, el, carItems)=>{
    //     this.hideCapts(captEls, captChil);
    //     el.on('slid.bs.carousel', function(){
    //         self.captAnim($('.carousel-item.active'), carItems);
    //     });
    // };
  };

  captionsAnimation = (crslItemActive, crslItems) => {
    let x = 1;
    const carouselItems = $(".carousel-item");
    for (let i = 0; i < carouselItems.length; i++) {
      // console.log("captionsAnimation1");
      // if ($(crslItems[i]).hasClass(".active")) continue;
      // if ($(crslItems[i]).hasClass("active")) {
      if ($(carouselItems[i]).hasClass("active")) {
        // console.log("captionsAnimation2");
        console.log(carouselItems[i]);
        // this.handleVisibilityClass($(crslItems[i]), true);
        // if (flag === true) {
        // this.crslItemRef.current.sliderHeadersRef.current.callVisibilityClass();
        // }
      }

      // złapanie wszystkich pozostałych elementów klasy .carousel-item, usunięcie z nich klas animShow, i wykluczenie z nich tego, który akurat posiada w danym momencie klase .active
      else {
        let captions = $(crslItems[i]).children().children();
        // let captChLen = captChil.length;
        // for (let j = 0; j < captChLen; j++) {
        //   if (captChLen > 3) {
        //     if ($(captChil[j]).hasClass(animShTab4[j]))
        //       controller.changeStyle.rmClass(captChil[j], animShTab4[j]);
        //   } else if (captChLen === 3) {
        //     if ($(captChil[j]).hasClass(animShTab3[j]))
        //       controller.changeStyle.rmClass(captChil[j], animShTab3[j]);
        //   } else if (captChLen < 3) {
        //     if ($(captChil[j]).hasClass(animShTab2[j]))
        //       controller.changeStyle.rmClass(captChil[j], animShTab2[j]);
        //   }
        //   controller.changeStyle.addCl(captChil[j], "notvisible");
        // }
      }
    }

    // łapiemy nagłówki wewnątrz dzieci diva carousel-caption.active
    // let cActive = ca.children().children();

    // cActLen = cActive.length;
    // for (let i = 0; i < cActLen; i++) {
    //   setTimeout(function () {
    //     controller.changeStyle.rmClass(cActive[i], "notvisible");
    //     if (cActLen > 3) {
    //       controller.changeStyle.addCl(cActive[i], animShTab4[i]);
    //     } else if (cActLen === 3) {
    //       controller.changeStyle.addCl(cActive[i], animShTab3[i]);
    //     } else if (cActLen < 3) {
    //       controller.changeStyle.addCl(cActive[i], animShTab2[i]);
    //     }

    //     if (firstSlide === true) {
    //       controller.changeStyle.addCl(
    //         ca.prev().children().children(),
    //         "notvisible"
    //       );
    //       firstSlide = false;
    //     }
    //   }, x * 500);
    //   x++;
    // }
  };

  nopauseSlider = (el) => {
    // if(opened===false){
    el.on("mouseenter", function () {
      el.carousel("cycle", true);
    }).on("mouseleave", function () {
      el.carousel("cycle", true);
    });
    // }
    el.carousel({ interval: 5000 });
  };

  moveToLiCrsl = (crslLi, el) => {
    // przeniesienie pod właściwy slide przy kliknięciu w ul > li
    for (let i = 1; i <= crslLi.length; i++) {
      // console.log("moveToLiCrsl");
      const item = ".item" + i;
      $(item).on("click", function () {
        el.carousel(i - 1);
      });
    }
  };

  handleNavBtnCarouselClick = (e) => {
    if (
      e.target.className === "carousel-control-prev" ||
      e.target.className === "carousel-control-prev-icon"
    ) {
      this.state.sliderJQ.carousel("prev");
    } else {
      this.state.sliderJQ.carousel("next");
    }
  };

  handleAddClassCrsl = (ind) => {
    let classes = this.state.carouselItemClass;
    classes += ind === 0 ? this.state.activeClass : "";
    return classes;
  };

  render() {
    const carouselIndicatorsList = this.state.carouselItemIndicators.map(
      (carousItem, index) => <CarouselLi key={index} carItem={carousItem} />
    );

    const carouselItemList = this.state.carouselItemsPhotos.map(
      (photo, index) => {
        return (
          <CarouseItem
            photo={photo}
            key={index}
            getHeaders={this.state.carouselHead[index]}
            addClassCrsl={this.handleAddClassCrsl}
            indexN={index}
            ref={this.crslItemRef}
            classNameList={this.checkCrslItemClasses}
            getCaptsTab={this.handleGetCaptsTab}
            getVisibilityClass={this.handleVisibilityClass}
          />
        );
      }
    );

    // console.log(this.crslItemRef.current);

    return (
      <section
        id="slider"
        className="section slider article-slider carousel slide carousel-fade"
        data-no="0"
        data-ctrlnav="ScrollNav"
        ref={this.secSliderRef}
      >
        <ul
          className="carousel-indicators d-none d-sm-flex"
          ref={this.carouselLiRef}
        >
          {carouselIndicatorsList}
        </ul>
        <center>
          <div className="carousel-inner">{carouselItemList}</div>
        </center>
        <a
          className="carousel-control-prev"
          role="button"
          href="#slider"
          ref={this.prevB}
          name="prev"
          onClick={this.handleNavBtnCarouselClick}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          role="button"
          href="#slider"
          ref={this.nextB}
          name="next"
          onClick={this.handleNavBtnCarouselClick}
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
