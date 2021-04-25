$(document).ready(function() {
    // search
    $("#search a").click(function() {
        var content = $(this).text()
        $("#search input").attr("value", content)
    })

    // product => category
    $(".panel-default .series").click(function () {
        var plus = "<img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM4NCAzODQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM0MS4zMzMsMEg0Mi42NjdDMTkuMDkzLDAsMCwxOS4wOTMsMCw0Mi42Njd2Mjk4LjY2N0MwLDM2NC45MDcsMTkuMDkzLDM4NCw0Mi42NjcsMzg0aDI5OC42NjcgICAgQzM2NC45MDcsMzg0LDM4NCwzNjQuOTA3LDM4NCwzNDEuMzMzVjQyLjY2N0MzODQsMTkuMDkzLDM2NC45MDcsMCwzNDEuMzMzLDB6IE0yOTguNjY3LDIxMy4zMzNoLTg1LjMzM3Y4NS4zMzNoLTQyLjY2N3YtODUuMzMzICAgIEg4NS4zMzN2LTQyLjY2N2g4NS4zMzNWODUuMzMzaDQyLjY2N3Y4NS4zMzNoODUuMzMzVjIxMy4zMzN6IiBmaWxsPSIjZTFlMWUxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==\" />"
        var minus = "<img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM4NCAzODQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM0MS4zMzMsMEg0Mi42NjdDMTkuMiwwLDAsMTkuMiwwLDQyLjY2N3YyOTguNjY3QzAsMzY0LjgsMTkuMiwzODQsNDIuNjY3LDM4NGgyOTguNjY3QzM2NC44LDM4NCwzODQsMzY0LjgsMzg0LDM0MS4zMzMgICAgVjQyLjY2N0MzODQsMTkuMiwzNjQuOCwwLDM0MS4zMzMsMHogTTI5OC42NjcsMjEzLjMzM0g4NS4zMzN2LTQyLjY2N2gyMTMuMzMzVjIxMy4zMzN6IiBmaWxsPSIjZTFlMWUxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==\" />"
        $(this).find("span").empty()
        if ($(this).attr("aria-expanded") === "false") {
            $(this).find("span").append(minus)
        } else {
            $(this).find("span").append(plus)
        }
    })

    // product => display
    var imagesDisplay = [
        "/assets/images/1.jpg",
        "/assets/images/2.jpg",
        "/assets/images/3.jpg",
        "/assets/images/4.jpg",
        "/assets/images/5.jpg",
        "/assets/images/6.jpg",
        "/assets/images/7.jpg",
        "/assets/images/8.jpg",
        "/assets/images/9.jpg"
    ]
    var imgDescription = [
        "防爆电磁流量计", "分体式电磁流量计", "卫生型卡箍电磁流量计",
        "防爆电磁流量计", "防爆电磁流量计", "防爆电磁流量计",
        "防爆电磁流量计", "防爆电磁流量计", "防爆电磁流量计"
    ]

    var aLinkHref = []
    var output = ""
    for (let index = 0; index < imagesDisplay.length; index++) {
        output +=
            `<div class="col-md-4 pic">          
                <img src=${imagesDisplay[index]} alt="${index}">
                <p><a href="" >${imgDescription[index]}</a></p>
            </div>`
    }
    
    document.getElementById("dis").innerHTML = output
    
})