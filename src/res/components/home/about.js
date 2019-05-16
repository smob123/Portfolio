import React, { Component } from 'react';
import ScrollAnimations from '../general/Animations';

export default class About extends Component {
    render() {
        return (
            <div className='container'>
                <div>
                    <img src={require('../../images/phone-laptop.png')} alt='phone and laptop' id='round-img' />
                </div>

                <div>
                    <h3>Who am I?</h3>
                    <span>My name is Sultan, I am a computer sicence student
                                who is enthusiastic about web and mobile development.</span>

                    <button onClick={() => ScrollAnimations.bringUpSection('#experience-section')}>Find out more</button>
                </div>
            </div>
        );
    }
}