/**
 * main container that holds all the website's components.
 */

import React, { Component } from 'react';
import '../styles/styles.css';
import Nav from '../components/home/nav';
import Header from '../components/home/header';
import About from '../components/home/about';
import Projects from '../components/home/projects';
import Contact from '../components/home/contact';
import Footer from '../components/home/footer';

export default class Home extends Component {
    render() {
        return (
            <main>
                <div className='nav-container'>
                    <Nav />
                </div>

                <div className="main-content-container">
                    <section id='header'>
                        <Header />
                    </section>
                    <section id='about-section'>
                        <About />
                    </section>

                    <Projects />

                    <section id="contact">
                        <Contact />

                        <footer>
                            <Footer />
                        </footer>
                    </section>
                </div>
            </main>
        );
    }
}
