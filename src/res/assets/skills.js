import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';

export default class Skills extends Component {

    render() {
        return (
            <div>
                <h2>What I can do</h2>
                <div className='skill-conatiner'>
                    <div id='skill-card' className='translateToBottom'>
                        <FontAwesomeIcon icon={faCode} size='4x' className='orange-icon' />

                        <span><strong>Web development</strong></span>
                        <div id='skill-description'>
                            <span>Turning designs into fully functional websites.</span>
                        </div>
                    </div>
                    <div id='skill-card' className='translateToBottom'>
                        <FontAwesomeIcon icon={faAndroid} size='4x' className='orange-icon' />

                        <span><strong>Android development</strong></span>
                        <div id='skill-description'>
                            <span>Creating native android applications.</span>
                        </div>
                    </div>
                    <div id='skill-card' className='translateToBottom'>
                        <FontAwesomeIcon icon={faMobileAlt} size='4x' className='orange-icon' />

                        <span><strong>Hybrid app development</strong></span>
                        <div id='skill-description'>
                            <span>Creating hybrid application that work on both Android and IOS using Javascript frameworks.</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
