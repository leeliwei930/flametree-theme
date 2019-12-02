<template lang="pug">
    .video-thumbnail(@mouseover="showPlayIcon = true" @mouseleave="showPlayIcon = false" v-on:click="emitClickEvent()")
        .d-flex.flex-column.justify-content-between.p-3.w-100.h-100.rounded-lg(:style="backgroundCSS" , :class="styleBuilder()" )
                .duration.p-2.d-flex.justify-content-between.align-items-center
                    i.fas.fa-video
                    strong.ml-auto
                        | {{formatReadableDuration}}
                .justify-content-center.my-auto.d-none(:class="{'d-flex action-fadeIn' : showPlayIcon }")
                        i.fas(:class="dynamicActionIcon")
                .d-flex.flex-column.justify-content-end
                    h3.title
                        | {{title}}
                    .description
                        p {{description}}
</template>
<style lang="scss" scoped>
    .video-thumbnail  {
        height: 15rem;
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
        animation-name: playActionFadeIn;
        animation-fill-mode: forwards;
        animation-duration: 1.5s;
    }

    @keyframes cardFloatAnimation {
        from {
            box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)
        }
        to {
            box-shadow: 0 1rem 3rem rgba(0,0,0,.175) ;

        }
    }

    @keyframes playActionFadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
    .video-thumbnail .has-hover-effect:hover {

        animation-name:cardFloatAnimation;
        animation-duration: 0.5s;
        animation-fill-mode:both;

    }

    .video-thumbnail .has-hover-effect {
        cursor:pointer;
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
        featuredImage: {
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
        url: {
            type: String
        },
        embedId: {
            type: String
        },
        type: {
            type: String,
            validator: function(typeVal){
                return ['youtube' , 'vimeo' , 'media' ].indexOf(typeVal) !== -1;
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
                url: this.url,
                embed_id : this.embedId,
                featured_image: this.featured_image
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
                return `background: url(' `+ this.featuredImage + `') ,linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
                        background-blend-mode:multiply;
                        background-repeat:no-repeat;
                        background-size:cover`
            }
            return null;
        },
        formatReadableDuration: function(){
            if(this.duration != null){
             return this.$moment.duration(this.duration, 'seconds').format("hh:mm:ss")
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
