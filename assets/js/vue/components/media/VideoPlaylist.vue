<template lang="pug">
.d-flex.flex-column.justify-content-start
    h5.text-primary.text-uppercase.p-3.font-weight-bold
        | {{title}}
    .video-playlist.d-flex.overflow-auto
        slot
</template>
<style lang="scss">
.video-playlist {
    padding:15px;
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
