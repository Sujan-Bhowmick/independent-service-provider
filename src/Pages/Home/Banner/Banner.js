import React from 'react';
import './Bannner.css'
import banner from '../../../images/banner/banner.jpg'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <img className='img-fluid' src={banner} alt="" />
            <Carousel.Caption>
                <h1 className='banner fw-bold'><span style={{color: 'goldenrod'}}>Take Your Fitness </span>
                 <span> To The Next Level</span></h1>
            </Carousel.Caption>
        </div>
    );
};

export default Banner;