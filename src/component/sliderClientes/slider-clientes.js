import React, { Component } from 'react';
import './slider-clientes.css';
import Slider from "react-slick";
import Client1 from "../../images/client1.jpg"


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
          <Slider {...settings}>
              <img className="slider-imagens-tamanho" src={Client1} />
              <img className="slider-imagens-tamanho" src={Client1} />
              <img className="slider-imagens-tamanho" src={Client1} />
              <img className="slider-imagens-tamanho" src={Client1} />
              <img className="slider-imagens-tamanho" src={Client1} />
              <img className="slider-imagens-tamanho" src={Client1} />
              <img className="slider-imagens-tamanho" src={Client1} />
              <img className="slider-imagens-tamanho" src={Client1} />
              <img className="slider-imagens-tamanho" src={Client1} />
          </Slider>
        </div>
      </div>
    );
  }
}