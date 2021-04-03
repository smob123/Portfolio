import React from 'react';
import Timeline from './timeline';
import { work, education } from '../../data/experience';

export default function Resume() {
    return (
        <div>
            <div className='section-title d-flex align-items-center'>

                <h2>
                    <div className='stripe'></div>
                    My Resume
                </h2>
                <div className='dots'></div>
                <div className='circle'></div>
                <span>03.</span>
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
        </div>
    );
}