$(document).ready(function () {
    $(".video-control button, .video-popup .close-button a").click(function (event) {
        $("body").toggleClass("show-video-popup")
        event.preventDefault()
    })
})