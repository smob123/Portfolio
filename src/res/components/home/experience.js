import React, { Component } from 'react';
import { faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Experience extends Component {
    render() {
        return (
            <div>
                <h2>Education and Experience</h2>
                <div className='timeline'>
                    <div className='container left'>
                        <div className='content'>
                            <div>
                                <h3>2010 - 2013</h3>
                                <FontAwesomeIcon icon={faGraduationCap} size='3x' />
                            </div>
                            <div>
                                <span>Studied at Hamzah Bin Abdulmuttalib highschool.</span>
                            </div>
                        </div>
                    </div>
                    <div className='container right'>
                        <div className='content'>
                            <div>
                                <h3>2014 - 2015</h3>
                                <FontAwesomeIcon icon={faGraduationCap} size='3x' />
                            </div>
                            <div>
                                <span>Studied English at VanWest College.</span>
                            </div>
                        </div>
                    </div>
                    <div className='container left'>
                        <div className='content'>
                            <div>
                                <h3>05/2018 - 07/2018</h3>
                                <FontAwesomeIcon icon={faLaptopCode} size='3x' />
                            </div>
                            <div>
                                <span>Worked as a remote intern at Groceristar.</span>
                            </div>
                        </div>
                    </div>
                    <div className='container right'>
                        <div className='content'>
                            <div>
                                <h3>2020</h3>
                                <FontAwesomeIcon icon={faGraduationCap} size='3x' />
                            </div>
                            <div>
                                <span>Expected graduation date from Victoria University of Wellington.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}