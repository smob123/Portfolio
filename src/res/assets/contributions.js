import React, { Component } from 'react';
import '../styles/styles.css';
import data from '../data/contributions-data';

let projects = [];
let tech = [];
let className = '';

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].technologies.length; j++) {
        tech.push(<img src={data[i].technologies[j]} key={i} className='tech' />);
    }

    i % 2 === 0 ? className = 'project-left' : className = 'project-right';

    projects.push(
        <div className={className}>
            <div>
                <img src={data[i].logo} className='project-logo' />
            </div>

            <div className='project-details'>
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
