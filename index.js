$(document).ready(function(){
  $("li").hover(
    () => {
    $(".background-image").css({"filter":"blur(4px)"});
  }, ()=> {
    $(".background-image").css({"filter":"none"});
  });
});


