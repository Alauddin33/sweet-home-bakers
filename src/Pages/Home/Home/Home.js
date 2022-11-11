import React from 'react';
import About from '../About/About';
import Slider from '../Slider/Slider';
import Services from '../Services/Services';
import Trust from '../Trust/Trust';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <About></About>
            <Trust></Trust>
        </div>
    );
};

export default Home;