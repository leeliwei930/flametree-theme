<template lang="pug">
.d-flex.justify-content-around.m-5.flex-wrap
    .d-flex.flex-column.col-lg-8.justify-content-center
        template(v-if="currentPlaying")
            video-player.my-2(:autoplay="autoplay" :key="currentPlaying.embed_id" :embed-id="currentPlaying.embed_id" :source="currentPlaying.type" @ready="registerPlayerInstance" :ref="'plyr-video-'+currentPlaying.embed_id")
    .d-flex.flex-column.justify-content-start.col-lg-4
        video-playlist( :title="playlistName")
            template(v-if="videos.length > 0")
                video-thumbnail.my-3(
                    v-for="video in videos"
                    :key=" 'video-thumbnail-' + video.embed_id"
                    :description="shortenVideoDescription(video.description)"
                    :duration="video.duration"
                    :title="video.title"
                    :featured-image="video.featured_image"
                    :embed-id="video.embed_id"
                    :is-playing="(currentPlaying.embed_id === video.embed_id && currentPlaying.type === video.type)"
                    :type="video.type"
                    @click="playVideo"
                )

</template>
<style lang="scss">

</style>
<script type="text/javascript">
import VideoPlayer from "./VideoPlayer";
import VideoThumbnail from "./VideoThumbnail";
import VideoPlaylist from "./VideoPlaylist";
export default {
    components: {VideoThumbnail, VideoPlayer, VideoPlaylist},
    props: {
        videoList : {
            type: String
        },
        autoplay: {
            type: Boolean,
            default: false
        },
        playlistName: {
            type: String,
            default: "Playlist"
        }
    },
    data: function(){
        return {
            currentPlayEmbedID: null,
            videos: [],
            currentPlaying: null,
            player: null
        }
    },
    methods: {
        shortenVideoDescription: function(description){
            return description.substring(0, 15);
        },
        registerPlayerInstance: function(player){
            this.player = player;
            if(this.autoplay){
                this.player.play();
            }
        },
        playVideo(videoObj){
            this.player.stop();
            this.currentPlaying = videoObj;
            this.player.play();


        }
    },
    created: function(){
        // copy all the videos from props to data collection for state
        this.videos  =  JSON.parse(this.videoList);
        if(this.videos.length > 0){
            this.currentPlaying = this.videos[0];
        }
    },
    mounted: function(){

    },
    updated: function(){

    }
}

</script>
