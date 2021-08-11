
$(function () {

    var count = 0;
    $("body").on("click", "p", function () {
        $(this).after("<p>Another paragraph! " + (++count) + "</p>");
    });
})
