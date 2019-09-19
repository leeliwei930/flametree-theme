<template lang="pug">
    a.d-flex.flex-row.col-5.mx-3.menu-item(:href="link" v-if="$parent.$parent.$data.currentSelectedMenu == parent")
        .d-flex.flex-row.justify-content-between.align-items-center
            .flex-column.px-3
                i(:class="icon")
            .flex-column
                strong {{title}}
                p {{description}}
</template>
<script>
export default {
    props: {
        parent: {
            type: String,
            required: true
        },
        title: String,
        description: String,
        icon: String,
        link: String
    },
}
</script>
