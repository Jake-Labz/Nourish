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



