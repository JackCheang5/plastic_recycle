$(document).ready(function(){
  $(".blur").hover(
    () => {
    $("#main-content").css({"filter":"blur(4px)"});
  }, ()=> {
    $("#main-content").css({"filter":"none"});
  });
});


