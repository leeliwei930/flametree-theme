<template lang="pug">
    .d-flex.flex-column.flex-wrap
        .d-flex.flex-column.align-items-center.justify-content-around
            .bg-white.shadow.rounded-lg.small-calendar.m-3
                .w-100.h-25.bg-light.d-flex.justify-content-center.align-items-center
                    h5.text-danger.text-uppercase.font-weight-light {{ $moment(dateTime).format("Y") }} {{ $moment(dateTime).format("MMM") }}
                .w-100.h-75.d-flex.flex-column.d-flex.justify-content-center.align-items-center
                    h6.text-dark.text-uppercase.font-weight-light {{$moment(dateTime).format("dddd")}}
                    h3.font-weight-light {{ $moment(dateTime).format("D") }}
            h3.font-weight-light {{$moment(dateTime).format("hh:mm a")}}
</template>
<style lang="scss">
    .small-calendar {
        height: 150px;
        width: 150px;
    }
</style>
<script type="text/javascript">
export default {
    props: {
        dateTime : {
            type: String
        }
    }
}

</script>
