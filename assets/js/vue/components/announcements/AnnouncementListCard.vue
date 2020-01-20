<template lang="pug">
    .announcement-card-list.shadow-sm.bg-white.my-3.rounded.d-flex.flex-row.flex-wrap.mx-auto(:class="{'hoverable' : hoverable}")
        .col-12.col-md-6.p-0
            .featured-image.rounded(:style="featuredImageStyle")
        .col-12.col-md-6.p-3
            .d-flex.flex-column.justify-content-start
                h5.post-title.small {{ title }}
                p.post-published-at.small Posted On {{ publishedOn }}
                .d-flex.flex-row.justify-content-start.align-items-center
                    img.rounded-circle.mr-3(:src="authorAvatarImage")
                    .d-flex.flex-column
                        strong.post-author {{ author }}
                        small {{ authorRole }}
                p.post-description {{ description }}
                slot
</template>
<style lang="scss">
    .announcement-card-list {
        height:auto;
        width: 100%;
        max-width:768px;
        transition: 0.25s all;
        .featured-image {
            height:100%;
            min-height: 320px;
        }


        &.hoverable:hover {
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;

        }
    }
</style>
<script type="text/javascript">


export default {
    props: {
        title: {
            type: String
        },
        category: {
            type: String
        },
        description: {
            type: String
        },
        author: {
            type: String
        },
        authorRole: {
            type: String
        },
        authorAvatarImage: {
            type: String
        },
        publishedOn: {
            type: String
        },
        featuredImageUrl: {
            type: String
        },
        hoverable: {
            type: Boolean,
            default: true
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

    },
    computed: {
        featuredImageStyle: function(){
            return `background:linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.8)), url('${this.featuredImageUrl}');
                background-size:cover;
                background-repeat:no-repeat`

        }
    }
}

</script>
