import * as ScrollMagic from 'scrollmagic';

let sections = [];
let elems = [];

class ScrollAnimations {

    setSections(s) {
        sections = s;
    }

    setElements(e) {
        elems = e;
    }

    triggerAnimation() {
        if (window.innerWidth >= 1024) {
            var controller = new ScrollMagic.Controller();

            for (var i = 0; i < sections.length; i++) {
                new ScrollMagic.Scene({
                    triggerElement: sections[i],
                    duration: '100%',
                    triggerHook: 0
                })
                        .setPin(sections[i], {pushFollowers: false})
                        .addTo(controller);
            }
        }

        this.displayElements();
    }

    displayElements() {
        var controller = new ScrollMagic.Controller();

        for (var i = 0; i < elems.length; i++) {
            new ScrollMagic.Scene({
                triggerElement: elems[i],
                triggerHook: 0.5
            })
                    .setClassToggle(elems[i], 'fade-in')
                    .addTo(controller);
        }
    }
}
;

export default ScrollAnimations;
