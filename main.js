$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

var remain_bv = 3311;

function parseTime_bv(timestamp) {
    if (timestamp < 0) timestamp = 0;

    var day = Math.floor((timestamp / 60 / 60) / 24);
    var hour = Math.floor(timestamp / 60 / 60);
    var mins = Math.floor((timestamp - hour * 60 * 60) / 60);
    var secs = Math.floor(timestamp - hour * 60 * 60 - mins * 60);
    var left_hour = Math.floor((timestamp - day * 24 * 60 * 60) / 60 / 60);

    $('span.afss_day_bv').text(day);
    $('span.afss_hours_bv').text(left_hour);

    if (String(hour).length > 1)
        $('span.afss_hour_bv').text(hour);
    else
        $('span.afss_hours_bv').text("0" + hour);

    if (String(mins).length > 1)
        $('span.afss_mins_bv').text(mins);
    else
        $('span.afss_mins_bv').text("0" + mins);
    if (String(secs).length > 1)
        $('span.afss_secs_bv').text(secs);
    else
        $('span.afss_secs_bv').text("0" + secs);

}

$(document).ready(function () {
    setInterval(function () {
        remain_bv = remain_bv - 1;
        parseTime_bv(remain_bv);
        if (remain_bv <= 0) {
            $('.timer__item').css('background', '#FF6B00');
            $('.timer__item-num').css('color', '#fff');
            $('.timer__item-interval').css('color', '#fff');
        }
    }, 1000);
});

