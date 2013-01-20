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
   $(this).animate({top:"-340px"},"30");
 }); 

   $(".icon_box").mouseleave(function(){
   $(this).animate({top:"0px"},"20");
   $(this).stop(true, false).animate({top:"0px"},"20");
 }); 
});




