<template lang="pug">
.product-card.d-flex.flex-column.shadow.rounded.justify-content-start
    .product-image-wrapper
        .d-flex.flex-column.align-items-center.mx-auto.product-image.mb-1(v-if="dataImage !== ''")
                img.product-image( v-lazy="imgObj")
        .d-flex.flex-column.align-items-center.mx-auto.product-image.mb-1(v-else)
            .py-5.d-flex.flex-column.align-items-center
                i.fas.fa-3x.fa-shopping-bag.text-light-dark
                p.text-muted.py-3 Product Image Is Not Available
    .product-card-content.mb-auto.mt-4.mx-3
        h4.heading.py-2 {{ name }}

        .categories.d-flex.flex-row.align-items-baseline.py-2.flex-wrap
            slot(name="categories")

    .product-card-actions.mx-1.my-2
        .price.d-flex.flex-row.align-items-baseline.py-1.mx-3
            i.fas.fa-dollar-sign.mr-1.text-primary
            strong {{ price }}
        slot(name="actions")
</template>
<style lang="scss">
.product-card {

    height: 480px;
    width: 350px;
    overflow: hidden;
    .product-image-wrapper {
        height: 200px;
        width: 100%;
        overflow: hidden;
    }
    .product-image {
        height: inherit;
        width: 100%;
        transition: 0.25s all;

    }
    .section {
        border-bottom: 0.85pt solid var(--light-silver-color-hex);

    }
    .price {
        font-size: 18pt;
    }



    &:hover {
        .product-image {
            transform: scale(1.1);
        }
    }


}
</style>
<script type="text/javascript">
export default {
    props: {
        dataImage:{
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        name: {
            type: String
        },
        price: {
            type: String
        }
    },
    data: function(){
        return {
            imgObj : {
                src: null,
                loading: null
            },
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
    }
}

</script>
