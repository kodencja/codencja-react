import React, { Component } from "react";
import $ from "jquery";
import phI from "../img/ja_odb4-2.jpg";

class AboutSec extends Component {
  state = {
    aboutTitle: "ABOUT ME",
    mainTitle: "Krzysztof Lalik",
    subTitles: [
      "Front-end Developing",
      "Back-end Supporting",
      "Programming & designing websites",
      "Fully responsive & interactive",
      "Individuals & Companies",
      "Sync & Async",
      "MVC Pattern",
      "Desktop, Tablet, Mobile",
    ],
    currentMainTitle: "",
    currentSubTtitle: "Front-end Developing",
    mainTxtShown: false,
    subTxtShown: false,
    subTxtIndex: 0,
    subTxtCurrentInd: 1,
    timeToDisplayTxt1: 180,
    timeToDisplayTxt2: 100,
    pause1: 1500,
    pause2: 800,
    pause3: 1800,
    spanMainTitleRefTab: "",
    spanSubTitleRefTab: "",
    visibility: "hidden",
  };

  mainTxt = React.createRef();
  subTxt = React.createRef();
  //   spanTxtRef = React.createRef();
  spanMainTitleRefTab = [];
  spanSubTitleRefTab = [];

  //   static getDerivedStateFromProps = () => {
  // this.setCurrentMainTitle();
  //   };

  componentDidMount() {
    // console.log(this.mainTxt);
    // console.log(this.state.currentMainTitle);
    let flagC = true;

    // console.log([...this.state.mainTitle].length);
    console.log(this.state.currentSubTtitle);
    console.log([...this.state.currentSubTtitle]);

    this.setState(
      {
        spanMainTitleRefTab: [...this.spanMainTitleRefTab],
        spanSubTitleRefTab: [...this.spanSubTitleRefTab],
        subTxtIndex: [...this.state.subTitles].length - 1,
      },
      () => {
        console.log(this.state.spanMainTitleRefTab);
        console.log(this.state.spanSubTitleRefTab);
        // console.log(this.spanMainTitleRefTab);
        this.txtListning(
          this.state.spanMainTitleRefTab,
          0,
          this.state.timeToDisplayTxt1
        );
      }
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalTxt);
  }

  changeTitleRef = (spanTab, index) => {
    // console.log(this.spanSubTitleRefTab);

    // console.log(this.state.spanMainTitleRefTab);
    // setTimeout((spanTab, index) => {
    // spanTab.forEach((span) => {
    //   $(span).css("visibility", "hidden");
    // });
    $(this.subTxt).html("");
    this.setState(
      {
        currentSubTtitle: [...this.state.subTitles][index],
        subTxtCurrentInd: index + 1,
        // spanSubTitleRefTab: [...this.spanSubTitleRefTab],
        spanSubTitleRefTab: this.spanSubTitleRefTab,
      },
      () => {
        console.log(this.spanSubTitleRefTab);
        console.log(this.state.spanSubTitleRefTab);
        this.callTxtListning(
          this.spanSubTitleRefTab,
          this.state.subTxtCurrentInd,
          this.state.timeToDisplayTxt2
        );
      }
    );
    // }, this.state.pause2);
  };

  callTxtListning = (spanTab, index, t) => {
    this.txtListning(spanTab, index, t);
  };

  txtListning = (spanTab, index, t) => {
    const {
      timeToDisplayTxt1,
      timeToDisplayTxt2,
      pause1,
      pause2,
      pause3,
      subTxtCurrentInd,
      subTxtIndex,
      spanSubTitleRefTab,
      mainTxtShown,
      subTitles,
      mainTitle,
      spanMainTitleRefTab,
    } = this.state;
    // console.log(el);
    // console.log($(el.current).offset().top);
    // if (
    //   this.state.flagW === false &&
    //   $(el).offset().top + this.props.windWidth / 3 <= this.props.windHeight
    // ) {
    //   this.setState({ flagW: true });

    // this.appearTextWriting(txt, $(el), timeToDisplayTxt1, timeToPause1, 2);
    // }

    // [...el].forEach((span, ind) => {
    //   console.log(span);
    //   const intervalTxt = setInterval((span, ind) => {
    //   this.displayTxt(span, ind);
    //   }, 1000);
    //   this.intervalTxt = setInterval(this.displayTxt, ind * 5000);
    // });

    // const spanTab = [...el];
    // const spanTab = el;
    let ind1 = 0;
    // let ind2 = 1;
    const indLast = spanTab.length;
    // console.log(el);
    // console.log(spanTab);
    console.log(spanTab);
    console.log(spanTab[0]);

    this.intervalTxt = setInterval(() => {
      if (mainTxtShown === false) {
        if (ind1 < indLast) {
          console.log("mainTxtShown = false");
          this.displayTxt(spanTab[ind1]);
          ind1++;
        } else if (ind1 >= indLast) {
          console.log("mainTxtShown set to true");
          this.setState({ mainTxtShown: true }, () => {
            // this.spanSubTitleRefTab = [];
            clearInterval(this.intervalTxt);
            setTimeout(
              () =>
                this.txtListning(
                  spanSubTitleRefTab,
                  subTxtCurrentInd,
                  timeToDisplayTxt2
                ),
              pause1
            );
          });
        }
      } else if (mainTxtShown === true) {
        if (ind1 < indLast && index < subTxtIndex) {
          console.log("mainTxtShown = true");
          this.displayTxt(spanTab[ind1]);
          ind1++;
        } else if (ind1 >= indLast && index < subTxtIndex) {
          console.log("ind1 >= indLast");
          console.log(subTxtCurrentInd);
          console.log(index);
          console.log(this.spanSubTitleRefTab);
          // spanTab.forEach((span) => {
          //   $(span).css("visibility", "hidden");
          // });
          this.spanSubTitleRefTab = [];
          // console.log(this.spanSubTitleRefTab);
          clearInterval(this.intervalTxt);
          setTimeout(this.changeTitleRef, pause2, spanTab, index);

          // this.setState(
          //   {
          //     currentSubTtitle: [...subTitles][subTxtCurrentInd],
          //     subTxtCurrentInd: index + 1,
          //   },
          //   () => {
          //     console.log(this.state.subTxtCurrentInd);
          //     console.log(this.state.currentSubTtitle);
          //     console.log(this.spanSubTitleRefTab);
          //   }
          // );
        } else if (index >= subTxtIndex) {
          console.log("index >= indLast");

          setTimeout(() => {
            $(this.subTxt).html("");
            $(this.mainTxt).html("");
            // this.setState(
            //   {
            //     mainTxtShown: false,
            //     currentSubTtitle: [...subTitles][0],
            //     subTxtCurrentInd: 1,
            //   },
            //   () => {
            //     clearInterval(this.intervalTxt);
            //     this.callTxtListning(spanMainTitleRefTab, 0, timeToDisplayTxt1);
            //   }
            // );
          }, pause3);
        }
      }
    }, t);
  };

  displayTxt = (span) => {
    // this.intervalTxt = setInterval(() => {
    // console.log("displayTxt");
    // }, ind * 3000);
    $(span).css("visibility", "visible");
    // this.setState({ visibility: "visible" });
  };

  sectionStyle = () => {
    return {
      backgroundImage: "url(" + phI + ")",
      backgroundPosition: "right",
    };
  };

  render() {
    const {
      mainTitle,
      aboutTitle,
      currentMainTitle,
      currentSubTtitle,
    } = this.state;

    const mainTitleSpans = [...mainTitle].map((letter, ind) => {
      return (
        <span
          style={{ visibility: this.state.visibility }}
          key={ind}
          ref={(ref) => (this.spanMainTitleRefTab[ind] = ref)}
        >
          {letter}
        </span>
      );
    });

    const subTitleSpans = [...currentSubTtitle].map((letter, ind) => {
      // console.log("subTitleSpans");
      // console.log([...currentSubTtitle]);
      // console.log(ind);
      return (
        <span
          style={{ visibility: this.state.visibility }}
          key={ind}
          ref={(ref) => (this.spanSubTitleRefTab[ind] = ref)}
        >
          {letter}
        </span>
      );
    });

    return (
      <section
        className="section photo2 parallax art-sect bgr-center text-center"
        data-no="1"
        data-ctrlnav="ScrollNav"
        style={this.sectionStyle()}
      >
        <header className="title sec-title title-col-bright title-bgr-dark-bright-grad">
          {aboutTitle}
        </header>
        {/* <img src={phI} alt="Me" className="photo2" /> */}
        <div className="container sec-cont">
          <div className="row justify-content-left cont-about-me about-me align-left">
            <div
              className="text1 row-text1 col-sm-10 mb-4 h1 "
              ref={this.mainTxt}
            >
              {/* {currentMainTitle} */}
              {mainTitleSpans}
            </div>
            <div
              className="text2 row-text2 col-sm-10 mb-4 h2 notvisible"
              ref={this.subTxt}
            >
              {subTitleSpans}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSec;

// import React, { Component } from "react";
// import $ from "jquery";
// import phI from "../img/ja_odb4-2.jpg";

// class About extends Component {
//   state = {
//     aboutTitle: "ABOUT ME",
//     mainTitle: "Main Text",
//     subTitles: [
//       "Front-end Developing",
//       "Back-end Supporting",
//       "Programming & designing websites",
//       "Fully responsive & interactive",
//       "Individuals & Companies",
//       "Sync & Async",
//       "MVC Pattern",
//       "Desktop, Tablet, Mobile",
//     ],
//     currentMainTitle: "",
//     currentSubTtitle: "Front-end Developing",
//     mainTxtShown: false,
//     subTxtShown: false,
//     subTxtIndex: 0,
//     subTxtCurrentInd: 0,
//     timeToDisplayTxt1: 70,
//     timeToDisplayTxt2: 50,
//     pause1: 1500,
//     pause2: 800,
//     pause3: 1800,
//     spanMainTitleRefTab: [],
//     spanSubTitleRefTab: [],
//     visibility: "hidden",
//     test: "chmura",
//   };

//   mainTxt = React.createRef();
//   subTxt = React.createRef();
//   spanMainTitleRefTab = [];
//   spanSubTitleRefTab = [];

//   componentDidMount() {
//     let flagC = true;
//     console.log(this.state.currentSubTtitle);

//     this.setState(
//       {
//         spanMainTitleRefTab: [...this.spanMainTitleRefTab],
//         spanSubTitleRefTab: [...this.spanSubTitleRefTab],
//         subTxtIndex: [...this.state.subTitles].length - 1,
//       },
//       () => {
//         console.log(this.state.spanMainTitleRefTab);
//         console.log(this.spanMainTitleRefTab);
//         console.log(this.spanSubTitleRefTab);
//         console.log(this.state.spanSubTitleRefTab);
//         this.callDisplay(
//           this.state.spanMainTitleRefTab,
//           0,
//           0
//         );
//       }
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalTxt);
//   }

//   changeTitleRef = (spanTab, index) => {
//     $(this.subTxt).html("");
//     this.setState(
//       {
//         currentSubTtitle: [...this.state.subTitles][index],
//         subTxtCurrentInd: index + 1,
//         spanSubTitleRefTab: this.spanSubTitleRefTab,
//       },
//       () => {
//         console.log(this.spanSubTitleRefTab);
//         console.log(this.state.spanSubTitleRefTab);
//         this.callTxtListning(
//           this.spanSubTitleRefTab,
//           this.state.subTxtCurrentInd,
//           this.state.timeToDisplayTxt2
//         );
//       }
//     );
//   };

//   callTxtListning = (spanTab, index, t) => {
//     this.txtListning(spanTab, index, t);
//   };

//   callDisplay = (spanTab, i, iSubTab) => {
//     const {
//       mainTitle,
//       mainTxtShown,
//       subTitles,
//       spanMainTitleRefTab,
//       spanSubTitleRefTab,
//       subTxtCurrentInd,
//       pause1,
//       pause2,
//       pause3,
//       timeToDisplayTxt1,
//       timeToDisplayTxt2,
//     } = this.state;
//     let arraySpan, time, txtDivName;

//     if (mainTxtShown === false) {
//       if (i < spanTab.length) {
//         arraySpan = spanTab;
//         setTimeout(() => {
//           this.display(arraySpan, i);
//         }, timeToDisplayTxt1);
//       }
//       else {
//         i = 0;
//         arraySpan = spanSubTitleRefTab;
//         setTimeout(() => {
//           this.setState({ mainTxtShown: true }, () => {
//             this.callDisplay(arraySpan, i, iSubTab);
//           });
//         }, timeToDisplayTxt2);
//       }
//     } else {
//       if (iSubTab < subTitles.length) {
//         if (i < spanTab.length) {
//           arraySpan = spanTab;
//           setTimeout(() => {
//             this.display(arraySpan, i);
//           }, timeToDisplayTxt2);
//         } else {
//           let prevSpanTabLeng = this.spanSubTitleRefTab.length;
//           this.spanSubTitleRefTab = [];
//           i = 0;
//           if (iSubTab < subTitles.length - 1) {
//             setTimeout(() => {
//               $(this.subTxt).html("");
//               spanTab.forEach((span) => {
//                 $(span).css("visibility", "hidden");
//               });
//               this.setState(
//                 {
//                   subTxtCurrentInd: iSubTab + 1,
//                   spanSubTitleRefTab: "",
//                   currentSubTtitle: [...subTitles][iSubTab + 1],
//                   subTxtShown: true,
//                 },
//                 () => {

//                   this.setState(
//                     {
//                       spanSubTitleRefTab: [...this.spanSubTitleRefTab],
//                     },
//                     () => {
//                       arraySpan = this.state.spanSubTitleRefTab;
//                       console.log(this.state.spanSubTitleRefTab);
//                       this.callDisplay(
//                         arraySpan,
//                         i,
//                         this.state.subTxtCurrentInd
//                       );
//                     }
//                   );
//                 }
//               );
//             }, pause2);
//           } else {
//             i = 0;
//             arraySpan = [...spanMainTitleRefTab];
//             setTimeout(() => {
//               $(this.mainTxt).html("");
//               $(this.subTxt).html("");
//               spanTab.forEach((span) => {
//                 $(span).css("visibility", "hidden");
//               });
//               arraySpan.forEach((span) => {
//                 $(span).css("visibility", "hidden");
//               });
//               this.setState(
//                 {
//                   mainTxtShown: false,
//                   subTxtCurrentInd: 0,
//                   currentSubTtitle: [...subTitles][0],
//                 },
//                 () => {
//                   console.log(this.spanSubTitleRefTab);
//                   this.callDisplay(arraySpan, i, this.state.subTxtCurrentInd);
//                 }
//               );
//             }, pause3);
//           }
//         }
//       }
//     }
//   };

//   display = (spanTab, i) => {
//     if (this.state.mainTxtShown === false) {
//       const spansArray = spanTab;
//       const el = spansArray[i];
//       $(el).css("visibility", "visible");
//       i++;
//       this.setState({ spanMainTitleRefTab: spansArray }, () => {
//         this.callDisplay(
//           [...this.state.spanMainTitleRefTab],
//           i,
//           this.state.subTxtCurrentInd
//         );
//       });
//     } else {
//       const spansArray = spanTab;
//       // console.log(spansArray);
//       const el = spansArray[i];
//       $(el).css("visibility", "visible");
//       i++;
//       this.setState({ spanSubTitleRefTab: spansArray }, () => {
//         this.callDisplay(
//           [...this.state.spanSubTitleRefTab],
//           i,
//           this.state.subTxtCurrentInd
//         );
//       });
//     }
//   };

//   sectionStyle = () => {
//     return {
//       backgroundImage: "url(" + phI + ")",
//       backgroundPosition: "right",
//     };
//   };

//   render() {
//     const {
//       mainTitle,
//       aboutTitle,
//       currentMainTitle,
//       currentSubTtitle,
//     } = this.state;

//     const mainTitleSpans = [...mainTitle].map((letter, ind) => {
//       return (
//         <span
//           key={ind}
//           ref={(ref) => (this.spanMainTitleRefTab[ind] = ref)}
//         >
//           {letter}
//         </span>
//       );
//     });

//     const subTitleSpans = [...currentSubTtitle].map((letter, ind) => {

//       return (
//         <span

//           key={ind}
//           ref={(ref) => (this.spanSubTitleRefTab[ind] = ref)}

//         >
//           {letter}
//         </span>
//       );
//     });

//     return (
//       <section
//         className="section photo2 parallax art-sect bgr-center text-center"
//         data-no="1"
//         data-ctrlnav="ScrollNav"
//         style={this.sectionStyle()}
//       >
//         <header className="title sec-title title-col-bright title-bgr-dark-bright-grad">
//           {aboutTitle}
//         </header>

//         <div className="container sec-cont">
//           <div className="row justify-content-left cont-about-me about-me align-left">
//             <div
//               className="text1 row-text1 col-sm-10 mb-4 h1 notvisible"
//               ref={this.mainTxt}
//             >

//               {mainTitleSpans}
//             </div>
//             <div
//               className="text2 row-text2 col-sm-10 mb-4 h2 notvisible"
//               ref={this.subTxt}
//             >
//               {subTitleSpans}
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default About;
