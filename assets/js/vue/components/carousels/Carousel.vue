<template lang="pug">
        .godspeed-carousel(@mouseover="navigationController().showCarouselNavigationControl()", @mouseleave="navigationController().hideCarouselNavigationControl()")
            .bg-dark.d-flex.flex-row.justify-content-between.slides(:style="getTransalationPosition")
                slot(:carouselState="carouselState")
            .navigation-overlay.d-flex.flex-column.justify-content-center.w-100
                .d-flex.flex-row.justify-content-between
                    a.navigation.navigation-left(
                        @click="navigationController().prev()"
                        :style="navigationIconStyle",
                        :class="{'d-none' : !carouselState.showNavigationControl}"
                    )
                        i(:class="navigationPrevIcon").fa-2x
                    a.navigation.navigation-right(
                        @click="navigationController().next()"
                        :style="navigationIconStyle"
                        :class="{'d-none' : !carouselState.showNavigationControl}"
                    )
                        i(:class="navigationNextIcon").fa-2x
                .d-flex.flex-row.justify-content-center.indicator-bar
                    template(v-for="index in carouselState.totalSlides"  v-if="showIndicator")
                        a.text-white(href="#" @click="navigateToSlide(index)" )
                            i( :class="(--index === carouselState.currentSlide)? indicatorActiveClass : indicatorClass")
</template>
<style lang="scss" >
    .godspeed-carousel {
        position: relative;
        .slides {
            min-height: 500px;
            transition: all 0.85s;
        }

    }

    .navigation-overlay {

        .indicator-bar {
            color:white;
            position: absolute;

            bottom:15px;
            left:0;
            right:0;
            z-index:5;
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
            cursor: pointer;
            opacity: 0.6;
            &.navigation-left {
                i {
                    transform: translateX(10px);
                }
                transform: translateX(-40px);
                position: absolute;
                z-index: 5;
                top: 50%;
                animation-name: navigationControlLeftAnimation;
                animation-fill-mode: forwards;

                animation-duration: 0.85s;
                left: 0;
            }

            &.navigation-right {
                position: absolute;
                z-index: 5;

                top: 50%;
                animation-name: navigationControlRightAnimation;
                animation-fill-mode: forwards;

                animation-duration: 0.65s;
                right: 0;
                i {
                    transform: translateX(-10px);
                }
            }
        }
    }

    @keyframes navigationControlLeftAnimation {
        from {
            transform: translateX(-80px);

        }

        to {
            transform: translateX(-40px);

        }
    }

    @keyframes navigationControlRightAnimation {
        from {
            transform: translateX(80px);

        }

        to {
            transform: translateX(40px);

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
        },
        navigationControlBgColor: {
            type: String
        }
    },
    data: function(){
        return {
            carouselState: {
                nextSlideAnimation: null,
                totalSlides: null,
                currentSlide: null,
                currentTranslationPosition: 0,
                showNavigationControl: true
            }
        }
    },
    methods: {
        autoplayCarousel: function(){
            setInterval(() => {
                this.nextSlide();
            }, this.interval);
        },
        nextSlide: function(){
            let nextSlide = Number.parseInt(this.carouselState.currentSlide) + 1;
            this.carouselState.nextSlideAnimation = this.nextSlideAnimation;
            if(nextSlide >= this.carouselState.totalSlides){
                this.carouselState.currentSlide = 0;
            } else {
                this.carouselState.currentSlide = nextSlide;
            }
        },
        prevSlide: function(){
            let prevSlide = Number.parseInt(this.carouselState.currentSlide) - 1;
            this.carouselState.nextSlideAnimation = this.prevSlideAnimation;

            if(prevSlide < 0){
                this.carouselState.currentSlide = this.carouselState.totalSlides - 1;
            } else {
                this.carouselState.currentSlide = prevSlide;
            }
        },
        navigateToSlide: function(index){
            this.carouselState.currentSlide = index;
        },
        loadDefaultSlide: function(){
            let slides = this.$children;
            this.carouselState.totalSlides = slides.length;
            if(slides.length > 0){
                this.carouselState.currentSlide = Number.parseInt(slides[0].$options.propsData.slideId);


            }
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
                }.bind(this),

                showCarouselNavigationControl:function(){
                    if(this.autoHideNavigation){
                        this.carouselState.showNavigationControl = true;
                    }
                }.bind(this),

                hideCarouselNavigationControl: function(){
                    if(this.autoHideNavigation){
                        this.carouselState.showNavigationControl = false;
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
        this.loadDefaultSlide();
        if(this.autoplay){
            this.autoplayCarousel();
        }
        this.carouselState.showNavigationControl = !this.autoHideNavigation;
    },
    updated: function(){

    },
    computed: {
        navigationIconStyle: function(){
            return `background-color:${this.navigationControlBgColor};color:${this.navigationIconColor}`
        },
        getTransalationPosition: function(){
            let index = this.carouselState.currentSlide * 100;
            return `transform:translateX(-${index}%);
                    -webkit-transform:translateX(-${index}%)
                    -ms-transform:translateX(-${index}%)
                    -o-transform:translateX(-${index}%)
                    -moz-transform:translateX(-${index}%)

                    `
        }
    }
}

</script>
