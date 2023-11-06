$(document).ready(function () {
    //화면이 준비되면 실행해라.
    // setIterval, animate, css, apeendTo, 
    //setInterval(function(){}, 3000)
    //$(태그).animate({}, speed, function(){})
    //$(태그).css(스타일, 스타일값)
    //$(옮길태그).apeendTo($(부모가될태그))
    // const aniw = $(".swiper-slide").height() //$(".swiper-slide").css("width");
    // setInterval(function(){
    //     $(".swiper-wrapper").animate({"marginTop" : -aniw }, 400, function(){
    //         $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
    //         $(".swiper-wrapper").css("marginTop", 0)
    //     })
    // }, 3000)
    let count = 0;

    setInterval(fadeani, 3000)
    
        function fadeani(){
        count++;
        count = count % 3;
        // $(".swiper-slide").removeClass("on")
        // $(".swiper-slide").eq(count).addClass("on")// swiper slide전부 on 뺴고 특정 놈한테만 on주기
        $(".swiper-slide").eq(count).addClass("on").siblings().removeClass("on") //swiperslide중에한놈 on주고 그외 형제들에게 on빼라
        }
})