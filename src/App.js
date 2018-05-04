import React, { Component }
from 'react';
import Typing from 'react-typing-animation';
import $ from 'jquery';
import ScrollAnimations from './components/Animations.js';
import './res/styles/styles.css';

class App extends Component {

    AnimationHandler() {
        let scroll = new ScrollAnimations();
        this.passAnimationElements(scroll);
        scroll.triggerAnimation();
    }

    passAnimationElements(s) {
        let sec = [];
        sec.push('#img-div', '#about-section', '#skills-section', '#projects-section');
        s.setSections(sec);
        let elems = [];
        elems.push('#about-content', '#skills-content', '#projects-content', '#contact-content');
        s.setElements(elems);
    }

    componentDidMount() {
        this.AnimationHandler();
    }

    render() {

        return (
                <main>
                    <div id="img-div" className="img-div">
                        <h1 id="welcome">
                            <Typing speed={70}>Welcome to my portfolio</Typing>
                        </h1>
                    </div>
                
                    <section id="about-section">
                        <h2>About</h2>
                
                        <div id="about-content" className='about-content'>
                            <img src={require("./res/images/profile.JPG")} alt="me" className="profile-img" />
                
                            <p id="about-p">My name is Sultan Banabila <br />
                                I am a software developer,<br />
                                who is passionate about web development, and Android develpment.
                            </p>
                        </div>
                    </section>
                
                    <section id='skills-section'>
                        <h2>Skills</h2>
                
                        <div id='skills-content'>
                            <div id='web-development'>
                                <h3>Web development</h3>
                                <img src={require('./res/images/HTML5.png')}/>
                                <img src={require('./res/images/CSS3.png')}/>
                                <img src={require('./res/images/JS.png')}/>
                                <img src={require('./res/images/jQuery.gif')}/>
                                <img src={require('./res/images/React.png')}/>
                            </div>
                
                            <div id='App-development'>
                                <h3>App development</h3>
                                <img src={require('./res/images/Java.png')} />
                                <img src={require('./res/images/Android.png')}/>
                            </div>
                        </div>
                    </section>
                                                                                                                                
                    <section id="projects-section">
                        <h2>Personal Projects</h2>
                        <div id="projects-content">
                            <div className='voice-recorder'>
                                <div className='overlay'>
                                    <p><strong>Android Voice Recorder</strong></p>
                                    <p>Java <br />
                                        Android</p>
                                    <a href="https://github.com/smob123/VoiceRecorder" target="_blank" rel="noopener noreferrer">
                                        <button>View on GitHub</button>
                                    </a>
                                </div>
                            </div>
                
                            <div className='Sultans-kitchen'>
                                <div className='overlay'>
                                    <p><strong>Sultan's Kitchen</strong></p>
                                    <p>HTML <br />
                                        CSS <br />
                                        JavaScript</p>
                                    <a href="https://smob123.github.io/Sultan-s-Kitchen/" target='_blank' rel="noopener noreferrer">
                                        <button>Visit website</button>
                                    </a>
                                </div>
                            </div>
                
                            <div className="flappy-bird">
                                <div className='overlay'>
                                    <p><strong>Flappy Bird</strong></p>
                                    <p>Java</p>
                                    <a href='https://github.com/smob123/Games/tree/master/Flappy%20Bird' target='_blank' rel="noopener noreferrer">
                                        <button>View on GitHub</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                                
                    <div id="contact">
                        <div id='contact-content'>
                            <form>
                                <h2>Contact</h2>
                                <div>
                                <a href="mailto:sultanbanabila@gmail.com">
                                <button>Send me an email</button>
                                </a>
                                </div>
                            </form>
                            
        
                        </div>
                    </div>
                                
                    <footer>
                        <p>Sultan Banabila &copy;.</p>
                
                        <div className="social-media">
                            <a href="https://github.com/smob123" target="_blank" rel="noopener noreferrer"> 
                                <img src={require("./res/images/github.png")} alt="github" className="github" />
                            </a>
                
                            <a href="https://www.linkedin.com/in/sultan-m-7493a6154/" target="_blank" rel="noopener noreferrer">
                                <img src={require("./res/images/linkedin-icon.png")} alt="linkedin" className="linkedin-icon" />
                            </a>
                
                            <a href="https://twitter.com/SmB_2020" target="_blank" rel="noopener noreferrer">
                                <img src={require("./res/images/twitter-logo.png")} alt="twitter" />
                            </a>
                        </div>
                    </footer>
                </main>
                );
    }
}
;
export default App;
