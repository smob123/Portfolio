/**
 * the about me section.
 */

import React from 'react';
import ProfileImage from '../../images/profile-img.jpg';

export default function About() {
    return (
        <div className='about-section d-flex flex-col flex-row-md justify-content-between-md'>

            {/* a profile image */}
            <div className='text-center profile-img-container flex-basis-45-md'>
                <img src={ProfileImage} alt='personal image' />
            </div>

            <div className='flex-basis-45-md'>
                <div className='section-title d-flex align-items-center'>

                    <h2>
                        <div className='stripe'></div>
                        About Me
                    </h2>
                    <div className='dots'></div>
                    <div className='circle'></div>
                    <span>01.</span>
                </div>

                <h3 className='underline mb-6'>
                    My name is Sultan Banabila, I am a passionate web &#38; mobile developer, with 2 years of professional experience.
                </h3>

                {/*a subheading */}
                <span className='light-text small-text'>
                    I enjoy turning designs into fully functional websites,
                    creating native android applications, as well as developing
                    hybrid application that work on both Android and IOS using
                    a variety of frameworks.
                </span>
            </div>
        </div>
    );
}