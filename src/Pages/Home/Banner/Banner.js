import React from 'react';
import './Bannner.css'
import banner from '../../../images/banner/banner.jpg'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <img className='img-fluid' src={banner} alt="" />
            <Carousel.Caption>
                <h3 className='banner'><span style={{color: 'goldenrod'}}>Take Your Fitness </span>
                   <span className='text-danger'>To</span> The <span className='text-primary'>Next</span> Level</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </div>
    );
};

export default Banner;