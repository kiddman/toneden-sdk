define(['hbs/handlebars'], function(Handlebars) {
    function msToTimestamp(milliseconds) {
        var totalSeconds = Math.round(milliseconds / 1000);
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds - minutes * 60;

        return minutes + ':' + seconds;
    }

    Handlebars.registerHelper('msToTimestamp', msToTimestamp);

    return msToTimestamp;
});