<template lang="pug">
    .d-flex.flex-column.shadow.justify-content-end.align-items-start.producer-card.flex-wrap.flex-grow-1.m-2(
        :class="{'hoverable' : hoverable}"
        v-lazy:background-image="imgObj"
    )
        .producer-card-content.w-100
            .d-flex.flex-wrap.flex-column.flex-grow-1.align-items-start
                h5.origin-label.px-4.py-2(v-if="origin")
                    i.fas.fa-map-marker-alt.mx-1
                    | {{origin}}
                h2.card-title.px-4.py-2(:class="nameClass") {{ name }}
                .d-flex.flex-row.align-items-baseline.justify-content-between
                    h3.subheading.px-4.py-2(v-if="subheading") {{ subheading }}
                slot(name="actions")

        .producer-card-overlay(:style="bgOverlayStyle")



</template>
<style lang="scss">
.producer-card {
    position: relative;
    height: 320px;
    overflow: hidden;

    border-radius: 13pt;
    transition: 0.25s all;



    &[lazy=loaded] {
        background-repeat: no-repeat;
        background-size: cover;
    }
    &[lazy=loading] {
        background-repeat: no-repeat;
        background-size: cover;
    }

    h5.origin-label {
        font-family: 'Nunito', sans-serif;
        font-size: 12pt;
        color: white;
    }
    .producer-card-content {
        z-index: 3;

    }
    .producer-card-overlay {
        position: absolute;
        z-index:1;
        width: 100%;
        height: 100%;
        border-radius: 13pt;

    }

    &.hoverable:hover {

        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.5) !important;
        transform: translateY(-5px);
        -webkit-transform: translateY(-5px);
        -moz-transform: translateY(-5px);
    }
    .card-title {
        font-family: "Lato Black", sans-serif;
        font-size:24pt;
        color:white;
        text-transform: uppercase;
    }

    .subheading {
        font-family: "Lato", sans-serif;
        font-size:16pt;
        color:white;
        text-transform: uppercase;

    }
}
</style>
<script type="text/javascript">
export default {
    props: {
        origin: {
            type: String,
            default:  null
        },
        hoverable: {
            type: Boolean,
            default: true
        },
        name: {
            type: String,
            default: "Card Title"
        },
        nameClass: {
            type: String
        },
        subheading: {
            type: String,
            default: null
        },
        dataImage:{
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        gradient: {
            type: String,
            default: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5))'
        },
        width: {
            type: String,
            default: "100%"
        }
    },
    data: function(){
        return {
            imgObj : {
                src: null,
                loading: null
            }
        }
    },
    methods: {

    },
    created: function(){
        this.imgObj.src = this.dataImage;
        this.imgObj.loading = this.image;
    },
    mounted: function(){


    },
    updated: function(){

    },
    computed: {
        bgOverlayStyle(){
            return `background-image:${this.gradient}; background-repeat:no-repeat; background-size:cover`
        }
    }
}

</script>
