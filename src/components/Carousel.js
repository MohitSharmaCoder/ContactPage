import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Sstyle = ()=>{
  return (
    <style>
      {`
      .slick-arrow, .slick-prev,
      .slick-arrow, .slick-next{
          background-color: aquamarine;
      }
      .slick-arrow:hover, .slick-prev:hover,
      .slick-arrow:hover, .slick-next:hover{
          background-color: aquamarine;
      }
      `}
    </style>
  )
}


const Carousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="slider mt-5 mx-5">
      <Slider {...settings}>{props.children}</Slider>
      <Sstyle/>
    </div>
  );
};

export default Carousel;