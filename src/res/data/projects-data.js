import JS from '../images/JS.png';
import ReactNative from '../images/ReactNative.png';
import Java from '../images/Java.png';
import HTML5 from '../images/HTML5.png';
import CSS3 from '../images/CSS3.png';
import RestaurantFinder from '../images/RestaurantFinder.png';
import NewsApp from '../images/NewsApp.png';
import SultansKitchen from '../images/SultansKitchen.PNG';

let restaurantFinder = {
    logo: RestaurantFinder,
    title: 'Restaurant Finder',
    description: 'A hybrid app that displays nearby restaurants',
    link: 'https://github.com/smob123/Restaurant-finder',
    technologies: [
        JS,
        ReactNative
    ],
    type: 'mobile-app'
};

let newsApp = {
    logo: NewsApp,
    title: 'News app',
    description: 'A simple Android news application',
    link: 'https://github.com/smob123/News-App',
    technologies: [
        Java
    ],
    type: 'mobile-app'
};

let sultansKitchen = {
    logo: SultansKitchen,
    title: "Sultan's Kitchen",
    description: 'A fictional resturant website',
    link: 'https://github.com/smob123/Sultan-s-Kitchen',
    url: 'https://smob123.github.io/Sultan-s-Kitchen/',
    technologies: [
        HTML5,
        CSS3,
        JS
    ],
    type: 'website'
};

let data = [restaurantFinder, newsApp, sultansKitchen];

export default data;
