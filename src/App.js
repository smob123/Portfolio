import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './res/pages/home';
class App extends Component {

    componentDidMount() {
        //this.initializeReactGA();
    }

    /**
     * initializes connection to Google Analytics
     */
    initializeReactGA() {
        ReactGA.initialize('UA-139609071-1');
        ReactGA.pageview('/');
    }

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Route exact path={'/'} component={Home} />
            </Router>
        );
    }
}

export default App;
