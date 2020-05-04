<template lang="pug">
.d-flex.flex-column.flex-wrap.bg-white.flametree-mega-footer.justify-content-center
    .stripe
    .d-flex.flex-row.flex-wrap.p-3
        .col-12.col-lg-6.text-center.text-lg-left
            slot
        .col-12.col-lg-3.text-center.text-lg-left
            slot(name="operating-hours")
        .col-12.col-lg-3.text-center.text-lg-left
            slot(name="newsletter-form")
    .d-flex.justify-content-center.flex-column
        img(class="footer-logo" :src="logo")
        .d-flex.flex-row.justify-content-center.social-link.my-2
            a.mx-2.fa-2x(:href="'https://' +facebook" v-if="facebook.length > 0" target="_blank")
                i.fab.fa-facebook-square
            a.mx-2.fa-2x(:href="'https://' +twitter"  v-if="twitter.length > 0" target="_blank")
                i.fab.fa-twitter
            a.mx-2.fa-2x(:href="'https://' +instagram"  v-if="instagram.length > 0" target="_blank")
                i.fab.fa-instagram
            a.mx-2.fa-2x(:href="'mailto::'+email"  v-if="email.length > 0" target="_blank")
                i.fas.fa-envelope
        .d-flex.flex-column.justify-content-center.credit-message.mx-auto
            slot(name="credit-message")



</template>
<style lang="scss">

</style>
<script type="text/javascript">
export default {
    props: {
        facebook: {
            type: String,
            default: null
        },
        twitter: {
            type: String,
            default: null
        },
        instagram: {
            type: String,
            default: null
        },
        email: {
            type: String,
            default: null
        },
        phoneNumber: {
            type: String,
            default: null
        },
        poBox: {
            type: String,
            default: null
        },
        address: {
            type: String,
            default: null
        },
        logo: {
            type: String,
            default: null
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
