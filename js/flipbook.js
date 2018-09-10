$(document).ready(function(){
	let count = 0
	const screenSize = window.matchMedia("(orientation: portrait)");

	$(window).ready(function() {
		checkScreen(screenSize);
		screenSize.addListener(checkScreen);
		peel();
	});	

	function checkScreen(screenSize) {
		if (screenSize.matches) {
			$("#flipbook").turn({
				display: 'single',
			});
		} else {
			$("#flipbook").turn({ 
				display: 'double',
				autoCenter: false,
				turnCorners: 'tl,tr'
			});
		}
	}

	function peel() {
		$('#flipbook').turn('peel','tr');
	}

	$("#flipbook").bind("turning", function(event, page, view) {
		count = page
		$('#number').html(count);
		// if(count >= 2) {
		// 	if((count - 2) === 0) {
		// 		$('#number').html(1);
		// 	} else {
		// 		$('#number').html(count - 2);
		// 	}			
		// } 		
		if($(window).width() > 850) {		
			if (page == 2) {
				$("#flipbook").css("margin", "0 auto")
				$(".left").css({
					"border" : "solid rgba(0,0,0,.7)",
					"border-width" : "0 5px 5px 0"
				});
			} else if (page == 1) {
				$("#flipbook").css("margin-left", "-38vw")
				$(".left").css({
					"border" : "solid rgba(0,0,0,0)",
					"border-width" : "0 5px 5px 0"
				});
			} else if (page == 22) {
				$("#flipbook").css("margin-right", "-38vw");
				$(".right").css({
					"border" : "solid rgba(0,0,0,0)",
					"border-width" : "0 5px 5px 0"
				});
			} else if (page == 21) {
				$("#flipbook").css("margin", "0 auto")
				$(".right").css({
					"border" : "solid rgba(0,0,0,.7)",
					"border-width" : "0 5px 5px 0"
				});
			}
		} else if($(window).width() > 450 && $(window).width()  <= 850) {		
			if (page == 2) {
				$("#arrow_container").css("margin-left", "-2vw")
				$(".left").css({
					"border" : "solid rgba(0,0,0,.7)",
					"border-width" : "0 5px 5px 0"
				});
			} else if (page == 1) {
				$("#arrow_container").css("margin-left", "-50vw")
				$(".left").css({
					"border" : "solid rgba(0,0,0,0)",
					"border-width" : "0 5px 5px 0"
				});
			} else if (page == 22) {
				$("#arrow_container").css("margin-right", "-50vw");
				$(".right").css({
					"border" : "solid rgba(0,0,0,0)",
					"border-width" : "0 5px 5px 0"
				});
			} else if (page == 21) {
				$("#arrow_container").css("margin-right", "-2vw")
				$(".right").css({
					"border" : "solid rgba(0,0,0,.7)",
					"border-width" : "0 5px 5px 0"
				});
			}
		}
	})

	$('#flipbook').change(function(){
		alert("changed")
		$('#number').html(count);
	})

	window.onorientationchange = function() { 
		window.location.reload(); 
	};

	window.onresize = function(){ 
		if(window.width() > 900) {
			location.reload();
		}  
	}

	$(window).bind('keydown', function(e){
	    if (e.keyCode==37)
	        $('#flipbook').turn('previous');	        	    	
	    else if (e.keyCode==39)
	        $('#flipbook').turn('next');
	});

	$(".right").click(function(){
		$('#flipbook').turn('next');
	});
	$(".left").click(function(){
		$('#flipbook').turn('previous');
	});

	$(".phone_right").click(function(){
		$('#flipbook').turn('next');
	});
	$(".phone_left").click(function(){
		$('#flipbook').turn('previous');
	});
});