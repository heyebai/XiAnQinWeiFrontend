$(document).ready(function () {
    // navbar
    // $(".navbar-nav li a").hover(function () {
    //     $(this).addClass("active-li")
    // })

    $(document).click(function () {
        $(".navbar-nav li a").removeClass("active-li")
    })

    // carousel
    var imagesCarousel = ["/assets/images/brand.jpg",
        "/assets/images/brand.jpg",
        "/assets/images/brand.jpg",
        "/assets/images/brand.jpg"]
    var textImages =
        `<div class="item active">
            <img src= ${imagesCarousel[0]} alt="slide No.1">
         </div>`
    // carousel indicator
    var textIndicators =
        `<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>`
    for (let index = 1; index < imagesCarousel.length; index++) {
        textImages += `<div class="item">
                    <img src=${imagesCarousel[index]} alt="slide No.${index + 1}">
                 </div>`
        textIndicators += `<li data-target="#carousel-example-generic" data-slide-to="${index}"></li>`
    }
    document.getElementById("carousel-images").innerHTML = textImages
    document.getElementById("carousel-indicators").innerHTML = textIndicators

    

    
    // news
    $(".content li a").hover(function () {
        var arrow = "<img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUwOC44NzUsMjQ4LjQ1OGwtMTYwLTE2MGMtNC4xNjctNC4xNjctMTAuOTE3LTQuMTY3LTE1LjA4MywwYy00LjE2Nyw0LjE2Ny00LjE2NywxMC45MTcsMCwxNS4wODNsMTQxLjc5MiwxNDEuNzkyICAgIEgxMC42NjdDNC43NzEsMjQ1LjMzMywwLDI1MC4xMDQsMCwyNTZzNC43NzEsMTAuNjY3LDEwLjY2NywxMC42NjdoNDY0LjkxN0wzMzMuNzkyLDQwOC40NThjLTQuMTY3LDQuMTY3LTQuMTY3LDEwLjkxNywwLDE1LjA4MyAgICBjMi4wODMsMi4wODMsNC44MTMsMy4xMjUsNy41NDIsMy4xMjVjMi43MjksMCw1LjQ1OC0xLjA0Miw3LjU0Mi0zLjEyNWwxNjAtMTYwQzUxMy4wNDIsMjU5LjM3NSw1MTMuMDQyLDI1Mi42MjUsNTA4Ljg3NSwyNDguNDU4eiAgICAiIGZpbGw9IiNlZTYyMzMiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+\" />"
        $(this).parent().parent().parent().find(".arrow").empty()
        $(this).parent().parent().parent().find(".arrow").append(arrow)
    }, function () {
        var arrow = "<img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUwOC44NzUsMjQ4LjQ1OGwtMTYwLTE2MGMtNC4xNjctNC4xNjctMTAuOTE3LTQuMTY3LTE1LjA4MywwYy00LjE2Nyw0LjE2Ny00LjE2NywxMC45MTcsMCwxNS4wODNsMTQxLjc5MiwxNDEuNzkyICAgIEgxMC42NjdDNC43NzEsMjQ1LjMzMywwLDI1MC4xMDQsMCwyNTZzNC43NzEsMTAuNjY3LDEwLjY2NywxMC42NjdoNDY0LjkxN0wzMzMuNzkyLDQwOC40NThjLTQuMTY3LDQuMTY3LTQuMTY3LDEwLjkxNywwLDE1LjA4MyAgICBjMi4wODMsMi4wODMsNC44MTMsMy4xMjUsNy41NDIsMy4xMjVjMi43MjksMCw1LjQ1OC0xLjA0Miw3LjU0Mi0zLjEyNWwxNjAtMTYwQzUxMy4wNDIsMjU5LjM3NSw1MTMuMDQyLDI1Mi42MjUsNTA4Ljg3NSwyNDguNDU4eiAgICAiIGZpbGw9IiNlOGU3ZTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+\" />"
        $(this).parent().parent().parent().find(".arrow").empty()
        $(this).parent().parent().parent().find(".arrow").append(arrow)
    })
        
      

})