import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import GAEvent from '../general/GAEvents';

export default class Footer extends Component {
    render() {
        return (<div>
            <p>Sultan Banabila &copy;.</p>

            <div className="social-media">
                <a href="https://github.com/smob123" aria-label="GitHub" target="_blank" rel="noopener noreferrer nofollow">
                    <FontAwesomeIcon icon={faGithub} size='2x' onClick={() => GAEvent(`Visited GitHub profile`)} />
                </a>

                <a href="https://www.linkedin.com/in/sultan-banabila-7493a6154/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer nofollow" style={{ margin: 'auto 2% auto 2%' }}>
                    <FontAwesomeIcon icon={faLinkedinIn} size='2x' onClick={() => GAEvent(`Visited Linkedin profile`)} />
                </a>

                <a href="https://sourcerer.io/smob123" aria-label="Sourcerer" target="_blank" rel="noopener noreferrer nofollow">
                    <img src={require('../../images/Sourcerer.svg')} alt='Sourcerer' onClick={() => GAEvent(`Visited Sourcerer profile`)} />
                </a>
            </div>
        </div>
        );
    }
}