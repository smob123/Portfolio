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

    navHandler() {
        if ($('#main-nav').css('display') === 'none') {
            $('#main-nav').css('display', 'block');
        }
        else {
            $('#main-nav').css('display', 'none');
        }
    }
}

export default ScrollAnimations;
