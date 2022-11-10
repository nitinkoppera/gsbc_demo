import Link from 'next/link';
import React, { useState } from 'react';

function AboutComp({ intersectionRef }) {
    return (
        <div id='aboutUs' className='aboutUs-container' ref={intersectionRef}>
            <div className="aboutUs-div">
                <div className="aboutUs-left">
                    <span className='aboutUs-left-heading'>About us</span>
                    <span className='aboutUs-left-content'>Slum Soccer exists to foster sustainable development within otherwise marginalised populations of India. We aim to provide long term solutions to combat rife homelessness and improve living standards within underprivileged areas. Our approaches are centred on building self-sufficient communities. The game of Football is our means to that end- connecting...</span>
                    {/* <a href="/about"><span>Read More</span></a> */}
                    <Link href="/about" passHref>
                        <span>Read More</span>
                    </Link>
                </div>
                <div className="aboutUs-right">
                    <div className="aboutUs-tag">
                        <div className="tag-heading">Our Philosophy</div>
                        <div className="tag-content">Slum Soccer exists to foster sustainable development within otherwise marginalised...</div>
                    </div>
                    <div className="aboutUs-tag">
                        <div className="tag-heading">Volunteer</div>
                        <div className="tag-content">We have always worked with the aim of reaching out to the Indian homeless using...</div>
                    </div>
                    <div className="aboutUs-tag">
                        <div className="tag-heading">Latest Events</div>
                        <div className="tag-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</div>
                    </div>
                    <div className="aboutUs-tag">
                        <div className="tag-heading">Our Awards</div>
                        <div className="tag-content">Indian NGO Slum Soccer has won the inaugural FIFA Diversity Award today. The award was created by FIFA...</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComp;