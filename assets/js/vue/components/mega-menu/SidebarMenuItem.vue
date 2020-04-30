<template lang="pug">
    .flex-column(@mouseenter="notifyChanged")
        a.nav-link(:class="{'active' :  isSelected }", :href="link")
            | {{title}}
            portal(to="menu-items")
                slot
</template>

<script>
export default {
    props: {
        title: String,
        link: String,
        activeSelect: String
    },
    data: function(){
        return {
            active: false,
        }
    },
    methods: {
        notifyChanged: function () {
            // setTimeout(() => {
            //     this.$store.commit("Navbar/setCurrentSelectedMenu" , item);
            //
            // }, 150);

            // item is a title of the menu item
            this.$emit('hover', this.title)
        }
    },
    computed: {
        isSelected: function () {
            return this.activeSelect === this.title
        }
    }
}
</script>
