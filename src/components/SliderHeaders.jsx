import React, { Component } from "react";
import $ from "jquery";

class SliderHeaders extends Component {
  headersCaptsRef = React.createRef();

  componentDidMount() {
    this.callVisibilityClass();
    console.log(this.props.parentClassName());
  }

  callVisibilityClass = () => {
    let captionChildren = this.headersCaptsRef.current.childNodes;
    // let captionChildren = $(this.headersCaptsRef.current).children();
    // console.log("callVisibilityClass");
    console.log(captionChildren);
    captionChildren.forEach((element) => {
      this.props.getCaptsTab(element);
    });
  };

  render() {
    let carslCaption;
    let indexNo = this.props.getIndexNo;
    const carslHeaders = this.props.getHeadersCaption.map((header, index2) => {
      if (index2 === 0) {
        carslCaption = (
          <div
            // className={`capt carl-caption-capt head1 animated ${this.props.getVisibleClass}`}
            // className={() => this.props.getVisibleClass(1)}
            className={this.props.getVisibleClass(1)}
            key={index2}
          >
            {header}
          </div>
        );
      } else if (indexNo === 1 && index2 === 1) {
        carslCaption = (
          <div
            // className={`carl-caption-capt sign carl-caption-sign animated ${this.props.getVisibleClass}`}
            // className={() => this.props.getVisibleClass(3)}
            className={this.props.getVisibleClass(3)}
            key={index2}
          >
            <img src={header} alt="50 ideas/h" className="sign-img"></img>
          </div>
        );
      } else {
        carslCaption = (
          <div
            // className={`capt carl-caption-capt animated ${this.props.getVisibleClass}`}
            // className={() => this.props.getVisibleClass(2)}
            className={this.props.getVisibleClass(2)}
            key={index2}
          >
            {header}
          </div>
        );
      }
      return carslCaption;
    });

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
