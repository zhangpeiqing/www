$(function(){
    //tab1
    $(".tab li").click(function(){
        $(this).addClass("on").siblings("li").removeClass("on");
        $(".tabb").eq($(this).index()).fadeIn().siblings(".tabb").hide();
    })
    $(".kecheng dt").click(function(){
        $(this).addClass("on").siblings("dt").removeClass("on");
        $(".kecheng_iner").eq($(this).index()).fadeIn().siblings(".kecheng_iner").hide();
    })
    $("#address").click(function(){
        $("html , body").animate({scrollTop:$("#xcyy").offset().top},600);
    })
})