/* the landing screen */

import React from 'react';
import Waves from '../../images/waves.svg';

export default function Header() {

    return (
        <header>
            <div>
                {/* title */}
                <h1>I Create Great Experiences</h1>

                {/* short about me paragraph */}
                <div className='d-flex align-items-center flex-wrap bg-dark-transparency p-5 my-5'>
                    <span>
                        Full-stack Web Developer
                    </span>

                    <span className='text-orange'>&nbsp;/&nbsp;</span>

                    <span>
                        Android Developer
                    </span>
                </div>

                {/* custom button to proceed to the next section */}
                <button className='btn bg-orange btn-large' onClick={() => document.querySelector('#about').scrollIntoView()}>
                    About Me
                </button>
            </div>

            <div className='waves-container'>
                <img className='w-100' src={Waves} />
            </div>
        </header>
    );
}