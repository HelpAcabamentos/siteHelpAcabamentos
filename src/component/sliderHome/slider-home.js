import React, { Component } from 'react';
import './slider-home.css';
import { Zoom } from 'react-slideshow-image';
import Servicos1 from "../../images/servicos/servicos1.jpg"


const images = [
  Servicos1,
  Servicos1,
  Servicos1,
  Servicos1,
  Servicos1,
  Servicos1
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

export default class SliderHome extends Component {
  render() {
    return (
      <div className="container-slider-serivcos">
        <div className="slider-imagens-bg">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%", height: "450px"}} src={each} />)
          }
        </Zoom>
        </div>
      </div>
    );
  }
}