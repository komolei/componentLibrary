var select = $(".select");
var beijing = $(".beijing");
var dropdown = $(".dropdown");
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
dropdown.on("mouseleave", function() {
    beijing.css({
        "backgroundColor": "rgb(227, 228, 229)",
        "border": "none",
        "border-bottom": "none"
    })
    select.css({
        display: "none",
    })
})
dropdown.on("click", function(e) {
    if (e.target.tagName.toLowerCase() === "a" || e.target.tagName.toLowerCase() === "div") {
        beijing.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-dibiao"></use></svg>' + $(e.target).text())
    }
})

var navUlSelect = $(".nav-ul-select")
$(".myjdspan").on('mouseover', function() {
    // console.log(1);
    navUlSelect.css({
        display: "block",
    })

})
$(".white").on("mouseleave", function() {
    navUlSelect.css({
        // display: "none",
    })
})
$(".nav-ul-dropdown").on("mouseleave", function() {
    navUlSelect.css({
        display: "none",
    })
})
$(".nav-ul-dropdown").on("click", function(e) {
    // $(".nav-ul-dropdown a").css({
    //     "color": "#999",
    // });
    $(e.target).css({
        "color": "red",
    })
})
$(".kehu").on("mouseover", function() {
    $(".item").css({
        display: "block",
        marginTop: "4px"
    })
})
$(".item-dropdown").on("mouseleave", function() {
    $(".item").css({
        display: "none",
    })
})
$(".item-dropdown").on("click", function(e) {
    $(e.target).css({
        "color": "red",
    })
})
$(".buycar").on("mouseover", function() {
    $(".buycar-dropdown").css({
        display: "block",
    })
})
$(".buycar-dropdown").on("mouseleave", function() {
    $(".buycar-dropdown").css({
        display: "none",
    })
})
$(".searchc").on("click", function() {
    //搜索
})
var carousel = $('.carousel');
var btnnext = $('.btn-next');
var btnpre = $('.btn-pre');
var ctimgli = $('.ct-img li');
var ctimg = $('.ct-img');
var index = 0;
var bullet = $('.bullet');
var len = $('.ct-img li').width();
ctimg.append(ctimgli.first().clone());
ctimg.prepend(ctimgli.last().clone());
var isLockUp = false;
ctimg.css('left', -len);
ctimg.width(ctimg.children().length * len);
var play = function() {
        let a = setInterval(function() {
            ctimg.animate({
                left: '-=' + len,
            }, function() {
                index++;
                if (index == ctimgli.length) {
                    index = 0;
                    ctimg.css('left', -len + 'px');
                }
                setBullet();
            })
        }, 2000)
        carousel.on("mouseover", function() {
            clearInterval(a);
        })

    }
    // play();
carousel.on("mouseleave", function() {
    // play();
})
btnnext.click(function() {
    event.preventDefault();
    if (isLockUp) {
        return;
    }
    isLockUp = true;
    ctimg.animate({
        left: '-=' + len,
    }, function() {
        index++;
        if (index == ctimgli.length) {
            index = 0;
            ctimg.css('left', -len + 'px');
        }
        setBullet();
        isLockUp = false;
    })
})
btnpre.click(function() {
    if (isLockUp) return;
    event.preventDefault();
    ctimg.animate({
        left: '+=' + len,
    }, function() {
        index--;
        if (index < 0) {
            ctimg.css('left', -ctimgli.length * ctimgli.width())
            index = ctimgli.length - 1;
        }
        isLockUp = false;
        setBullet();
    })
})

function setBullet() {
    // console.log(1);
    bullet.children().css({
        backgroundColor: "#fff",
    }).eq(index).css({
        backgroundColor: "red",
    })
}

$(".tabList").on("mouseover", function(e) {
    if (e.target.tagName.toLowerCase() === "div") {
        console.log($(e.target).attr("index"));
        $(".tabList-new").each(function(idx) {
            $(this).css({
                display: "none"
            })
        });
        $(".tabList-new").eq($(e.target).attr("index") - 1).css({
            display: "block"
        })
    }
})