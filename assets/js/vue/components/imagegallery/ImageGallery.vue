<template lang="pug">
    .image-gallery.overflow-auto
        img.preview-image(v-lazy="imgObj")
        .d-flex.flex-row.flex-wrap
            slot
</template>
<style lang="scss">
.image-gallery {
    width: auto;
    height: auto;
    .preview-image {
        height: 80%;
        width:100%;
    }
}
</style>
<script type="text/javascript">
export default {
    props: {
        image: {
            type: String
        },
        dataImage: {
            type: String
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
        onPreviewImage: function(imgObj) {
            this.imgObj = imgObj;
        }
    },
    created: function(){

    },
    mounted: function(){
        this.imgObj.src = this.dataImage;
        this.imgObj.loading = this.image;

        this.$on('previewImage', this.onPreviewImage)
    },
    updated: function(){

    }
}

</script>
