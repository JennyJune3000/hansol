$("document").ready(function(){
	//메뉴호버

	function menu(){
		var $menu = $(".lnb_main li");
		$menu.hover(function(){
			$(this).find(".lnb_sub").stop().slideToggle(300);
		});

		$(".lnb_sub li").hover(function(){
			var $node = $(".lnb_sub li").index(this);
			$(".lnb_sub li").css({"font-weight":"normal"}); // 호버 안되는 li css
			$(".lnb_sub li:first-child").css({"font-weight":"bold"});
			$(".lnb_sub li:eq("+$node+")").css({"font-weight":"bold"}); //this의 li css
		});


		 $(".spot li").click(function(){

	       var $c = $(this).attr("class");
	       var $gourl;
	       switch($c) {
	       case "tohome":
	       $gourl = "http://acehs91.dothome.co.kr/project";
	       break;

	       case "toregi":
	       $gourl = "http://acehs91.dothome.co.kr/project/register.html";
	       break;

	       default:
	       $gourl = "http://acehs91.dothome.co.kr/project";
	       break;
	       }
	       location.href=$gourl;

		 });
	}
	menu();




	 function mainbanner(){
		 var $panel = $(".bannerview ol").find("li");
			var $itemlg = $panel.children().length;
			var $a;

			timer();
			function timer(){
				$a = setInterval(function(){start()},4000);
			}

			function start(){

				$(".bannerol").stop().animate({"left":-1005+"px"},1000,function(){
				$(".bannerol").append("<li>"+$(".bannerol").find("li:first").html()+"</li>");
				$(".bannerol").find("li:first").remove();
				$(".bannerol").css({"left":0});
			});
			}

		    $("#prev").click(function(){

		        $(".bannerol").css("left",-1005+"px");
		        $(".bannerol").prepend("<li>"+ $(".bannerol").find("li:last").html() +"</li>");
		        $(".bannerol").animate({"left":"0px"},1000,function(){
		           $(this).find("li:last").remove();
		        });
		     });

		     $("#next").click(function(){

		        $(".bannerol").append("<li>"+ $(".bannerol").find("li:first").html() +"</li>");
		        $(".bannerol").animate({"left":-1005+"px"},1000,function(){
		           $(this).find("li:first").remove();
		           $(this).css("left",0);
		        });
		     });

		     $(".bannerview").mouseenter(function(){
		        clearInterval($a);
		     });

		     $(".bannerview").mouseleave(function(){
		        timer();
		     });
		     $("#prev").mouseenter(function(){
		        clearInterval($a);
		     });

		     $("#prev").mouseleave(function(){
		        timer();
		     });
		     $("#next").mouseenter(function(){
		        clearInterval($a);
		     });

		     $("#next").mouseleave(function(){
		        timer();
		     });
	 }
	 mainbanner();


});
