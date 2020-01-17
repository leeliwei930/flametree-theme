<template lang="pug">
    .mega-menu.shadow-lg.mega-menu-slideout
        .d-flex.justify-content-center.align-items-baseline
            .nav.flex-column.nav-pills.col-3
                slot
            .col-8.m-3
                portal-target.d-flex.flex-wrap(name="menu-items" multiple)
</template>
<script>
export default  {

    methods: {
        selectFirstItem: function(){
            if( this.$slots.default != null){
                if( this.$slots.default.length > 0){

                    let defaultSelection = this.$slots.default[0].componentOptions.propsData.title;
                    if(defaultSelection == null){
                        defaultSelection = 'unknown'
                    }
                    this.updateSelectedMenu(defaultSelection)
                }
            }
        },
        updateSelectedMenu: function(item){
            this.$store.commit("Navbar/setCurrentSelectedMenu", item)
        }
    },
    mounted: function(){
        this.selectFirstItem();
    }
}
</script>
