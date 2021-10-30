import React from 'react';
import Features from '../Features/Features';
import Packages from '../Packages/Packages';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Packages></Packages>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;