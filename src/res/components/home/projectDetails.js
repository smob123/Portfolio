/**
 * displays a project's information
 */

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faNewspaper, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default class ProjectDetails extends Component {

    constructor(props) {
        super(props);

        this.state = { projectInfo: props.projectInfo, projectTech: this.addProjectTechnologies() };
    }

    /**
     * adds the list of technologies used in the project as span elements
     */
    addProjectTechnologies() {
        const techList = this.props.projectInfo.technologies;
        const tech = [];
        techList.forEach((item, index) => {
            tech.push(
                <span className='tech-item'>
                    {item} {index < techList.length - 1 ? ', ' : '.'}
                </span>
            );
        });

        return tech;
    }

    /**
     * calls the parent's function to hide this component, and then remove it
     */
    hideComponent() {
        this.props.hideComponent();
    }

    render() {
        return (
            <div className='project-details-container'>
                <div className='content'>
                    {/* button to remove this component */}
                    <div className='hide-details-container' onClick={() => this.hideComponent()}>
                        <div>X</div>
                    </div>

                    {/* project's image */}
                    <div className='image-container'>
                        <img className='project-container' src={this.state.projectInfo.logo} alt={this.state.projectInfo.title} />
                    </div>

                    {/* the project's name */}
                    <div className='title-container'>
                        <h2 className='secondary-color'>{this.state.projectInfo.title}</h2>
                    </div>

                    {/* list of technologies used in the project */}
                    <div className='tech-container'>
                        <div className='title'>
                            <FontAwesomeIcon icon={faCode} />
                            <span className='title'>&nbsp;Technologies:&nbsp;</span>
                        </div>
                        <div>
                            {this.state.projectTech}
                        </div>
                    </div>

                    {/* project's description */}
                    <div className='desc-container'>
                        <div className='title'>
                            <FontAwesomeIcon icon={faNewspaper} />
                            <span>&nbsp;Description:&nbsp;</span>
                        </div>

                        <span>
                            {this.state.projectInfo.description}.
                        </span>
                    </div>

                    {/* buttons to link to project's code, and a live preview of the project  */}
                    <div className='btns-container'>
                        {
                            // check if there is a link to the code
                            this.state.projectInfo.link ?
                                <a className='m-button' href={this.state.projectInfo.link} target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={faCode} />
                                    <span>&nbsp;View Code</span>
                                </a>
                                :
                                <div className='m-button inactive'>
                                    <span>Code is Private</span>
                                </div>
                        }

                        {
                            // check if there is a link for a live preview for the project
                            this.state.projectInfo.url ?
                                <a className='m-button' href={this.state.projectInfo.url} target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    <span>&nbsp;Live Preview</span>
                                </a>
                                :
                                <div className='m-button inactive'>
                                    <span>No live preview</span>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}