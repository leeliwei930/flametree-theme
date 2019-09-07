import Vue from 'vue'
import VueX from 'vuex'


import store from '@store/index.js'
import VueCarousel from 'vue-carousel'
import VueGallery from 'vue-gallery-slideshow'
Vue.use(VueX);

// Vue.component(Navbar);
Vue.use(VueCarousel);
Vue.use(VueGallery)

window.Vue = Vue;
window.VueX = VueX;
let app = new Vue({
    el : "#flametree-app",
    store: store,
    components: {
      
    },
    methods: {
        
    },
    mounted: function() {
      
    }
})
