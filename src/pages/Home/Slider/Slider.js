import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import './Slider.css';

import slider1 from '../../../images/slider/slider-1.png';
import slider2 from '../../../images/slider/hotel-2.png';
import slider3 from '../../../images/slider/hotel-3.png';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="container p-0">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <div className="banner-img ">
                        <img src={slider1} className='img-fluid d-block w-100 slider-img' alt="" />
                    </div>
                    <Carousel.Caption className='slider-caption py-4'>
                        <h3>Enjoy A Luxury.</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <div className="banner-img">
                        <img src={slider2} className='img-fluid d-block w-100' alt="" />
                    </div>

                    <Carousel.Caption className='slider-caption py-4'>
                        <h3>Make Your Vacation Comfortable.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <div className="banner-img">
                        <img src={slider3} className='img-fluid d-block w-100' alt="" />
                    </div>

                    <Carousel.Caption className='slider-caption py-4'>
                        <div>
                            <h3>We Hope You'll Enjoy Your Stay.</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Slider;