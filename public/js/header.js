$(function(){
    $.ajax({
        type: "get",
        url: "/header.html",
        // data: "data",
        // dataType: "dataType",
        success: function (result) {
            $(result).replaceAll("#header");
            $(`<link rel="stylesheet" href="/header.css">`).appendTo('head');
        }
    });
});