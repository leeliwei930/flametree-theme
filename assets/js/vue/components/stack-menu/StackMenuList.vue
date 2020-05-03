<template lang="pug">
    .stack-menu-list
        slot(:state="state")
</template>
<style lang="scss">
.stack-menu-list {
    display: flex;
    flex-direction: column;
    background-color: var(--white-color-hex);



}
</style>
<script type="text/javascript">
export default {
    props: {
        selected: {
            type: String
        },
    },
    data: function(){
        return {
            state: {
                selected: null,
                setSelected: function(item){
                    this.state.selected = item
                }.bind(this)
            }
        }
    },
    methods: {

    },
    created: function(){
        this.state.setSelected(this.selected)
    },
    mounted: function(){

    },
    updated: function(){

    }
}

</script>
