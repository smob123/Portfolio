import React, { Component } from 'react';
import ScrollAnimations from './components/Animations.js';
import './res/styles/styles.css';
import $ from 'jquery';
import Skills from './res/assets/skills';

let scroll = new ScrollAnimations();

class App extends Component {

    navigationHandler(element) {
        scroll.bringUpSection(element);
    }

    render() {

        return (
            <main>
                <div className="main-container">
                    <div className="nav-container">
                        <nav className="main-nav">
                            <p onClick={() => this.navigationHandler($('#about-container'))}>About</p>
                            <p onClick={() => this.navigationHandler($('#contributions'))}>Contributions</p>
                            <p onClick={() => this.navigationHandler($('#projects-section'))}>Personal projects</p>
                            <p onClick={() => this.navigationHandler($('#contact'))}>Contact</p>
                        </nav>
                    </div>
                    <div className='header'>
                        <div className='header-overlay'>
                            <div className="name-container">
                                <span>Sultan Banabila</span>
                                <span> Web developer | Android developer</span>
                                <button onClick={() => this.navigationHandler($('#contact'))}>Yes, I'm available for hire</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div id='about-container'>
                            <section id='about-section'>
                                <img className='profile-img' src={require('./res/images/profile-img.jpg')} alt='profile-img' />
                                <h2>Who is this guy?</h2>
                                <span>I'm a passionate Web, and Android developer</span>
                            </section>

                            <section id='skills-section'>
                                <h2>My skills</h2>
                                <Skills animate={false} />
                            </section>
                        </div>

                        <section id="contributions">
                            <div id="contributions-content">
                                <h2>Contributions</h2>
                                <div id="groceristar">
                                    <div>
                                        <img src={require('./res/images/groceristar.PNG')} />
                                    </div>
                                    <div>
                                        <span><strong>Groceristar's home-page</strong></span>
                                        <br />
                                        <span>An online grocery shopping app</span>
                                        <br />
                                        <span>Technologies used:</span>
                                        <ul>
                                            <li>Javascript</li>
                                            <li>ReactJS</li>
                                            <li>GatsbyJS</li>
                                        </ul>
                                        <a href='https://github.com/GroceriStar/onboarding-features' target='_blank'>
                                            <button>View on Github</button>
                                        </a>
                                    </div>
                                </div>

                                <hr />

                                <div class='rdcsi'>
                                    <div>
                                        <img src={require('./res/images/rdcsi.jpg')} />
                                    </div>

                                    <div>
                                        <span><strong>RDCSI mobile app</strong></span>
                                        <br />
                                        <span>A health app developed for both IOS and Android using hybrid app technology</span>
                                        <br />
                                        <span>Technologies used:</span>
                                        <ul>
                                            <li>Javascript</li>
                                            <li>React Native</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="projects-section">
                            <h2>Personal Projects</h2>
                            <div id="projects-content">
                                <div className='voice-recorder'>
                                    <div>
                                        <img src={require('./res/images/voice-recorder.png')} />
                                    </div>
                                    <div class='project-details'>
                                        <span><strong>Android Voice Recorder</strong></span>
                                        <ul>
                                            <li>Java</li>
                                            <li>Android</li>
                                        </ul>
                                        <a href="https://github.com/smob123/VoiceRecorder" target="_blank" rel="noopener noreferrer">
                                            <button>View on GitHub</button>
                                        </a>
                                    </div>
                                </div>

                                <hr />

                                <div className='Sultans-kitchen'>
                                    <div>
                                        <img src={require('./res/images/SultansKitchen.PNG')} />
                                    </div>
                                    <div className='project-details'>
                                        <span><strong>Sultan's Kitchen</strong></span>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                        </ul>
                                        <a href="https://smob123.github.io/Sultan-s-Kitchen/" target='_blank' rel="noopener noreferrer">
                                            <button>Visit website</button>
                                        </a>
                                    </div>
                                </div>

                                <hr />

                                <div className="flappy-bird">
                                    <div>
                                        <img src={require('./res/images/flappy-bird.png')} />
                                    </div>
                                    <div className='project-details'>
                                        <span><strong>Flappy Bird</strong></span>
                                        <ul>
                                            <li>Java</li>
                                            </ul>
                                        <a href='https://github.com/smob123/Games/tree/master/Flappy%20Bird' target='_blank' rel="noopener noreferrer">
                                            <button>View on GitHub</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div id="contact">
                            <div id='contact-content'>
                                <h2>Contact</h2>
                                <div>
                                    <a href="mailto:sultanbanabila@gmail.com">
                                        <button>Send me an email</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <footer>
                            <p>Sultan Banabila &copy;.</p>

                            <div className="social-media">
                                <a href="https://github.com/smob123" target="_blank" rel="noopener noreferrer">
                                    <img src={require("./res/images/github.png")} alt="github" className="github" />
                                </a>

                                <a href="https://www.linkedin.com/in/sultan-b-7493a6154" target="_blank" rel="noopener noreferrer">
                                    <img src={require("./res/images/linkedin-icon.png")} alt="linkedin" className="linkedin-icon" />
                                </a>

                                <a href="https://twitter.com/SmB_2020" target="_blank" rel="noopener noreferrer">
                                    <img src={require("./res/images/twitter-logo.png")} alt="twitter" />
                                </a>
                            </div>
                        </footer>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
