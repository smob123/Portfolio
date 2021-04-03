/**
 * displays a list of images to demonstrate skills.
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {

    const getSkills = () => {
        const skills = [
            {
                name: 'Frontend Web Development',
                level: 2,
                icon: faLaptopCode
            },
            {
                name: 'Backend Development',
                level: 2,
                icon: faServer
            },
            {
                name: 'Android Development',
                level: 2,
                icon: faAndroid
            },
            {
                name: 'Hybrid App Development',
                level: 2,
                icon: faMobileAlt
            }
        ];

        const htmlElements = [];

        for (const skill of skills) {
            htmlElements.push(
                <div key={`${Date.now()}_${skill.name}_skill`} className='card text-center py-5 d-flex flex-col align-items-center justify-content-center mb-6 flex-20-md'>
                    <FontAwesomeIcon icon={skill.icon} size='2x' className='d-block' />
                    <p>{skill.name}</p>
                </div>
            );
        }

        return htmlElements;
    }

    return (
        <div className='skills-section'>
            <div className='section-title d-flex align-items-center'>

                <h2>
                    <div className='stripe'></div>
                        My Skills
                    </h2>
                <div className='dots'></div>
                <div className='circle'></div>
                <span>02.</span>
            </div>

            <div>
                <div className='cards-container mt-2 d-flex align-items-center justify-content-center flex-col flex-row-md flex-wrap'>
                    {getSkills()}
                </div>
            </div>
        </div>
    );
}
