<template lang="pug">
    .flametree-theme
        .hero(:style="heroBgStyle" :class="{'lazy' : backgroundImage !== ''}")
                slot

</template>
<style lang="scss">

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
            default: "linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.8))"
        }
    },
    data: function() {
        return {
            loading: true
        }
    },
    mounted() {

        this.$on('loading' , () => {
            this.loading = true;
        });


        this.$on('loaded', () => {
            this.loaded = false;
        })

    },

    computed : {
        heroBgStyle: function(){
            if(this.backgroundImage !== ''){
                if(this.loading)
                {
                    return `background-image:${this.gradientColor}, url('${this.backgroundImage}');
                    background-size:cover;
                    background-repeat:no-repeat`
                } else {
                    return `background-image:${this.gradientColor}, url('${this.backgroundImageData}');
                    background-size:cover;
                    background-repeat:no-repeat`
                }
            } else {
                return `background-image:${this.gradientColor}');
                    background-size:cover;
                    background-repeat:no-repeat`
            }

        }
    }

}

</script>
