import React, { Component } from 'react';
import './slider-home.css';


export default class SliderHome extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      fade: true,
      cssEase: 'linear'
    };
    return (
      <div className="container-slider-serivcos">
        <div className="slider-texto">
            <label>Sejam Bem Vindos: </label>
        </div>
        <div className="slider-imagens-bg">
          
        </div>
      </div>
    );
  }
}