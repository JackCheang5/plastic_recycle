$(document).ready(function(){
  $(".blur").hover(
    () => {
    $("#main-content").css({"filter":"blur(4px)"});
  }, ()=> {
    $("#main-content").css({"filter":"none"});
  });
});

var mySwiper = new Swiper ( ".swiper-container", {
  // 參數設定[註1]
  direction: "horizontal", // 方向
  loop: true,  // 無限循環
  navigation: {
    nextEl: ".swiper-button-next", // 上一頁按鈕物件
    prevEl: ".swiper-button-prev", // 下一頁按鈕物件
  },
  scrollbar: {
    el: ".swiper-scrollbar", // 滾輪物件
  }
})