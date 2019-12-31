/**
 * data about my personal projects.
 */

import ArtWorx from '../images/artworx.png';
import RestaurantFinder from '../images/RestaurantFinder.png';
import MoviesApp from '../images/MoviesApp.png';
import SultansKitchen from '../images/SultansKitchen.PNG';

let artworx = {
    logo: ArtWorx,
    title: 'ArtWorx',
    description: 'A fictional digital agency website',
    link: 'https://github.com/smob123/ArtWorx',
    url: 'https://smob123.github.io/ArtWorx/',
    technologies: [
        'HTML5',
        'CSS3',
        'Javascript'
    ],
    type: 'website'
}

let sultansKitchen = {
    logo: SultansKitchen,
    title: "Sultan's Kitchen",
    description: 'A fictional resturant website',
    link: 'https://github.com/smob123/Sultan-s-Kitchen',
    url: 'https://smob123.github.io/Sultan-s-Kitchen/',
    technologies: [
        'HTML5',
        'CSS3',
        'Javascript'
    ],
    type: 'website'
};

let moviesApp = {
    logo: MoviesApp,
    title: 'Movies app',
    description: 'This is a flutter app, that displays trending movies and allows users to search for information about their favourite films',
    link: 'https://github.com/smob123/Movies-App',
    technologies: [
        'Flutter'
    ],
    type: 'mobile-app'
};

let restaurantFinder = {
    logo: RestaurantFinder,
    title: 'Restaurant Finder',
    description: 'A React Native app that displays nearby restaurants',
    link: 'https://github.com/smob123/Restaurant-finder',
    technologies: [
        'Javascript',
        'React Native',
        'Graphql'
    ],
    type: 'mobile-app'
};

let projectData = [artworx, sultansKitchen, moviesApp, restaurantFinder];

export default projectData;
