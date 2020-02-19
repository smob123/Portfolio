/**
 * data about my personal projects.
 */

import Photorama from '../images/photorama.png'
import ArtWorx from '../images/artworx.png';
import RestaurantFinder from '../images/restaurantFinder.png';
import MoviesApp from '../images/moviesApp.png';
import SultansKitchen from '../images/sultansKitchen.PNG';

let photorama = {
    logo: Photorama,
    title: 'Photorama',
    description: "A social media app, similar to Instagram, which allows users to share images, and interact with other users by liking, and commenting on posts, or by following other users' accounts",
    link: 'https://github.com/smob123/Photorama',
    technologies: [
        'Kotlin',
        'Apollo-Android',
        'Firebase Cloud Messaging',
        'NodeJS',
        'GraphQL',
        'MongoDB',
        'Firebase'
    ],
    type: 'mobile-app'
};

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

let projectData = [photorama, artworx, sultansKitchen, moviesApp, restaurantFinder];

export default projectData;
