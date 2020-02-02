<template lang="pug">
    .d-flex.flex-column.shadow.justify-content-end.align-items-start.producer-card.m-2.lozad(
        :class="{'hoverable' : hoverable }"
        :style="backgroundStyle"
        :data-background-image="dataImage"
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
            loading: true
        }
    },
    methods: {

    },
    created: function(){

    },
    mounted: function(){
        this.$on('loading', () => {
            this.loading = true;
            console.log('loading')
        });
        this.$on('loaded', () => {
            this.loading = false;
            console.log('loaded')

        })
    },
    updated: function(){

    },
    computed: {
        backgroundStyle: function () {
            if(this.image !== ''){
                if(this.loading){

                    return `background-image: ${this.gradient}, url('${this.image}');background-size:100% 100%;background-repeat:no-repeat;width:${this.width};`
                } else {

                    return `background-image: ${this.gradient}, url('${this.dataImage}');background-size: 100% 100%;background-repeat:no-repeat;width:${this.width};`
                }            } else {
                return `background:${this.gradient};width:${this.width};`
            }
        }
    }
}

</script>
