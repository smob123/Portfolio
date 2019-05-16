import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './res/components/router/scrollToTop';
import Home from './res/pages/home';
class App extends Component {

    componentWillMount() {
        this.initializeReactGA();
    }

    initializeReactGA() {
        ReactGA.initialize('UA-139609071-1');
        ReactGA.pageview('/');
    }

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <ScrollToTop>
                    <Route exact path={'/'} component={Home} />
                </ScrollToTop>
            </Router>
        );
    }
}

export default App;
