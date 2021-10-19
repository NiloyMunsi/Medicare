import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../photos/banner/banner5.jpg'
import banner2 from '../../photos/banner/banner3.jpg'
import banner3 from '../../photos/banner/banner1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div  >
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption className="text-dark">
      <h3>CARE + CLINIC</h3>
      <p>MODERN AND INNOVATIVE HEALTHCARE CENTER PROVIDING UNIQUE TREATMENT USEING PATENTED TECNOLOGY.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={banner3}
      alt="Second slide"
    />

    <Carousel.Caption className="text-light">
      <h3>CARE + CLINIC</h3>
      <p>CARE + CLINIC WAS FOUNDED BY CURABITUR A RISUS FACILISIS, VARIUS TURPIS IN, SOLLICITUDIN SAPIEN. PELLENTESQUE VITAE PORTTITOR URNA. MAURIS EFFICITUR URNA QUIS..</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={banner2}
      alt="Third slide"
    />

    <Carousel.Caption className="text-warning">
      <h3>CARE + CLINIC</h3>
      <p>FREE ONE HOUR CONSULTATION FOR ALL FIRST TIME PATIENTS..</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;