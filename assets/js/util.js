import moment from 'moment-timezone'



let BrowserTimeZoneConverter = {

    convert: function(dateTime, format, fromTimeZone = "UTC"){
        let browserTimeZone = this.getBrowserTimeZone();
        return moment.tz(dateTime, fromTimeZone).tz(browserTimeZone).format(format);
    },

    getBrowserTimeZone : function(){
        return moment.tz.guess();
    }

};


export {BrowserTimeZoneConverter}
