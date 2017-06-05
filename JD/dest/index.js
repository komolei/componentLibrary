var select = $(".select"),
    beijing = $(".beijing"),
    dropdown = $(".dropdown");
beijing.on("mouseenter", function() { select.css({ display: "block" }), beijing.css({ "border-bottom": "none" }) }), beijing.on("mouseleave", function() {}), dropdown.on("mouseleave", function() { beijing.css({ backgroundColor: "rgb(227, 228, 229)", border: "none", "border-bottom": "none" }), select.css({ display: "none" }) }), dropdown.on("click", function(e) { "a" !== e.target.tagName.toLowerCase() && "div" !== e.target.tagName.toLowerCase() || (beijing.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-dibiao"></use></svg>' + $(e.target).text()), beijing.append(select.clone().css({ display: "none" }))) });
var navUlSelect = $(".nav-ul-select");
$(".myjdspan").on("mouseover", function() { navUlSelect.css({ display: "block" }) }), $(".white").on("mouseleave", function() { navUlSelect.css({}) }), $(".nav-ul-dropdown").on("mouseleave", function() { navUlSelect.css({ display: "none" }) }), $(".nav-ul-dropdown").on("click", function(e) { $(e.target).css({ color: "red" }) }), $(".kehu").on("mouseover", function() { $(".item").css({ display: "block", marginTop: "4px" }) }), $(".item-dropdown").on("mouseleave", function() { $(".item").css({ display: "none" }) }), $(".item-dropdown").on("click", function(e) { $(e.target).css({ color: "red" }) }), $(".buycar").on("mouseover", function() { $(".buycar-dropdown").css({ display: "block" }) }), $(".buycar-dropdown").on("mouseleave", function() { $(".buycar-dropdown").css({ display: "none" }) }), $(".searchc").on("click", function() {}), _Carousel = function() {
    var e = function(e, t) { console.log("9", t), this.carousel = e, this.off = 1, this.init(), this.bind(), this.play(), this.touch() };
    return e.prototype.touch = function() {
        var e = this;
        bulletLi = this.bulletLi = this.carousel.find(".bullet li"), this.bullet.on("mouseover", function(t) { "li" === t.target.tagName.toLowerCase() && function(t) { e.bullet.children().css({ backgroundColor: "#fff" }).eq(t).css({ backgroundColor: "red" }), e.ctimg.css({ left: -e.len + "px" }), e.ctimg.animate({ left: "-=" + e.len * t }) }($(t.target).attr("index")) })
    }, e.prototype.init = function() {
        this.btnnext = this.carousel.find(".btn-next"), this.btnpre = this.carousel.find(".btn-pre");
        var e = this.ctimgli = this.carousel.find(".ct-img li"),
            t = this.ctimg = this.carousel.find(".ct-img"),
            n = (this.index = 0, this.bullet = this.carousel.find(".bullet"), this.len = this.carousel.find(".ct-img li").width());
        this.isLockUp = !1;
        t.append(e.first().clone()), t.prepend(e.last().clone()), t.css("left", -n), t.width(t.children().length * n)
    }, e.prototype.bind = function() {
        function e() { this.bullet.children().css({ backgroundColor: "#fff" }).eq(this.index).css({ backgroundColor: "red" }) }
        var t = this;
        this.btnnext.click(function() { t.ctimg.css({ left: -t.len + "px" }), event.preventDefault(), t.isLockUp || (t.isLockUp = !0, t.ctimg.animate({ left: "-=" + t.len }, "linear", function() {++t.index == t.ctimgli.length && (t.index = 0, t.ctimg.css("left", -t.len + "px")), e.call(t), t.isLockUp = !1 })) }), this.btnpre.click(function() { t.isLockUp || (event.preventDefault(), t.ctimg.animate({ left: "+=" + t.len }, "linear", function() {--t.index < 0 && (t.ctimg.css("left", -t.ctimgli.length * t.ctimgli.width()), t.index = t.ctimgli.length - 1), t.isLockUp = !1, e.bind(t)() })) })
    }, e.prototype.play = function() {
        function e() { t.bullet.children().css({ backgroundColor: "#fff" }).eq(this.index).css({ backgroundColor: "red" }) }
        var t = this,
            n = function() { t.ctimg.animate({ left: "-=" + t.len }, "linear", function() {++t.index == t.ctimgli.length && (t.index = 0, t.ctimg.css("left", -t.len + "px")), e.call(t) }) },
            o = (this.off, function(e) {
                if (e) return setInterval(n, 1500);
                console.log("haofana", e);
                for (var t = 0; t < 9999999; t++) clearInterval(t)
            });
        this.carousel.on("mouseover", function() { t.off = 0, o(t.off) }), this.carousel.on("mouseleave", function() { t.off = 1, o(t.off) }), o(this.off)
    }, { init: function(t) { t.each(function(t, n) { new e($(this)) }) } }
}();
var a = new _Carousel.init($(".carousel"));
$(".tabList").on("mouseover", function(e) { "div" === e.target.tagName.toLowerCase() && ($(".tabList-new").each(function(e) { $(this).css({ display: "none" }) }), $(".tabList-new").eq($(e.target).attr("index") - 1).css({ display: "block" })) });
var ct2RightBottom = $(".ct-2-right-bottom").on("mouseover", function(e) {
    if ($(e.target).attr("index")) {
        var t = $(e.target).attr("index");
        $(".ct-2-right-bottom").css({ display: "none" }), $(".ct-2-right-bottom-content").css({ display: "block" }), $(".ct-2-right-bottom-dropdown>ul> li").each(function(e, n) { $(n).css({ display: "none" }), $(n).attr("index") == t && $(n).css({ display: "block" }) })
    }
});
$(".ct-2-right-bottom-content").on("click", function(e) { "span" === e.target.tagName.toLowerCase() && ($(".ct-2-right-bottom").css({ display: "block" }), $(".ct-2-right-bottom-content").css({ display: "none" })) }), $(".ct-2-right-bottom-tab").on("mouseover", function(e) {
    var t = $(e.target).attr("index");
    $(".ct-2-right-bottom-dropdown>ul> li").each(function(e, n) { $(n).css({ display: "none" }), $(n).attr("index") == t && $(n).css({ display: "block" }) })
}), $(".ct-2-ul-left").on("mouseover", function(e) {
    $("#ct-2-left-meun").css({ display: "block" });
    var t = $(e.target).attr("index");
    $("#ct-2-left-meun>ul> li").each(function(e, n) { $(n).css({ display: "none" }), $(n).attr("index") == t && $(n).css({ display: "block" }), $(n).on("mouseleave", function() { $(this).css({ display: "none" }), $("#ct-2-left-meun").css({ display: "none" }) }) })
}), $(".ct-2-ul-left").on("mouseleave", function(e) { $("#ct-2-left-meun>ul> li").each(function(e, t) { $(t).css({ display: "none" }) }) });
var fix = function() { $(window).scrollTop() > "200" && ($(this).scrollTop() > "200" ? ($(".fixed-nav").css({ display: "block" }), $(".fixed-nav").css({ animation: "1s fixed ease-in" })) : $(".fixed-nav").css({ display: "none" })) }();
$(window).scroll(function() { $(this).scrollTop() > "200" ? ($(".fixed-nav").css({ display: "block" }), $(".fixed-nav").css({ animation: "1s fixed ease-in" })) : $(".fixed-nav").css({ display: "none" }) });
var timeer = function(e) { this.old = e, this.addEvent() };
timeer.prototype.addEvent = function() {
    var e = this,
        t = new Date,
        n = new Date(e.old) - t,
        o = (parseInt(n / 864e5), parseInt(n / 36e5 % 24)),
        i = parseInt(n / 6e4) % 60,
        c = parseInt(n / 1e3) % 60;
    o >= 10 ? $(".timeout-show-first").text(o) : $(".timeout-show-first").text("0" + o), i >= 10 ? $(".timeout-show-second").text(i) : $(".timeout-show-second").text("0" + i), c >= 10 ? $(".timeout-show-third").text(c) : $(".timeout-show-third").text("0" + c)
};
var old = "2017,6,6 00:00:00";
setInterval("new timeer(old)", 1e3), $(".bigct-4-carousel").on("mouseover", function() { $(".bigct-4-btn").each(function(e, t) { $(t).css({ visibility: "visible" }) }) }), $(".bigct-4-carousel").on("mouseleave", function() { $(".bigct-4-btn").each(function(e, t) { $(t).css({ visibility: "hidden" }) }) });
var index = 0,
    lock = !1;
$(".bigct-4-carousel-ul").children().last().clone().appendTo($(".bigct-4-carousel-ul")), $(".bigct-4-carousel-ul").children().first().clone().prependTo($(".bigct-4-carousel-ul")), $(".pre").on("click", function() { lock || (index++, lock = !0, $(".bigct-4-carousel-ul").animate({ left: -1e3 * index + "px" }, function() { lock = !1 }), index >= 3 && ($(".bigct-4-carousel-ul").css({ left: "4000px" }), index = 0)) }), $(".next").on("click", function() { lock || (lock = !0, index++, $(".bigct-4-carousel-ul").animate({ left: -1e3 * index + "px" }, function() { lock = !1 }), index >= 3 && ($(".bigct-4-carousel-ul").css({ left: "0px" }), index = 0)) }), $("#aside-right").on("mouseover", function(e) { "a" === e.target.tagName.toLowerCase() && $(e.target).find("b").animate({ marginLeft: "-60px" }) }), $("#aside-right").on("mouseleave", function(e) { "b" === e.target.tagName.toLowerCase() && $(e.target).css({ marginLeft: "50px" }), "li" === e.target.tagName.toLowerCase() && (console.log(1), $("#aside-right").find("b").each(function(e, t) { console.log(t), $(t).css({ marginLeft: "50px" }) })) }), $("#aside-right-2").on("mouseover", function(e) { "a" === e.target.tagName.toLowerCase() && $(e.target).find("b").animate({ marginLeft: "-60px" }) }), $("#aside-right-2").on("mouseleave", function(e) { "b" === e.target.tagName.toLowerCase() && $(e.target).css({ marginLeft: "50px" }), "li" === e.target.tagName.toLowerCase() && (console.log(1), $("#aside-right").find("b").each(function(e, t) { console.log(t), $(t).css({ marginLeft: "50px" }) })) }), $(".GoTop").on("click", function() { window.scrollTo(0, 0) }), $(window).scroll(function() { $(window).scrollTop() > 600 ? $(".enjoyfix").slideDown() : $(".enjoyfix").slideUp() }), $(window).scroll(function() { $(window).scrollTop() > 2200 ? $(".middlect-aside").show(1500) : $(".middlect-aside").hide() }), $(".middlect-aside").on("click", function(e) {
    if (e.preventDefault(), "li" === e.target.tagName.toLowerCase()) {
        var t = $(e.target).attr("index");
        console.log("index++", t), $("h3").each(function(e, n) { $(n).attr("index") === t && (console.log($(n).scrollTop(), "index:", t), window.scrollTo(0, n.offsetTop - 30 - n.offsetHeight)) })
    }
});
var liveIndex = 0;
$(".live-foot").each(function(e, t) { $(t).on("mouseover", function() { $(".live-foot>a").css({ display: "block", color: "red" }) }) }), $(".live-foot>a").each(function(e, t) { $(t).on("mouseleave", function() { $(".live-foot>a").css({ display: "none" }) }) }), $("#live-foot-ul").each(function(e, t) { $(t).css("left", "-1900px") }), $(".btn-left").each(function(e, t) { $(t).on("click", function(t) { event.preventDefault(), lock || (liveIndex++, lock = !0, $("#live-foot-ul").eq(e).animate({ left: -95 * liveIndex * 5 + "px" }, function() { lock = !1 }), liveIndex >= 3 && ($("#live-foot-ul").eq(e).css({ left: "-3800px" }), liveIndex = 0)) }) }), $(".btn-right").each(function(e, t) { $(t).on("click", function(t) { console.log("liveIndex:", liveIndex), event.preventDefault(), lock || (lock = !0, liveIndex++, $("#live-foot-ul").eq(e).animate({ left: "-=475px" }, function() { lock = !1 }), liveIndex >= 3 && ($("#live-foot-ul").eq(e).css({ left: "-1900px" }), liveIndex = 0)) }) });