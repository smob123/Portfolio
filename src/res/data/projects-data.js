/**
 * my personal projects.
 */

import Photorama from '../images/photorama.png';
import InstaChat from '../images/instachat.png';
import MoviesApp from '../images/moviesApp.png';
import NewsApp from '../images/newsApp.png';
import SeniorWatch from '../images/seniorWatch.png';
import Tuqs from '../images/tuqs.png';
import Shopaholic from '../images/shopaholic.png'

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

let shopaholic = {
    logo: Shopaholic,
    title: 'Shopaholic',
    description: "An ecommerce website, that allows users to create accounts, browse products, add items to their cart, checkout, view order history, and more",
    link: 'https://github.com/smob123/Shopaholic',
    url: 'https://shopaholic.azurewebsites.net/',
    technologies: [
        'ASP.NET Core',
        'Entity Framework',
        'SQL Server',
        'Stripe',
        'ReactJS',
        'SASS',
        'Bootstrap'
    ],
    type: 'Website'
}

let tuqs = {
    logo: Tuqs,
    title: 'Tuqs',
    description: "A weather app that displays the forecast of the user's current location, and allows clients to explore the weather in different parts of the world",
    link: 'https://github.com/smob123/Tuqs',
    url: 'https://quizzical-perlman-6e29ec.netlify.app/',
    technologies: [
        'ReactJS',
        'ChartJS',
        'Mapbox',
        'Sass'
    ],
    type: 'Website'
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

let projectData = [photorama, shopaholic, tuqs, instachat, seniorWatch, newsApp, moviesApp];

export default projectData;
