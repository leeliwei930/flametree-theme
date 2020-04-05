
<template lang="pug">
    .d-flex.flex-column
        h6.font-weight-bold.text-secondary {{ heading }}
        div(style="max-height:480px;overflow-y:scroll")
            slot
</template>
<style lang="scss">

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
