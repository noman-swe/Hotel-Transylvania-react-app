import React from 'react';
import './About.css';
import aboutImg from '../../images/slider/hotel-3.png';
import { Card } from 'react-bootstrap';


const About = () => {
    return (
        <div className='container p-0'>
            <div className="row">
                <div className="col-12 ">
                    <Card.Title className='text-center about-header my-4'>About Us</Card.Title>
                    <Card className='main-card '>
                        <div className="card-image-container text-center w-100">
                            <Card.Img variant="top" src={aboutImg} className='w-75' />
                        </div>
                        <div className="card-info">
                            <Card.Body>
                                <p className='p-4 mx-4' >Descendants of area pioneers, the Peterson Family knew that the west side of the Olympic Peninsula was a special place.  Lush forests, rushing rivers, beautiful mountains and beaches led the first settlers to plant roots in Forks.  Soon after, the Hoh Valley became a draw as well.  As owners, we strive to provide our guests with a relaxed and memorable experience in the amazing and unforgettable Hoh Rainforest. </p>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default About;