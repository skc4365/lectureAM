
$(function () {

    var i = 0;
    $("div.overout")
        .mouseover(function () {
            $("p", this).first().text("mouse over");
            $("p", this).last().text(++i);
        })
        .mouseout(function () {
            $("p", this).first().text("mouse out");
        });

    var n = 0;
    $("div.enterleave")
        .mouseenter(function () {
            $("p", this).first().text("mouse enter");
            $("p", this).last().text(++n);
        })
        .mouseleave(function () {
            $("p", this).first().text("mouse leave");
        });
})
