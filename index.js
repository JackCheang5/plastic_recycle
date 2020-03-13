$(document).ready(function(){
  $(".dropdown").hover(
    () => {
    $(".overlay:before").attr("filter","blur(4px)");
  }, ()=> {
    $(".overlay:before").attr("filter","none");
  });
});

// git branch merge learning
