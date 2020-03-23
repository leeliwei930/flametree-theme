<template lang="pug">

    .card.shadow.accordian
        .accordian-header.p-3(@click="$emit('click')")
            slot(name="header")
        .accordian-content.bg-light(
            :style="accordianStyle",
            :class="showAccordian",
        )
            .accordian-paragraph.p-3
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
    .accordian {
        width: 100%;
    }

    .accordian-header {
        background-color: rgb(var(--primary-color-rgba));
        color: white;
    }
    .accordian-content {
        overflow-y: scroll;
        &.show {
            animation-name: showAccordian;
            animation-duration:0.25s;
            animation-fill-mode:forwards;
            animation-timing-function: ease-in;
        }

        &.hide  {
            animation-name: hideAccordian;
            animation-duration:0.25s;
            animation-fill-mode:forwards;
            animation-timing-function: ease-in-out;
        }
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
