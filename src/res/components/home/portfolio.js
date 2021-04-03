/**
 * contributions, and personal projects section.
 */

import React, { useState, useEffect } from 'react';
import projectData from '../../data/projects-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faNewspaper, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(getProjects());
    }, []);

    /**
     * adds list of projects to the section
     */
    const getProjects = () => {
        const projects = [];
        // add each project's image, and data inside of a div
        for (let i = 0; i < projectData.length; i++) {
            projects.push(
                <div className='mb-2 d-flex-md justify-content-between' key={i + 1}>
                    <div className='flex-basis-45-md'>
                        <img src={projectData[i].logo} alt={projectData[i].title} />
                    </div>

                    <div className='mb-6 flex-basis-45-md'>
                        <h2>{projectData[i].title}</h2>
                        <p className='light-text mb-6'>{projectData[i].description}.</p>
                        <p className='light-text'>Technologies Used:</p>
                        <ul className='pl-3'>
                            {
                                projectData[i].technologies.map((item, index) => (
                                    <li key={`${index}_${item}`} className='light-text mb-2'>
                                        <h5 className='d-inline-block m-0 muted-text'>0{index + 1}.</h5>
                                        <span> {item}</span>
                                    </li>
                                ))
                            }
                        </ul>

                        {/* buttons to link to project's code, and a live preview of the project  */}
                        <div className='mb-6'>
                            {
                                // check if there is a link to the code
                                projectData[i].link ?

                                    <a href={projectData[i].link} target='_blank' rel='noopener noreferrer'>
                                        <button className='btn bg-orange btn-large mb-2 w-100'>
                                            <FontAwesomeIcon icon={faCode} />
                                            <span>&nbsp;View Code</span>
                                        </button>
                                    </a>
                                    :
                                    <button className='btn btn-large btn-inactive mb-2 w-100'>
                                        Code is Private
                                    </button>
                            }

                            {
                                // check if there is a link for a live preview for the project
                                projectData[i].url ?
                                    <a href={projectData[i].url} target='_blank' rel='noopener noreferrer'>
                                        <button className='btn bg-orange btn-large w-100'>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            <span>&nbsp;Live Preview</span>
                                        </button>
                                    </a>
                                    :
                                    <button className='btn btn-large btn-inactive w-100'>
                                        <span>No live preview</span>
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            );
        }

        return projects;
    }

    return (
        <section id="projects">
            {/* section heading */}
            <div className='section-title d-flex align-items-center'>
                <h2>
                    <div className='stripe'></div>
                            My Portfolio
                        </h2>
                <div className='dots'></div>
                <div className='circle'></div>
                <span>04.</span>
            </div>

            {/* list of projects */}
            <div className="projects-content">
                {projects}
            </div>
        </section>
    );
}
