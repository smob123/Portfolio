/**
 * handles navigation animations; such as, animating the nav menu when clicked, and transitioning from one section
 * to another, etc...
 */

class NavAnimations {
    /**
     * handles transitioning between sections.
     * @param {Int} sectionIndex the index of the section we want to go to
     */
    static goToSection(sectionIndex) {
        // get the list of the avalable sections
        const container = document.querySelectorAll('.main-content-container section');

        // get the list of navigation items
        const navList = document.querySelectorAll('.main-nav ul li');
        // go through each item until you find the one that is active
        for (let item of navList) {
            // if the active item is found
            if (item.classList.contains('active')) {
                // check if it is the same as the one the user selected
                if (item === navList[sectionIndex]) {
                    // hide the navigation items, and exit the method
                    this.toggleMainNav();
                    return;
                }

                // otherwise remove the active class from the item
                item.classList.remove('active');
                break;
            }
        }

        // add the active class to the selected item
        navList[sectionIndex].classList.add('active');

        // calcualte the transition amount to the next section
        const transform = `${sectionIndex}00`;
        // apply it on all the sections so that the selected section becomes visible on the screen
        container.forEach(item => {
            item.style['transform'] = `translate(-${parseInt(transform)}%)`;
        });

        // hide main-nav
        this.toggleMainNav();
    }

    /**
     * animates the main navigation to hide the navigation list
     */
    static toggleMainNav() {
        const navContainer = document.querySelector('.nav-container');
        navContainer.classList.remove('expanded');
    }

    /**
     * intializes the on click listener for the hamburger menu
     */
    static setNavigationListener() {
        // the hamburger menu
        const phoneNav = document.querySelector('.phone-nav');
        // the navigation's parent container
        const navContainer = document.querySelector('.nav-container');

        // handle toggling the navigation menu
        phoneNav.addEventListener('click', () => {
            if (!this.isExpanded()) {
                navContainer.classList.add('expanded');
            }
            else {
                navContainer.classList.remove('expanded');
            }
        });
    }

    /**
     * check if the navigation menu is expanded
     */
    static isExpanded() {
        const navContainer = document.querySelector('.nav-container');

        return navContainer.classList.contains('expanded');
    }
}

export default NavAnimations;
