$(document).ready(function () {
    $('.main-menu li').on('click',function(){
        if(this) {
           $(this).addClass("active");
           $('.main-menu li').not($(this)).removeClass("active")
        }
    });
});