$(document).ready(function() {
    $(".introduction button").click(function () {
        $(".introduction .path").css("display","none")
        $(".introduction .title").css("display","none")
        $(".introduction .content-phone").css("display","none")
        $(".introduction button").removeClass("btn-active")
        $(this).addClass("btn-active")

        $(".introduction .picture").css("display","none")
        if ($(this).hasClass("qywh")) {
            $(".introduction .path.qywh").css("display","block")
            $(".introduction .title.qywh").css("display","inline")
            $(".introduction .picture.qywh").css("display","inline")

        } else if ($(this).hasClass("jrwm")) {
            $(".introduction .path.jrwm").css("display","block")
            $(".introduction .title.jrwm").css("display","inline")
            $(".introduction .picture.jrwm").css("display","inline")

        } else if ($(this).hasClass("xswl")) {
            $(".introduction .path.xswl").css("display","block")
            $(".introduction .title.xswl").css("display","inline")
            $(".introduction .picture.xswl").css("display","inline")

        }

        
    })
})