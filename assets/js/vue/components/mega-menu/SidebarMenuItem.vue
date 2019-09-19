<template lang="pug">
    .flex-column
        a.nav-link(:class="{'active' : title == $parent.currentSelectedMenu }",:href="link",@mouseenter="notifyChanged(title)")
            | {{title}}
            portal(to="menu-items")
                slot
</template>

<script>
export default {
    props: {
        title: String,
        link: String
    },
    data: function(){
        return {

        }
    },
    methods: {
        notifyChanged: function (item) {
            this.$parent.$emit('notifyChangedItem' , item)
        }
    }
}
</script>
