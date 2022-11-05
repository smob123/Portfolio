/**
 * scrolls to the top of the page, when the user navigates between pages
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import withRouter from './withRouter';

function ScrollToTop(props) {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return props.children;
}

export default withRouter(ScrollToTop);