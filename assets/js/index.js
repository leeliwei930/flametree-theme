import Vue from 'vue'
import VueX from 'vuex'


import store from '@store/index.js'
import VueCarousel from 'vue-carousel'
import VueGallery from 'vue-gallery-slideshow'
import PortalVue from 'portal-vue';

import MegaMenu from '@components/mega-menu/MegaMenu';
import SidebarMenuItem from '@components/mega-menu/SidebarMenuItem';
import MenuItem from '@components/mega-menu/MenuItem';
import Mmenu from 'mmenu-js/src/mmenu.js';


Vue.use(PortalVue);
Vue.use(VueX);

// Vue.component(Navbar);
Vue.use(VueCarousel);
Vue.use(VueGallery);
window.Vue = Vue;
window.VueX = VueX;

let app = new Vue({
    el : "#flametree-app",
    components: {
        MegaMenu, MenuItem, SidebarMenuItem
    },
    store: store,

    methods: {
        initializeMMenu(){
           let mmenu =  new Mmenu( "#flametree-side-drawer", {
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
           this.$store.commit('SideDrawer/setMenu', mmenu);
        }
    },
    mounted: function() {
        this.initializeMMenu();
    }
})
