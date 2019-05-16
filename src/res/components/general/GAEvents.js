import ReactGA from 'react-ga';

export default function GAEvent(e) {
    ReactGA.event({
        category: 'User',
        action: e.toString()
    });
}