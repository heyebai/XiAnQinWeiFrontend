$(document).ready(function () {
    $(".product div:nth-child(2) button").click(function () {
        $(".product div:nth-child(2) button").removeClass("btn-active")
        $(this).addClass("btn-active")

        $(".product .div-3").css("display","none")
        $(".product div:nth-child(4)").css("display","none")
        $(".product div:nth-child(5)").css("display","none")
        if ($(this).hasClass("ywj")) {
            $(".product .div-3").css("display","inline")
        } else if ($(this).hasClass("llj")) {
            $(".product div:nth-child(4)").css("display","inline")
        } else if ($(this).hasClass("rlb")) {
            $(".product div:nth-child(5)").css("display","inline")
        }
    })

    var loadMore = `
        <div>
            <div>
            <img src="assets/images/1.jpg" alt="">
            <p><a>防爆电磁流量计</a></p>
            </div>
            <div>
            <img src="assets/images/1.jpg" alt="">
            <p><a>防爆电磁流量计</a></p>
            </div>
        </div>
    `
    $(".product > button").click(function() {
        if ($(".btn-active").hasClass("ywj")) {
            $(".product .div-3").append(loadMore)
        } else if ($(".btn-active").hasClass("llj")) {
            $(".product div:nth-child(4)").append(loadMore)
        } else if ($(".btn-active").hasClass("rlb")) {
            $(".product div:nth-child(5)").append(loadMore)
        }
    })
})