/* the landing screen */

import React, { Component } from 'react';
import NavAnimations from '../general/Animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

// list of skills
const attrs = ['A Web Developer', 'An Android Developer'];
// the index of the skill that is currently displayed
let attrIndex = 0;
// the index of the current letter in the list above to animate
let letterIndex = 0;
// checks if the current skill should be hidden, or revealed
let hide = false;

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { text: [] };
    }

    componentDidMount() {
        this.typeWriter();

        setInterval(this.showHide, 300);
    }

    /**
     * adds a typewriter effect to display, and hide text.
     */
    typeWriter = () => {
        // reset the state
        this.setState({ text: [] });
        // get the next skill in the array
        const txt = attrs[attrIndex];
        const spans = [];

        // add each letter in the text as an h3 element
        for (let i = 0; i < txt.length; i++) {
            spans.push(<h3 className='attr secondary-color hidden'>{txt[i]}</h3>);
        }

        // update the state to display the new text
        this.setState({ text: spans });
    }

    /**
     * handles showing/hiding text
     */
    showHide = () => {
        // get the letter at the current index
        const letter = document.querySelectorAll('.attr')[letterIndex];

        // show, or hide depending on the current stage we are at.
        if (hide) {
            this.hideLetters(letter);
        } else {
            this.showLetters(letter);
        }
    }

    /**
     * hides a letter element.
     */
    hideLetters = (letter) => {
        // add a hidden class to the letter to hide it
        letter.classList.add('hidden');

        // if the current letter is the first one on the text
        if (letterIndex === 0) {
            // check the index of the current skill
            // if it is not the last element in the array
            if (attrIndex < attrs.length - 1) {
                // move on to the next element
                ++attrIndex;
            } else {
                // otherwise go back to the first one
                attrIndex = 0;
            }

            // change hide, in order for the next funtion to execute to
            // display the next element
            hide = false;
            // change the state to display the next skill element
            this.typeWriter();
        } else {
            // otherwise move on the the prevoius letter
            --letterIndex;
        }
    }

    /**
     * shows a letter elemnt.
     */
    showLetters = (letter) => {
        // remove the hidden class from the elemnt
        letter.classList.remove('hidden');

        // if the current letter is the last one on the text
        if (letterIndex === attrs[attrIndex].length - 1) {
            // change hide, in order for the next funtion to execute to
            // hide the next element
            hide = true;
        } else {
            // otherwise move on to the next letter
            ++letterIndex;
        }
    }

    render() {
        return (
            <div className='container'>
                {/* profile image */}
                <div className='img-container'>
                    <img src={require('../../images/profile-img.jpg')} alt='profile' />
                </div>

                <div className="txt-container">
                    {/* title */}
                    <h1 className='section-heading'>Sultan</h1>
                    <h1 className='secondary-color'> Banabila </h1>

                    <div className='attr-container'>
                        {/* skills */}
                        <h3>I'm&nbsp;</h3>
                        {this.state.text}

                        {/* short about me paragraph */}
                        <div className='p1-container'>
                            <span>
                                I'm a software developer based in Wellington, New Zealand.
                                I strive to make business applications; namely, websites,
                                and mobile applications.
                            </span>
                        </div>

                        {/* custom button to proceed to the next section */}
                        <div className='m-button' onClick={() => { NavAnimations.goToSection(1) }}>
                            <FontAwesomeIcon icon={faUserAlt} />
                            <span>&nbsp;more about me</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}