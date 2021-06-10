$(document).ready(function() {
    $("#btn_click").click(function() {
        $("#h3_click").toggle();
    });
    $("#btn_hide").click(function() {
        $("#h3_hide").hide();
    });
    $("#btn_show").click(function() {
        $("#h3_hide").show();
    });
    $("#btn_toggle").click(function() {
        $("#h3_toggle").toggle();
    });
    $("#btn_slideDown").click(function() {
        $("#h3_slide").slideDown();
    });
    $("#btn_slideUp").click(function() {
        $("#h3_slide").slideUp();
    });
    $("#btn_slideToggle").click(function() {
        $("#h3_slideToggle").slideToggle();
    });
    $("#btn_fadeIn").click(function() {
        $("#h3_fade").fadeIn();
    });
    $("#btn_fadeOut").click(function() {
        $("#h3_fade").fadeOut();
    });
    $("#btn_addClass").click(function() {
        $("#h3_addClass").last().addClass("selected");
    });
    $("#bnt_before").click(function() {
        $("#h3_before_after").before("<p>before</p>");
    });
    $("#bnt_after").click(function() {
        $("#h3_before_after").after("<p>after</p>");
    });
    $("#bnt_append").click(function() {
        $("#h3_append").after("<strong> append </strong>");
    });
    $("#bnt_html").click(function() {
        var htmlString = $("h3_html").html();
        $("#h3_html").html(htmlString);
    });
    $("#bnt_attr").click(function() {
        var title = $("em").attr("title");
        $(".attr").text(title);
    });

    $("#bnt_val").click(function() {
        var input = $("#inp_text").val();
        $("#h3_val").text(input);
    });
    $("#bnt_text").click(function() {
        var texto = $("#h3_text").text();
        console.log(texto);
        $("#p_text").last().html(texto);
    });
});