$(document).ready(function(){

  function mainSlide(){
    var total = $(".panel li").length;
  total = total-1;
  //다음 버튼 클릭시
  $(".slider>.next").on("click",function(e){
    e.preventDefault();
    var i = $(".panel li.on").index();
    if(i==total){
      i=0;
    }else{
      i++;
    }
    showSlide(i);
  });

  //이전 버튼 클릭시
  $(".slider>.prev").on("click",function(e){
    e.preventDefault();
    var i = $(".panel li.on").index();
    if(i==0){
      i=total;
    }else{
      i--;
    }
    showSlide(i);
  });
  //navi
  $(".navi li").on("click",function(e){
      e.preventDefault();
      var i = $(this).index();
      showSlide(i);
  });
  //정의
  function showSlide(index){
    $(".navi li a").removeClass("on");
    $(".navi li").eq(index).children("a").addClass("on");

    $(".panel li").fadeOut().removeClass("on");
    $(".panel li").eq(index).fadeIn().addClass("on");
  }
  }
  mainSlide();
  

 //★여기가 문제 !!★

 function subbanner(){
    var $panel = $(".slide_box").children("div");
    var $itemlg = $panel.length;
    var $prev = $(".magazine > .prev");
    var $next = $(".magazine > .next");    
    var $navi_li = $('.navi2').children('li');
    var $a;
    var $index = 1;
    var left_value = $('.slide_box').children("div:first").css("margin-left");
    var prev_value = left_value.slice(1,5)+"px";
    var $current;
    var $current_index;

    timer();
    function timer(){      
          $a = setInterval(function(){start()},3000);          
        }

//스타트 함수        
    function start(){    
        if($index == $itemlg){
          $index=0;
        }
      $(".slide_box").stop().animate({"left":left_value},2000,function(){
        $(".slide_box").append("<div>"+$(".slide_box").children("div:first").html()+"</div>");
        $(".slide_box").children("div:first").remove();
        $(".slide_box").css({"left":0});
        $navi_li.children('a').removeClass('on');
        $navi_li.eq($index).children('a').addClass('on');
        $index = $index+1;
      });
    }    
    
//이전 버튼 클릭
    $prev.on('click',function(){     
      $current = $(".navi2").find('li a.on').parent();
      $current_index = $current.index();        
      if($index<=0){
        $current_index == $itemlg;
      }
      $current_index = $current_index-1;
      prevSlide($current_index);           
      $index = $current_index;
      console.log($index+"최종");    
    });

//다음 버튼 클릭
     $next.on('click',function(){       
      $current = $(".navi2").find('li a.on').parent();
      $current_index = $current.index();
      if($current_index >= $itemlg-1){
        $current_index=0;   
        nextSlide($current_index); 
      }else{ 
        $current_index = $current_index+1;
        nextSlide($current_index);        
      }
      $index = $current_index;
      console.log($index+"최종");
    });  
 
//네비게이션 버튼 클릭시 슬라이드 ★★★★★★★★★★★★★★★★★★★★★★★★★   
//선생님 ㅠㅁㅠ 여기 한장씩은 넘어가는데 여러장으로 넘기는게 안돼요.
     $navi_li.on('click',function(){     
       $current = $(".navi2").find('li a.on').parent();
       $current_index = $current.index();        
       if($(this).index() == $current_index){
         return false;
       }
       if($(this).index() < $current_index){        
         clearInterval($a);
         $current_index = $current_index-1;
         prevSlide($current_index);
       }else{
        clearInterval($a);        
        $current_index = $current_index+1;
        nextSlide($current_index);  
       }
      $index = $current_index;
      console.log($index+"최종");
     });

// 이전슬라이드로 돌아가는 기능    
     function prevSlide(index){
      $(".slide_box").stop().animate({"left":prev_value},1000,function(){
        $(".slide_box").prepend("<div>"+ $(".slide_box").children("div:last").html() +"</div>");
        $(this).children("div:last").remove();
        $(this).css("left",0);
        $navi_li.children('a').removeClass('on');
        $navi_li.eq(index).children('a').addClass('on');          
        $index = $index-1;
        console.log("index값은: "+$index);
        console.log("current값은: "+$current_index);
      });
    }

// 다음슬라이드로 넘어가는 기능  
    function nextSlide(index){
      $(".slide_box").stop().animate({"left":left_value},1000,function(){
        $(".slide_box").append("<div>"+ $(".slide_box").children("div:first").html() +"</div>");
        $(this).children("div:first").remove();
        $(this).css("left",0);
        $navi_li.children('a').removeClass('on');
        $navi_li.eq(index).children('a').addClass('on');        
        $index = $index+1;
        console.log("index값은: "+$index);
        console.log("current값은: "+$current_index);           
      });
    }

     //마우스
      $(".slide_box").mouseenter(()=> clearInterval($a) );
      $(".slide_box").mouseleave(() => timer() );
      $(".magazine>.prev").mouseenter(()=> clearInterval($a) );
      $(".magazine>.prev").mouseleave(() => timer() );
      $(".magazine>.next").mouseenter(()=> clearInterval($a) );
      $(".magazine>.next").mouseleave(() => timer() );
  }
    subbanner();
});