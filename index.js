$(document).ready(function(){
  $(".blur").hover(
    () => {
    $(".background-image").css({"filter":"blur(4px)"});
  }, ()=> {
    $(".background-image").css({"filter":"none"});
  });
});


