$(function(){
    $.ajax({
        type: "get",
        url: "/header.html",
        // data: "data",
        // dataType: "dataType",
        success: function (result) {
            $(result).replaceAll("#header");  //替换header
            $(`<link rel="stylesheet" href="css/header.css">`).appendTo('head');
            $(`<script src="js/updow.js"></script>`).appendTo('body');
        }
    });
});