<template lang="pug">
    .event-card
        .stripe.rounded-lg.rounded-0-bottom
        .d-flex.flex-column.flex-wrap.bg-light.shadow-lg.rounded-lg.justify-content-around.align-items-center.event-card-body.p-3
            .d-flex.flex-column
                .d-flex.flex-row.flex-wrap.justify-content-around
                    strong.text-uppercase.countdown(v-if="showCountDown")
                        i.fas.fa-clock.mx-2
                        | {{ this.getDaysLeft() }}
                    strong.text-uppercase.location(v-if="location != ''")
                        i.fas.fa-map-marker-alt.mx-2
                        | {{ location }}
                .d-flex.flex-row.justify-content-center
                    calendar(:date-time="startedAt")
                    .d-flex.justify-content-center.align-items-center
                            i.fas.fa-long-arrow-alt-right.text-secondary
                    calendar(:date-time="endedAt")
                strong.text-secondary.d-flex.justify-content-center.p-3.align-items-center
                    i.fas.fa-globe.mx-2
                    | {{ timezone }}
            .d-flex.flex-column.align-content-around
                h5.text-primary.event-title {{ name }}
                slot
            .d-flex.flex-row.flex-wrap.justify-content-between
                a.d-flex.justify-content-between.align-items-center.btn.w-100.my-2.btn-primary.hover-move-right(v-if="link != ''" :href="link")
                    | MORE DETAILS
                    i.fas.fa-chevron-right.mx-2
                a.d-flex.justify-content-between.align-items-center.btn.w-100.my-2.btn-outline-primary( :href="icsLink")
                    | DOWNLOAD EVENT FILE
                    i.fas.fa-download.mx-2


</template>
<style lang="scss">
.event-card {
    width: 400px;

    .countdown , .location {
        color: gray;
        font-size: 10pt;
    }
    .stripe {
        height: 3.5px;
        background-image: linear-gradient(30deg, rgba(var(--primary-color-rgba, 0.8)), rgba(var(--accent-color-rgba, 0.2)));
        width:100%;
    }

    &.event-card-body {
        min-height: 250px;

    }
    .description {
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .event-title {
        word-wrap: break-word;
    }
}
</style>
<script type="text/javascript">
export default {
    props: {

        startedAt: {
            type: String,
            default: ""
        },
        endedAt: {
            type: String,
            default: ""
        },
        location: {
            type: String,
            default: ""
        },
        showCountDown: {
            type: Boolean,
            default: true
        },
        showDuration: {
            type: Boolean,
            default: true
        },
        name: {
            type: String,
            default: "Event Name"
        },
        timezone: {
            type: String,
            default: ""
        },
        eventFileDownloadLink: {
            type: String,
            default: ""
        },

        link: {
            type: String,
            default: ""
        },
        icsLink: {
            type: String,
            default: ""
        },
        openLinkInNewTab: {
            type: Boolean,
            default: true
        },



    },
    data: function(){
        return {

        }
    },
    methods: {
        getDaysLeft: function(){
            let now = this.$moment.now();
            let start_date = this.$moment(this.startedAt);
            let diff = start_date.diff(now, 'days', true);
            if(diff >= 0) {
                return `${Math.ceil(diff)} days left`
            } else {
                return `${Math.ceil(Math.abs(diff))} days ago`
            }
        }
    },
    created: function(){

    },
    mounted: function(){

    },
    updated: function(){

    }
}

</script>
