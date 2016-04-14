$(function () {
    /*-------------------------------
    	GENERAL EXAMPLES
    -------------------------------*/

    // Custom YouTube content
    $('.youtube_popup').popup({
        types: {
            youtube: function (content, callback) {
                content = '<iframe width="800" height="600" src="' + content + '" frameborder="0" allowfullscreen></iframe>';
                // Don't forget to call the callback!
                callback.call(this, content);
            }
        },
        width: 700,
        height: 550
    });
});
/*---------------------
	JQUERY EASING
*/
$.extend($.easing, {
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    }
});
