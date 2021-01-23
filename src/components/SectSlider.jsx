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
    sliderJQ: "",
    prevBtn: "",
    nextBtn: "",
    carouselListChildren: [],
    headerCaptsTab: [],
    captsTab: [],
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
    // const carouselList = $(this.carouselLiRef);
    const sliderHeadersQ = $(this.crslItemRef.current.sliderHeadersRef.current);
    const sliderHeadersChildren = $(
      this.crslItemRef.current.sliderHeadersRef.current
    ).children();
    const crslItemReference = $(this.crslItemRef.current);
    // let captsTab = [];
    // this.captsTab.push(
    //   this.crslItemRef.current.sliderHeadersRef.current.headersCaptsRef.current
    // );
    // console.log(this.captsTab);
    console.log(crslItemReference);
    // console.log(this.crslItemRef.current.captsTab);
    // console.log(this.crslItemRef.current.sliderHeadersRef.current);
    // console.log(this.crslItemRef.current.sliderHeadersRef.current.headersCaptsRef);
    console.log(
      this.crslItemRef.current.sliderHeadersRef.current.headersCaptsRef.current
    );
    console.log(sliderHeadersQ);
    console.log(sliderHeadersChildren);

    this.setState({ sliderJQ, prevBtn, nextBtn, carouselListChildren }, () => {
      this.nopauseSlider(this.state.sliderJQ);
      this.moveToLiCrsl(this.state.carouselListChildren, this.state.sliderJQ);
    });
    // this.setState({ sliderJQ, prevBtn, nextBtn }, () =>
    //   this.state.sliderJQ.carousel({ interval: 5000 })
    // );

    console.log(carouselListChildren);
    // console.log(carouselListCurr.children());
    // console.log(carouselList);

    const headersCaptsNode = $(".carousel-caption > div");
    // console.log(headersCaptsNode);

    // console.log(this.captionsTab);
    // let captsVar = [...this.state.headerCaptsTab];
    // console.log(this.state.headerCaptsTab);

    this.setState({ headerCaptsTab: [...this.captionsTab] }, () => {
      this.captionsChange($(this.state.headerCaptsTab));
    });

    console.log(this.state.headerCaptsTab);

    // let captsVar;
    // if (this.state.headerCaptsTab.length > 0) {
    //   captsVar = [...this.state.headerCaptsTab];
    // } else {
    //   captsVar = this.state.headerCaptsTab;
    // }
    // let captionChildren = $(
    //   this.crslItemRef.current.sliderHeadersRef.current.headersCaptsRef.current
    // ).children();

    // this.setState({ headerCaptsTab: [captsVar, captionChildren] }, () =>
    //   console.log(this.state.headerCaptsTab)
    // );

    // console.log(this.captionsTab);

    // console.log(carouselIndicatorsList);
    // console.log(prevB);
    // console.log(nextB);

    // Enable Carousel Controls
    // prevB.on("click", function () {
    //   sliderR.carousel("prev");
    // });
    // nextB.on("click", function () {
    //   sliderR.carousel("next");
    // });
  }

  // componentDidUpdate() {
  //   this.setState({ captsTab: [...this.state.headerCaptsTab] }, () => {
  //     console.log(this.state.captsTab);
  //   });
  // }

  // A
  handleGetCaptsTab = (div) => {
    // this.captsTab.push(div);
    // this.setState((prevState) => {
    //   return { headerCaptsTab: prevState.headerCaptsTab.push(div) };
    // });
    console.log(div);
    // console.log(this.state.headerCaptsTab.length);

    // let captsVar = [...this.state.headerCaptsTab];
    // let captsVar;
    // if (this.state.headerCaptsTab.length > 0) {
    //   captsVar = [...this.state.headerCaptsTab];
    // } else {
    //   captsVar = this.state.headerCaptsTab;
    // }
    // console.log(captsVar);
    this.captionsTab.push(div);
    // console.log(this.captionsTab);
    // let captionChildren = $(
    //   this.sliderHeadersRef.current.headersCaptsRef.current
    // ).children();
    // this.setState({ headerCaptsTab: [captsVar, div] }, () => {
    //   console.log(this.state.headerCaptsTab);
    // });

    // this.setState(
    //   (prevState) => {
    //     console.log(prevState.headerCaptsTab);
    // console.log(this.state.headerCaptsTab);
    // console.log(captsVar);
    //   return { headerCaptsTab: [...prevState.headerCaptsTab, div] };
    // },
    // () => {
    // console.log(this.state.headerCaptsTab);
    //     this.captionsChange(this.state.headerCaptsTab);
    //   }
    // );
  };

  // B
  handleGetCaptions = (div) => {
    if (this.crslItemRef.current !== null) {
      // console.log(this.crslItemRef.current);
      // console.log(
      //   this.crslItemRef.current.sliderHeadersRef.current.headersCapts.current
      // );
      // console.log(div);
      // console.log(div.length);
      // const captsHeadersCurrent = this.crslItemRef.current.sliderHeadersRef
      //   .current.headersCaptsRef.current.childNodes;
      // console.log(captsHeadersCurrent);
      // let captsVar;
      // if (div.length > 0) {
      //   captsVar = [...div];
      // } else {
      //   captsVar = div;
      // }
      // this.setState({ captsTab: [captsVar, ...captsHeadersCurrent] }, () => {
      //   console.log(this.state.captsTab);
      // });
      // this.setState(
      //   (prevState) => {
      //     return { captsTab: [...prevState.captsTab, captsVar] };
      //   },
      //   () => console.log(this.state.captsTab)
      // );
      //    this.setState(
      //   (prevState) => {
      //     return {
      //       captsTab: [...prevState.captsTab, ...captsHeadersCurrent]
      //     };
      //   },
      //   () => console.log(this.state.captsTab)
      // );
    }
  };

  captionsChange = (captsDivs) => {
    console.log(captsDivs);
    // this.captChange(
    //   captions,
    //   $(".carousel-item.active").children().children(),
    //   el,
    //   $(".carousel-item")
    // );
    // this.setArrowPos(vH, vW);
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

  handleNavBtnClick = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.className);
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
    // console.log(ind);
    // console.log(this.state.CrslClassActive);
    // console.log(this.state.CrslItemClass);
    // console.log(this.state.CrslItemClass + this.state.CrslClassActive);
    let classes = this.state.CrslItemClass;
    classes += ind === 0 ? this.state.CrslClassActive : "";
    return classes;
  };

  render() {
    // const totalLength = this.state.carouselHead.flat(Infinity).length;
    // let captionsTab = [];

    const carouselIndicatorsList = this.state.carouselItemIndicators.map(
      (carousItem, index) => (
        // return <CarouselLi key={index} carItem={carousItem} />;
        // return <li className={"carousel-li " + carousItem} key={index}></li>;
        <CarouselLi key={index} carItem={carousItem} />
      )
    );

    const carouselItemList = this.state.carouselItemsPhotos.map(
      (photo, index) => {
        // if (this.crslItemRef.current !== null) {
        // this.captsTab.push(
        // console.log(
        //   this.crslItemRef.current.sliderHeadersRef.current.headersCapts
        //     .current
        // );
        // );
        // let captionChildren = $(
        //   this.crslItemRef.current.sliderHeadersRef.current.headersCapts
        //     .current
        // ).children();
        // this.captionsTab.push(captionChildren);
        // console.log(this.captionsTab);
        // }

        return (
          <CarouseItem
            photo={photo}
            key={index}
            getHeaders={this.state.carouselHead[index]}
            addClassCrsl={this.handleAddClassCrsl}
            indexN={index}
            ref={this.crslItemRef}
            getCaptsTab={this.handleGetCaptsTab}
            // getCaptions={() => this.handleGetCaptions(this.crslItemRef)}
            getCaptions={this.handleGetCaptions}
          />
        );
      }
    );

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
          onClick={this.handleNavBtnClick}
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
          onClick={this.handleNavBtnClick}
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
