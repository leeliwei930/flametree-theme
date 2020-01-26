<template lang="pug">
    .flametree-theme
        .hero(:style="heroBgStyle")
                slot

</template>
<style lang="scss">

</style>
<script type="text/javascript">
export default {
    props: {
        backgroundImage : {
            type: String,
            default: ""
        },
        gradientColor: {
            type: String,
            default: "linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.8))"
        }
    },

    computed : {
        heroBgStyle: function(){
            return `background:${this.gradientColor}, url('${this.backgroundImage}');
                    background-size:cover;
                    background-repeat:no-repeat`
        }
    }

}

</script>
