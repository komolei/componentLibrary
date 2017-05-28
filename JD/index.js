var select = $(".select");
var beijing = $(".beijing");

beijing.on("mouseenter", function() {
    // console.log(1);
    select.css({
        display: "block",
    })
    beijing.css({
        "backgroundColor": "#fff",
        "border": "1px solid #999",
        "border-bottom": "none"
    })
})
beijing.on("mouseleave", function() {
    // console.log("1", select.css("display"));
    // if (select.css("display") === "block") {
    //     beijing.css({
    //         "backgroundColor": "#fff",
    //         "border": "1px solid #999",
    //         "border-bottom": "none"
    //     })
    //     return;
    // }
    // select.css({
    //     display: "none",
    // })
})
$(".dropdown").on("mouseleave", function() {
    beijing.css({
        "backgroundColor": "rgb(227, 228, 229)",
        "border": "none",
        "border-bottom": "none"
    })
    select.css({
        display: "none",
    })
})