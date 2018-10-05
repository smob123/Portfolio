import JS from '../images/JS.png';
import ReactNative from '../images/ReactNative.png';
import Java from '../images/Java.png';
import HTML5 from '../images/HTML5.png';
import CSS3 from '../images/CSS3.png';
import RestaurantFinder from '../images/RestaurantFinder.png';
import VoiceRecorder from '../images/VoiceRecorder.png';
import SultansKitchen from '../images/SultansKitchen.PNG';
import FlappyBird from '../images/FlappyBird.png';

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

let voiceRecorder = {
    logo: VoiceRecorder,
    title: 'Voice Recorder',
    description: 'A simple Android voice recorder',
    link: 'https://github.com/smob123/VoiceRecorder',
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

let flappyBird = {
    logo: FlappyBird,
    title: 'Flappy Bird',
    description: 'Flappy Bird game clone',
    link: 'https://github.com/smob123/Games/tree/master/Flappy%20Bird',
    technologies: [
        Java
    ],
    type: 'website'
};

let data = [restaurantFinder, voiceRecorder, sultansKitchen, flappyBird];

export default data;
