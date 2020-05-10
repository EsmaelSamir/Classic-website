$(function(){


	var myHeader = $(".header") 

	  myHeader.height($(window).height())
		$(window).resize(function(){


		myHeader.height($(window).height())


		});

	$("nav li").click(function(){

		$(this).addClass("active").siblings().removeClass('active')

	});
/************************** start trigger slider**************************************/
 $('.slider').bxSlider({

 });

/************************** end trigger slider**************************************/


	$("#ser").click(function(){

		$("html").animate({

			scrollTop:$("#service").offset().top

		},500);

	});
	/*************************** start slide by me ***********************************************/

		(function autoslide(){
			$(".slide .active").each(function(){

				if(!$(this).is(":last-child")){
					$(this).delay(2000).fadeOut(1000,function(){
						$(this).removeClass("active").next().addClass("active").fadeIn();
						autoslide();
					});
				}
				else
				{
					$(this).delay(2000).fadeOut(1000,function(){
						$(this).removeClass("active").siblings().eq(0).addClass("active").fadeIn();
						autoslide();
					});					
				}

			});



		}());

		

	/*************************** end slide by me ***********************************************/

	/*************************** start project ***********************************************/
	$(".our_projects ul li").click(function(){
		$('.all').fadeOut(500)

		$('.'+$(this).data("show")).each(function(){

			$(this).fadeIn(1000)
		});

		$(this).addClass("active").siblings().removeClass("active");
		

	})




	/*************************** end project ***********************************************/




});