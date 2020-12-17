import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      //slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        <div>
            <img src="http://placekitten.com/g/400/200" alt="Img1" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="Img2"/>
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="Img3"/>
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="Img4"/>
          </div>
        </Slider>
      </div>
    );
  }
}