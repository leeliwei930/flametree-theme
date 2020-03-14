<template lang="pug">
    .flametree-theme(:class="{'lozad' : backgroundImage !== '', 'loading' : loading}")
        .hero(:style="heroBgStyle" )
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
            default: "linear-gradient(0deg, rgba(var(--primary-color-rgba), 0.4), rgba(var(--accent-color-rgba), 0.9))"
        }
    },
    data: function() {
        return {
            loading: false
        }
    },
    created() {
        if(this.backgroundImage !== ''){
            this.loading = true;
        }
    },
    mounted() {


        this.$on('loaded', () => {
            this.loading = false;
        })

    },

    computed : {
        heroBgStyle: function(){
            if(this.backgroundImage !== ""){
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
                return `background-image:${this.gradientColor};
                    background-size:cover;
                    background-repeat:no-repeat`
            }

        }
    }

}

</script>
