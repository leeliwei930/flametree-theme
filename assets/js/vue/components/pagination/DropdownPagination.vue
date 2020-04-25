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
    select.text-field {
        -moz-border-radius: 3px;
        --webkit-appearance: menulist-button;
        border-radius: 3px;
        letter-spacing: -.04em;
        border: 0;
    }
</style>
<script type="text/javascript">
export default {
    props: {
        perPage: {
            type: String,
            default: "0"
        },
        currentPage: {
            type: String
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
        total: {
            type: String,
            default: "0"
        },

    },
    data: function () {
        return {}
    },
    methods: {
        getPageUrl: function (pageNumber) {
            return `${window.location.origin}${window.location.pathname}?${this.pageParam}=${pageNumber}`
        },
        redirectToPage: function (e) {

            window.location.href = e.target.value;
        },
        activePage: function (page) {
            let origin = window.location.origin;
            let path = window.location.pathname;
            let prefix = `${origin}${path}`;

            return `${prefix}${this.pageParam}?=${this.currentPage}` === `${prefix}${this.pageParam}?=${page}`


        },


        fireChangedEvent(e) {
            this.$emit('change', e);
        },
    },
    computed: {
        maxPages: function () {
            if (this.total === "0" || this.perPage === "0") {
                return 0;
            } else {
                return Math.ceil(Number.parseInt(this.total) / Number.parseInt(this.perPage))
            }
        },

    }
}

</script>
