<template lang="pug">
    .card
        .card-header(@click="$emit('click')")
            slot(name="header")
        .accordian-content.border.bg-light(
            :style="accordianStyle",
            :class="showAccordian",
        )
            slot
</template>
<style lang="scss">
    @keyframes showAccordian {
        from {
            opacity:0;
            height:0;
        }
        to {
            opacity:1;

        }
    }


    @keyframes hideAccordian {
        from {
            opacity:1;

        }
        to {
            opacity:0;
            height: 0;

        }
    }
    .card .accordian-content {
        overflow-y: scroll;
    }
    .card .accordian-content.show {
        animation-name: showAccordian;
        animation-duration:0.25s;
        animation-fill-mode:forwards;
        animation-timing-function: ease-in;

    }

    .card .accordian-content.hide  {
        animation-name: hideAccordian;
        animation-duration:0.25s;

        animation-fill-mode:forwards;
        animation-timing-function: ease-in-out;


    }
</style>
<script type="text/javascript">
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        height: {
            type: String,
            default: "250px"
        }
    },
    computed: {
        accordianStyle: function(){
            return `height:${this.height}`
        },
        showAccordian: function() {
            return this.show ? 'show' : 'hide'
        }
    }
}
</script>
