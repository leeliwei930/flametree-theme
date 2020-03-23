<template lang="pug">
    .training-card.d-inline-flex.justify-content-around.bg-white.shadow.rounded-lg.flex-wrap.flex-column.p-3.my-2
            h6.posted-at.text-accent.text-uppercase {{ postedAt }}
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
    height: 320px;
    width:  30rem;
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
