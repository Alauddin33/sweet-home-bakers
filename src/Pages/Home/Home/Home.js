import React from 'react';
import About from '../About/About';
import Slider from '../Slider/Slider';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;