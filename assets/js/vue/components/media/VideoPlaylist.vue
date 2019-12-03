<template lang="pug">
.d-flex.flex-column.justify-content-start
    h5.text-primary.text-uppercase.py-2
        | {{title}}
    .video-playlist
        slot
</template>
<style lang="scss">
.video-playlist {
    max-height: 35rem;
    overflow-y: scroll;
    overflow-x: hidden;
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
