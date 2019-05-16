import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
    render() {
        return (<div>
            <p>Sultan Banabila &copy;.</p>

            <div className="social-media">
                <a href="https://github.com/smob123" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size='2x' />
                </a>

                <a href="https://www.linkedin.com/in/sultan-b-7493a6154" target="_blank" rel="noopener noreferrer" style={{ margin: 'auto 2% auto 2%' }}>
                    <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
                </a>

                <a href="https://sourcerer.io/smob123" target="_blank" rel="noopener noreferrer">
                    <img src={require('../../images/Sourcerer.svg')} alt='Sourcerer' />
                </a>
            </div>
        </div>
        );
    }
}