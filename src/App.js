import React, { Component } from 'react';
import ScrollAnimations from './components/Animations.js';
import './res/styles/styles.css';
import $ from 'jquery';
import Skills from './res/assets/skills';
import Contributions from './res/assets/contributions';
import Projects from './res/assets/projects';
import Contact from './res/assets/contact';

let scroll = new ScrollAnimations();

class App extends Component {

    navigationHandler(element) {
        scroll.bringUpSection(element);
    }

    navDisplay() {
        scroll.navHandler();
    }
    
    render() {

        return (
            <main>
                <div className="main-container">
                    <div className="nav-container">
                        <div id='phone-div' onClick={() => this.navDisplay()}>
                            <div className='nav-bar1'></div>
                            <div className='nav-bar2'></div>
                            <div className='nav-bar3'></div>
                        </div>

                        <nav id="main-nav">
                            <p onClick={() => this.navigationHandler($('#about-container'))}>About</p>
                            <p onClick={() => this.navigationHandler($('#contributions'))}>Contributions</p>
                            <p onClick={() => this.navigationHandler($('#projects-section'))}>Personal projects</p>
                            <p onClick={() => this.navigationHandler($('#contact'))}>Contact</p>
                        </nav>
                    </div>
                    <header id='header'>
                        <div id='header-overlay'>
                            <div className="name-container">
                                <span>Sultan Banabila</span>
                                <span> Web developer | Android developer</span>
                                <button onClick={() => this.navigationHandler($('#contact'))}>Yes, I'm available for hire</button>
                            </div>
                        </div>
                    </header>
                    <div className="card-container">
                        <div id='about-container'>
                            <section id='about-section'>
                                <img className='profile-img' src={require('./res/images/profile-img.jpg')} alt='profile-img' />
                                <h2>Who is this guy?</h2>
                                <span>I'm a passionate Web, and Android developer</span>
                            </section>

                            <section id='skills-section'>
                                <h2>My skills</h2>
                                <Skills />
                            </section>
                        </div>

                        <Contributions />

                        <section id="projects-section">
                                <Projects />
                        </section>

                        <div id="contact">
                            <div id='contact-content'>
                                <h2>Contact</h2>
                                    <Contact />
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
