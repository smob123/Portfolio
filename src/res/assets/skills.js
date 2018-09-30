import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';

export default class Skills extends Component {
    
    render() {
        return (
            <div className='skill-conatiner'>
                <div>
                    <FontAwesomeIcon icon={faCode} size='2x' />

                    <span><strong>Web development</strong></span>
                    <div id='skill-description'>
                        <span>Turning designs into fully functional websites</span>
                        </div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faAndroid} size='2x' />

                    <span><strong>Android development</strong></span>
                    <div id='skill-description'>
                        <span>Creating native android applications</span>
                        </div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faMobileAlt} size='2x' />

                    <span><strong>Hybrid app development</strong></span>
                    <div id='skill-description'>
                        <span>Creating hybrid application that work on both Android and IOS using Javascript</span>
                        </div>
                </div>
            </div>
        );
    }
}
