<template lang="pug">
    .announcement-card-list.shadow-sm.bg-white.my-3.rounded.d-flex.flex-row.flex-wrap.mx-auto(
        :class="{'hoverable' : hoverable }"
    )
        .col-12.col-md-6.p-0
            .featured-image.rounded( v-lazy:background-image="imgObj")
                .featured-image-bg-overlay(:style="featuredImageOverlayStyle")
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
        transition: 0.25s all;
        .featured-image {
            height:100%;
            position: relative;
            z-index: 1;
            min-height: 320px;
            &[lazy=loaded] {
                background-repeat: no-repeat;
                background-size: cover;
            }
            &[lazy=loading] {
                background-repeat: no-repeat;
                background-size: cover;
            }
            &[lazy=error] {
              background-repeat: no-repeat;
              background-size: cover;
            }

            .featured-image-bg-overlay {
                position: absolute;
                z-index:3;
                width: 100%;
                height: 100%;
            }
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
            type: String,
            default: null
        },
        dataFeaturedImageUrl: {
            type: String,
            default: null
        },
        hoverable: {
            type: Boolean,
            default: true
        }
    },
    data: function(){
        return {
            imgObj : {
                src: null,
                loading: null
            }
        }
    },
    methods: {

    },
    created: function(){
        this.imgObj.src = this.dataFeaturedImageUrl;
        this.imgObj.loading = this.featuredImageUrl;
    },
    mounted: function(){

    },
    updated: function(){

    },
    computed: {
        featuredImageOverlayStyle: function(){

            return `background-image:linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.8));
            background-size:cover;
            background-repeat:no-repeat`



        }
    }
}

</script>
