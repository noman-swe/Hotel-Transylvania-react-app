import React from 'react';
import Slider from '../Slider/Slider';
import Rooms from '../../Rooms/Rooms';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Rooms></Rooms>
        </div>
    );
};

export default Home;