<template lang="pug">
.d-flex.flex-column
    .col-12.align-self-stretch.align-self-lg-center.col-lg-8
        template(v-if="playerState.currentPlaying != null")
            video-player(:autoplay="autoplay"
                :id="playerState.currentPlaying.id"
                :embed-id="playerState.currentPlaying.embed_id" :source="playerState.currentPlaying.type" @ready="registerPlayerInstance"
                :ref="'plyr-video-'+playerState.currentPlaying.id" :video-url="playerState.currentPlaying.video_url"
                :poster-url="playerState.currentPlaying.featured_image_url"
            )

    video-playlist(:title="playlistName")
        slot(:playerState="playerState")


</template>
<style lang="scss">

</style>
<script type="text/javascript">

import isMobile from "../../../mobile-detector";
export default {

    props: {
        autoplay: {
            type: Boolean,
            default: false
        },
        playlistName: {
            type: String,
            default: "Playlist"
        },
        defaultVideo: {
            type: String
        }
    },
    data: function(){
        return {
            player: null,
            playerState:{
                currentPlaying: null,
                isPaused: false,
                setCurrentPlaying: function(video){
                    this.playVideo(video)
                }.bind(this)
            }
        }
    },
    methods: {
        registerPlayerInstance: function(player){
            this.player = player;
            if(this.autoplay && !isMobile()){
                this.player.play();
            }
        },
        playVideo(videoObj){

            this.playerState.currentPlaying = videoObj;
            this.updatePlayerSource(videoObj)
            this.player.play();
        },
        updatePlayerSource: function(videoObj){
            if(this.player != null){
                if(videoObj.type !== 'video')
                {
                    this.player.source = {
                        type: 'video',
                        title: videoObj.title,
                        sources: [
                            {
                                src: videoObj.embed_id,
                                provider: videoObj.type
                            }
                        ]
                    }
                } else {
                    this.player.source = {
                        type: 'video',
                        title: videoObj.title,
                        sources: [
                            {
                                src: videoObj.video_url,
                                type: "video/mp4"
                            }
                        ]
                    }
                }
            }
        },
        loadDefaultVideo(){
            this.playerState.currentPlaying = JSON.parse(this.defaultVideo);
        }

    },
    created: function(){
    },
    mounted: function(){
        this.loadDefaultVideo();

    },
    updated: function(){

    }
}

</script>
