var _Switch = (function() {
    Switch = function() {
        var div = $('<div class="switch"><div class="circle"></div></div>')
        $("body").append(div);
        div.on("click", function() {
            var circle = div.find(".circle");
            circle.toggleClass("move");
            div.toggleClass('add');
        })
    }
    return {
        init: function() {
            new Switch();
        }
    }
})()
var _Switch1 = (function() {
    Switch1 = function() {
        var div1 = $('<div class="switch"><i>ON</i><div class="circle"></div></div>')
        $("body").append(div1);
        div1.on("click", function() {
            var circle = div1.find(".circle");
            var i = div1.find("i");
            i.text("off");
            i.css({
                float: "left",
            })
            circle.toggleClass("move");
            if (!div1.hasClass('add1')) {
                // div1.text("off");
                // div1.append($('<div class="circle"></div>'))
                div1.addClass('add1');

                // div1[0].innerText = "off";
            } else {
                i.text("ON");
                i.css({
                    float: "right",
                })
                div1.removeClass('add1')
                    // div1.text("ON");

            }

            // div1.toggleClass('add1');
            // div1.text("off");
        })
    }
    return {
        init: function() {
            new Switch1();
        }
    }
})()