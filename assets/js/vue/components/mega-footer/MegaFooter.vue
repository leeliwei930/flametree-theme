<template lang="pug">
.d-flex.flex-column.flex-wrap.bg-white.flametree-mega-footer.p-3.justify-content-center
    .d-flex.flex-row.flex-wrap
        .col-12.col-md-5.text-center.text-md-left
            slot
        .col-12.col-md-4.text-center.text-md-left
            slot(name="operating-hours")
        .col-12.col-md-3.text-center.text-left
            slot(name="newsletter-form")
    .d-flex.justify-content-center.flex-column
        img(class="footer-logo" :src="logo")
        .d-flex.flex-row.justify-content-between
            a(:href="facebook" v-if="facebook")
                i.fas.fa-facebook
            a(:href="twitter" v-if="twitter")
                i.fas.fa-twitter
            a(:href="instagram" v-if="instagram")
                i.fas.fa-instagram
            a(:mailto="mail" v-if="mail")
                i.fas.fa-envelope
        .d-flex.flex-column.justify-content-center
        slot(name="credit-message")



</template>
<style lang="scss">

</style>
<script type="text/javascript">
export default {
    props: {
        facebook: {

        },
        twitter: {

        },
        instagram: {

        },
        email: {

        },
        phone_number: {

        },
        poBox: {

        },
        address: {

        },
        logo: {

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
