<template lang="pug">
    .video-thumbnail(@mouseover="showPlayIcon = true" @mouseleave="showPlayIcon = false" v-on:click="emitClickEvent()")
        .d-flex.flex-column.justify-content-between.p-3.w-100.h-100.rounded-card(:style="backgroundCSS" , :class="styleBuilder()" )
                .d-flex.flex-row.justify-content-between
                    .duration.p-2.d-flex.justify-content-between.align-items-center
                        i.fas.fa-video
                        strong.ml-auto
                            | {{formatReadableDuration}}
                    .currently-playing-indicator.text-uppercase.bg-primary.p-2.d-flex.justify-content-center.align-items-center(v-if="isPlaying")
                        strong  Playing
                .justify-content-center.my-auto.action-fadeIn.d-flex
                        i.fas(:class="dynamicActionIcon")
                .d-flex.flex-column.justify-content-end
                    h3.title
                        | {{title}}
                    .description
                        p {{description}}
</template>
<style lang="scss">

    .video-thumbnail  {
        height: 15rem;
        min-width: 45vh;
        max-width: 45vh;
    }

    .video-thumbnail .rounded-card {
        border-radius: 15pt;

    }
    .video-thumbnail .dark-overlay{
        color:white;
    }

    .video-thumbnail .duration {
        border-radius: 15pt;
        border:1pt solid white;
        width:100px;

    }

    .video-thumbnail .title {
        font-family: 'Nunito Light' , sans-serif;
        font-size:14pt;

    }

    .video-thumbnail .description p {
        font-family: 'Nunito Light', sans-serif;
        font-size:12pt;
        text-overflow: ellipsis;
        overflow:hidden;
    }
    .video-thumbnail .action-fadeIn {
        transition: all 0.5s;
        opacity: 0;
    }
    .video-thumbnail:hover {
        .action-fadeIn {
            opacity: 1;
            transform: translateY(-15px);
        }
    }

    .video-thumbnail .has-hover-effect:hover {
        box-shadow: 0 1rem 3rem rgba(0,0,0,.175) ;


    }

    .video-thumbnail .has-hover-effect {
        cursor:pointer;
        transition: all 1s;
    }

    .video-thumbnail .currently-playing-indicator {
        border-radius: 15pt;
        width:6em;
        color: white;
        opacity: 1;
        transition: all 1s;
    }

    .video-thumbnail .currently-playing-indicator strong {
        font-family: 'Nunito Light' , sans-serif;
        font-size:12pt;

    }



</style>
<script type="text/javascript">
export default {
    props: {
        isPlaying: {
            type: Boolean,
            default: false
        },
        enableHover: {
            type: Boolean,
            default: true
        },
        featuredImageUrl: {
            type: String
        },
        title: {
            type: String
        },
        description: {
            type: String
        },
        duration: {
            type: Number
        },
        videoUrl: {
            type: String
        },
        embedId: {
            type: String
        },
        type: {
            type: String,
            validator: function(typeVal){
                return ['youtube' , 'vimeo' , 'video' ].indexOf(typeVal) !== -1;
            }
        }
    },
    data: function(){
        return {
            showPlayIcon: false
        }
    },
    methods: {
        styleBuilder: function(){
            let styleClass = "";
            if(this.enableHover){
                styleClass += "has-hover-effect "
            }

            if(this.backgroundCSS !== null){
                styleClass += " dark-overlay"
            } else {
                styleClass += " bg-white shadow"
            }
            return styleClass;
        },
        emitClickEvent: function(){

            let videoObj = {
                type: this.type,
                title: this.title,
                description: this.description,
                embed_id : this.embedId,
                featured_image_url: this.featuredImageUrl,
                video_url : this.videoUrl,
            };

            this.$emit('click' , videoObj);
        }
    },
    created: function(){

    },
    mounted: function(){

    },
    updated: function(){

    },
    computed: {
        backgroundCSS: function(){
            if(this.featuredImage !== null){
                return `background: url(' `+ this.featuredImageUrl + `') ,linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
                        background-blend-mode:multiply;
                        background-repeat:no-repeat;
                        background-size:cover`
            }
            return null;
        },
        formatReadableDuration: function(){
            if(this.duration != null){
                return this.$moment.duration(this.duration, 'seconds').format("hh:mm:ss")
            } else {
                return `LIVE`
            }

        },
        dynamicActionIcon : function(){
            if(this.isPlaying){
                return ' fa-pause fa-3x'
            } else {
                return ' fa-play fa-3x'
            }
        },

    }
}

</script>
