/**
 * navigation component.
 */

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import NavAnimations from '../../components/general/Animations';

// list of sections on the site
const navList = [
    {
        title: 'home',
        icon: faHome,
        active: true
    },
    {
        title: 'about',
        icon: faUser,
        active: false
    },
    {
        title: 'projects',
        icon: faBriefcase,
        active: false
    },
    {
        title: 'contact',
        icon: faEnvelope,
        active: false
    }];

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navListItems: []
        };
    }

    componentDidMount() {
        NavAnimations.setNavigationListener();
        this.setState({
            navListItems: this.getSections()
        });
    }

    /**
     * add the sections into li elements
     */
    getSections() {
        const nav = [];

        for (let i = 0; i < navList.length; i++) {
            let item = navList[i];
            const className = item.active ? 'active' : '';

            nav.push(
                <li className={className} key={`${className} ${i}`}>
                    <div onClick={() => NavAnimations.goToSection(i)}>
                        <FontAwesomeIcon icon={item.icon} size='lg' />
                        <span>{item.title}</span>
                    </div>
                </li>
            );
        }

        return nav;
    }

    render() {
        return (
            <div className="nav-container">
                {/* dark background behind the main navigation, and hamburger menu */}
                <div className='nav-background'></div>
                {/* hamburder menu */}
                <div className='phone-nav'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                {/* main navigation */}
                <nav className="main-nav" id='main-nav'>
                    <ul>
                        {this.state.navListItems}
                    </ul>
                </nav>
            </div>
        );
    }
}