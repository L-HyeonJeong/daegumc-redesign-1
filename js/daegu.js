$("document").ready(function(){

    var swiper = new Swiper(".main .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        pagination: {
            el: ".main .swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },
    });


    var swiper = new Swiper(".photo .mySwiper", {
        slidesPerView: 3,
        spaceBetween: 100,
        centeredSlides: true,
        pagination: {
            el: ".photo .swiper-pagination",
            clickable: true,
        },
        loop: true,
        slidesPerView: "auto",
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
    });


    $(".top-btn .btn-wrap").click(function(){
        $("html, body").stop().animate({
            scrollTop: 0
        },0)
    })





    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        let current = (pos / ($(document).outerHeight() - $(window).height())) * 100;
        // outerHeight - 보더를 포함한 세로 길이값
        // $(window).height() - 현재 전체 세로길이값


        if (pos >= 150) {
            $(".header").addClass("on")
            
        } else {
            $(".header").removeClass("on")
        }
    }) 






            //offset().top  어떤 요소의 위치값
//scrollTop()  윈도우의 스크롤 양
$(function(){
    let executed = false;
//윈도우에 스크롤이 생기면 할일
$(window).scroll(function(){
//section2가 화면에서 떨어진 거리 
let dis2 = $(".num").offset().top - 900;

if(!executed ) {  //executed ==false
// console.log(dis2);
//만약에 스크롤양 $(window).scrollTop() 이 dis2보다 크면 data-rate 의 숫자만큼 올려라.
if($(window).scrollTop() >= dis2){
let progressRate = $(".count1").attr("data-rate");
//animate progress 사용자 속성 값 0~50 percent
/*
$(".요소").animate({속성:값,속성:값})
$(".요소").animate({width:100%,height:100%},1500,easing,다른할일);
$(".요소").animate({width:100%,height:100%},{
    duration:1500,
    easing:ease-out,
    complete:function(){..끝나고 해야할일},
    progress:function(){..진행중에 해야할일}
    
});
*/
$({percent:99}).animate({percent:progressRate},{
    duration:1500,
    progress:function(){
        //0~50으로 바뀌는 과정을 보이게 할것임.
        let now = this.percent;
        $(".count1").text(Math.ceil(now));
    }
});
executed = true;
}//if
}//excuted if
});
});//ready

$(function(){
    let executed = false;

$(window).scroll(function(){

let dis2 = $(".num").offset().top - 900;

if(!executed ) {
if($(window).scrollTop() >= dis2){
let progressRate = $(".count2").attr("data-rate");

$({percent:99}).animate({percent:progressRate},{
    duration:1500,
    progress:function(){

        let now = this.percent;
        $(".count2").text(Math.ceil(now));
    }
});
executed = true;
}
}
});
});
    




    AOS.init();
            new WOW({
                animateClass: "animate__animated"
            }).init();
    







})