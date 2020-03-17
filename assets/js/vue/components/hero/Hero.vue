<template lang="pug">
        .hero( v-lazy:background-image="imgObj")
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
        }
    },
    data: function() {
        return {
            imgObj : {
                src: null,
                loading: null
            }
        }
    },
    created() {
        this.imgObj.src = this.backgroundImageData;
        this.imgObj.loading = this.backgroundImage;
    },
    computed: {
        bgOverlayStyle(){
            return `background-image:${this.gradientColor}; background-repeat:no-repeat; background-size:cover`
        }
    }


}

</script>
