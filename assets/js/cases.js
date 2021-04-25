$(document).ready(function () {
    let content = ""
    for(let i = 0; i < 15; i++) {
        content += 
        `
            <a href=""><img src="assets/images/9.jpg"></a>
        `
    }
    $(".photos").html(content)
})