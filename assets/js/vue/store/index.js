import Vue from 'vue'
import Vuex from 'vuex'
import Navbar from '@store/navbar.js';
import SideDrawer from '@store/SideDrawer.js'
Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        Navbar,
        SideDrawer
    }
})

export default store;
