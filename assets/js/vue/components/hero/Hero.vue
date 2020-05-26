<template lang="pug">
        .hero( v-lazy:background-image="imgObj" :style="(enableParallax) ? {'height' :  `${parallax.height}px` } : null" )
            .hero-content
                slot
            .hero-overlay(:style="bgOverlayStyle")

</template>
<style lang="scss">
    .hero {
        position: relative;
        .hero-overlay {
            position: absolute;
            z-index:1;
            width: 100%;
            height: 100%;
        }
        .hero-content {

            z-index: 3;
            width: 100%;
            display: flex;
        }



        &[lazy=loaded] {
            background-repeat: no-repeat;
            background-size: cover;
        }
        &[lazy=loading] {
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
</style>
<script type="text/javascript">
export default {
    props: {
        backgroundImageData: {
            type: String,
            default: ""
        },
        backgroundImage : {
            type: String,
            default: ""
        },
        gradientColor: {
            type: String,
            default: "linear-gradient(0deg, rgba(var(--primary-color-rgba), 0.2), rgba(var(--accent-color-rgba), 0.3))"
        },
        enableParallax: {
            type: Boolean,
            default: false
        }
    },
    data: function() {
        return {
            imgObj : {
                src: null,
                loading: null
            },
            parallax: {
                height: 0
            }
        }
    },
    created() {
        this.imgObj.src = this.backgroundImageData;
        this.imgObj.loading = this.backgroundImage;
    },
    mounted() {
        if(this.enableParallax){

            window.addEventListener('scroll', ()=> {
                let diff  = 320 - window.pageYOffset *  0.8;
                if(diff < 0){
                    return;
                }
                this.parallax.height = diff;

            })
        }
    },
    computed: {
        bgOverlayStyle(){
            return `background-image:${this.gradientColor}; background-repeat:no-repeat; background-size:cover`
        }
    }


}

</script>
