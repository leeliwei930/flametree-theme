<template lang="pug">
.product-card.d-flex.flex-column.shadow.rounded.justify-content-start
    template(v-if="dataImage !== ''")
        img.product-image( v-lazy="imgObj")
    template(v-else)
        .d-flex.flex-column.align-items-center.mx-auto.product-image.py-5
            i.fas.fa-3x.fa-shopping-bag.text-light-dark
            p.text-muted.py-3 Product Image Is Not Available
    .product-card-content.mb-auto.m-3
        h4.heading {{ name }}
        .price
            i.fas.fa-dollar-sign.mr-1.text-muted
            strong {{ price }}
        .features(v-if="featuresDat.length > 0")
            h6.text-muted.font-weight-light.text-uppercase.mt-2 Features
            .feature.my-1(v-for="(feature,index) in featuresDat" v-if="index < 3")
                strong.title {{ feature.title }}
                div.description(v-html="feature.description")
    .product-card-actions.m-3
        slot(name="actions")
</template>
<style lang="scss">
.product-card {
    height: 40rem;

    .product-image {
        height: 15rem;
        width: 100%;
        transition: 0.25s all;
        transform: scale(0.85);


    }

    .price {
        font-size: 16pt;
    }

    .feature {
        border-bottom: 0.85pt solid var(--light-silver-color-hex);
        height: 5rem;
        .title {
            color: var(--light-dark-color-hex);
        }
        .description {
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-word;
            max-height: 50px;
        }
    }
    &:hover {
        .product-image {
            transform: scale(0.95);
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
        },
        features: {
            type: String
        }
    },
    data: function(){
        return {
            imgObj : {
                src: null,
                loading: null
            },
            featuresDat: []
        }
    },
    methods: {

    },
    created: function(){
        this.imgObj.src = this.dataImage;
        this.imgObj.loading = this.image;
    },
    mounted: function(){
        this.featuresDat = JSON.parse(this.features)
    },
    updated: function(){

    }
}

</script>
