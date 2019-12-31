/**
 * handles sending events to Google Analytics.
 */

import ReactGA from 'react-ga';

/**
 * send an event to Google Analytics
 * @param {*} e the name of the event we want to record.
 */
export default function GAEvent(e) {
    ReactGA.event({
        category: 'User',
        action: e.toString()
    });
}