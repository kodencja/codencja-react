import React, { Component } from "react";
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
    CrslClassActive: "active",
    CrslItemClass: "carousel-item ",
    // totalTabCarouselLength: 0,
    // carouselHeadIndexNumber: 0,
    // indexNumber: 0,
  };

  render() {
    return (
      <Carousel style={{ position: "relative" }} fade={true}>
        <Carousel.Item>
          <img
            src={photo1}
            // src={this.state.carouselItems[2]}
            alt="Slide One"
            // className="carous-img carous-item-img"
          />
          <Carousel.Caption>
            <div className="capt carl-caption-capt head1">
              {this.state.carouselHead[0][0]}
            </div>
            <div className="capt carl-caption-capt">
              {this.state.carouselHead[0][1]}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={photo2}
            // src={this.state.carouselItems[2]}
            alt="Slide Two"
            // className="carous-img carous-item-img"
          />
          <Carousel.Caption>
            <div className="capt carl-caption-capt head1">
              {this.state.carouselHead[2][0]}
            </div>
            <div className="capt carl-caption-capt">
              {this.state.carouselHead[2][1]}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={photo3}
            // src={this.state.carouselItems[2]}
            alt="Slide Two"
            // className="carous-img carous-item-img"
          />
          <Carousel.Caption>
            <div className="capt carl-caption-capt head1">
              {this.state.carouselHead[3][0]}
            </div>
            <div className="capt carl-caption-capt">
              {this.state.carouselHead[3][1]}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselSlider;
