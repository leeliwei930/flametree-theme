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

Vue.use(PortalVue);
Vue.use(VueX);
Vue.use(VueGallery);

import { components } from '@flametree-theme/js/component-repo.js';

window.Vue = Vue;
window.VueX = VueX;
window.app = new Vue({
    el : "#flametree-app",
    components,
    store: store,
    data: {
        mmenuState: {
            ready: false
        }
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
        activateMegaMenu: function () {
            this.$store.commit('Navbar/activateMegaMenu');

        },
        deactivateMegaMenu: function(){

            this.$store.commit('Navbar/deactivateMegaMenu');


        },

        getDisplayMegaMenuClass: function(){
            if(this.megaMenuState){
                return 'd-flex'
            } else {
                return 'd-none'
            }
        }
    },
    mounted: function () {
        this.initializeMMenu();
    },
    computed: {

        megaMenuState(){
            return this.$store.getters['Navbar/currentMegaMenuState']
        }
    }
})
