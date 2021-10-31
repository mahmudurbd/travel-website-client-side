import React from 'react';
import './Slider.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/img-1.jpg';
import img2 from '../../../images/img-2.png';
import img3 from '../../../images/img-3.png';

const Slider = () => {
    return (
        <Carousel fade className="h-100 overflow-hidden">
            <Carousel.Item>
                <img
                className="d-block w-100 img-fluid"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption className="carousel-cap">
                <h1>Indonesia</h1>
                <p>Sometimes, strange new places feel more like home than home does.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />

                <Carousel.Caption className="carousel-cap">
                <h1>Australia</h1>
                <p>Explore the beauty of world where your mind goes</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
                <Carousel.Caption className="carousel-cap">
                <h1>Switzerland</h1>
                <p>With the new adventure start your journey</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;