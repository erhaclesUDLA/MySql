$(document).ready(function() {

    $('img').hover(function() {
        var temporal = $(this).attr("src");
        $(this).attr("src", $(this).attr("data-alt-src"));
        $(this).attr("data-alt-src", temporal);
    }, function() {
        var temporal = $(this).attr("src");
        $(this).attr("src", $(this).attr("data-alt-src"));
        $(this).attr("data-alt-src", temporal);
    })



    // 
    // $("#imagen-1").click(function() {

    //     var temporal = $(this).attr("src");

    //     $(this).attr("src", $(this).attr("data-alt-src"));
    //     $(this).attr("data-alt-src", temporal);


    // });
    // $("#imagen-2").click(function() {

    //     var temporal = $(this).attr("src");

    //     $(this).attr("src", $(this).attr("data-alt-src"));
    //     $(this).attr("data-alt-src", temporal);


    // });
    // $("#imagen-3").click(function() {

    //     var temporal = $(this).attr("src");

    //     $(this).attr("src", $(this).attr("data-alt-src"));
    //     $(this).attr("data-alt-src", temporal);


    // });
    // $("#imagen-4").click(function() {

    //     var temporal = $(this).attr("src");

    //     $(this).attr("src", $(this).attr("data-alt-src"));
    //     $(this).attr("data-alt-src", temporal);


    // });
});