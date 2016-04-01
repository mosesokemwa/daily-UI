    var msecsPerUpdate = 1000 / 60; // 60fps
    var progress = $('progress');
    var duration = 5; //seconds
    var interval = progress.attr('max') / (duration * 1000 / msecsPerUpdate);

    function play() {
        progress.val(progress.val() + interval);
        if (progress.val() + interval < progress.attr('max')) {
            setTimeout(play, msecsPerUpdate);
            $('i.fi-play').removeClass('fi-play').addClass('fi-pause');
        } else {
            progress.val(progress.attr('max'));
            $('i.fi-pause').removeClass('fi-pause').addClass('fi-play');
        }
    }

    $('.fi-play').click(function (e) {
        e.preventDefault();
        play();
    });

    $('.fi-pause').click(function () {
        $('progress[value]').stop();
    });

    // Set progress bar to 0
    $('.fi-previous, .fi-rewind').click(function () {
        $('progress').attr("value", "0");
    });

    // Highlight controls on click
    $('ul.controls li i').click(function () {
        if ($(this).hasClass('green')) {
            $(this).removeClass('green');
        } else {
            $(this).addClass('green');
        }
    });
