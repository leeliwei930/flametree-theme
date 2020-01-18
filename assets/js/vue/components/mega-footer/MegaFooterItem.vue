<template lang="pug">
    li.my-2
        a.mega-footer-link(:href="link")
            slot

</template>
<style lang="scss">

</style>
<script type="text/javascript">
export default {
    props: {
        link: {
            type: String,
            default: "#"
        }
    },
}

</script>
