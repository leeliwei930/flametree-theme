
export default  {
    namespaced: true,
    state: {
        showProductsMegaMenu: false
    },
    mutations: {
        deactivateMegaMenu: function(state){
            state.showProductsMegaMenu = false;
        },
        activateMegaMenu: function(state){
            state.showProductsMegaMenu = true;
        }
    },
    actions: {

    },
    getters: {
        currentMegaMenuState: function(state){
            return state.showProductsMegaMenu;
        }
    }
}
