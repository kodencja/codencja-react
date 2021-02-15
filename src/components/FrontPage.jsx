import React, { PureComponent } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Article from "./Article";
import CarouselSlider from "./CarouselSlider";
import CarouselBtstrpSlider from "./CarouselBtstrpSlider";
import Hamburger from "./Hamburger";
import SectSlider from "./SectSlider";
import AboutSec from "./AboutSec";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills.jsx";

class FrontPage extends PureComponent {
  //this.servicesRef.current = [] DEFINED WITHOUT CONSTRUCTOR

  state = {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    PFrontScrollBar: 0,
    aboutAppear: false,
    // number of divs to Appeat and to Hide
    divsToShowInOneRow: 1,
    divsToHideInOneRow: 1,
    divsToShowWithClassInView: [],
    divsToHideWithClassNotInView: [],
    serviceAppearRef: [],
    name: "",
    appearTime: 10,
    animShow4: ["fadeInLeft", "fadeInDown", "fadeInUp", "fadeInRight"],
    animShow3: ["fadeInLeft", "fadeInUp", "fadeInRight"],
    animShow2: ["fadeInLeft", "fadeInRight"],
    animShow1: ["bounceIn"],

    animHide4: ["fadeOutLeft", "fadeOutDown", "fadeOutUp", "fadeOutRight"],
    animHide3: ["fadeOutLeft", "fadeOutDown", "fadeOutRight"],
    animHide2: ["fadeOutLeft", "fadeOutRight"],
    animHide1: ["fadeOutDown"],
    arrShowName: [],
    arrHideName: [],
    resizeFlag: false,
  };

  carouselSliderRef = React.createRef();
  pageFrontRef = React.createRef();
  aboutRef = React.createRef();
  servicesRef = React.createRef();
  skillsRef = React.createRef();
  appearDivsRef = React.createRef();
  renderCountRef = React.createRef(1);

  // servArrRef = [];
  // arrayServRef = [];

  componentDidMount() {
    console.log("Frontpage componentDidMount");
    window.addEventListener("resize", this.handleResize);
    // this.pageFrontRef.current.addEventListener("scroll", this.handleScroll);
    this.pageFrontRef.current.addEventListener("scroll", () => {
      if (this.state.resizeFlag === false) {
        // console.log("scrol listener");
        this.handleScroll();
        this.handleAppearing();
      }
    });
    console.log(this.servicesRef.current);

    // this.setState({ serviceAppearRef: this.servicesRef.current }, () => {
    //   console.log(this.state.serviceAppearRef);
    // });

    this.renderCountRef.current = this.renderCountRef.current + 1;
    // this.servicesRef.current = [];
    // window.addEventListener("scroll", this.handleScroll);
    console.log(this.state.resizeFlag);
    // const head1 = this.carouselSliderRef.querySelectorAll(".head1");
    this.appearDivsRef.current = [
      ...this.appearDivsRef.current,
      ...this.servicesRef.current,
      ...this.skillsRef.current,
    ];
    console.log(this.appearDivsRef.current);
    // poniższa pętla wykonuje sie w sposób asynchroniczny tzn. "i" jest wyświetlane dopiero, gdy skończy się liczyć pętla while i wyświetli się "j"
    // for (let i = 0; i < 10; i++) {
    //   let j = 0;
    //   while (j < 400000000) {
    //     j++;
    //     if (j % 100000000 === 0) console.log(j);
    //   }
    //   console.log(i);
    // }
    // console.log($(this.pageFrontRef.current));

    // console.log(this.servArrRef.length);

    // console.log(this.servicesRef);
    // console.log(this.servicesRef.current);
    // console.log(this.servicesRef.length);
    // console.log(this.servicesRef[3]);
    // console.log(this.servicesRef[3].current);
    // console.log(this.servicesRef[12]);
    // console.log(this.servicesRef.length);
    // this.servicesRef[1].classList.add("notvisible");
  }

  componentDidUpdate() {
    // console.log("updated");
    this.renderCountRef.current = this.renderCountRef.current + 1;
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
    this.pageFrontRef.current.addEventListener("scroll", () => {
      this.handleScroll();
      this.handleAppearing();
      // this.setStateAsync();
    });
  }

  addToRefs = (el) => {
    console.log("add to Refs");
    // console.log(el);
    // console.log($(el).parent());
    // console.log($(el).parents());
    // console.log($(el).parents()[1]);
    if (el && el !== null) {
      const parentArr = $(el).parents();
      // console.log(parentArr);
      // console.log(parentArr.length);
      // for (let i = 0; i < parentArr.length; i++) {
      //   console.log(parentArr[i]);
      // }
      if (this.appearDivsRef.current === null) {
        this.appearDivsRef.current = [];
      }
      if (
        this.servicesRef.current === null ||
        this.skillsRef.current === null
      ) {
        console.log("servicesRef.current = null");
        this.servicesRef.current = [];
        this.skillsRef.current = [];
      }

      [...parentArr].forEach((element) => {
        // console.log(element);
        if (element.classList.contains("services")) {
          // console.log("class contains");
          if (!this.servicesRef.current.includes(el)) {
            this.servicesRef.current.push(el);
            // console.log("servicesRef.current.push");
          }
        } else if (element.classList.contains("skills")) {
          // console.log("class contains");
          if (!this.skillsRef.current.includes(el)) {
            this.skillsRef.current.push(el);
            // console.log("servicesRef.current.push");
          }
        }
      });
    }

    // $(el)
    //   .parents()
    //   .forEach((element) => {
    //     if (element.classList.contains("col-sm-4")) {
    //       console.log("Includes col-sm-4");
    //     }
    //   });
    // console.log(this.servicesRef.current);

    // console.log(this.servicesRef.current);
  };

  // handleRefs = (refsArr) => {
  // console.log(refsArr);
  // this.servArrRef = refsArr;
  // console.log(this.servArrRef.current);
  // this.servicesRef.current = refsArr;
  // this.setState({ serviceAppearRef: this.servArrRef.current }, () => {
  // this.setState({ serviceAppearRef: refsArr }, () => {
  //   console.log(this.state.serviceAppearRef);
  // });
  // this.servArrRef = refsArr;
  // console.log(this.servicesRef.current);
  // };

  setStateAsync = (newState) => {
    // console.log("Promise");
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error!"));
      else {
        this.setState(newState, resolve);
      }
    });
  };

  hideResize = () => {
    // console.log("hideResize START");
    const { current } = this.appearDivsRef;
    // const { serviceAppearRef, animShow1, animHide1 } = this.state;
    const { serviceAppearRef, animShow1, animHide1 } = this.state;
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error!"));
      else {
        for (let i = 0; i < current.length; i++) {
          // usuwamy klasę 'bounceIn'
          if ($(current[i]).hasClass(animShow1[0])) {
            $(current[i]).removeClass(animShow1[0]);
          }
          // const classToRemove = function (index, css) {
          //   return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
          // };
          // console.log(classToRemove);
          // $(current[i]).removeClass(classToRemove);
          $(current[i]).removeClass(function (index, css) {
            // console.log(css); // list of classes
            return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
          });
          $(current[i]).addClass(animHide1[0]);
          // $(serviceAppearRef[i]).removeClass("inView").addClass("NotInView");
          $(current[i]).removeClass("inView");
          $(current[i]).addClass("NotInView");
          // console.log("loop");
          // console.log(serviceAppearRef[i]);
        }
        // console.log("hideResize END");
        resolve();
      }
    });
  };

  handleHideResize = async () => {
    // console.log("handleHideResize 1");
    await this.setStateAsync({ resizeFlag: true });
    await this.hideResize();
    // console.log("handleHideResize 2");
    this.handleAppearing();
  };

  getDivTopVal = (frontScroll, elem) => {
    return new Promise((resolve, reject) => {
      if (reject.length > 1)
        reject(new Error("Error to get div appear top value"));
      else {
        resolve({
          elem: elem,
          elTopConst: elem.offsetTop,
          elTop: elem.offsetTop - this.state.PFrontScrollBar,
          elHeight: elem.offsetHeight / 2,
          elNext: elem.nextElementSibling,
        });
      }
    });
  };

  // (
  //   showDiv.oneRowOfDivs,
  //   showDiv.divsToShowNumber,
  //   rowInd,
  //   appearTime
  // );

  showDivsAnimation = (oneDiv, rowLength, rowIndex, time) => {
    const {
      // arrShowName,
      // arrHideName,
      animShow1,
      animShow2,
      animShow3,
      animShow4,
      animHide1,
      animHide2,
      animHide3,
      animHide4,
    } = this.state;

    // console.log("showDivsAnimation");

    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error"));
      else {
        if (rowIndex >= 4) {
          const maxIndexLength =
            animShow4.length * Math.floor(rowIndex / animShow4.length);
          // console.log(maxIndexLength);
          rowIndex = rowIndex - maxIndexLength;
        }
        if (rowLength > 4) {
          rowLength = 4;
        }
        const arrShowN = eval("animShow" + rowLength);
        const arrHideN = eval("animHide" + rowLength);
        setTimeout(async () => {
          // console.log("showDivsAnimation setTimeOut");
          // resolve({

          // let arrShowN = `${this.state.}eval("animShow" + rowLength`);
          // let arrHideN = eval("animHide" + rowLength);
          // arrShowN = eval(this.state + arrShowN);
          // console.log(rowLength);
          // console.log(arrShowN);
          await this.setStateAsync({
            arrShowName: arrShowN,
            arrHideName: arrHideN,
          });
          // arrShowName = eval("animShow" + l),
          // arrHideName = eval("animHide" + l),
          // console.log(rowIndex);
          // console.log(this.state.arrShowName);
          // console.log(this.state.arrHideName);
          if ($(oneDiv).hasClass(animHide1[0])) {
            $(oneDiv).removeClass(animHide1[0]);
            // console.log("remove fadeOutDown");
          } else {
            // $(oneDiv).removeClass(this.state.arrHideName[rowIndex]);
            $(oneDiv).removeClass(function (index, css) {
              // console.log(css);
              return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
            });
          }
          $(oneDiv).addClass(this.state.arrShowName[rowIndex]);
          // $(oneDiv).addClass("appeared");

          // COUNTING
          // ctrlCount.checkIfStartCounting(textTab.length, tc);

          // showFlipBack: (function () {
          // if ($(d).hasClass("counting")) {
          // self.showFlipBack($(d).closest(".flip-card-front").next()[0]);
          // controller.changeStyle.rmClass($(d).closest('.flip-card-front').next()[0],'visible');
          // controller.changeStyle.addCl($(d).closest('.flip-card-front').next()[0], 'notvisible');
          // }
          // })(),
          // });
        }, time);
        resolve(this.state.arrShowName);
        // }
        // else {
        //   setTimeout(() => {
        //     resolve({
        //       tabs: [(arrShowName = animShow4), (arrHideName = animHide4)],
        //       addShClass: (function () {
        //         if ($(d).hasClass(animHide1[0])) {
        //           controller.changeStyle.rmClass(d, animHide1[0]);
        //         } else {
        //           if (ind < arrShowName.length) {
        //             controller.changeStyle.rmClass(d, arrHideName[ind]);
        //           } else {
        //             let y = Math.floor(ind / arrShowName.length);
        //             controller.changeStyle.rmClass(
        //               d,
        //               arrHideName[ind - arrHideName.length * y]
        //             );
        //           }
        //         }
        //         if (ind < arrShowName.length) {
        //           controller.changeStyle.addCl(d, arrShowName[ind]);
        //         } else {
        //           let y = Math.floor(ind / arrShowName.length);
        //           controller.changeStyle.addCl(
        //             d,
        //             arrShowName[ind - arrShowName.length * y]
        //           );
        //         }
        //         controller.changeStyle.addCl(d, "appeared");
        //         // COUNTING
        //         ctrlCount.checkIfStartCounting(textTab.length, tc);
        //       })(),
        //       showFlipBack: (function () {
        //         if ($(d).hasClass("counting")) {
        //           self.showFlipBack($(d).closest(".flip-card-front").next()[0]);
        //         }
        //       })(),
        //     });
        //   }, t);
        // }
      }
    });
  };

  hideDivsAnimation = (oneDiv, rowLength, rowIndex, time) => {
    const {
      // arrShowName,
      // arrHideName,
      animShow1,
      animShow2,
      animShow3,
      animShow4,
      animHide1,
      animHide2,
      animHide3,
      animHide4,
    } = this.state;

    // console.log("hideDivsAnimation");
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error"));
      else {
        if (rowIndex >= 4) {
          const maxIndexLength =
            animShow4.length * Math.floor(rowIndex / animShow4.length);
          rowIndex = rowIndex - maxIndexLength;
        }
        if (rowLength > 4) {
          rowLength = 4;
        }
        const arrShowN = eval("animShow" + rowLength);
        const arrHideN = eval("animHide" + rowLength);
        setTimeout(async () => {
          await this.setStateAsync({
            arrShowName: arrShowN,
            arrHideName: arrHideN,
          });

          // console.log(this.state.arrShowName[rowIndex]);
          // console.log(this.state.arrHideName[rowIndex]);
          if ($(oneDiv).hasClass(animShow1[0])) {
            $(oneDiv).removeClass(animShow1[0]);
          } else {
            // $(oneDiv).removeClass(this.state.arrHideName[rowIndex]);
            $(oneDiv).removeClass(function (index, css) {
              // console.log(css);
              return (css.match(/(^|\s)fade\S+/g) || []).join(" ");
            });
          }
          // $(oneDiv).addClass(this.state.arrShowName[rowIndex]);

          // $(oneDiv).removeClass(this.state.arrShowName[rowIndex]);
          $(oneDiv).addClass(this.state.arrHideName[rowIndex]);

          // controller.changeStyle.rmClass(d, tabShName[ind]);
          // controller.changeStyle.addCl(d, tabHName[ind]);
          // controller.changeStyle.rmClass(d, "appeared");
          // hideFlipBack: (function () {
          //   if ($(d).hasClass("counting")) {
          //     self.hideFlipBack($(d).closest(".flip-card-front").next()[0]);
          //   }
          // })(),
        }, time / 3);
        resolve(this.state.arrHideName);
        // }
        // else {
        //   setTimeout(() => {
        //     resolve({
        //       tabs: [(tabShName = animShow4), (tabHName = animHide4)],
        //       addShClass: (function () {
        //         if (ind < tabHName.length) {
        //           controller.changeStyle.rmClass(d, tabShName[ind]);
        //           controller.changeStyle.addCl(d, tabHName[ind]);
        //         } else {
        //           let y = Math.floor(ind / tabHName.length);
        //           controller.changeStyle.rmClass(
        //             d,
        //             tabShName[ind - tabShName.length * y]
        //           );
        //           controller.changeStyle.addCl(
        //             d,
        //             tabHName[ind - tabHName.length * y]
        //           );
        //         }
        //         controller.changeStyle.rmClass(d, "appeared");
        //         // COUNTING
        //         ctrlCount.checkIfStartCounting(textTab.length, tc);
        //       })(),
        //       hideFlipBack: (function () {
        //         if ($(d).hasClass("counting")) {
        //           self.hideFlipBack($(d).closest(".flip-card-front").next()[0]);
        //         }
        //       })(),
        //     });
        //   }, time / 3);
        // }
      }
    });
  };

  // if (
  // windowHeight >= getDivTop.elTop + getDivTop.elHeight &&
  // $(serviceAppearRef[i]).hasClass("NotInView")
  // )
  showDiv = (
    indexInAllAppearDivs,
    elem,
    elemTopConst,
    elemNext,
    elemNextTopConst
  ) => {
    return new Promise(async (resolve, reject) => {
      // let elemNextTopConst = null;
      // if (elemNext != null) {
      //   elemNextTopConst = elemNext.offsetTop;
      // }
      if (reject.length > 1) reject(new Error("Error"));
      else {
        // resolve(
        // (async () => {
        if (elemTopConst === elemNextTopConst && elemNext != null) {
          // console.log("remove NotInView 1");
          $(elem).removeClass("NotInView");
          $(elem).addClass("inView");
          // console.log("setStateAsync 1");
          // console.log(this.state.divsToShowInOneRow);

          await this.setStateAsync((prevState) => {
            return {
              divsToShowInOneRow: prevState.divsToShowInOneRow + 1,
              divsToShowWithClassInView: [
                ...prevState.divsToShowWithClassInView,
                elem,
              ],
            };
          });

          // console.log(this.state.divsToShowWithClassInView);
          // await this.setStateAsync({
          //   divsToShowInOneRow: this.state.divsToShowInOneRow + 1,
          //   divsToShowWithClassInView: [...this.state.divsToShowWithClassInView, elem],
          // });
          // console.log(this.state.divsToShowInOneRow);
        } else if (
          elemTopConst !== elemNextTopConst ||
          elemNext === null ||
          indexInAllAppearDivs === this.appearDivsRef.current.length - 1
        ) {
          // console.log("remove NotInView 2");
          $(elem).removeClass("NotInView");
          $(elem).addClass("inView");
          // console.log("setStateAsync 2");
          // console.log(this.state.divsToShowInOneRow);
          // console.log(this.state.divsToShowWithClassInView);
          await this.setStateAsync((prevState) => {
            return {
              // divsToShowInOneRow: prevState.divsToShowInOneRow + 1,
              divsToShowWithClassInView: [
                ...prevState.divsToShowWithClassInView,
                elem,
              ],
            };
          });
        }
        resolve({
          divsToShow: this.state.divsToShowWithClassInView,
          divsToShowNumber: this.state.divsToShowInOneRow,
        });
      }
    });
  };

  // hiding elements
  hideDiv = (
    indexInAllAppearDivs,
    elem,
    elemTopConst,
    elemNext,
    elemNextTopConst
  ) => {
    return new Promise(async (resolve, reject) => {
      // let elemNextTopConst = null;
      // if (elemNext != null) {
      //   elemNextTopConst = elemNext.offsetTop;
      // }
      if (reject.length > 1) reject(new Error("Error"));
      else {
        if (elemNextTopConst === elemTopConst && elemNext != null) {
          $(elem).removeClass("inView");
          $(elem).addClass("NotInView");

          await this.setStateAsync((prevState) => {
            return {
              divsToHideInOneRow: prevState.divsToHideInOneRow + 1,
              divsToHideWithClassNotInView: [
                ...prevState.divsToHideWithClassNotInView,
                elem,
              ],
            };
          });

          // await this.setStateAsync({
          //   divsToHideInOneRow: this.state.divsToHideInOneRow + 1,
          //   divsToHideWithClassNotInView: [...this.state.divsToHideWithClassNotInView, elem],
          // });
        } else if (
          elemNextTopConst !== elemTopConst ||
          elemNext === null ||
          indexInAllAppearDivs === this.appearDivsRef.current.length - 1
        ) {
          $(elem).removeClass("inView");
          $(elem).addClass("NotInView");
          // controller.changeStyle.rmClass(elem, "inView");
          // controller.changeStyle.addCl(elem, "NotInView");
          // nDivsToHide++;
          // appClRow.push(elem);
          // console.log("setStateAsync 5");
          await this.setStateAsync((prevState) => {
            return {
              // divsToHideInOneRow: prevState.divsToHideInOneRow + 1,
              divsToHideWithClassNotInView: [
                ...prevState.divsToHideWithClassNotInView,
                elem,
              ],
            };
          });
        }
        resolve({
          divsToHide: this.state.divsToHideWithClassNotInView,
          divsToHideNumber: this.state.divsToHideInOneRow,
        });
      }
      // })()
      // );
    });
  };

  handleAppearing = async () => {
    const {
      PFrontScrollBar,
      serviceAppearRef,
      windowHeight,
      appearTime,
      divsToShowWithClassInView,
      divsToHideWithClassNotInView,
    } = this.state;
    const { current } = this.appearDivsRef;
    // vH=window.innerHeight;
    // number of divs to Appeat and to Hide
    // divsToShowInOneRow = 0;
    // divsToHideInOneRow = 0;
    // appClRow = [];

    // console.log("handleAppearing");
    // console.log("setStateAsync 0");
    // console.log(this.state.divsToShowInOneRow);
    // console.log(this.state.divsToHideInOneRow);
    await this.setStateAsync({
      divsToShowInOneRow: 0,
      divsToHideInOneRow: 0,
      divsToShowWithClassInView: [],
      divsToHideWithClassNotInView: [],
    });
    // console.log(divsToShowWithClassInView);
    // console.log(divsToHideWithClassNotInView);
    try {
      let getDivTop,
        elNextTopConst = null,
        showDiv,
        hideDiv;
      for (let i = 0; i < current.length; i++) {
        getDivTop = await this.getDivTopVal(PFrontScrollBar, current[i]);
        // console.log(getDivTop.elNext);
        // console.log(getDivTop.elTopConst);
        // console.log(getDivTop.elTop);
        // let elNextTopConst = null;
        if (getDivTop.elNext != null) {
          elNextTopConst = getDivTop.elNext.offsetTop;
        }
        if (
          windowHeight >= getDivTop.elTop + getDivTop.elHeight &&
          $(current[i]).hasClass("NotInView")
        ) {
          // console.log("has class NotInView");
          // tu gdzieś trzeba zrobić pętlę żeby uzyskać oneRowOfDivs.length
          showDiv = await this.showDiv(
            i,
            getDivTop.elem,
            getDivTop.elTopConst,
            getDivTop.elNext,
            elNextTopConst
          );

          // console.log(getDivTop.elem);
          // console.log(showDiv.oneRowOfDivs);
        } else if (
          windowHeight < getDivTop.elTop + getDivTop.elHeight &&
          $(current[i]).hasClass("inView")
        ) {
          hideDiv = await this.hideDiv(
            i,
            current[i],
            getDivTop.elTopConst,
            getDivTop.elNext,
            elNextTopConst
          );
        }
      }
      if (this.state.divsToShowWithClassInView.length > 0) {
        // console.log(showDiv.oneRowOfDivs);
        let rowInd = 0;
        let rowLength = this.state.divsToShowWithClassInView.length;
        // console.log("call showDivsAnimation");
        console.log(rowLength);
        while (rowInd < rowLength) {
          await this.showDivsAnimation(
            this.state.divsToShowWithClassInView[rowInd],
            rowLength,
            rowInd,
            appearTime
          );
          // console.log(rowInd);
          rowInd++;
        }
        if (this.state.resizeFlag === true) {
          await this.setStateAsync({ resizeFlag: false });
        }
      }
      if (this.state.divsToHideWithClassNotInView.length > 0) {
        // console.log(hideDiv.oneRowOfDivs);
        // console.log(this.state.divsToHideWithClassNotInView);
        let rowInd = 0;
        let rowLength = this.state.divsToHideWithClassNotInView.length;
        // console.log(rowLength);
        // console.log("call hideDivsAnimation");
        console.log(rowLength);
        while (rowInd < rowLength) {
          await this.hideDivsAnimation(
            this.state.divsToHideWithClassNotInView[rowInd],
            rowLength,
            rowInd,
            appearTime
          );
          // console.log(rowInd);
          rowInd++;
        }
        if (this.state.resizeFlag === true) {
          await this.setStateAsync({ resizeFlag: false });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleResize = () => {
    this.setState(
      { windowWidth: window.innerWidth, windowHeight: window.innerHeight },
      () => {
        // console.log(this.state.windowWidth + ", " + this.state.windowHeight);
        this.carouselSliderRef.current.keepArrowsInsideImg(
          this.state.windowHeight,
          this.state.windowWidth
        );
        this.handleHideResize();
      }
    );
  };

  handleScroll = () => {
    // console.log(this.aboutRef.current.mainTxt.current);
    // const el = this.aboutRef.current.mainTxt.current;
    // const windHeigth23 = this.state.windowHeight - this.state.windowHeight / 3;
    // console.log($(el).offset().top);
    // console.log(windHeigth23);
    // console.log(this.state.windowHeight);
    const PFrontScrollBar = $(this.pageFrontRef.current).scrollTop();
    // console.log(PFrontScrollBar);

    this.setState({ PFrontScrollBar: PFrontScrollBar }, () => {
      // console.log(this.state.PFrontScrollBar);
    });

    // call callDisplay from About component
    // if (
    //   this.state.aboutAppear === false &&
    //   $(el).offset().top <= windHeigth23
    // )
    if (
      this.state.aboutAppear === false &&
      $(this.aboutRef.current.mainTxt.current).offset().top <=
        this.state.windowHeight - this.state.windowHeight / 3
    ) {
      console.log("handleScroll");
      this.aboutRef.current.callDisplay(
        this.aboutRef.current.state.spanMainTitleRefTab,
        0,
        0
      );
      this.setState({ aboutAppear: true });
    }
  };

  render() {
    return (
      <main className="pagefront frontMain-pagefront" ref={this.pageFrontRef}>
        <Hamburger />
        <Article getClasses={() => "align-middle"}>
          {/* <SectSlider /> */}
          <CarouselSlider
            windHeight={this.state.windowHeight}
            windWidth={this.state.windowWidth}
            ref={this.carouselSliderRef}
          />
          {/* <CarouselBtstrpSlider /> */}
          {/* <AboutSec /> */}
          <About ref={this.aboutRef} />
        </Article>
        <Article getClasses={() => "align-middle"}>
          {/* <Services ref={() => this.servArrRef.push(this.servicesRef)} /> */}
          {/* <Services arrRef={(iconRef) => (this.servicesRef = iconRef)} /> */}
          {/* <Services arrRef={(ref) => this.servicesRef.push(ref)} /> */}
          {/* <Services ref={(ref) => this.servicesRef.push(ref)} /> */}
          {/* <Services ref={this.servicesRef.current} /> */}
          {/* <Services
            ref={(ref) => (this.servicesRef = [...this.servicesRef, ref])}
          /> */}
          {/* <Services
            ref={(icon) =>
              (this.servArrRef.current = [...this.servArrRef.current, icon])
            }
          /> */}
          {/* <Services arrRef={this.handleRefs} /> */}
          <Services ref={this.addToRefs} />
          {/* <Services
            ref={(icon) =>
              (this.servicesRef.current = [...this.servicesRef.current, icon])
            }
          /> */}

          <Skills ref={this.addToRefs} />

          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <div>My name is {this.state.name} </div>
          <div>This page has been rendered {this.renderCountRef.current} </div>
        </Article>
      </main>
    );
  }
}

export default FrontPage;

// const showOrHide = await this.showOrHideDiv(
//   windowHeight,
//   i,
//   serviceAppearRef[i],
//   getDivTop.elTopConst,
//   getDivTop.elTop,
//   getDivTop.elHeight,
//   getDivTop.elNext
// );
// console.log("await")
