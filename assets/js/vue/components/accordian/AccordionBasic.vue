<template lang="pug">
    .accordion-basic.d-flex.flex-column.py-3
        .accordion-basic-header.d-flex.flex-row.justify-content-between.align-items-baseline
            h3(@click="emitClickEvent") {{ title }}
            button.btn.btn-outline-primary.accordion-basic-button.px-3(@click="emitClickEvent")
                i.fas.fa-1x(:class="buttonText")
        .accordion-basic-content.p-2(:style="accordianStyle",:class="active ? 'show' : 'hide'")
            slot
</template>
<style lang="scss">
.accordion-basic {
    border-bottom: 1pt solid var(--primary-color-hex);
    .accordion-basic-header {
        font-family: "Baskerville", sans-serif;
        h3{
            cursor: pointer;
        }
    }

    .accordion-basic-content {
        word-break: break-word;
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

    .accordion-basic-button {
    }
}

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

</style>
<script type="text/javascript">
export default {
    props: {
        title: {
            type: String,
            default: "Accordion Basic Title"
        },
        show: {
            type: Boolean,
            default: false
        },
        height: {
            type: String,
            default: "10vh"
        }
    },
    data: function(){
        return {
            active: false
        }
    },
    methods: {
        emitClickEvent: function () {
            this.active = !this.active
            this.$emit('click')
        }
    },
    created: function(){

    },
    mounted: function(){
        this.active = this.show;
    },
    updated: function(){

    },
    computed: {
        buttonText: function(){
            return this.show ? 'fa-minus' : 'fa-plus'
        },
        accordianStyle: function(){
            return `height:${this.height}`
        },
    }
}

</script>
