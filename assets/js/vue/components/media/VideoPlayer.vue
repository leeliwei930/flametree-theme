<template lang="pug">
.plyr_root
    template(v-if="(source === 'youtube' || source === 'vimeo')")
        div(:id="'plyr-' + embedId")
            iframe(
                :src="getIframeSources"
                allowfullscreen
                allowtransparency
                allow="autoplay"
            )
    template(v-else)
        video(:poster="posterUrl"
            :id="'plyr-'+embedId"
            playsinline
            controls
            autoplay="autoplay ? 'true' : 'false'"
            :volume="volume"
        )
            source(:src="videoUrl" type="video/mp4")
</template>
<style lang="scss">
</style>
<script type="text/javascript">
import  Plyr  from 'plyr';
export default {
    props: {
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

                this.$emit('ready', this.player);
            })

        }

    },

    created: function(){
    },

    mounted: function(){
        this.loadPlyr(this.embedId);

    },
    updated: function(){

    },
    computed: {
        getIframeSources: function(){
            switch(this.source){
            case 'youtube':
                return `https://www.youtube.com/embed/${this.embedId}?origin=${window.location.host}&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`
            case 'vimeo':
                return `https://player.vimeo.com/video/${this.embedId}?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`
            default:
                return ``

            }
        }
    }
}

</script>
