<template lang="pug">
    .w-100
        slot(
            :accordianCtrl="accordianCtrl"
        )
</template>
<style lang="scss">

</style>
<script type="text/javascript">
export default {
    props: {
        showAll : {
            type: Boolean,
            default: false
        },
        toggleMode: {
            type: Boolean,
            default: true
        }
    },
    data: function() {
        return {
            // the accordian controller
            accordianCtrl: {
                toggleMode: false,
                showAll: false,
                currentIndex: 0,
                total: 0,
                isActive: function (index) {
                    if (this.showAll) {
                        return true;
                    }

                    return this.currentIndex == index;
                },
                show: function (index) {
                    if (this.currentIndex == index && this.toggleMode) {
                        this.currentIndex = null;
                        return;
                    }
                    this.currentIndex = index;
                }
            }
        }
    },
    methods: {
        countNumberOfChildren: function(){
            // grab all the children from the template root
            let children = this.$children;
            // the counter that count the number of accordian in the children
            let numOfAccordian = 0;
            // null safe checking
            if(children != undefined && children!= null && children.length > 0){
                // iterate each child and determine whether is an accordian by checking its tag name
                children.forEach((child) => {
                    // null safe checking
                    if(child.$vnode != null && child.$vnode.componentOptions != null){
                        if(child.$vnode.componentOptions.tag === "accordian"){
                            // increase the number of accordian
                            numOfAccordian++;
                        }
                    }
                })

            }
            return numOfAccordian;
        }
    },
    created: function(){
        // copy the props value to accordianCtrl
        this.accordianCtrl.showAll = this.showAll;
        this.accordianCtrl.toggleMode = this.toggleMode;
    },
    mounted: function(){
        // when the component is mounted update the accordianCtrl total number of accordian
        this.accordianCtrl.total = this.countNumberOfChildren();
    },
    updated: function(){

    }
}

</script>
