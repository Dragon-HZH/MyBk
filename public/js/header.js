$(function(){
    $.ajax({
        type: "get",
        url: "/header.html",
        // data: "data",
        // dataType: "dataType",
        success: function (result) {
            $(result).replaceAll("#header");  //替换header
            $(`<link rel="stylesheet" href="/header.css">`).appendTo('head');
            $(`<script src="/updow.js"></script>`).appendTo('body');
        }
    });
});