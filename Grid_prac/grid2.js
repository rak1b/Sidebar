$('document').ready(function(){
	$('.nav_toggle').click(function(){

		let side_width = $('.side_nav').width()
			$('.nav_toggle').toggleClass('rotate');

		if (side_width ==65 ){
			$('.side_nav').width(200);
			$('.nav_toggle').css({'left':'180px'});


		}

		else{
			$('.side_nav').width(65);
			$('.nav_toggle').css({'left':'55px'});


		}


	})


	

})