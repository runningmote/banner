$(function() {
    var $wrap = $("#wrap")
    var $pic = $(".pic li");
    var $bg = $(".bg li");
    var $prev = $(".left");
    var $next = $(".right");
    var $lib = $(".lib ul li");
    var index = 0;
    var len = $lib.length;

    $next.click(function() {
        index++;
        index %= len
        play()
    })
    $prev.click(function() {
        index--;
        index = index < 0 ? len - 1 : index;
        play()

    })
    $lib.click(function() {
        index = $(this).index()

        if (index != -1) {
            $lib.eq(index).addClass("on").siblings().removeClass("on")
            $bg.eq(index).fadeIn("slow").siblings().fadeOut("slow");
            $pic.eq(index).fadeIn("slow").siblings().fadeOut("slow")
        }
    })
    timer = setInterval(function() {
        index++;
        index %= len;
        play()
    }, 2000)
    $wrap.mouseover(function() {
        clearInterval(timer)
    })
    $wrap.mouseout(function() {
        timer = setInterval(function() {
            index++;
            index %= len;
            play()
        }, 2000)
    })

    function play() {
        $pic.eq(index).fadeIn(1000).siblings('li').fadeOut(1000);
        $bg.eq(index).fadeIn(1000).siblings("li").fadeOut(1000);
        $lib.eq(index).addClass("on").siblings("li").removeClass("on");
    }


})