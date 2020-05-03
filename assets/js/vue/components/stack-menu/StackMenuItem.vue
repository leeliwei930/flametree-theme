<template lang="pug">
    a.stack-menu-item.p-2.text-decoration-none.rounded(:href="link" :class="{'active' : isActive }")
        slot
</template>
<style lang="scss">
.stack-menu-item {
    color: var(--primary-color-hex);
    transition: 0.25s all;

    &.active {
        background-color: var(--primary-color-hex);
        color: white;
    }
    &:hover {
        background-color: var(--primary-color-hex);
        color: white;
    }
}
</style>
<script type="text/javascript">
export default {
    props: {
        link: {
            type: String,
            default: "#"
        },
        title: {
            type: String,
            default: ""
        },
        isActive: {
            type: Boolean,
            default: false
        }
    },
    data: function(){
        return {

        }
    },
    methods: {

    },
    created: function(){

    },
    mounted: function(){

    },
    updated: function(){

    }
}

</script>
