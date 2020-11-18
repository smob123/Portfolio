/**
 * the about me section.
 */

import React, { Component } from 'react';
import Timeline from './timeline';
import { work, education } from '../../data/experience';
import Skills from '../home/skills';

let myInfo = [];

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = { myInfo: this.addInfo() };
    }

    /**
     * adds list of general information to the page
     */
    addInfo() {
        // list of general information
        const info = [
            { title: 'First Name', desc: 'Sultan' },
            { title: 'Last Name', desc: 'Banabila' },
            { title: 'Nationality', desc: 'Saudi' },
            { title: 'Residence', desc: 'New Zealand' },
            { title: 'Languages', desc: 'Arabic, English' }
        ];

        // add each item as two spans inside a div
        info.forEach((item, index) => {
            myInfo.push(
                <div className='info-item' key={`${item.title}${index}`}>
                    <span className='title'>{item.title}</span>
                    <span className='desc'>{item.desc}</span>
                </div>
            );
        });

        return myInfo;
    }

    render() {
        return (
            <div className='container'>
                {/* heading */}
                <h1 className='section-heading'>About</h1>
                <h1 className='secondary-color'>Me</h1>

                {/*a subheading */}
                <span>
                    My name is Sultan, I am a software developer
                    who is enthusiastic about web and mobile development.
                    I enjoy turning designs into fully functional websites,
                    creating native android applications, as well as developing
                    hybrid application that work on both Android and IOS using
                    a variety of frameworks.
                    </span>

                {/* a profile image */}
                <div className='img-container'>
                    <img src={require('../../images/profile-img.jpg')} alt='phone and laptop' />
                </div>

                {/* the list of information that was added above */}
                <div className='info-container'>
                    <div className='info-list'>
                        {myInfo}
                    </div>

                    {/* a custom line divider */}
                    <div className='divider'></div>

                </div>

                {/* timelines showing experiences */}
                <div className='timelines-container'>
                    <div className='expirience-container'>
                        <Timeline items={work} title={'Experience'} />
                    </div>

                    <div className='education-container'>
                        <Timeline items={education} title='Education' />
                    </div>
                </div>

                {/* list of skills */}
                <div>
                    <Skills />
                </div>
            </div>
        );
    }
}