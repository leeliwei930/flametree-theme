import Vue from 'vue'
import Vuex from 'vuex'
import Navbar from '@store/navbar.js';

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
            Navbar
    }
})

export default store;
