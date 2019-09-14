import React, { Component } from 'react';
import './slider-clientes.css';


export default class SliderClientes extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    };
    return (
      <div className="container-slider">
        <div className="slider-texto">
            <label>Alguns de Nossos Clientes: </label>
        </div>
        <div className="slider-imagens">
        
        </div>
      </div>
    );
  }
}