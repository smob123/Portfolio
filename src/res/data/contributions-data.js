/**
 * data about the project that I have contributed to so far.
 */

import Groceristar from '../images/groceristar.PNG';
import RDCSI from '../images/rdcsi.jpg';

let groceristar = {
    logo: Groceristar,
    title: "Groceristar's homepage",
    description: 'An online grocery list app, in which I contributed to the development of multiple templates; such as, a calendar, a features page, etc..',
    link: 'https://github.com/GroceriStar/onboarding-features',
    technologies: [
        'Javascript',
        'ReactJS',
        'Gatsby'
    ],
    type: 'website'
};

let rdcsi = {
    logo: RDCSI,
    title: 'RDCSI Mobile App',
    description: "Hybrid Diet tracking app, in which I contributed to the implementation of a radar chart that displays the user's activity",
    technologies: [
        'Javascript',
        'React Native'
    ],
    type: 'mobile-app'
};

let data = [groceristar, rdcsi];

export default data;
