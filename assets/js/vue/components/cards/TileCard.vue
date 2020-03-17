<template lang="pug">
    a.tile-card.d-flex.flex-column.rounded-lg.align-items-center.justify-content-center.text-decoration-none(
        :style="getTileStyle",
        :class="getTileCardClass",
        :href="link",
        :target="(openTab) ? '_blank' : '_self'"
    )
        .text-primary
            slot
        .text-accent
            slot(name="trailing")
</template>
<style lang="scss">
.tile-card {
    min-height: 150px;
    width: auto;
    transition: all 0.25s;

    &.hoverable:hover {
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
    }
}
</style>
<script type="text/javascript">
export default {
    props: {
        showShadow: {
            type: Boolean,
            default: true
        },
        textColor: {
            type: String,
            default: "#000000"
        },
        backgroundColor: {
            type: String,
            default: "linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.8))"
        },
        link: {
            type: String,
            default: ""
        },
        openTab: {
            type: Boolean,
            default: false
        },
        hoverable: {
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

    },
    computed: {
        getTileStyle() {
            return `background-image:${this.backgroundColor};color:${this.textColor}`
        },
        getTileCardClass(){
            let className = "";

            if(this.showShadow){
                className += ' shadow '
            }

            if(this.hoverable){
                className += ' hoverable '
            }
            return className;

        }
    }
}

</script>
