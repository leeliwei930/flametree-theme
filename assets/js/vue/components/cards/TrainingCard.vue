<template lang="pug">
    .training-card.d-flex.justify-content-around.bg-white.shadow.rounded-lg.flex-wrap.flex-column.p-3
            h6.text-primary.text-uppercase {{ postedAt }}
            h4 {{ title }}
            slot

            a.d-flex.justify-content-center.align-items-center.btn.w-100.my-2.btn-primary.hover-move-right(
                v-if="primaryLink !== ''" :href="primaryLink"
            )
                | {{primaryButtonText}}
                i.fas.fa-chevron-right.mx-2

</template>
<style lang="scss">
.training-card {
    height: 360px;
    width: 100%;
    .posted-at {
        font-weight: bold;
    }
}
</style>
<script type="text/javascript">
export default {
    props: {
        postedAt: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: "Training Title"
        },
        primaryLink: {
            type: String,
            default: ""
        },
        primaryButtonText: {
            type: String,
            default: "READ MORE"
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

    }
}

</script>
