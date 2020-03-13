$(document).ready(function(){
  $(".dropdown").hover(
    () => {
    $(".background-image").css({"filter":"blur(4px)"});
  }, ()=> {
    $(".background-image").css({"filter":"none"});
  });
});


