<template lang="pug">
    .d-flex.justify-content-around.flex-column.align-content-stretch.my-2
        h5.mega-footer-header {{title}}

        slot
</template>
<style lang="scss">

</style>
<script type="text/javascript">
export default {
    props: {
        title: {
            type: String,
            default: "HEADER"
        }
    },
}

</script>
