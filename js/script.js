$(function(){
    $("img").click(function () {
        var altImg = $(this).attr("alt-src");
        $(this).attr("src", altImg);
    });
})