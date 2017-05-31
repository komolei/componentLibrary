var select = $(".select");
var beijing = $(".beijing");
var dropdown = $(".dropdown");
beijing.on("mouseenter", function() {
    // console.log(1);
    select.css({
        display: "block",
    })
    beijing.css({
        // "backgroundColor": "#fff",
        // "border": "1px solid #999",
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
        beijing.append(select.clone().css({ display: "none" }))

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
        }, 1500)
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
        // console.log($(e.target).attr("index"));
        $(".tabList-new").each(function(idx) {
            $(this).css({
                display: "none"
            })
        });

        // $(".tabList-new").eq($(e.target).attr("index") - 1).show();
        // $(".tabList-new").eq($(e.target).attr("index") - 1).animate({
        //         display: "block",
        //     }, 2000)
        $(".tabList-new").eq($(e.target).attr("index") - 1).css({
            display: "block"
        })
    }
})

var ct2RightBottom = $(".ct-2-right-bottom").on("mouseover", function(e) {
    if (!$(e.target).attr("index")) return;
    var index = $(e.target).attr("index")
    $(".ct-2-right-bottom").css({
        display: "none"
    })
    $(".ct-2-right-bottom-content").css({
        display: "block"
    })
    $(".ct-2-right-bottom-dropdown>ul> li").each(function(idx, el) {
        $(el).css({
            display: "none"
        })
        if (
            $(el).attr("index") == index
        ) {
            // console.log("$this:", index, el)
            $(el).css({ display: "block" })
        }
    })
})
$(".ct-2-right-bottom-content").on("click", function(e) {
        // ct2RightBottom.bind("mouseover", function() {
        //     event.stopPropagation();
        // });
        if (e.target.tagName.toLowerCase() === "span") {
            $(".ct-2-right-bottom").css({
                display: "block"
            })
            $(".ct-2-right-bottom-content").css({
                display: "none"
            })

        }
        // console.log(event.eventPhase)
    })
    // $(".ct-2-right-bottom-content").on("mouseleave", function() {
    //     $(".ct-2-right-bottom").css({
    //         display: "block"
    //     })
    //     $(".ct-2-right-bottom-content").css({
    //             display: "none"
    //         })
    //         // ct2RightBottom;
    //         // event.stopPropagation();

// }) 看情况用吧
$(".ct-2-right-bottom-tab").on("mouseover", function(e) {
    var index = $(e.target).attr("index")
    $(".ct-2-right-bottom-dropdown>ul> li").each(function(idx, el) {
        $(el).css({
            display: "none"
        })
        if (
            $(el).attr("index") == index
        ) {
            // console.log("$this:", index, el)
            $(el).css({ display: "block" })
        }
    })
})

$(".ct-2-ul-left").on("mouseover", function(e) {
    $("#ct-2-left-meun").css({
        display: "block"
    })
    var index = $(e.target).attr("index")
    $("#ct-2-left-meun>ul> li").each(function(idx, el) {
        $(el).css({
            display: "none"
        })
        if (
            $(el).attr("index") == index
        ) {
            // console.log("$this:", index, el)
            $(el).css({ display: "block" })
        }
        $(el).on("mouseleave", function() {
            $(this).css({
                display: "none"
            })
            $("#ct-2-left-meun").css({
                display: "none"
            })
        })
    })
})
$(".ct-2-ul-left").on("mouseleave", function(e) {
    $("#ct-2-left-meun>ul> li").each(function(idx, el) {
        $(el).css({
            display: "none"
        })
    })
})
var fix = (function() {
    if ($(window).scrollTop() > "200") {
        if ($(this).scrollTop() > "200") {
            $(".fixed-nav").css({
                display: "block"
            })
            $(".fixed-nav").css({
                animation: "1s fixed ease-in"

            })
        } else {
            $(".fixed-nav").css({
                display: "none"
            })
        }
    }

})()
$(window).scroll(function() {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() > "200") {
            $(".fixed-nav").css({
                display: "block"
            })
            $(".fixed-nav").css({
                animation: "1s fixed ease-in"

            })
        } else {
            $(".fixed-nav").css({
                display: "none"
            })
        }
    })
    // time("2017,6,1 00:00:00")

// function time() {
//     setInterval(function() {
//         var now = new Date();
//         var old = new Date("2017,6,1 00:00:00");
//         var time = old - now;
//         var day = parseInt(time / (24 * 60 * 60 * 1000));
//         var h = parseInt(time / (1000 * 60 * 60) % 24);
//         var m = parseInt(time / (1000 * 60)) % 60;
//         var s = parseInt(time / 1000) % 60;
//         if (h >= 10) {
//             $(".timeout-show-first").text(h)
//         } else {
//             $(".timeout-show-first").text("0" + h)

//         }
//         if (m >= 10) {
//             $(".timeout-show-second").text(m)
//         } else {
//             $(".timeout-show-second").text("0" + m)
//         }
//         if (s >= 10) {
//             $(".timeout-show-third").text(s)
//         } else {
//             $(".timeout-show-third").text("0" + s)
//         }
//     }, 1000)
// }
// var old = "2017,6,1 00:00:00" //探索。目前这适合这个格式。
// var old = " 13:51:50"
// handler(old)
//----------------------------------------------------------------
// setInterval("handler(old)", 1000) //md。这样就可以传值了。坑啊
//     // setInterval("console.log(1)", 1000)

// function handler(old) {
//     var now = new Date();
//     var old = new Date(old);
//     var time = old - now;
//     var day = parseInt(time / (24 * 60 * 60 * 1000));
//     var h = parseInt(time / (1000 * 60 * 60) % 24);
//     var m = parseInt(time / (1000 * 60)) % 60;
//     var s = parseInt(time / 1000) % 60;
//     if (h >= 10) {
//         $(".timeout-show-first").text(h)
//     } else {
//         $(".timeout-show-first").text("0" + h)

//     }
//     if (m >= 10) {
//         $(".timeout-show-second").text(m)
//     } else {
//         $(".timeout-show-second").text("0" + m)
//     }
//     if (s >= 10) {
//         $(".timeout-show-third").text(s)
//     } else {
//         $(".timeout-show-third").text("0" + s)
//     }
//     // return old.toString()
// }
//----------------------------------------------------------------

var timeer = function(old) {
    this.old = old;
    this.addEvent();

}
timeer.prototype.addEvent = function() {
    var _this = this;
    var now = new Date();
    var old = new Date(_this.old);
    var time = old - now;
    var day = parseInt(time / (24 * 60 * 60 * 1000));
    var h = parseInt(time / (1000 * 60 * 60) % 24);
    var m = parseInt(time / (1000 * 60)) % 60;
    var s = parseInt(time / 1000) % 60;
    if (h >= 10) {
        $(".timeout-show-first").text(h)
    } else {
        $(".timeout-show-first").text("0" + h)

    }
    if (m >= 10) {
        $(".timeout-show-second").text(m)
    } else {
        $(".timeout-show-second").text("0" + m)
    }
    if (s >= 10) {
        $(".timeout-show-third").text(s)
    } else {
        $(".timeout-show-third").text("0" + s)
    }
}
var old = "2017,6,2 00:00:00" //探索。目前这适合这个格式。
setInterval("new timeer(old)", 1000);

$(".bigct-4-carousel").on("mouseover", function() {
    $(".bigct-4-btn").each(function(idx, el) {
        // console.log(el);
        $(el).css({
            visibility: "visible"
                // display: "block"
        })
    })
})
$(".bigct-4-carousel").on("mouseleave", function() {
    $(".bigct-4-btn").each(function(idx, el) {
        // console.log(el);
        $(el).css({
            visibility: "hidden"
                // display: "block"
        })
    })
})
var index = 0;
var lock = false;
$(".bigct-4-carousel-ul").children().last().clone().appendTo($(".bigct-4-carousel-ul"))
$(".bigct-4-carousel-ul").children().first().clone().prependTo($(".bigct-4-carousel-ul"))
$(".pre").on("click", function() {
    if (lock) return;
    index++;
    lock = true;
    $(".bigct-4-carousel-ul").animate({
        left: -1000 * index + "px",
    }, function() {
        lock = false;
    })
    if (index >= 3) {
        $(".bigct-4-carousel-ul").css({
            left: "4000px"
        })
        index = 0;
    }
    // return lock;
})
$(".next").on("click", function() {
    if (lock) return;
    lock = true;
    index++;
    $(".bigct-4-carousel-ul").animate({
        left: -1000 * index + "px",
    }, function() {
        lock = false;
    })
    if (index >= 3) {
        $(".bigct-4-carousel-ul").css({
            left: "0px"
        })
        index = 0;
    }
    // return lock;
})