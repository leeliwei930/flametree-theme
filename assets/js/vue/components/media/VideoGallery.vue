<template lang="pug">
.d-flex.flex-column.align-items-between
    .col-12.col-lg-8.align-self-center
        template(v-if="currentPlaying")
            video-player(:autoplay="autoplay" :key="currentPlaying.embed_id"
                    :id="currentPlaying.id"
                    :embed-id="currentPlaying.embed_id" :source="currentPlaying.type" @ready="registerPlayerInstance"
                    :ref="'plyr-video-'+currentPlaying.id" :video-url="currentPlaying.video_url"
                    :poster-url="currentPlaying.featured_image_url"
                )

    video-playlist( :title="playlistName")
        template(v-if="videos.length > 0")
            video-thumbnail.my-3.mx-1(
                v-for="video in videos"
                :key=" 'video-thumbnail-' + video.id"
                :description="shortenVideoDescription(video.description)"
                :duration="video.duration"
                :title="video.title"
                :featured-image-url="video.featured_image_url"
                :embed-id="video.embed_id"
                :video-url="video.video_url"
                :is-playing="(currentPlaying.embed_id === video.embed_id && currentPlaying.type === video.type)"
                :type="video.type"
                @click="playVideo"
            )

</template>
<style lang="scss">

</style>
<script type="text/javascript">

import isMobile from "../../../mobile-detector";
export default {

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
            if(description === null){
                return  "Unknown"
            }
            return description.substring(0, 15);
        },
        registerPlayerInstance: function(player){
            this.player = player;
            if(this.autoplay && !isMobile()){
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
