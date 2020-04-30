<template lang="pug">
    .mega-menu.shadow-lg.mega-menu-slideout.pb-3
        .d-flex.justify-content-center.align-items-start
            .nav.flex-column.nav-pills.col-3.pt-3
                slot(:state="state")
            .col-8.m-3.overflow-y-scroll( style="max-height:320px")
                portal-target.d-flex.flex-wrap.menu-items(name="menu-items" multiple)
</template>
<script>
export default  {
    data: function(){
        return {
            state:  {
                activeSelection: null,
                updateActiveSelection: function(newSelect){
                    this.state.activeSelection = newSelect;
                }.bind(this)
            }
        }
    },
    methods: {

    },
    mounted: function(){
    }
}
</script>
