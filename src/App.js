import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './res/components/general/scrollToTop';
import Nav from './res/components/home/nav';
import Home from './res/pages/home';
import Footer from './res/components/home/footer';
import './res/styles/styles.css';

export default function App() {

    useEffect(() => {
        /**
     * initializes connection to Google Analytics
     */
        // ReactGA.initialize('UA-139609071-1');
        // ReactGA.pageview('/');
    }, []);

    return (

        <Router basename={process.env.PUBLIC_URL}>
            <div className='w-100'>
                <ScrollToTop>
                    <Nav />
                    <Route exact path='/' component={Home} />
                    <Footer />
                </ScrollToTop>
            </div>
        </Router>
    );
}
