<template lang="pug">
    a.d-flex.flex-row.col-5.px-2.menu-item.text-decoration-none.text-primary(:href="link" v-if="isSelected")
        .d-flex.flex-row.justify-content-between.align-items-center
            .flex-column
                i(:class="leadingIcon", v-if="leadingIcon != null")
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
        link: String,
        leadingIcon: String,
        activeSelect: String,
    },

    computed: {
        isSelected: function(){
            return this.activeSelect === this.parent;
        }
    }
}
</script>
