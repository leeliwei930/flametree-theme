<template lang="pug">
.d-flex.flex-column.justify-content-start
    h5.text-primary.text-uppercase.font-weight-bold.m-3
        | {{title}}
    .video-playlist.d-flex.overflow-auto
        slot
</template>
<style lang="scss">
.video-playlist {
}
</style>
<script type="text/javascript">
export default {
    props: {
        title : {
            type: String,
            default: "Your Playlist"
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
