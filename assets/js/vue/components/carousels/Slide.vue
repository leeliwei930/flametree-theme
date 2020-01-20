<template lang="pug">
    .godspeed-slide-wrapper.d-flex.flametree-theme.w-100.justify-content-center.flex-column(:style="slideBgStyle" )
        .godspeed-slide.m-3.m-md-5.p-2(v-if="show")
            h1.slide-title(:class="titleClasses")  {{ title }}
            p.slide-caption(v-if="caption !== ''" :class="captionClasses").slide-caption {{ caption }}
            .d-flex.justify-content-start.flex-row.flex-wrap(:class="captionClasses")
                template(v-if="showPrimaryActionButton === '1'")
                    a.mr-2.my-2.shadow-sm(:class="primaryButtonClasses" :href="primaryActionButtonLink")
                        | {{ primaryActionButtonText }}
                        i.mx-3.fas.fa-chevron-right
                template(v-if="showSecondaryActionButton === '1'")
                    a.mr-2.my-2(:class="secondaryButtonClasses" :href="secondaryActionButtonLink")
                        | {{ secondaryActionButtonText }}
</template>
<style lang="scss" >
.godspeed-slide-wrapper {
    flex-basis: inherit;
    flex-grow: 0;
    flex-shrink: 0;
    width: 100%;
    overflow: hidden;
}
.godspeed-slide {
    height: inherit;

}
</style>
<script type="text/javascript">
export default {
    props: {
        classes: {
            type: String
        },
        show: {
            type: Boolean,
            default: false
        },
        slideId: {
            type: String,
            default: null
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
            return `background:linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.8)), url('${this.image}');
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
