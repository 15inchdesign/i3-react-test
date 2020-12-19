import React, { Component } from "react";
import Slider from "react-slick";
import { LoremPicsum } from "react-lorem-picsum";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      lazyLoad: 'ondemand',
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
        <div>
            <LoremPicsum id={2} width={1920} height={1080} />
            <div className='slick-caption'>i3 React Test</div>
          </div>
          <div>  
            <LoremPicsum id={2} width={1920} height={1080} />
            <div className='slick-caption'>i3 React Test</div>
          </div>
          <div>
            <LoremPicsum id={2} width={1920} height={1080} />
            <div className='slick-caption'>i3 React Test</div>
          </div>
        </Slider>
      </div>
    );
  }
}