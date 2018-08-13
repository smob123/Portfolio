import $ from 'jquery';

class ScrollAnimations {

    bringUpSection(sectionId) {
        $('html, body').animate({
            scrollTop: $(sectionId).offset().top
        }, 1000);
    }

    isVisible(elemTop) {
        console.log('scroll');
        let windowBottom = $(window).scrollTop() + $(window).height();

        if (elemTop <= windowBottom) {
            console.log('yup');
            return true;
        }
    }
}

export default ScrollAnimations;
