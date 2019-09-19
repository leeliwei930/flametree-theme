<template lang="pug">
    a.col-5.mx-3.my-1.menu-item(:href="link" v-if="$parent.$parent.$data.currentSelectedMenu == parent")
        | {{title}}
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
