<template lang="pug">
    .d-flex.flex-column.flex-wrap.announcement-basic-card.shadow.bg-light.hoverable.p-3.m-2
        h2.post-title.text-dark {{title}}
        p.post-summary.text-dark {{ description }}
        p
            i.fas.fa-user.text-accent.mr-2
            | {{ author }}

        .d-flex.flex-column.justify-content-start.flex-wrap

            p
                i.fas.fa-calendar.text-accent.mr-2
                | {{ publishedOn }}
            slot
</template>
<style lang="scss">
    .announcement-basic-card {
        width:450px;
        min-height:180px;
        padding:15px;
        transition: all 0.25s;
        &.hoverable:hover {
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.5) !important;
            transform: translateY(-5px);
            -webkit-transform: translateY(-5px);
            -moz-transform: translateY(-5px);
        }
        .post-summary {
            text-overflow: ellipsis;
            word-break: break-word;
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
