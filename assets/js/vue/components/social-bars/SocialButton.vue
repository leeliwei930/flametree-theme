<template lang="pug">
    .bg-light.btn.rounded-circle.share-button.shadow.d-flex.justify-content-center.align-items-center.flex-column.opened.flametree-theme(@click="showButton()" @mouseleave="hideSocialButtons()" )
        .flex-column.social-buttons.animated.fadeInUp(v-show="shareButtonState.visible")
            .btn.rounded-circle.social-button.shadow-lg.fb-button(@click="share('facebook')")
                i.fab.fa-facebook.fa-2x
            .btn.rounded-circle.social-button.shadow-lg.whatsapp-button(@click="share('whatsapp')")
                i.fab.fa-whatsapp.fa-2x
            .btn.rounded-circle.social-button.shadow-lg.twitter-button(@click="share('twitter')")
                i.fab.fa-twitter.fa-2x
            .btn.rounded-circle.social-button.shadow-lg.weibo-button(@click="share('weibo')")
                i.fab.fa-weibo.fa-2x
            .btn.rounded-circle.social-button.shadow-lg.btn-primary-basic(@click="share('mail')")
                i.fas.fa-envelope.fa-2x.text-white
        i.fas.fa-2x(:class="(shareButtonState.visible) ? 'fa-times text-danger animated rotateIn faster ' : '  fa-share-alt text-accent '")

</template>
<style lang="scss">

.share-button {
    position: fixed;


    right: 0;
    bottom: 0;
    margin:15px;

    height:65px;
    width: 65px;
    z-index: 5;
    .social-buttons {
        position: absolute;
        z-index: 5;
        bottom:65px;
        .whatsapp-button {
            background-color: #05CC46;
            color: white;
        }
        .fb-button {
            background-color: rgb(36,94,238);
            color: white;
        }

        .twitter-button {
            background-color:rgb(29,161,242);
            color: white;
        }

        .wechat-button {
            color:white;
            background-color: #9de60b;
        }
        .weibo-button {
            color: white;
            background-color: #fa2f2f;
        }

    }
    .social-button {
        background-color:white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin:5px;
        height:65px;
        width: 65px;
    }
    &:hover {

        &.closed {
            &:before {
                color: white;
                background-color:#7c7c7c;
                position: absolute;
                content: 'Share';

                padding:5px;
                border-radius: 10pt;
                animation-name: tooltipAnimation;
                animation-duration: 0.25s;
                animation-fill-mode: forwards;
            }
        }
    }
}


@keyframes  tooltipAnimation {

    from {
        opacity: 0;
        transform: translateY(-25px);
    }

    to {
        opacity: 1;
        transform: translateY(-55px);

    }
}

</style>
<script type="text/javascript">
export default {
    props: {
    },
    data: function(){
        return {
            shareButtonState: {
                visible: false
            }
        }
    },
    methods: {
        showButton: function(){

            this.shareButtonState.visible = !this.shareButtonState.visible;


        },
        hideSocialButtons: function(){
            this.shareButtonState.visible = false;

        },
        share: function(platform){

            // call to platform controller
            this.platformController()[platform]();
        },

        getFbAppId: function(){
            return document.querySelector('meta[property="fb:app_id"]').content
        },

        getFeaturedImage: function(){
            return document.querySelector('meta[property="og:image"]').content

        },

        getTitle: function(){
            return document.querySelector('meta[property="og:title"]').content

        },

        platformController: function() {
            return {
                facebook: function(){
                    // let fbAppId = this.getFbAppId();
                    let url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
                    window.open(url, "",'height=320px,width=640px');
                }.bind(this),

                twitter: function(){
                    let url = `https://twitter.com/intent/tweet?text=${this.getTitle()}&url=${window.location.href}`;
                    window.open(url, "",'height=320px,width=640px');

                }.bind(this),

                whatsapp: function(){
                    let url = `https://wa.me/?text=${window.location.href}`;
                    window.open(url, "",'height=320px,width=640px');

                }.bind(this),

                weibo: function(){

                    let url = `http://service.weibo.com/share/share.php?url=${window.location.href}&pic=${this.getFeaturedImage()}&title=${this.getTitle()}`
                    window.open(url, "",'height=320px,width=640px');

                }.bind(this),

                wechat: function(){

                }.bind(this),

                mail: function(){
                    let email = window.prompt("Please enter the recipient email:");
                    if(email != null && email.length > 0){
                        window.location.href = `mailto:${email}?body=${window.location.href}&subject=${this.getTitle()}`
                    }
                }.bind(this)
            }
        }
    },
    created: function(){

    },
    mounted: function(){
    },
    updated: function(){

    }
}

</script>
