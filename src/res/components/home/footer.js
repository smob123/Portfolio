/**
 * website's footer.
 */

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import GAEvent from '../../utils/GAEvents';

export default class Footer extends Component {
    render() {
        return (
            <footer className='text-center py-5'>

                <p className='m-0 mb-6 light-text app-title'>Sultan Banabila</p>

                {/* social media links */}
                <div>
                    <a className='mr-4' href="https://github.com/smob123" aria-label="GitHub" target="_blank" rel="noopener noreferrer nofollow">
                        <FontAwesomeIcon icon={faGithub} size='2x' onClick={() => GAEvent(`Visited GitHub profile`)} />
                    </a>

                    <a href="https://www.linkedin.com/in/sultan-banabila-7493a6154/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer nofollow">
                        <FontAwesomeIcon icon={faLinkedinIn} size='2x' onClick={() => GAEvent(`Visited Linkedin profile`)} />
                    </a>
                </div>
            </footer>
        );
    }
}