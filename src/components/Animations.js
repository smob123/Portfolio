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
        if ($('#main-nav').css('opacity') === '0') {
            $('#main-nav').css({ 'opacity': '1', 'pointer-events': 'auto'});
            $('#phone-div div').css({ 'background-color': '#000'});
        }
        else {
            $('#main-nav').css('opacity', '0');
            $('#phone-div div').css({ 'background-color': '#fff' });
        }
    }
}

export default ScrollAnimations;
