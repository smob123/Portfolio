import JS from '../images/JS.png';
import React from '../images/React.png';
import Gatsby from '../images/Gatsby.png';
import ReactNative from '../images/ReactNative.png';
import Groceristar from '../images/groceristar.PNG';
import RDCSI from '../images/rdcsi.jpg';

let groceristar = {
    logo: Groceristar,
    title: "Groceristar's homepage",
    description: 'An online grocery list app',
    link: 'https://github.com/GroceriStar/onboarding-features',
    technologies: [
        JS,
        React,
        Gatsby
    ]
};

let rdcsi = {
    logo: RDCSI,
    title: 'Romeo Dallaire Child Soldiers Initiative',
    description: 'Hybrid Diet tracking app',
    technologies: [
        JS,
        ReactNative
    ]
};

let data = [groceristar, rdcsi];

export default data;
