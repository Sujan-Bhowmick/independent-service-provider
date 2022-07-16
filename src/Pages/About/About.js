import React from 'react';
import './About.css';
import sujan from '../../images/about/sujan.png'
const About = () => {
    return (
        <div className='about'>
            <div className='image'>
                <h1 className='mb-5'>About Me</h1>
                <img style={{ height: '259px' }} className='img-fluid' src={sujan} alt="" />
            </div>
            <div className='skills'>
                <p className='mt-2'> My name is Sujan Bhowmick and I am a full time Web Developer. I am good at creating unique design and then make it as eye catching website, developing rich user experience and coding with JavaScript. I am always looking for something interesting and beautiful.</p>
                <h3>Skills</h3>
                <span className=''>
                    <button className='w-25 m-2 p-1 btn btn-dark'>HTML</button>
                    <button className='w-25 m-2 p-1 btn btn-dark '>CSS</button>
                    <button className='w-25 m-1 p-1 btn btn-dark '>HTML5</button>
                    <button className='w-25 m-1 p-1 btn btn-dark'>css3</button>
                    <button className='w-25 m-1 p-1 btn btn-dark'>Bootstrap</button>
                    <button className='w-25 m-1 p-1 btn btn-dark'>Tailwind</button>
                    <button className='w-25 m-1 p-1 btn btn-dark'>javaScript</button>
                    <button className='w-25 m-1 p-1 btn btn-dark'>React.js</button>
                    <button className='w-25 m-1 p-1 btn btn-dark'>MongoDB</button>
                </span>
            </div>
        </div>
    );
};

export default About;