import $ from 'jquery';

class ScrollAnimations {

    static bringUpSection(sectionId) {
        $('html, body').animate({
            scrollTop: $(sectionId).offset().top - 100
        }, 1000);
    }

    static stickyNav() {
        const navTop = $('.nav-container').offset().top;

        $(window).scroll(() => {
            $(window).scrollTop() >= navTop ? $('.nav-container').addClass('sticky-nav') && $('#main-nav').css({ 'border-radius': '0' }) :
                $('.nav-container').removeClass('sticky-nav') && $('#main-nav').css({ 'border-radius': '30px 30px 0 0' });
        });
    }
}

export default ScrollAnimations;
