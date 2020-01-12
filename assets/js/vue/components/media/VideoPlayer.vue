<template lang="pug">
.plyr_root
    template(v-if="(source === 'youtube' || source === 'vimeo')")
        div(class="plyr__video-embed" :id="'plyr-' + id")
            iframe(
                :src="getIframeSources"
                allowfullscreen
                allowtransparency
            )
    template(v-else)
        video(:poster="posterUrl"
            :id="'plyr-'+id"
            playsinline
            controls
            :autoplay="autoplay"
            :volume="volume"
        )
            source(:src="videoUrl" type="video/mp4")
</template>
<style lang="scss">
</style>
<script type="text/javascript">
import  Plyr  from 'plyr';
import isMobile from "../../../mobile-detector";
export default {
    props: {
        id: {
            type: Number,
            default: null
        },
        source: {
            type: String,
            default: "media"
        },
        embedId: {
            type: String,
            default: ""
        },
        posterUrl: {
            type: String,
            default:""

        },
        videoUrl: {
            type: String,
            default: ""
        },
        autoplay: {
            type: Boolean,
            default: false
        },

        volume : {
            type: Number,
            default: 0
        }
    },
    data: function(){
        return {
            player: null
        }
    },
    methods: {
        loadPlyr: function(id){
            // create a new player instance
            this.player = new Plyr('#plyr-' + id);
            this.player.on('ready' , () => {

                setTimeout(() => {
                    this.$emit('ready', this.player);
                }, 1800)
            })

        }

    },

    created: function(){
    },

    mounted: function(){
        this.loadPlyr(this.id);

    },
    updated: function(){

    },
    computed: {
        getIframeSources: function(){
            switch(this.source){
            case 'youtube':
                if(isMobile()){
                    return `https://www.youtube.com/embed/${this.embedId}`

                } else {
                    return `https://www.youtube.com/embed/${this.embedId}?origin=${window.location.origin}&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;muted=1;autoplay=0`

                }
            case 'vimeo':
                return `https://player.vimeo.com/video/${this.embedId}?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`
            default:
                return ``

            }
        }
    }
}

</script>
