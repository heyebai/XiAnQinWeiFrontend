$(document).ready(function() {
    var currentPage = 1

    var moments_llj = {
        "moment1": {
            "img": "/assets/images/9.jpg",
            "title": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
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
    var moments_llj_string = JSON.stringify(moments_llj)

    var moments_ywy = {
        "moment1": {
            "img": "/assets/images/9.jpg",
            "title": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
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
        }
    }
    var moments_ywy_string = JSON.stringify(moments_ywy)

    var moments_rlb = {
        "moment1": {
            "img": "/assets/images/9.jpg",
            "title": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
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
        }
    }
    var moments_rlb_string = JSON.stringify(moments_rlb)
    console.log(moments_rlb_string);
    var jsonSize = 0
    for (var item in moments_llj) {
        jsonSize++
    }
    let totalPages = 0
    let pageSize = 2
    var content = ""
    var m = moments_llj_string
    onePage(jsonSize, 1, pageSize, moments_llj_string)
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
            onePage(jsonSize, page, pageSize, m)
        }
    })
// alert(moments[`moment1`]["img"].substring(3))
    function onePage(totalSize, currentPage, pageSize, momentsString){
        let moments = JSON.parse(momentsString)
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
                        <div class="date-click">
                        <small>${moments[`moment${i}`]["date"]}</small>
                        <small>阅读量：${moments[`moment${i}`]["click"]}</small>
                        </div>
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
                        <div class="date-click">
                        <small>${moments[`moment${i}`]["date"]}</small>
                        <small>阅读量：${moments[`moment${i}`]["click"]}</small>
                        </div>
                    </div>
                    
                </div>
                <hr>
                `
            }
        }
        $("#moments").html(content)
    }

    $(".product div:nth-child(2) button").click(function () {
        $(".product div:nth-child(2) button").removeClass("btn-active")
        $(this).addClass("btn-active")
        if ($(this).hasClass("llj")) {
            jsonSize = 0
            for (var item in moments_llj) {
                jsonSize++
            }
            m = moments_llj_string
            onePage(jsonSize, 1, pageSize, moments_llj_string)
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
                    onePage(jsonSize, page, pageSize, m)
                }
            })
        } else if ($(this).hasClass("ywy")) {
            jsonSize = 0
            for (var item in moments_ywy) {
                jsonSize++
            }
            m = moments_ywy_string
            onePage(jsonSize, 1, pageSize, moments_ywy_string)
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
                    onePage(jsonSize, page, pageSize, m)
                }
            })
        } else if ($(this).hasClass("rlb")) {
            jsonSize = 0
            for (var item in moments_rlb) {
                jsonSize++
            }
            m = moments_rlb_string
            onePage(jsonSize, 1, pageSize, moments_rlb_string)
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
                    onePage(jsonSize, page, pageSize, m)
                }
            })
        }
    })

})