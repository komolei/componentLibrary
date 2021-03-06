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

_Carousel = (function() { //在mouseover之后，在点击有问题。到时候再解决。
    var Carousel = function(carousel, off) {
        console.log("9", off);
        this.carousel = carousel;
        this.off = 1;
        this.init();
        this.bind();
        this.play();
        this.touch();
    }
    Carousel.prototype.touch = function() {
        var _this = this;
        bulletLi = this.bulletLi = this.carousel.find(".bullet li")
        this.bullet.on("mouseover", function(e) {
            if (e.target.tagName.toLowerCase() === "li") {
                // console.log("eq", $(e.target).attr("index"), "index");
                var index = $(e.target).attr("index");
                !~! function setBullet(index) {
                    _this.bullet.children().css({
                        backgroundColor: "#fff",
                    }).eq(index).css({
                        backgroundColor: "red",
                    })
                    _this.ctimg.css({
                        left: -_this.len + "px"
                    })
                    _this.ctimg.animate({
                        left: '-=' + _this.len * index,
                    })
                }(index);
            }
        })


    }
    Carousel.prototype.init = function() {
        var btnnext = this.btnnext = this.carousel.find('.btn-next');
        var btnpre = this.btnpre = this.carousel.find('.btn-pre');
        var ctimgli = this.ctimgli = this.carousel.find('.ct-img li');
        var ctimg = this.ctimg = this.carousel.find('.ct-img');
        var index = this.index = 0;
        var bullet = this.bullet = this.carousel.find('.bullet');
        var len = this.len = this.carousel.find('.ct-img li').width();
        var isLockUp = this.isLockUp = false;
        ctimg.append(ctimgli.first().clone());
        ctimg.prepend(ctimgli.last().clone());
        ctimg.css('left', -len);
        ctimg.width(ctimg.children().length * len);
    }
    Carousel.prototype.bind = function() {
        var _this = this;
        // console.log("len:", this.len);
        this.btnnext.click(function() {
            _this.ctimg.css({
                left: -_this.len + "px",
            })
            event.preventDefault();
            if (_this.isLockUp) {
                return;
            }
            _this.isLockUp = true;
            _this.ctimg.animate({
                left: '-=' + _this.len,
            }, "linear", function() {
                _this.index++;
                if (_this.index == _this.ctimgli.length) {
                    _this.index = 0;
                    _this.ctimg.css('left', -_this.len + 'px');
                }
                setBullet.call(_this);
                _this.isLockUp = false;
            })
        })
        this.btnpre.click(function() {
            if (_this.isLockUp) return;
            event.preventDefault();
            _this.ctimg.animate({
                left: '+=' + _this.len,
            }, "linear", function() {
                _this.index--;
                if (_this.index < 0) {
                    _this.ctimg.css('left', -(_this.ctimgli.length * _this.ctimgli.width()))
                    _this.index = _this.ctimgli.length - 1;
                }
                _this.isLockUp = false;
                setBullet.bind(_this)();
            })
        })

        function setBullet() {
            this.bullet.children().css({
                backgroundColor: "#fff",
            }).eq(this.index).css({
                backgroundColor: "red",
            })
        }
    }
    Carousel.prototype.play = function() {
        var _this = this;

        var handler = function() {
            _this.ctimg.animate({
                left: '-=' + _this.len,
            }, "linear", function() {
                _this.index++;
                if (_this.index == _this.ctimgli.length) {
                    _this.index = 0;
                    _this.ctimg.css('left', -_this.len + 'px');
                }
                setBullet.call(_this);
            })
        }

        var off = this.off;
        // console.log(off);
        var A = function(off) {
                var a;
                if (off) {
                    var a = setInterval(handler, 1500)
                        // console.log("md", off, typeof a) //完美，想到了进行类型判断。来清除所有的定时器
                    return a;
                } else {
                    console.log("haofana", off)
                    for (var i = 0; i < 9999999; i++) {
                        clearInterval(i);
                    }
                    return;
                }
            }
            // A();
        this.carousel.on("mouseover", function() {
            // clearInterval(A());
            _this.off = 0;
            A(_this.off);
            // return;
            // if(_this.carousel.on)

        })
        this.carousel.on("mouseleave", function() {
            _this.off = 1;
            A(_this.off);
            // (function A() { setInterval(handler, 1500) })()

            // alert("md");
        })
        A(this.off);

        function setBullet() {
            _this.bullet.children().css({
                backgroundColor: "#fff",
            }).eq(this.index).css({
                backgroundColor: "red",
            })
        }
    }
    return {
        init: function(ct) {
            // console.log("ct", ct, "\n", "off:", off);
            // new Carousel($(ct), off);

            ct.each(function(index, node) {
                new Carousel($(this));
            })
        }
    }
})()
var a = new _Carousel.init($('.carousel'));
// var b = new _Carousel.init($('#ct-2-middle-first')); //id啊，id啊===>#
//想改造off控制开关。。。有bug,就不改造了
// var carousel = $('.carousel');
// var btnnext = $('.btn-next');
// var btnpre = $('.btn-pre');
// var ctimgli = $('.ct-img li');
// var ctimg = $('.ct-img');
// var index = 0;
// var bullet = $('.bullet');
// var len = $('.ct-img li').width();
// ctimg.append(ctimgli.first().clone());
// ctimg.prepend(ctimgli.last().clone());
// var isLockUp = false;
// ctimg.css('left', -len);
// ctimg.width(ctimg.children().length * len);
// var play = function() {
//         let a = setInterval(function() {
//             ctimg.animate({
//                 left: '-=' + len,
//             }, function() {
//                 index++;
//                 if (index == ctimgli.length) {
//                     index = 0;
//                     ctimg.css('left', -len + 'px');
//                 }
//                 setBullet();
//             })
//         }, 1500)
//         carousel.on("mouseover", function() {
//             clearInterval(a);
//         })
//     }
//     // play();
// carousel.on("mouseleave", function() {
//     // play();
// })
// btnnext.click(function() {
//     event.preventDefault();
//     if (isLockUp) {
//         return;
//     }
//     isLockUp = true;
//     ctimg.animate({
//         left: '-=' + len,
//     }, function() {
//         index++;
//         if (index == ctimgli.length) {
//             index = 0;
//             ctimg.css('left', -len + 'px');
//         }
//         setBullet();
//         isLockUp = false;
//     })
// })
// btnpre.click(function() {
//     if (isLockUp) return;
//     event.preventDefault();
//     ctimg.animate({
//         left: '+=' + len,
//     }, function() {
//         index--;
//         if (index < 0) {
//             ctimg.css('left', -ctimgli.length * ctimgli.width())
//             index = ctimgli.length - 1;
//         }
//         isLockUp = false;
//         setBullet();
//     })
// })

// function setBullet() {
//     // console.log(1);
//     bullet.children().css({
//         backgroundColor: "#fff",
//     }).eq(index).css({
//         backgroundColor: "red",
//     })
// }

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
var old = "2017,6,6 00:00:00" //探索。目前这适合这个格式。
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


//aside-right
$("#aside-right").on("mouseover", function(e) {
    // $.each($("#aside-right b"), function(idx, el) {
    //     $(el).css({
    //             marginLeft: "40px",
    //             // visibility: "visible",

    //         })
    //         // $(el).animate({
    //         //     // display: "block",
    //         //     marginLeft: "-60px",
    //         // })

    // })
    if (e.target.tagName.toLowerCase() === "a") {
        // $(e.target).find("b").css({
        //     visibility: "visible",
        // });
        $(e.target).find("b").animate({
            marginLeft: "-60px",

        })
    }
})
$("#aside-right").on("mouseleave", function(e) {
    if (e.target.tagName.toLowerCase() === "b") {
        $(e.target).css({
            marginLeft: "50px",
            // visibility: "hidden",
        })
    }
    if (e.target.tagName.toLowerCase() === "li") {
        // console.log($("#aside-right").find("b"))
        console.log(1)
        $("#aside-right").find("b").each(function(idx, el) {
            console.log(el);
            $(el).css({
                marginLeft: "50px",
                // visibility: "hidden",
            })
        })

    }

})
$("#aside-right-2").on("mouseover", function(e) {
    // $.each($("#aside-right b"), function(idx, el) {
    //     $(el).css({
    //             marginLeft: "40px",
    //             // visibility: "visible",

    //         })
    //         // $(el).animate({
    //         //     // display: "block",
    //         //     marginLeft: "-60px",
    //         // })

    // })
    if (e.target.tagName.toLowerCase() === "a") {
        // $(e.target).find("b").css({
        //     visibility: "visible",
        // });
        $(e.target).find("b").animate({

            marginLeft: "-60px",

        })
    }
})
$("#aside-right-2").on("mouseleave", function(e) {
    if (e.target.tagName.toLowerCase() === "b") {
        $(e.target).css({
            marginLeft: "50px",
            // visibility: "hidden",
        })
    }
    if (e.target.tagName.toLowerCase() === "li") {
        // console.log($("#aside-right").find("b"))
        console.log(1)
        $("#aside-right").find("b").each(function(idx, el) {
            console.log(el);
            $(el).css({
                marginLeft: "50px",
                // visibility: "hidden",
            })
        })

    }

})
$(".GoTop").on("click", function() {
    window.scrollTo(0, 0);
})
$(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
        // $(".enjoyfix").css("display", "block");
        $(".enjoyfix").slideDown();
    } else {
        $(".enjoyfix").slideUp();

    }
})
$(window).scroll(function() {
    if ($(window).scrollTop() > 2200) {
        // $(".enjoyfix").css("display", "block");
        $(".middlect-aside").show(1500);
    } else {
        $(".middlect-aside").hide();
    }
})

$(".middlect-aside").on("click", function(e) {
        e.preventDefault();
        if (e.target.tagName.toLowerCase() === "li") {
            // debugger;
            var index = $(e.target).attr("index")
            console.log("index++", index);
            $("h3").each(function(idx, el) {
                    if ($(el).attr("index") === index) {

                        // console.log("this is el:", $(e.target))
                        // window.scrollTo(0, el.scrollY + "px");
                        console.log($(el).scrollTop(), "index:", index);

                        window.scrollTo(0, (el.offsetTop - 30 - el.offsetHeight));
                    }
                })
                // var $("h3")
        }
    })
    //想改变middlect-bg的宽度
    // var width1 = document.body.offsetWidth
    // $(".middlect-bg").width(width1)

//实现模拟transition：width的变化
// $(".right").on("mouseover", function(e) {
//     if (e.target.tagName.toLowerCase() === "img") {
//         $(e.target).animate({
//             width: "390px"
//         })
//     }

// })
// $(".right").on("mouseleave", function() {
//     $(".right img").animate({
//         width: "400px"
//     })
// })

// var b = new _Carousel.init($('.ct-2-middle-first'), 1);


var liveIndex = 0;
$(".live-foot").each(function(idx, el) {
    $(el).on("mouseover", function() {
        $(".live-foot>a").css({
            display: "block",
            color: "red"
        })

    })
});
$(".live-foot>a").each(function(idx, el) {
    $(el).on("mouseleave", function() {
        $(".live-foot>a").css({
            display: "none",
        })

    })
});
$("#live-foot-ul").each(function(idx, el) { $(el).css("left", "-1900px"); });
$(".btn-left").each(function(idx, el) {
    // console.log("idx:", idx, $(el));
    $(el).on("click", function(e) {
        event.preventDefault();
        if (lock) return;
        liveIndex++;
        lock = true;
        // console.log("this is debugger", $("#live-foot-ul").eq(idx));
        $("#live-foot-ul").eq(idx).animate({
            left: -95 * liveIndex * 5 + "px",
        }, function() {
            lock = false;
        })
        if (liveIndex >= 3) {
            $("#live-foot-ul").eq(idx).css({
                left: "-3800px"
            })
            liveIndex = 0;
        }
        // return lock;
    })
});
$(".btn-right").each(function(idx, el) {
    $(el).on("click", function(e) {

        console.log("liveIndex:", liveIndex);
        event.preventDefault();
        if (lock) return;
        lock = true;
        liveIndex++;
        $("#live-foot-ul").eq(idx).animate({
            left: "-=" + 475 + "px",
        }, function() {
            lock = false;
            // console.log(1);
        })
        if (liveIndex >= 3) {
            $("#live-foot-ul").eq(idx).css({
                left: "-1900" + "px",
            })
            liveIndex = 0;
        }
    })
})