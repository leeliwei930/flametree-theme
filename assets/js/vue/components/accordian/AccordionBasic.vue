<template lang="pug">
    .accordion-basic.d-flex.flex-column.py-3(@click="emitClickEvent")
        .accordion-basic-header.d-flex.flex-row.justify-content-between.align-items-baseline
            h4 {{ title }}
            button.btn.btn-outline-primary.accordion-basic-button.px-3
                i.fas.fa-1x(:class="buttonText")
        .accordion-basic-content.p-2(:class="active ? 'show' : 'hide'")
             slot
</template>
<style lang="scss">
.accordion-basic {
    border-bottom: 1pt solid var(--primary-color-hex);
    .accordion-basic-header {
            font-family: "Baskerville", sans-serif;

            cursor: pointer;

    }

    .accordion-basic-content {
        display: none;

        &.show {
            animation-name: showAccordian;
            animation-duration:0.45s;
            animation-fill-mode:forwards;
            animation-timing-function: ease-in;
            display: inline;
        }

        &.hide  {
            animation-name: hideAccordian;
            animation-duration:0.45s;
            animation-fill-mode:forwards;

            animation-timing-function: ease-in-out;
        }
    }

    .accordion-basic-button {
    }
}

@keyframes showAccordian {
    from {
        height: 0;
        opacity: 0;

    }
    to {
        height: 100%;
        opacity: 1;

    }
}
@keyframes hideAccordian {
    from {
        height: 100%;
        opacity: 1;

    }
    to {
        height: 0;
        opacity: 0;

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
            return this.active ? 'fa-minus' : 'fa-plus'
        },
    }
}

</script>
