/**
 * my personal projects.
 */

import Photorama from '../images/photorama.png';
import InstaChat from '../images/instachat.png';
import ArtWorx from '../images/artworx.png';
import RestaurantFinder from '../images/restaurantFinder.png';
import MoviesApp from '../images/moviesApp.png';
import SultansKitchen from '../images/sultansKitchen.PNG';
import NewsApp from '../images/newsApp.png';
import SeniorWatch from '../images/seniorWatch.png';

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

let instachat = {
    logo: InstaChat,
    title: 'InstaChat',
    description: 'An instant messaging app written in Ionic with React as a framework. The app allows users to add each other as friends, and communicate with each other using various types of messages in real time. Each user has their own profile, which can be personalized using avatars and statuses',
    link: 'https://github.com/smob123/InstaChat',
    technologies: [
        'Ionic',
        'ReactJS',
        'GraphQL',
        'Firebase'
    ],
    type: 'mobile-app'
}

let seniorWatch = {
    logo: SeniorWatch,
    title: 'Senior Watch',
    description: 'An Iot application written in Ionic with Angular. The app allows users to monitor the status of a senior in their home through reading emulated sensor data, which is sent periodically to an MQTT broker via a sensor emulator',
    link: 'https://github.com/smob123/Senior-Watch',
    technologies: [
        'Ionic',
        'Angular',
        'Paho MQTT'
    ],
    type: 'mobile-app'
}

let newsApp = {
    logo: NewsApp,
    title: 'News App',
    description: 'A news application that allows users to read the latest headlines in multiple news topics',
    link: 'https://github.com/smob123/News-App',
    technologies: [
        'Android',
        'Java'
    ],
    type: 'mobile-app'
}

let artworx = {
    logo: ArtWorx,
    title: 'ArtWorx',
    description: 'A fictional digital agency website',
    link: 'https://github.com/smob123/ArtWorx',
    url: 'https://smob123.github.io/ArtWorx/',
    technologies: [
        'ReactJS'
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
        'ReactJS'
    ],
    type: 'website'
};

let moviesApp = {
    logo: MoviesApp,
    title: 'Movies app',
    description: 'A flutter app, that displays trending movies and allows users to search for information about their favourite films',
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

let projectData = [photorama, instachat, seniorWatch, newsApp, moviesApp, restaurantFinder, artworx, sultansKitchen];

export default projectData;
