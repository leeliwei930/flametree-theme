<template lang="pug">
    .text-field-control
        label PAGES
        select.text-field(@input="fireChangedEvent" )
            option(v-if="prevPageUrl !== ''"  :value="prevPageUrl")
                | Go to previous page
            template(v-for="page in maxPages")
                option(:value="getPageUrl(page)" :selected="activePage(page)") Page {{ page }}
            option(v-if="nextPageUrl !== ''" :value="nextPageUrl")
                | Go to next page
</template>
<style lang="scss">

</style>
<script type="text/javascript">
export default {
    props: {
        currentPage: {
            type: String,
            default: null
        },
        perPage: {
            type: String,
            default: "0"
        },
        prevPageUrl: {
            type: String,
            default: ""
        },
        nextPageUrl: {
            type: String,
            default: ""
        },
        pageParam: {
            type: String,
            default: ""
        },
        url: {
            type: String,
            default: ""
        },
        total: {
            type: String,
            default: "0"
        },

    },
    data: function(){
        return {

        }
    },
    methods: {
        getPageUrl: function(pageNumber){
            return `${this.url}?${this.pageParam}=${pageNumber}`
        },
        redirectToPage: function(e){
            console.log(e);
            window.location.href = e.target.value;
        },

        activePage: function(page){
            return Number.parseInt(this.currentPage) === Number.parseInt(page);
        },

        fireChangedEvent(e){
            this.$emit('change', e);
        },
    },
    computed: {
        maxPages: function(){
            if(this.total === "0" || this.perPage === "0"){
                return 0;
            } else {
                return Math.ceil(Number.parseInt(this.total) / Number.parseInt(this.perPage))
            }
        },
    }
}

</script>
