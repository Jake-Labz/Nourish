/**
 * JQuery Arrows
 * @author Jake Lawrence
 * 
 * animated map markers 
 */

$(document).ready(function(){
   $(".marker, #bee, #butterfly").mouseenter(function(){
   $(this).animate({top:"-5px"},"20");
   $(this).animate({top:"2px"},"20");
   $(this).animate({top:"-2px"},"20");
   $(this).animate({top:"0px"},"20");
 }); 

   $(".marker, #bee, #butterfly").mouseleave(function(){
   $(this).animate({top:"0px"},"20");
   $(this).stop(true, false).animate({top:"0px"},"20");
 }); 
});



$(document).ready(function(){
   $(".clickme").mouseenter(function(){
   $(this).fadeTo(400, 1.0);
 }); 

   $(".clickme").mouseleave(function(){
   $(this).fadeTo(400, 0.0);
 }); 
});


$(document).ready(function(){
   $(".icon_box").mouseenter(function(){
   $(this).animate({top:"-325px"},"30");
 }); 

   $(".icon_box").mouseleave(function(){
   $(this).animate({top:"0px"},"20");
   $(this).stop(true, false).animate({top:"0px"},"20");
 }); 
});

$(document).ready(function() {
    $('#office_m').click(function() {
    $('#office').fadeIn(300);
    return false;
  });
    $("#of_but, .close").click(function() {
    $("#office").fadeOut(300);
  });
});

$(document).ready(function() {
    $('#station_m').click(function() {
    $('#station').fadeIn(300);
  });
    $(".close, #tra_but").click(function() {
    $("#station").fadeOut(300);
  });
});

$(document).ready(function() {
    $('#school_m').click(function() {
    $('#school').fadeIn(300);
  });
    $(".close, #sch_but").click(function() {
    $("#school").fadeOut(300);
  });
});

$(document).ready(function() {
    $('#hospital_m').click(function() {
    $('#hospital').fadeIn(300);
  });
    $(".close, #hos_but").click(function() {
    $("#hospital").fadeOut(300);
  });
});

$(document).ready(function() {
    $('#gym_m').click(function() {
    $('#gym').fadeIn(300);
  });
    $(".close, #gym_but").click(function() {
    $("#gym").fadeOut(300);
  });
});


$(document).ready(function(){
  var opened = false;
  $("#arrow_box").click(function(){
    if(opened){
      $("#formbox").animate({"top": "+=268px"}, "slow");
      $('#arrow').rotateLeft(180);
    }else{
      $("#formbox").animate({"top": "-=268px"}, "slow");
      $('#arrow').rotateLeft(180);
    }
    $("#contact-area").slideToggle("slow");
    $("#arrow_box .close").toggle();
    opened = opened ? false : true;
  });
});