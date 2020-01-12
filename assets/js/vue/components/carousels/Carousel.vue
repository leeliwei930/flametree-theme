<template lang="pug">
        .godspeed-carousel
            .bg-dark.d-flex.flex-row.justify-content-between.preview
                slot(:carousel="carouselState")
            .navigation-overlay.d-flex.flex-column.justify-content-center.w-100
                .d-flex.flex-row.justify-content-between
                    a.navigation.navigation-left(@click="navigationController().prev()")
                        i.fas.fa-chevron-left.fa-2x
                    a.navigation.navigation-right(@click="navigationController().next()")
                        i.fas.fa-chevron-right.fa-2x
                .d-flex.flex-row.justify-content-center.indicator-bar
                    i.fas.fa-circle
                    i.fas.fa-circle
                    i.fas.fa-circle
</template>
<style lang="scss" >
    .godspeed-carousel {
        position: relative;
        .preview {
            min-height: 640px;
        }

    }

    .navigation-overlay {
        position: absolute;
        top: 50%;
        left: 0;
        right:0;
        z-index: 2;
        .indicator-bar {
            transform: translateY(200px);
            color:white;

            i {
                font-size: 8pt;
                margin:5px;
            }
        }
        .navigation{
            background-color: grey;
            height: 80px;
            width: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;

            &.navigation-left {
                i {
                    transform: translateX(10px);
                }
                transform: translateX(-40px);
            }

            &.navigation-right {
                i {
                    transform: translateX(-10px);
                }
                transform: translateX(40px);
            }
        }
    }

</style>
<script type="text/javascript">
export default {
    props: {
        prevSlideAnimation: {
            type: String,
            default: "slideRight"
        },
        nextSlideAnimation: {
            type: String,
            default: "slideLeft"
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 1500
        },
        width: {
            type: String,
            default: "100%"
        },
        height: {
            type: String,
            default: "480px"
        },
        showNavigation: {
            type: Boolean,
            default: true
        },
        autoHideNavigation: {
            type: Boolean,
            default: true
        },
        navigationNextIcon: {
            type: String,
            default: "fas fa-arrow-right"
        },
        navigationPrevIcon: {
            type: String,
            default: "fas fa-arrow-left"
        },
        navigationIconColor: {
            type: String,
            default: "white"
        },
        showIndicator: {
            type: Boolean,
            default: false
        },
        indicatorClass: {
            type: String,
            default: "far fa-circle"
        },
        indicatorColor: {
            type: String,
            default: "white"
        },
        indicatorActiveClass: {
            type: String,
            default: "fas fa-circle"
        },
        navigationControlShape: {
            type: String,
            default: "circle"
        }
    },
    data: function(){
        return {
            carouselState: {
                currentSlide: null
            }
        }
    },
    methods: {
        nextSlide: function(){

        },
        prevSlide: function(){

        },
        navigationController: function() {

            // allow vue instance props, data, methods able to pass in
            return {
                next: function(){
                    if(this.showNavigation){

                        this.nextSlide();
                    }
                }.bind(this),
                prev: function () {
                    if(this.showNavigation){
                        this.prevSlide();

                    }
                }.bind(this)
            }
        },
        indicatorController: function() {

            // allow vue instance props, data, methods able to pass in

            return {
                next: function(){
                    if(this.showNavigation){
                        this.nextSlide();
                    }
                }.bind(this),
                prev: function(){
                    if(this.showNavigation){
                        this.prevSlide();
                    }
                }.bind(this)
            }
        }
    },
    created: function(){

    },
    mounted: function(){

    },
    updated: function(){

    }
}

</script>
