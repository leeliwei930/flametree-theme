<template lang="pug">
    .mega-menu.shadow-lg.mega-menu-slideout.pb-3
        .d-flex.justify-content-center.align-items-start
            .nav.flex-column.nav-pills.col-3.pt-3
                slot
            .col-8.m-3
                portal-target.d-flex.flex-wrap(name="menu-items" multiple)
</template>
<script>
export default  {

    methods: {

    },
    mounted: function(){
    }
}
</script>
