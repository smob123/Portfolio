/**
* main container that holds all the website's components.
*/

import React, { Component } from 'react';
import Header from '../components/home/header';
import About from '../components/home/about';
import Skills from '../components/home/skills';
import Resume from '../components/home/resume';
import Portfolio from '../components/home/portfolio';

export default class Home extends Component {
    render() {
        return (
            <div>
                <section id='home'>
                    <Header />
                </section>

                <main>

                    <section id='about'>
                        <About />
                    </section>

                    <section id='skills'>
                        <Skills />
                    </section>

                    <section id='resume'>
                        <Resume />
                    </section>

                    <section id='portfolio'>
                        <Portfolio />
                    </section>
                </main>
            </div>
        );
    }
}
