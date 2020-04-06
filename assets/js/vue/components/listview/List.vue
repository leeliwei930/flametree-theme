<template lang="pug">
    a.list-item.text-decoration-none.d-flex.flex-row.justify-content-between.align-items-center.py-1.px-3.rounded-right(
        :href="encodeURI(link)"
        :class="{'active' : isActive }"
        :target="newTab"
        v-if="type === 'list'"
    )
        strong.font-weight-bold {{ leading }}
        small.p-2  {{trailing}}
    a.text-decoration-none.sublist-item(
        :href="link"
        :target="newTab"
        v-else-if="type === 'sublist'"
    )
        .children
            slot

</template>
<style lang="scss">
    .list-item {
        border-left: 2pt solid transparent;
        color: var(--light-dark);
        transition: 0.25s all;

        &.active {
            color: rgb(var(--primary-color-rgba)) !important;
            background-color: whitesmoke !important;
            border-left: 2pt solid rgb(var(--primary-color-rgba)) !important;
        }

        &:hover {
            background-color: whitesmoke !important;

            color: rgb(var(--primary-color-rgba)) !important;

        }
    }

    .sublist-item {
        transition: 0.25s all;

        &:hover {
            .children {
                background-color: whitesmoke !important;

            }

        }



    }
</style>
<script type="text/javascript">
export default {
    props: {
        newTab: {
            type: String,
            default: "_self"
        },
        link: {
            type: String,
            default: "#"
        },
        isActive: {
            type: Boolean,
            default: false
        },
        leading: {
            type: String,
            default: ""
        },
        trailing: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "list"
        }
    },
    data: function () {
        return {}
    },
    methods: {},
    created: function () {

    },
    mounted: function () {

    },
    updated: function () {

    }
}

</script>
