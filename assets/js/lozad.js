import lozad from "lozad";

lozad('.lozad', {
    threshold: 0.3, // ratio of element convergence
    loaded: function (element) {
        // eslint-disable-next-line no-prototype-builtins
        if(element.hasOwnProperty('__vue__')){
            element.__vue__.$emit('loaded');

        } else {
            // eslint-disable-next-line no-prototype-builtins
            element.classList.remove("loading")


            element.classList.add('loaded')
        }
    },
    load: function (element) {
        // eslint-disable-next-line no-prototype-builtins
        if(element.hasOwnProperty('__vue__')){

            element.__vue__.$emit('loading');
        } else {
            element.classList.add("loading")
        }
    }
}).observe(); // lazy loads elements with default selector as '.lozad'
