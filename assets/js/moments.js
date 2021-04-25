$(document).ready(function() {
    var currentPage = 1

    
    var moments = {
        "moment1": {
            "img": "/assets/images/9.jpg",
            "title": "hhh",
            "summary": "xxx1hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
            "click":135,
            "date": "2021-01-01",
            "link": ""
        },
        "moment2": {
            "img": "/assets/images/9.jpg",
            "title": "hhh",
            "summary": "xxx2",
            "click":135,
            "date": "2021-01-01",
            "link": ""
        },
        "moment3": {
            "img": "/assets/images/9.jpg",
            "title": "hhh",
            "summary": "xxx3",
            "click":135,
            "date": "2021-01-01",
            "link": ""
        },
        "moment4": {
            "img": "/assets/images/9.jpg",
            "title": "hhh",
            "summary": "xxx4",
            "click":135,
            "date": "2021-01-01",
            "link": ""
        },
        "moment5": {
            "img": "/assets/images/9.jpg",
            "title": "hhh",
            "summary": "xxx5",
            "click":135,
            "date": "2021-01-01",
            "link": ""
        }
    }
    var jsonSize = 0
    for (var item in moments) {
        jsonSize++
    }

    let totalPages = 0
    let pageSize = 2
    var content = ""
    onePage(jsonSize, 1, pageSize)
    if (jsonSize / pageSize > parseInt(jsonSize / pageSize)) {
        totalPages = (jsonSize / pageSize) + 1
    } else {
        totalPages = jsonSize / pageSize
    }  
    $(".pagination").bootstrapPaginator({
        currentPage: currentPage,
        bootstrapMajorVersion: 3,
        totalPages: totalPages,
        itemTexts: function (type, page, current) {
            switch (type) {
                case "prev": return "&laquo;";
                case "next": return "&raquo;";
                case "page": return page;
            }
        },
        onPageClicked: function (event, originalEvent, type, page) {
            onePage(jsonSize, page, pageSize)
        }
    })
// alert(moments[`moment1`]["img"].substring(3))
    function onePage(totalSize, currentPage, pageSize){
        let index = (currentPage - 1) * 2 + 1
        content = ""
        if(index + pageSize > totalSize) {
            for(let i = index; i < totalSize + 1; i++){
                content += 
                `<div class="box">
                    <img src="${moments[`moment${i}`]["img"]}" alt="">
                    <div class="info">
                        <h4><a href="${moments[`moment${i}`]["link"]}">${moments[`moment${i}`]["title"]}</a></h4>
                        <p>${moments[`moment${i}`]["summary"]}</p>
                        <small>阅读量：${moments[`moment${i}`]["click"]}</small>
                    </div>
                    <div class="date">
                        <h2>${moments[`moment${i}`]["date"].substring(5)}</h2>
                        <p>${moments[`moment${i}`]["date"].substring(0, 4)}</p>
                    </div>
                </div>
                <hr>
                `
            } 
        } else {
            for(let i = index; i < index + pageSize; i++){
                content += 
                `<div class="box">
                    <img src="${moments[`moment${i}`]["img"]}" alt="">
                    <div class="info">
                        <h4><a href="${moments[`moment${i}`]["link"]}">${moments[`moment${i}`]["title"]}</a></h4>
                        <p>${moments[`moment${i}`]["summary"]}</p>
                        <small>阅读量：${moments[`moment${i}`]["click"]}</small>
                    </div>
                    <div class="date">
                        <h2>${moments[`moment${i}`]["date"].substring(5)}</h2>
                        <p>${moments[`moment${i}`]["date"].substring(0, 4)}</p>
                    </div>
                </div>
                <hr>
                `
            }
        }
        
        $("#moments").html(content)
        console.log(content);
    }

})