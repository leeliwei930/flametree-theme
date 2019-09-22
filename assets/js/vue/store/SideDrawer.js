export default  {
    namespaced: true,
    state: {
        menu: null
    },
    mutations: {
        setMenu: function(state, value){
            state.menu = value;
        }
    },
    actions: {

    },
    getters: {
        getMenu: function(state){
            return state.menu;
        }
    }
}
