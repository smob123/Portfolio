import React, { Component } from 'react';
import '../styles/styles.css';
import data from '../data/projects-data';

let projects = [];
let tech = [];
let className, imageClassName;

for (let i = 0; i < data.length; i++) {

    for (let j = 0; j < data[i].technologies.length; j++) {
        tech.push(<img src={data[i].technologies[j]} className='tech' key={j} alt={data[i].title} />);
    }

    i % 2 === 0 ? className = 'project-left' : className = 'project-right';

    data[i].type === 'mobile-app' ? imageClassName = 'mobile-app-img' : imageClassName = 'website-img';

    projects.push(
        <div className={className} key={i}>
            <div>
                <img src={data[i].logo} className={imageClassName} alt={data[i].title} />
                <img src={data[i].logo} className={imageClassName} id='reflection' alt={data[i].title} />
            </div>

            <div className='project-details'>
                <h3>{data[i].title}</h3>
                <span>{data[i].description}</span>
                < br />

                <a href={data[i].link} target='_blank'>
                    <button>View on GitHub</button>
                </a>

                {
                    data[i].url !== undefined &&
                    <a href={data[i].url} target='_blank'>
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

export default class Contributions extends Component {
    render() {
        return (
            <section id="projects-section">
                <div className="projects-content">
                    <h2>Personal Projects</h2>
                    {projects}
                </div>
            </section>
        );
    }
}
