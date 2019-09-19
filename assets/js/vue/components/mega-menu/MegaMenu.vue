<template lang="pug">
    div.mega-menu.shadow-lg(v-on:mouseleave="hideMegaMenu()")
        .d-flex.justify-content-center.align-items-baseline
            .nav.flex-column.nav-pills.col-3
                slot
            .col-8.m-3
                portal-target.d-flex.flex-wrap(name="menu-items" multiple)
</template>
<script>
export default  {

    data: function(){
        return {
            currentSelectedMenu: null
        }
    },
    methods: {
        selectFirstItem(){
            if( this.$slots.default != null){
                if( this.$slots.default.length > 0)
                    this.currentSelectedMenu =   this.$slots.default[0].componentOptions.propsData.title;
            }
        },
        hideMegaMenu(){
            this.$emit('hideMegaMenu');
        }
    },
    mounted: function(){
        this.selectFirstItem();
        this.$on('notifyChangedItem', (item) => {
            this.currentSelectedMenu = item;
        })
    }
}
</script>
