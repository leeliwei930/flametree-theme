<template lang="pug">
    .d-flex.flex-column.shadow.justify-content-end.align-items-start.producer-card.m-2(
        :class="{'hoverable' : hoverable }"
        :style="backgroundStyle"
    )
        h5.origin-label.p-3.mb-auto
            i.fas.fa-map-marker-alt.mx-1(v-show="origin")
            | {{origin}}
        h2.card-title.px-4.py-3 {{ name }}
        h3.subheading.px-4.py-3(v-if="subheading") {{ subheading }}
        slot(name="actions")



</template>
<style lang="scss">
.producer-card {
    height: 400px;
    border-radius: 13pt;
    transition: all 0.25s;
    h5.origin-label {
        font-family: 'Nunito', sans-serif;
        font-size: 12pt;
        color: white;
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
        subheading: {
            type: String,
            default: null
        },
        backgroundDataImage:{
            type: String,
            default: ''
        },
        backgroundImage: {
            type: String,
            default: ''
        },
        gradient: {
            type: String,
            default: 'linear-gradient(30deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.65))'
        },
        width: {
            type: String,
            default: "100%"
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

    },
    computed: {
        backgroundStyle: function () {
            if(this.backgroundImage !== ''){
                return `background: ${this.gradient}, url('${this.backgroundImage}');
                    background-size: 100% 100%;
                    background-repeat:no-repeat;width:${this.width}`
            } else {
                return `background:${this.gradient};width:${this.width};`
            }
        }
    }
}

</script>
