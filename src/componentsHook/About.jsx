import React, { PureComponent } from "react";
import $ from "jquery";
import phI from "../img/ja_odb4-2.jpg";

class About extends PureComponent {
  state = {
    aboutTitle: "ABOUT ME",
    mainTitle: "Main Text",
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
    subTxtCurrentInd: 0,
    timeToDisplayTxt1: 180,
    timeToDisplayTxt2: 100,
    pause1: 1500,
    pause2: 1800,
    pause3: 1200,
    spanMainTitleRefTab: [],
    spanSubTitleRefTab: [],
    visibility: "hidden",
    test: "chmura",
  };

  mainTxt = React.createRef();
  subTxt = React.createRef();
  spanMainTitleRef = [];
  spanSubTitleRef = [];

  componentDidMount() {
    console.log("about componentDidMount");
    let flagC = true;
    // console.log(this.mainTxt);
    // console.log(this.state.currentSubTtitle);
    this.setState({
      spanMainTitleRefTab: [...this.spanMainTitleRef],
      spanSubTitleRefTab: [...this.spanSubTitleRef],
      subTxtIndex: [...this.state.subTitles].length - 1,
    });
  }

  // componentWillUnmount() {
  //   this.callDisplay();
  //   this.display();
  // }

  // resolve tutaj to pusty callback, ale musi być, żeby Promise mógł cos zwrócić, bo inaczej wyrzuci błąd
  setStateAsync = (state) => {
    // console.log("Promise");
    return new Promise((resolve, reject) => {
      if (reject.length > 1) reject(new Error("Error!"));
      else {
        this.setState(state, resolve);
      }
    });
  };

  callDisplay = (spanTab, i, iSubTab) => {
    const {
      mainTxtShown,
      subTitles,
      spanMainTitleRefTab,
      pause2,
      pause3,
    } = this.state;
    let arraySpan;

    if (mainTxtShown === false) {
      // if (i < spanTab.length) {
      // arraySpan = spanTab;
      // setTimeout(() => {
      this.display(spanTab, i, iSubTab);
      // }, timeToDisplayTxt1);
    } else {
      // if(this.state.subTxtShown===false){
      if (iSubTab < subTitles.length) {
        if (i < spanTab.length) {
          // arraySpan = spanTab;
          // setTimeout(() => {
          this.display(spanTab, i, iSubTab);
          // }, timeToDisplayTxt2);
        } else {
          i = 0;
          if (iSubTab < subTitles.length - 1) {
            setTimeout(async () => {
              $(this.subTxt).html("");
              spanTab.forEach((span) => {
                $(span).css("visibility", "hidden");
              });

              // console.log("await");
              await this.setStateAsync({
                subTxtCurrentInd: iSubTab + 1,
                spanSubTitleRefTab: [],
                currentSubTtitle: [],
              });
              this.spanSubTitleRef = [];
              await this.setStateAsync({
                currentSubTtitle: [...subTitles][iSubTab + 1],
              });
              await this.setStateAsync({
                spanSubTitleRefTab: [...this.spanSubTitleRef],
              });
              arraySpan = this.state.spanSubTitleRefTab;

              // this.callDisplay(arraySpan, i, this.state.subTxtCurrentInd);
              this.display(arraySpan, i, this.state.subTxtCurrentInd);
            }, pause2);
          } else {
            // i = 0;
            arraySpan = [...spanMainTitleRefTab];
            // arraySpan = [...spanMainTitleRefTab];
            console.log("last index of array");

            // console.log(this.subTxt);
            setTimeout(() => {
              this.mainTxt.current.classList.add("fadeOut");
              this.subTxt.current.classList.add("fadeOut");

              setTimeout(async () => {
                spanTab.forEach((span) => {
                  $(span).css("visibility", "hidden");
                });
                arraySpan.forEach((span) => {
                  $(span).css("visibility", "hidden");
                });

                await this.setStateAsync({
                  mainTxtShown: false,
                  subTxtCurrentInd: 0,
                  currentSubTtitle: [],
                });
                this.spanSubTitleRef = [];
                await this.setStateAsync({
                  currentSubTtitle: [...subTitles][0],
                });
                await this.setStateAsync({
                  spanSubTitleRefTab: [...this.spanSubTitleRef],
                });
                this.mainTxt.current.classList.remove("fadeOut");
                this.subTxt.current.classList.remove("fadeOut");
                $(this.mainTxt).html("");
                $(this.subTxt).html("");
                // this.callDisplay(arraySpan, i, this.state.subTxtCurrentInd);
                this.display(arraySpan, i, this.state.subTxtCurrentInd);
              }, pause3);
            }, pause2);
          }
        }
      }
    }
  };

  display = async (spanTab, i, iSubTab) => {
    const {
      mainTxtShown,
      pause1,
      spanMainTitleRefTab,
      spanSubTitleRefTab,
      subTxtCurrentInd,
      timeToDisplayTxt1,
      timeToDisplayTxt2,
    } = this.state;

    if (mainTxtShown === false) {
      //   const spansArray = [...this.state.spanMainTitleRefTab];
      if (i < spanTab.length) {
        this.displayOneSentence(
          spanTab,
          i,
          spanMainTitleRefTab,
          iSubTab,
          timeToDisplayTxt1
        );
      } else {
        i = 0;
        setTimeout(() => {
          this.setState({ mainTxtShown: true }, () => {
            this.display(spanSubTitleRefTab, i, subTxtCurrentInd);
          });
        }, pause1);
      }
    } else {
      if (i < spanTab.length) {
        this.displayOneSentence(
          spanTab,
          i,
          spanSubTitleRefTab,
          iSubTab,
          timeToDisplayTxt2
        );
      } else {
        this.callDisplay(spanSubTitleRefTab, i, subTxtCurrentInd);
      }
    }
  };

  displayOneSentence = (spanTab, i, titleRefTab, iSubTab, time) => {
    setTimeout(() => {
      $(spanTab[i]).css("visibility", "visible");
      //   spansArray[i] = el;
      i++;
      // this.setState({ spanMainTitleRefTab: spansArray }, () => {
      this.setState({ titleRefTab: spanTab }, () => {
        // console.log(this.state.spanMainTitleRefTab);
        this.display(titleRefTab, i, iSubTab);
      });
    }, time);
  };

  // sectionStyle = () => {
  // console.log("section style");
  //   return {
  //     backgroundImage: "url(" + phI + ")",
  //     backgroundPosition: "right",
  //   };
  // };
  sectionStyle = {
    // console.log("section style");
    backgroundImage: "url(" + phI + ")",
    backgroundPosition: "right",
  };

  render() {
    const {
      mainTitle,
      aboutTitle,
      currentMainTitle,
      currentSubTtitle,
    } = this.state;

    const mainTitleSpans = [...mainTitle].map((letter, ind) => {
      // console.log("mainTitleSpan");
      // if(ind>= this.state)
      return (
        <span
          style={{ visibility: this.state.visibility }}
          key={ind}
          ref={(ref) => (this.spanMainTitleRef[ind] = ref)}
        >
          {letter}
        </span>
      );
    });

    // const mainTitleSpansMemo = React.memo([...mainTitleSpans]);

    const subTitleSpans = [...currentSubTtitle].map((letter, ind) => {
      // console.log("subTitleSpans");
      // console.log([...currentSubTtitle]);
      // console.log(this.spanSubTitleRefTab);
      return (
        <span
          style={{ visibility: this.state.visibility }}
          key={ind}
          ref={(ref) => (this.spanSubTitleRef[ind] = ref)}
          // ref={(ref) => this.setState(spanSubTitleRefTab: [ref)}
          //   ref={(ref) =>
          //     this.state((prevState) => {
          //       return {
          //         spanSubTitleRefTab: [...prevState.spanSubTitleRefTab, ref],
          //       };
          //     })
          //   }
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
        style={this.sectionStyle}
      >
        <header className="title sec-title title-col-bright title-bgr-dark-bright-grad">
          {aboutTitle}
        </header>
        {/* <img src={phI} alt="Me" className="photo2" /> */}
        <div className="container sec-cont">
          <div className="row justify-content-left cont-about-me about-me align-left">
            <div
              className="text1 row-text1 col-sm-10 mb-4 h1 animated "
              ref={this.mainTxt}
            >
              {/* {currentMainTitle} */}
              {mainTitleSpans}
              {/* {mainTitleSpansMemo} */}
            </div>
            <div
              className="text2 row-text2 col-sm-10 mb-4 h2 animated "
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

export default About;

// this.spanSubTitleRefTab = [];
// let currSpanTabLeng = this.spanSubTitleRefTab.length;
// let correctedArrayByLength;
// let difference = Math.abs(currSpanTabLeng - prevSpanTabLeng);
// let longer;
// if (currSpanTabLeng < prevSpanTabLeng) {
// currSpanTabLeng > prevSpanTabLeng ? longer=currSpanTabLeng : longer=prevSpanTabLeng;

//   for (let i = 0; i < difference; i++) {
//     this.spanSubTitleRefTab.pop();
//   }
// }

// console.log(this.spanSubTitleRefTab);
// console.log(this.spanSubTitleRefTab.length);
// console.log(this.state.currentSubTtitle);
// console.log(this.state.currentSubTtitle.length);
