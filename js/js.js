$(document).ready(function() {  
	$('a.link').click(function () {  
		$('#overwrap').scrollTo($(this).attr('href'), 800);
		setPosition($(this).attr('href'), '#cloud1', '0px', '800px', '1600px', '2400px')
		setPosition($(this).attr('href'), '#cloud2', '0px', '400px', '800px', '1600px')
		setPosition($(this).attr('href'), '#sun_1', '0px', '40px', '80px', '120px')
		$('a.link').removeClass('selected');  
		$(this).addClass('selected');
		return false;  
	});
});

function setPosition(check, div, p1, p2, p3, p4) {
	if(check==='#home')
		{
			$(div).scrollTo(p1, 800);
		}
	else if(check==='#about')
		{
			$(div).scrollTo(p2, 800);
		}
	else if(check==='#locations')
		{
			$(div).scrollTo(p3, 800);
		}
	else
		{
			$(div).scrollTo(p4, 800);
		}
};

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

$(document).ready(function() {
    $("#ok, #retry").click(function() {
    $("#sent, #error").fadeOut(300);
    $("form")[0].reset();
  });
});



$(document).ready(function(){
  var opened = false;
  $("#arrow_box").click(function(){
    if(opened){
      $("#formbox").animate({"top": "+=275px"}, "slow");
      $('#arrow').rotateLeft(180);
    }else{
      $("#formbox").animate({"top": "-=275px"}, "slow");
      $('#arrow').rotateLeft(180);
    }
    $("#contact-area").slideToggle("slow");
    $("#arrow_box .close").toggle();
    opened = opened ? false : true;
  });
});

$(document).on('submit','form.inline',function(e){
	var form = $(this);
	$.ajax({
		type: form.attr('method').toUpperCase(),
		url: form.attr('action'),
		data: form.serialize(),
		complete: function(jqXHR, status){
			$('#' + jqXHR.responseText).fadeIn(300);
		}
	});
	e.preventDefault();

});