<template lang="pug">
    .flex-column(@mouseenter="notifyChanged(title)")
        a.nav-link(:class="{'active' : title === currentSelectedMenu }",:href="link")
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
            setTimeout(() => {
                this.$store.commit("Navbar/setCurrentSelectedMenu" , item);

            }, 150);
        }
    },
    computed: {
        currentSelectedMenu: function () {
            return this.$store.getters["Navbar/getCurrentSelectedMenu"];
        }
    }
}
</script>
