
<template lang="pug">
    .d-flex.flex-column.list-view
        h6.font-weight-bold.text-secondary {{ heading }}
        div(style="max-height:480px;overflow-y:scroll")
            slot
</template>
<style lang="scss">
    .list-view {
        .sublist-item:not(:last-child) {
            .children {
                border-bottom: 0.15pt solid silver;

            }
        }
    }



</style>
<script type="text/javascript">
export default {
    props: {
        heading: {
            type: String,
            default: ""
        }
    }
}

</script>
