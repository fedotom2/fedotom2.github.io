;(function ($) {

    var changeTheme = function() {
        var body = $('body');
        var point = $('.point');

        if (body.css('backgroundColor') == 'rgb(0, 0, 0)') {
            body.css('backgroundColor', 'rgb(255, 255, 255)');
        } else {
            body.css('backgroundColor', 'rgb(0, 0, 0)');
        }

        if (point.css('backgroundColor') == 'rgb(0, 0, 0)') {
            point.css('backgroundColor', 'rgb(255, 255, 255)');
        } else {
            point.css('backgroundColor', 'rgb(0, 0, 0)');
        }
    };

    $(document).ready(function() {
        $('#changeTheme').change(function () {
            changeTheme();
        });
    });
})(jQuery);
