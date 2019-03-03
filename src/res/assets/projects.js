import React, { Component } from 'react';
import '../styles/styles.css';
import contributionsData from '../data/contributions-data';
import projectData from '../data/projects-data';

let data = contributionsData.concat(projectData);
let projects = [];
let tech = [];
let imageClassName;

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].technologies.length; j++) {
        tech.push(<img src={data[i].technologies[j]} key={i + j} className='tech' alt={data[i].title} />);
    }

    data[i].type === 'mobile-app' ? imageClassName = 'mobile-app-img' : imageClassName = 'website-img';

    projects.push(
        <div className='project-container' key={i + 1}>
            <div>
                <img src={data[i].logo} className={imageClassName} alt={data[i].title} />
            </div>

            <div className='project-details' key={i + 2}>
                <h3>{data[i].title}</h3>
                <span>{data[i].description}</span>
                < br />

                {
                    data[i].link !== undefined ?
                        <a href={data[i].link} target='_blank' rel="noopener noreferrer">
                            <button>View on GitHub</button>
                        </a>

                        : <span className='private-project-txt'>Repository is private</span>
                }

                {
                    data[i].url !== undefined &&
                    <a href={data[i].url} target='_blank' rel="noopener noreferrer">
                        <button>Visit website</button>
                    </a>
                }

                <br />
                {tech}
            </div>
        </div>
    );

    tech = [];
}

export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        this.setState({ projects });
    }

    render() {
        return (
            <section id="projects">
                <h2>Projects and Contributions</h2>
                <div className="projects-content">
                    {this.state.projects}
                </div>
            </section>
        );
    }
}
