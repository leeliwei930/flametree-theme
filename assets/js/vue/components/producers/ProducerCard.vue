<template lang="pug">
    .d-flex.flex-column.shadow.justify-content-between.producer-card.bg-secondary.m-2(:class="{'hoverable' : hoverable }")
        h5.origin-label.p-3
            i.fas.fa-map-marker-alt.mx-1
            | {{origin}}
        h2.card-title.p-4 {{ name }}

        slot(name="actions")



</template>
<style lang="scss">
.producer-card {
    width: 300px;
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
}
</style>
<script type="text/javascript">
export default {
    props: {
        origin: {
            type: String,
            default: "Origin Title"
        },
        hoverable: {
            type: Boolean,
            default: true
        },
        name: {
            type: String,
            default: "Card Title"
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
