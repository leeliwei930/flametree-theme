import Vue from 'vue'
import VueX from 'vuex'

import store from '@store/index.js'


import Mmenu from 'mmenu-js/src/mmenu.js';
import VueGallery from 'vue-gallery-slideshow'
import PortalVue from 'portal-vue';

import moment from 'moment';
import  momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

Vue.prototype.$moment = moment;
Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            // here I check that click was outside the el and his childrens
            if (!(el == event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    },
});
Vue.use(PortalVue);
Vue.use(VueX);
Vue.use(VueGallery);

import { components } from '@flametree-theme/js/component-repo.js';


// allow injected global function for ajax handler able to reference in vue instance
Vue.prototype.$window = window;
Vue.prototype.$ = window.jQuery;

window.Vue = Vue;
window.VueX = VueX;
window.app = new Vue({
    el : "#flametree-app",
    components,
    store: store,
    data: {
        mmenuState: {
            ready: false
        },
        scrollY: 0
    },
    methods: {
        initializeMMenu(){
            let mmenu =  new Mmenu("#flametree-side-drawer", {

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
            this.mmenuState.ready = true;

            this.$store.commit('SideDrawer/setMenu', mmenu);

            this.displayMenu();
        },

        displayMenu: function(){
            document.getElementById('flametree-side-drawer').classList.remove('d-none')
        },

        registerMegaMenuEvent: function(){
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
        registerAffixNavbar: function(){
            window.addEventListener('scroll', () => {
                if(window.scrollY > 450){
                    document.getElementById('flametree-navigation-bar').classList
                        .add('fixed-top', 'animated', 'fadeInDown')
                } else {
                    document.getElementById('flametree-navigation-bar').classList
                        .remove('fixed-top', 'animated', 'fadeInDown')
                }
            })

        }
    },
    mounted: function () {
        this.initializeMMenu();
        this.registerMegaMenuEvent();
        this.registerAffixNavbar();

    },

    updated: function(){
        this.$forceUpdate();
    },
    computed: {

        megaMenuState(){
            return this.$store.getters['Navbar/currentMegaMenuState']
        },
    },
})
