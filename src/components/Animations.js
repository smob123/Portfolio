let mainNavExpanded = false;

class ScrollAnimations {

    static bringUpSection(sectionId) {
        const section = document.querySelector(sectionId);
        const mainNav = document.querySelector('.main-nav');

        if (navigator.userAgent.match(/Edge/) || navigator.userAgent.match(/Trident/)) {
            section.scrollIntoView({ behavior: 'smooth' });
            section.scrollTop += 100;
        }
        else {
            window.scroll({
                top: section.offsetTop - 20,
                behavior: 'smooth'
            });
        }

        mainNav.classList.remove('expanded');
        mainNavExpanded = false;
    }

    static topBarAnimmations() {
        const phoneNav = document.querySelector('.phone-nav');
        const mainNav = document.querySelector('.main-nav');

        phoneNav.addEventListener('click', () => {
            if (!mainNavExpanded) {
                mainNav.classList.add('expanded');
            }
            else {
                mainNav.classList.remove('expanded');
            }

            mainNavExpanded = !mainNavExpanded;
        });

        this.topBarBackground();
    }

    static topBarBackground() {
        const topBar = document.querySelector('.top-bar');
        const phoneNav = document.querySelector('.phone-nav');
        const phoneNavBars = document.querySelectorAll('.phone-nav > div');

        window.addEventListener('scroll', () => {
            if (window.scrollY >= window.innerHeight - topBar.clientHeight) {
                topBar.classList.add('scrolled');
                phoneNav.classList.add('scrolled');
                for (let elem of phoneNavBars) {
                    elem.classList.add('scrolled');
                }
            }
            else {
                topBar.classList.remove('scrolled');
                phoneNav.classList.remove('scrolled');
                for (let elem of phoneNavBars) {
                    elem.classList.remove('scrolled');
                }
            }
        });
    }
}

export default ScrollAnimations;
