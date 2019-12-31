/**
 * contributions, and personal projects section.
 */

import React, { Component } from 'react';
import contributionsData from '../../data/contributions-data';
import projectData from '../../data/projects-data';
import ProjectDetauls from './projectDetails';

let data = [...contributionsData, ...projectData];

export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: this.addProjects(),
            projectDetails: null
        }
    }

    /**
     * adds list of projects to the section
     */
    addProjects() {
        const projects = [];
        // add each project's image, and data inside of a div
        for (let i = 0; i < data.length; i++) {
            projects.push(
                <div className='project-container' key={i + 1}>
                    <div>
                        <img src={data[i].logo} alt={data[i].title} />
                    </div>

                    {/* overlay that displays on hover, and shows the project's name */}
                    <div className='project-title-container' key={i + 2} onClick={() => this.setProjectDetails(data[i])}>
                        <h3>{data[i].title}</h3>
                    </div>
                </div>
            );
        }

        return projects;
    }

    /**
     * adds the project details component to the dom
     * @param info project's information
     */
    setProjectDetails(info) {
        // add an overlay to the parent element
        const parent = document.querySelector('#projects');
        parent.classList.add('overlayed');
        // add the project's details to the dom
        this.setState({ projectDetails: <ProjectDetauls projectInfo={info} hideComponent={this.removeProjectDetauls.bind(this)} /> });
    }

    componentDidUpdate() {
        // if the project details component was added
        if (this.state.projectDetails) {
            // animate the component into view after 3ms
            setTimeout(() => {
                const projectsSection = document.querySelector('#projects');
                const detailsContainer = document.querySelector('.project-details-container');
                projectsSection.style['overflow-y'] = 'hidden';
                detailsContainer.classList.add('visible');
            }, 300);
        }
    }

    /**
     * removes the project details component to the dom
     */
    removeProjectDetauls() {
        // remove the overlay from the parent
        const parent = document.querySelector('#projects');
        parent.classList.remove('overlayed');
        // animate the project's details to exit the view
        const detailsContainer = document.querySelector('.project-details-container');
        detailsContainer.classList.remove('visible');

        // wait for 3ms, so the animation finishes, and then remove the component from the dom
        setTimeout(() => {
            const projectsSection = document.querySelector('#projects');
            projectsSection.style['overflow-y'] = 'initial';
            this.setState({ projectDetails: null });
        }, 300);

    }

    render() {
        return (
            <section id="projects">
                {/* section heading */}
                <h1 className='section-heading'>My</h1>
                <h1 className='secondary-color'>Work</h1>

                {/* list of projects */}
                <div className="projects-content">
                    {this.state.projects}
                </div>

                {/* project details component */}
                {this.state.projectDetails}
            </section>
        );
    }
}
