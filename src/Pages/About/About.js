import React from 'react';
import './About.css';
import sujan from '../../images/about/sujan.png'
const About = () => {
    return (
        <div className='about'>
            <div>
                <h1>About Me</h1>
                <img className= 'img-fluid' src= {sujan} alt="" />
            </div>
            <div>
                <p> My name is Sujan Bhowmick and I am a full time Web Developer. I am good at creating unique design and then make it as eye catche website, developing rich user experience and coding with JavaScript. I am always looking for something interesting and beautiful</p>
                <h3>Skills</h3>
                <button className='w-50'>html</button>
                <button className='w-50'>css</button>
                <button className='w-50'>html5</button>
                <button className='w-50'>css3</button>
                <button className='w-50'>html</button>
                <button className='w-50'>html</button>
                <button className='w-50'>html</button>
                <button className='w-50'>html</button>
                <button className='w-50'>html</button>
                <button className='w-50'>html</button>
                <button className='w-50'>html</button>
                
            </div>
        </div>
    );
};

export default About;