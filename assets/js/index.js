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

import VideoGallery from "@components/media/VideoGallery.vue";
import VideoPlayer from "@components/media/VideoPlayer.vue"
import VideoPlaylist from "@components/media/VideoPlaylist.vue";
import VideoThumbnail from "@components/media/VideoThumbnail.vue";


let components = {
    MegaMenu, MenuItem, SidebarMenuItem,

    VideoThumbnail, VideoPlaylist, VideoPlayer, VideoGallery
};

import moment from 'moment';
import  momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

Vue.prototype.$moment = moment;

Vue.use(PortalVue);
Vue.use(VueX);

Vue.use(VueCarousel);
Vue.use(VueGallery);
window.Vue = Vue;
window.VueX = VueX;
window.app = new Vue({
    el : "#flametree-app",
    components,
    store: store,

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
            this.$store.commit('SideDrawer/setMenu', mmenu);
        }
    },
    mounted: function () {
        this.initializeMMenu();
    }
})
