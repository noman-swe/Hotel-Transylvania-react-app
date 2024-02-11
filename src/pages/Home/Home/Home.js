import React from 'react';
import Slider from '../Slider/Slider';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import './Home.css';
import RoomsContrainer from '../../RoomsContainer/RoomsContrainer';

const Home = () => {

    return (
        <div>
            <Slider></Slider>
            <RoomsContrainer></RoomsContrainer>
            <About></About>
            <Contact></Contact>
        </div >
    );
};

export default Home;