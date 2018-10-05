import React, { Component } from 'react';
import './res/styles/styles.css';
import $ from 'jquery';
import Skills from './res/assets/skills';
import Contributions from './res/assets/contributions';
import Projects from './res/assets/projects';
import Contact from './res/assets/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ScrollAnimations from './components/Animations';

class App extends Component {

    navigationHandler(element) {
        ScrollAnimations.bringUpSection(element);
    }

    componentDidMount() {
        ScrollAnimations.stickyNav();
    }

    render() {

        return (
            <main>
                <header id='header'>
                    <div className="name-container">
                        <h1>Sultan Banabila</h1>
                        <span> Web developer | Android developer</span>
                        <button onClick={() => this.navigationHandler($('#contact'))}>Yes, I'm available for hire</button>
                    </div>
                </header>
                <div className="card-container">
                    <div className="nav-container">
                        <nav id="main-nav">
                            <p onClick={() => this.navigationHandler($('#about-section'))}>About</p>
                            <p onClick={() => this.navigationHandler($('#contributions'))}>Contributions</p>
                            <p onClick={() => this.navigationHandler($('#projects-section'))}>Personal projects</p>
                            <p onClick={() => this.navigationHandler($('#contact'))}>Contact</p>
                        </nav>
                    </div>

                    <section id='about-section'>
                        <div>
                            <img src={require('./res/images/phone-laptop.png')} alt='phone and laptop' id='round-img' />
                        </div>

                        <div>
                            <h3>Who am I?</h3>
                            <hr />
                            <span>My name is Sultan, I am a computer sicence student
                                who is enthusiastic about web and mobile development.</span>
                        </div>
                    </section>

                    <section id='skills-section'>
                        <h2>What I can do</h2>
                        <Skills />
                    </section>

                    <Contributions />

                    <section id="projects-section">
                        <Projects />
                    </section>

                    <div id="contact">
                        <section id='contact-content'>
                            <h2>Contact</h2>
                            <Contact />
                        </section>
                    </div>
                </div>

                <footer>
                    <p>Sultan Banabila &copy;.</p>

                    <div className="social-media">
                        <a href="https://github.com/smob123" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size='2x' />
                        </a>

                        <a href="https://www.linkedin.com/in/sultan-b-7493a6154" target="_blank" rel="noopener noreferrer" style={{ margin: 'auto 2% auto 2%' }}>
                            <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
                        </a>

                        <a href="https://twitter.com/SmB_2020" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size='2x' />
                        </a>
                    </div>

                    <div className='credits'>
                        <span>This site was inspired by &nbsp;
                            <a href='https://html5up.net/stellar' target='_blank' rel="noopener noreferrer">this template</a>
                        </span>
                    </div>
                </footer>
            </main>
        );
    }
}

export default App;
