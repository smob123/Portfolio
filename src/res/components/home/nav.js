/**
 * navigation component.
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

    const [activeNavLinkIndex, setActiveNavLinkIndex] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const navContainer = document.querySelector('.nav-container');
            if (!navContainer) {
                return;
            }

            if (window.scrollY === 0) {
                navContainer.classList.remove('light');
                setActiveNavLinkIndex(0);
                return;
            } else if (!navContainer.classList.contains('light')) {
                navContainer.classList.add('light');
            }

            const navElements = document.querySelectorAll('.main-nav ul li a');

            if (navElements.length < 1) {
                return;
            }

            for (let i = 0; i < navElements.length; i++) {
                const element = navElements[i];
                const section = document.querySelector(`#${element.textContent}`);

                if (!section) {
                    return;
                }

                let elementYPosition = section.getBoundingClientRect().top;
                let elementHeight = section.getBoundingClientRect().bottom;

                const elementInView = elementYPosition + elementHeight >= 0;

                // console.log(element.textContent, section.offsetTop)

                if (elementInView && activeNavLinkIndex !== i) {
                    setActiveNavLinkIndex(i);
                    break;
                }
            }
        });
    }, []);

    const getNavItems = () => {
        // list of sections on the site
        const navLinks = [
            {
                title: 'home',
                link: '#home'
            },
            {
                title: 'about',
                link: '#about'
            },
            {
                title: 'skills',
                link: '#skills'
            },
            {
                title: 'resume',
                link: '#resume'
            },
            {
                title: 'portfolio',
                link: '#portfolio'
            }
        ];

        const navHtmlElements = [];

        for (let i = 0; i < navLinks.length; i++) {
            const link = navLinks[i];
            const element = document.querySelector(link.link);

            navHtmlElements.push(
                <li onClick={() => { toggleNav(); }} key={`${Date.now()}_${link.title}_link`}>
                    <Link
                        to=''
                        onClick={() => element ? element.scrollIntoView() : {}}
                        className={i === activeNavLinkIndex ? 'active' : ''}
                        data-value={link.link}>
                        {link.title}
                    </Link>
                </li>
            );
        }

        return navHtmlElements;
    }

    const toggleNav = () => {
        const nav = document.querySelector('.main-nav');
        const hamburgerMenu = document.querySelector('.phone-nav');

        if (nav.classList.contains('display')) {
            nav.classList.remove('display');
            hamburgerMenu.classList.remove('close');
        } else {
            nav.classList.add('display');
            hamburgerMenu.classList.add('close');
        }
    }

    return (
        <div className="nav-container">

            <div className='d-flex align-items-center justify-content-between'>

                <Link to='/' onClick={() => document.querySelector('#home')?.scrollIntoView()}>
                    <h2 className='app-title'>Sultan</h2>
                </Link>

                {/* hamburder menu */}
                <button className='phone-nav d-flex flex-col align-items-center justify-content-center'
                    onClick={() => toggleNav()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

                {/* main navigation */}
                <nav className="main-nav" id='main-nav'>
                    <h2 className='app-title text-center my-6'>Sultan</h2>
                    <ul className='m-0 p-0 d-flex-md'>
                        {getNavItems()}
                    </ul>
                </nav>
            </div>
        </div>
    );
}