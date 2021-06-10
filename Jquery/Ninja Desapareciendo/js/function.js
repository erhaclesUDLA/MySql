$(document).ready(function() {
    $(".imagen").click(function() {
        $(this).hide();
    });
    $("#bnt_reset").click(function() {
        $(".imagen").show();
    });
});