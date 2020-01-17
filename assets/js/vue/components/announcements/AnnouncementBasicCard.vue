<template lang="pug">
    .d-flex.flex-column.flex-wrap.announcement-basic-card.shadow.bg-light.hoverable.my-2.p-3
        h2.post-title.text-dark {{title}}
        p.post-summary.text-dark {{ description }}

        p.mb-auto
            i.fas.fa-user.text-accent.mr-2
            | {{ author }}

        .d-flex.flex-row.justify-content-start.flex-wrap.w-100.align-items-center
            p.mr-sm-auto.my-auto
                i.fas.fa-calendar.text-accent.mr-2
                | {{ publishedOn }}


            slot
</template>
<style lang="scss">
    .announcement-basic-card {
        width:450px;
        height:300px;
        min-height:180px;
        padding:15px;
        transition: all 0.25s;
        &.hoverable:hover {
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.5) !important;
            transform: translateY(-5px);
            -webkit-transform: translateY(-5px);
            -moz-transform: translateY(-5px);
        }
    }
</style>
<script type="text/javascript">
export default {
    props: {
        title: {
            type: String
        },
        description: {
            type: String
        },
        author: {
            type: String
        },
        publishedOn: {
            type: String
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
