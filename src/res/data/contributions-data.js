import JS from '../images/JS.png';
import React from '../images/React.png';
import Gatsby from '../images/Gatsby.png';
import ReactNative from '../images/ReactNative.png';
import Groceristar from '../images/groceristar.PNG';
import RDCSI from '../images/rdcsi.jpg';

let groceristar = {
    logo: Groceristar,
    title: "Groceristar's homepage",
    description: 'An online grocery list app, in which I contributed to the development of multiple templates; such as, a calendar, a features page, etc...',
    link: 'https://github.com/GroceriStar/onboarding-features',
    technologies: [
        JS,
        React,
        Gatsby
    ],
    type: 'website-img'
};

let rdcsi = {
    logo: RDCSI,
    title: 'Romeo Dallaire Child Soldiers Initiative',
    description: "Hybrid Diet tracking app, in which I contributed to the implementation of a radar chart that displays the user's activity",
    technologies: [
        JS,
        ReactNative
    ],
    type: 'website-img'
};

let data = [groceristar, rdcsi];

export default data;
