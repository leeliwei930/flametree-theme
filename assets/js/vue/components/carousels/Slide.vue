<template lang="pug">
    .flametree-theme.w-100.d-flex.justify-content-center.flex-column(:style="slideBgStyle" v-if="show")
        .godspeed-slide.m-3.m-md-5.p-2
            h1.slide-title  {{ title }}
            p(v-if="caption !== ''").mx-3.slide-caption {{ caption }}
            .d-flex.justify-content-start.flex-row.flex-wrap
                template(v-if="showPrimaryActionButton === '1'")
                    a.m-2.shadow-sm(:class="primaryButtonClasses" :href="primaryActionButtonLink")
                        | {{ primaryActionButtonText }}
                        i.mx-3.fas.fa-chevron-right
                template(v-if="showSecondaryActionButton === '1'")
                    a.m-2(:class="secondaryButtonClasses" :href="secondaryActionButtonLink")
                        | {{ secondaryActionButtonText }}
</template>
<style lang="scss" scoped>
.godspeed-slide {
    height: inherit;
    z-index:5;
    .slide-title {

    }

    .slide-caption {

    }
}
</style>
<script type="text/javascript">
export default {
    props: {
        show: {
            type: Boolean,
            default: true
        },
        image: {
            type: String,
            default: null
        },

        title: {
            type: String,
            default: ""
        },

        caption: {
            type: String,
            default: ""
        },

        titleAnimation: {
            type: String,
            default: null
        },

        captionAnimation: {
            type: String,
            default: null
        },

        showPrimaryActionButton: {
            type: String,
            default: "0"
        },
        primaryActionButtonText: {
            type: String,
            default: ""
        },

        primaryActionButtonLink: {
            type: String,
            default: ""
        },

        primaryActionButtonType: {
            type: String,
            default: ""
        },
        showSecondaryActionButton: {
            type: String,
            default: "0"
        },
        secondaryActionButtonText: {
            type: String,
            default: ""
        },
        secondaryActionButtonLink: {
            type: String,
            default: ""
        },
        secondaryActionButtonType: {
            type: String,
            default: ""
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
    computed:{
        slideBgStyle: function(){
            return `background:linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.8)), url('storage/app/media/${this.image}');
                    background-size:cover;
                    background-repeat:no-repeat`
        },
        titleClasses: function(){
            return `animated ${this.titleAnimation}`
        },
        captionClasses: function(){
            return `animated ${this.captionAnimation}`
        },
        primaryButtonClasses: function(){
            return `btn ${this.primaryActionButtonType}`
        },
        secondaryButtonClasses: function () {
            return `btn ${this.secondaryActionButtonType}`

        }
    }
}

</script>
