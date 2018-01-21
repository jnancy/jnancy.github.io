var options = {
  strings: ["Computer Engineering Student.", "Avid Learner.", "Art Enthusiast."],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true
}

var typed = new Typed(".element", options);

$(document).ready(function(){

$("#skillbar_php").animate({width:'85%'},1500);
$("#skillbar_asp").animate({width:'55%'},1500);
$("#skillbar_jsp").animate({width:'75%'},1500);

});
