import React from 'react';
import Slider from '../Slider/Slider';
import Rooms from '../../Rooms/Rooms';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Rooms>
                <div className="row">
                    <div className="col-2 mx-auto text-center">
                        <Button size="lg" className='see-rooms-btn w-100 border-0
                        '>
                            <Link to={'/rooms'}>Watch Out</Link>
                        </Button>
                    </div>
                </div>
            </Rooms>
            <About></About>
            <Contact></Contact>

        </div >
    );
};

export default Home;