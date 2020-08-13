jQuery(function($) {
  //   $(window).on('scroll', function() {
	// 	if ($(this).scrollTop() >= 200) {
	// 		$('.navbar').addClass('fixed-top');
	// 	} else if ($(this).scrollTop() == 0) {
	// 		$('.navbar').removeClass('fixed-top');
	// 	}
	// });


	function adjustNav() {
		var winWidth = $(window).width(),
			dropdown = $('.dropdown'),
			dropdownMenu = $('.dropdown-menu');

		if (winWidth >= 768) {
			dropdown.on('mouseenter', function() {
				$(this).addClass('show')
					.children(dropdownMenu).addClass('show');
			});

			dropdown.on('mouseleave', function() {
				$(this).removeClass('show')
					.children(dropdownMenu).removeClass('show');
			});

			$('.w3-center').css("float","left");
			$('.w3-center').css("padding-top","0.8em");
			$('.w3-center').css("padding-right","0.5em");
			$('#videosection').css("padding-left","10em");
			$('#videosection').css("padding-right","10em");
			$('#videosection').css("padding-top","2em");
			$('#videosection').css("padding-bottom","2em");
			$('.mobile').css("font-size","1em");
			$('.latestupdate').css("margin-left","12em");
			$('.innerlatestupdate').css("width","40em");
			$('.innerlatestupdate').css("height","25em");
			$('#testimonials').css("padding","2.5em");
			$('.xtimg').css("width","560px");
			$('.xtimg').css("height","560px");
			$('.footso').css("width","400px");
			$('.footcont').css("width","500px");
			$('.footcont').css("margin-left","150px");
			
		} else {
			dropdown.off('mouseenter mouseleave');
			$('.w3-center').css("float","initial");
			$('.w3-center').css("padding-top","initial");
			$('.w3-center').css("padding-right","initial");
			$('#videosection').css("padding-left","initial");
			$('#videosection').css("padding-right","initial");
			$('#videosection').css("padding-top","initial");
			$('#videosection').css("padding-bottom","initial");
			$('.mobile').css("font-size","0.6em");
			$('.latestupdate').css("margin-left","1em");
			$('.innerlatestupdate').css("width","22em");
			$('.innerlatestupdate').css("height","15em");
			$('#testimonials').css("padding","1em");
			$('.xtimg').css("width","100%");
			$('.xtimg').css("height","360px");
			$('.footcont').css("margin-left","0px");
			$('.footcont').css("font-size","15px");


		}
	}

  function pop() {
    $('#confor').click(function() {
      $('#ffform').fadeToggle();


    })

  }

	$(window).on('resize', adjustNav);

	adjustNav();
});
