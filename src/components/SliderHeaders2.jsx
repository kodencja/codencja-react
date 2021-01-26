import React, { Component } from "react";
import $ from "jquery";

class SliderHeaders extends Component {
  state = {
    headerCaptsTab: [],
  };

  headersCaptsRef = React.createRef();

  // headerCaptsVar = [];

  componentDidMount() {
    // componentDidUpdate() {
    console.log($(this.headersCaptsRef.current).children());

    console.log(this.state.headerCaptsTab.length);

    // let captsVar;
    // if (this.state.headerCaptsTab.length > 0) {
    //   captsVar = [...this.state.headerCaptsTab];
    //   console.log(captsVar);
    // } else {
    //   captsVar = this.state.headerCaptsTab;
    //   console.log(captsVar);
    // }
    // A
    // let captionChildren = $(this.headersCapts.current).children();
    let captionChildren = this.headersCaptsRef.current.childNodes;
    // this.headerCaptsVar.push(captionChildren);
    captionChildren.forEach((element) => {
      // this.headerCaptsVar.push(element);
      // console.log(element);
      this.props.getCaptsTab(element);
      // this.setState(
      //   {
      //     headerCaptsTab: [captsVar, element],
      //   },
      //   () => console.log(this.state.headerCaptsTab)
      // );
    });
    // this.headerCaptsVar = captionChildren;
    // console.log(this.headerCaptsTab);
    // this.setState(
    //   {
    //     headerCaptsTab: [captsVar, captionChildren],
    //   },
    //   () => console.log(this.state.headerCaptsTab)
    // );
  }

  // componentDidUpdate() {
  // getDerivedStateFromProps() {
  // let captionChildren = $(this.headersCapts.current).children();
  // this.headerCaptsVar.push(captionChildren);
  // console.log(this.headerCaptsVar);
  // }

  handleHeaderCapts = () => {
    // this.headerCaptsVar.push(this.headersCaptsRef.current.childNodes);
    // console.log(this.headerCaptsVar);
    // this.setState(
    //   {
    //     headersTab: this.headerCaptsVar,
    //   },
    //   () => console.log(this.state.headersCapts)
    // );
  };

  render() {
    // let headersTab = [];
    let carslCaption;
    let indexNo = this.props.getIndexNo;
    const carslHeaders = this.props.getHeadersCaption.map((header, index2) => {
      if (index2 === 0) {
        carslCaption = (
          <div className="capt carl-caption-capt head1" key={index2}>
            {header}
          </div>
        );
      } else if (indexNo === 1 && index2 === 1) {
        carslCaption = (
          <div
            className="carl-caption-capt sign carl-caption-sign"
            key={index2}
          >
            <img src={header} alt="50 ideas/h" className="sign-img"></img>
          </div>
        );
      } else {
        carslCaption = (
          <div className="capt carl-caption-capt" key={index2}>
            {header}
          </div>
        );
      }

      // let headersCaptsAll;
      // headersCaptsAll = $(this.headersCapts.current);
      // console.log(headersCaptsAll);

      // console.log(this.headersCapts);
      // console.log(this.headersCapts.current);
      return carslCaption;
    });

    // console.log(this.headersCapts);
    // console.log(this.headersCapts.current);
    // console.log($(this.headersCapts.current));
    // console.log($(this.headersCapts.current).children());

    // if (this.headersCapts.current !== null) {
    // this.state.headersTab.push(this.headersCapts.current.childNodes);
    // console.log(headersTab);
    // this.handleHeaderCapts();

    // this.setState(
    //   (prevState) => {
    //     return {
    //       headersCapts: prevState.headersCapts.push(headerCaptsVar),
    //     };
    //   },
    //   () => console.log(this.state.headersCapts)
    // );
    // }

    return (
      <div
        // className="carousel-caption text-center justify-content-center"
        className="carousel-caption"
        // key={parentIndex}
        ref={this.headersCaptsRef}
      >
        {carslHeaders}
      </div>
    );
  }
}

export default SliderHeaders;
