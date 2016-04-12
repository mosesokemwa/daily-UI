// current file
jQuery(document).ready(function ($) {
    $('#cmn-toggle-1').click(
        function () {
            $('#light-bulb2').toggleClass('on')
        }
    )
});


// in storage

function changeimage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "bulboff.gif";
    } else {
        image.src = "bulbon.gif";
    }
}
