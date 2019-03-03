import React, { Component } from 'react';
import './res/styles/styles.css';
import About from './res/assets/about';
import Experience from './res/assets/experience';
import Skills from './res/assets/skills';
import Projects from './res/assets/projects';
import Contact from './res/assets/contact';
import Footer from './res/assets/footer';
import ScrollAnimations from './components/Animations';

class App extends Component {

    navigationHandler(element) {
        ScrollAnimations.bringUpSection(element);
    }

    componentDidMount() {
        ScrollAnimations.topBarAnimmations();
    }

    render() {
        return (
            <main>
                <header id='header'>
                    <div className='header-overlay'></div>

                    <div className='top-bar'>
                        <div className='title-container'>
                            <span>Sultan Banabila</span>
                        </div>
                        <div className="nav-container">
                            <nav className="main-nav" id='main-nav'>
                                <p onClick={() => this.navigationHandler('#header')}>Home</p>
                                <p onClick={() => this.navigationHandler('#about-section')}>About</p>
                                <p onClick={() => this.navigationHandler('#experience-section')}>Education and experience</p>
                                <p onClick={() => this.navigationHandler('#skills-section')}>Skills</p>
                                <p onClick={() => this.navigationHandler('#projects')}>Projects</p>
                                <p onClick={() => this.navigationHandler('#contact')}>Contact</p>
                            </nav>

                            <div className='phone-nav'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="name-container">
                        <h1>Welcome to my portfolio</h1>
                        <span> Web developer | Android developer</span>
                        <button onClick={() => this.navigationHandler('#contact')}>Yes, I'm available for hire</button>
                    </div>
                </header>
                <div className="main-content-container">
                    <section id='about-section'>
                        <About />
                    </section>

                    <section id='experience-section'>
                        <Experience />
                    </section>

                    <section id='skills-section'>
                        <Skills />
                    </section>

                    <Projects />

                    <div id="contact">
                        <section id='contact-content'>
                            <h2>Contact</h2>
                            <Contact />
                        </section>
                    </div>
                </div>

                <footer>
                    <Footer />
                </footer>
            </main>
        );
    }
}

export default App;
