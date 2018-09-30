import React, { Component } from 'react';
import '../styles/styles.css';
import data from '../data/contributions-data';

let projects = [];
let tech = [];
let className = '';

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].technologies.length; j++) {
        tech.push(<img src={data[i].technologies[j]} key={i+j} className='tech' alt={data[i].title} />);
    }

    i % 2 === 0 ? className = 'project-left' : className = 'project-right';

    projects.push(
        <div className={className} key={i+1}>
            <div>
                <img src={data[i].logo} className='project-logo' alt={data[i].title} />
            </div>

            <div className='project-details' key={i+2}>
                <h3>{data[i].title}</h3>
                <span>{data[i].description}</span>
                < br />

                { data[i].link !== undefined &&
                    <a href={data[i].link} target='_blank'>
                        <button>View on GitHub</button>
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
            <section id="contributions">
                <div className="contributions-content">
                    <h2>Contributions</h2>
                    {projects}
                </div>
            </section>
            );
    }
}
