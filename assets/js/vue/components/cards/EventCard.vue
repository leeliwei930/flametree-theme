<template lang="pug">
    .event-card
        .stripe.rounded-lg.rounded-0-bottom
        .d-flex.flex-row.flex-wrap.bg-light.shadow-lg.rounded-lg.justify-content-around.align-items-start.event-card-body
            .d-flex.flex-column.col-5
                .d-flex.justify-content-start.p-3(v-if="showCountDown")
                    strong.text-uppercase.countdown
                        i.fas.fa-clock.mx-2
                        | {{ this.getDaysLeft() }}
                .d-flex.flex-column.align-items-center.justify-content-around
                    .bg-white.shadow.rounded-lg.small-calendar.m-3
                        .w-100.h-25.bg-light.d-flex.justify-content-center
                            h5.text-danger.text-uppercase.font-weight-light {{monthName}}
                        .w-100.h-75.d-flex.flex-column.d-flex.justify-content-center.align-items-center
                            h6.text-dark.text-uppercase.font-weight-light {{dayName}}
                            h3.font-weight-light {{ day }}
            .d-flex.flex-column.justify-content-start.align-items-start.m-2.col-6
                h5.text-primary.event-title {{ name }}
                slot
                a(v-if="link" :href="link")
                    | MORE DETAILS
</template>
<style lang="scss">
.event-card {
    .countdown {
        color: gray;
        font-size: 10pt;
    }
    .stripe {
        height: 3.5px;
        background-image: linear-gradient(30deg, rgba(var(--primary-color-rgba, 0.8)), rgba(var(--accent-color-rgba, 0.2)));
        width:100%;
    }
    .small-calendar {
        height: 125px;
        width: 150px;
    }
    &.event-card-body {
        min-height: 250px;

    }
    .description {
        word-wrap: break-word;
        max-width: 300px;
    }
    .event-title {
        word-wrap: break-word;
        max-width: 300px;
    }
}
</style>
<script type="text/javascript">
export default {
    props: {
        dayName: {
            type: String,
            default: "Monday"
        },
        monthName: {
            type: String,
            default: "JAN"
        },
        day: {
            type: String,
            default: "1"
        },
        startedAt: {
            type: String,
            default: ""
        },
        endedAt: {
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
                return `${Math.floor(Math.abs(diff))} days ago`
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
