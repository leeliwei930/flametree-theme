
export default  {
    namespaced: true,
    state: {
        showProductsMegaMenu: false,
        currentSelectedMenu: null
    },
    mutations: {
        deactivateMegaMenu: function(state){
            state.showProductsMegaMenu = false;
        },
        activateMegaMenu: function(state) {
            state.showProductsMegaMenu = true;
        },
        setCurrentSelectedMenu: function (state, _val) {
            state.currentSelectedMenu = _val;
        }
    },
    actions: {

    },
    getters: {
        currentMegaMenuState: function(state){
            return state.showProductsMegaMenu;
        },
        getCurrentSelectedMenu: function(state){
            return state.currentSelectedMenu;
        }
    }
}
