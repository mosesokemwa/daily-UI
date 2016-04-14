$(function () {
    /*-------------------------------
    	GENERAL EXAMPLES
    -------------------------------*/
    // Default usage
    $('.default_popup').popup();
    // Function for content
    $('.function_popup').popup({
        content: function () {
            return '<p>' + $(this.ele).attr('title') + '</p>';
        }
    });
    // jQuery for content
    $('.jquery_popup').popup({
        content: $('#inline')
    });
    // HTML for content
    $('.html_popup').popup({
        content: '<h1>This is some HTML</h1>',
        type: 'html'
    });
    // Custom YouTube content
    $('.youtube_popup').popup({
        types: {
            youtube: function (content, callback) {
                content = '<iframe width="420" height="315" src="' + content + '" frameborder="0" allowfullscreen></iframe>';
                // Don't forget to call the callback!
                callback.call(this, content);
            }
        },
        width: 420,
        height: 315
    });
    // Animated popup
    $('.animated_popup').popup({
        show: function ($popup, $back) {
            var plugin = this,
                center = plugin.getCenter();
            $popup
                .css({
                    top: -$popup.children().outerHeight(),
                    left: center.left,
                    opacity: 1
                })
                .animate({
                    top: center.top
                }, 500, 'easeOutBack', function () {
                    // Call the open callback
                    plugin.o.afterOpen.call(plugin);
                });
        }
    });
    // Call ALL the callbacks
    $('.callback_popup').popup({
        beforeOpen: function (type) {
            console.log('beforeOpen -', type);
        },
        afterOpen: function () {
            console.log('afterOpen');
        },
        beforeClose: function () {
            console.log('beforeClose');
        },
        afterClose: function () {
            console.log('afterClose');
        }
    });
    // Different preloader
    $('.preloader_popup').popup({
        preloaderContent: '<img src="assets/images/preloader.gif" class="preloader">'
    });
    // Error popup
    $('.error_popup').popup({
        error: function (content, type) {
            // Just call open again, it'll replace the content
            this.open('<h1>ERROR!</h1><p>Content "' + content + '" of type "' + type + '" could not be loaded.</p>', 'html');
        }
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
