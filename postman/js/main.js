$(document).ready(function(){

    $('div.pm-icon-triangle').click(function() { 
        $(this).toggleClass("pm-icon-triangle--open");
        $(this).siblings('.pm-icon-folder').toggleClass("pm-icon-folder--open");
        $(this).parent().parent().siblings('.accordian-content').toggleClass("show");
    });
});