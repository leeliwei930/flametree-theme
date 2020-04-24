<template lang="pug">
    .image-thumbnail.rounded.m-1( :class="{'highlight' : highlightOnMouseOver }" @mouseover="firePreviewEvent")
        img(v-lazy="imgObj" )
</template>
<style lang="scss">
.image-thumbnail {
    height:100px;
    width: 100px;
    border: 3pt solid transparent;
    transition: 0.25s all;
    overflow: hidden;
    img {
        height: 100%;
        width: 100%;
    }

    &.highlight{
        &:hover {
            border: 3pt solid var(--primary-color-hex);
        }
    }
}
</style>
<script type="text/javascript">
export default {
    props: {
        index: {
            type: String
        },
        image: {
            type: String
        },
        dataImage: {
            type: String
        },
        highlightOnMouseOver: {
            type: Boolean,
            default: true
        }
    },
    data: function(){
        return {
            imgObj: {
                src: null,
                loading: null
            }
        }
    },
    methods: {
        firePreviewEvent(){
            this.$parent.$emit('previewImage', this.imgObj)

        }
    },
    created: function(){
        this.imgObj.src = this.dataImage;
        this.imgObj.loading = this.image;
    },
    mounted: function(){

    },
    updated: function(){

    }
}

</script>
