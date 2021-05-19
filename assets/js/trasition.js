$(document).ready(function() {
    var body = $("body");
    body.fadeIn(400);
    $(document).on("click", "a:not([href^='#'])", function(e) {
        e.preventDefault();
        $("body").fadeOut(400);
        var self = this;
        setTimeout(function() {
            window.location.href = $(self).attr("href");
        }, 400);
    });
});