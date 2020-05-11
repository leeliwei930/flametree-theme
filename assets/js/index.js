import Vue from 'vue'


import Mmenu from 'mmenu-js/src/mmenu.js';
import VModal from 'vue-js-modal'
import PortalVue from 'portal-vue';
import moment from 'moment-timezone';
import VueLazyload from 'vue-lazyload'
import  momentDurationFormatSetup from "moment-duration-format";
Vue.use(VueLazyload, {
    preLoad: 1.3,
    observer: true,
    observerOptions: {
        rootMargin: '0px',
        threshold:0.9
    }
});

momentDurationFormatSetup(moment);

Vue.prototype.$moment = moment;
Vue.use(VModal)
Vue.use(PortalVue);


import components from '@flametree-theme/js/component-repo.js';
import { BrowserTimeZoneConverter } from "@flametree-theme/js/util.js";


// allow injected global function for ajax handler able to reference in vue instance
Vue.prototype.$window = window;
Vue.prototype.$ = window.jQuery;
Vue.prototype.$tzConverter = BrowserTimeZoneConverter;

// perform global component registration
Object.keys(components).forEach((index) => {
    Vue.component(index, components[index])
    // eslint-disable-next-line no-debugger
});


window.Vue = Vue;
window.app = new Vue({
    el : "#flametree-app",

    data: {
        scrollY: 0
    },
    methods: {
        initializeMMenu(){
            if(document.getElementById('flametree-side-drawer') == null){
                return;
            }
            new Mmenu("#flametree-side-drawer", {

                wrappers: ["bootstrap"],
                "extensions": [
                    "pagedim-black",
                    "position-front"
                ],
                offCanvas: {
                    page: {
                        selector: "#page-content"
                    }
                }
            });



            this.displayMenu();
        },

        displayMenu: function(){
            document.getElementById('flametree-side-drawer').classList.remove('d-none')
        },

        registerMegaMenuEvent: function(){

            if(document.getElementById('producer-link') === null|| document.getElementById('producer-mega-menu') === null)
            {
                return;
            }
            document.getElementById('producer-link').addEventListener('mouseenter', () => {
                document.getElementById('producer-mega-menu').classList.remove('d-none');

                document.getElementById('producer-mega-menu').classList.add('d-flex');
            });

            document.getElementById('producer-link').addEventListener('mouseleave', () => {
                document.getElementById('producer-mega-menu').classList.remove('d-flex');
                document.getElementById('producer-mega-menu').classList.add('d-none');
            });

            document.getElementById('producer-mega-menu').addEventListener('mouseenter', () => {
                document.getElementById('producer-mega-menu').classList.remove('d-none');

                document.getElementById('producer-mega-menu').classList.add('d-flex');
            });

            document.getElementById('producer-mega-menu').addEventListener('mouseleave',() => {
                document.getElementById('producer-mega-menu').classList.remove('d-flex');
                document.getElementById('producer-mega-menu').classList.add('d-none');
            });

        },

    },
    mounted: function () {
        this.initializeMMenu();
        this.registerMegaMenuEvent();


    },

    updated: function(){

    },
    computed: {


    },
})
