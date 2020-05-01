<template lang="pug">
.plyr_root
    div(:id="'plyr-' + _uid" :data-plyr-provider="getSourceLabel" :data-plyr-embed-id="embedId")

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
        loadPlyr: function(){
            // create a new player instance
            this.player = new Plyr('#plyr-' + this._uid);
            this.player.on('ready' , () => {
                this.$emit('ready', this.player);
            })

        }

    },

    created: function(){
    },

    mounted: function(){
        this.loadPlyr();

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
        },
        getSourceLabel: function(){
            if(this.source === 'video'){
                return 'html5'
            }
            return this.source;
        }
    }
}

</script>
