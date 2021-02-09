$(document).ready(function(){

    var $panel = $('#banner .panel');
    var $next = $('#banner .next');
    var $prev = $('#banner .prev');
    var web = 1200;
    var tablet = 540;
    var speed = 500;
    var wid = 0 ;

    $(window).on('resize',function(){
        wid = parseInt($(window).width());

        if(wid >= web) {
            init_web();
        }
        if(wid >=tablet && wid <web-1) {
            init_tablet();
        }
        if(wid <tablet-1) {
            init_mobile();
        } 
    })

    $next.on('click',function(e){
        e.preventDefault();

        wid = parseInt($(window).width());

        if(wid >= web) {
            console.log('web');
            next_web();
        }
        if(wid >=tablet && wid <web-1) {
            console.log('tablet');
            next_tablet();
        }
        if(wid <tablet-1) {
            console.log('mobile');
            next_mobile();
        } 
    });

    $prev.on('click',function(e){
        e.preventDefault();

        wid = parseInt($(window).width());

        if(wid >= web) {
            console.log('web');
            prev_web();
        }
        if(wid >=tablet && wid <web-1) {
            console.log('tablet');
            prev_tablet();
        }
        if(wid <tablet-1) {
            console.log('mobile');
            prev_mobile();
        } 
    });


    //패널위치 초기화 함수
    function init_web(){
        $panel.css({'width':(25*6)+'%','margin-left':'-25%'});
    }
    function init_tablet(){
        $panel.css({'width':(33.333*6)+'%','margin-left':'-33.333%'});
    }
    function init_mobile(){
        $panel.css({'width':(50*6)+'%','margin-left':'-50%'});
    }

    //패널 다음이동 함수
    function next_web(){        
        $panel.stop().animate({'margin-left': '-50%'},speed,function(){
            $panel.children('li').first().appendTo($panel);
            $panel.css({'margin-left':'-25%'});
        });
    }
    function next_tablet(){   
        $panel.stop().animate({'margin-left': '-66.666%'},speed,function(){
            $panel.children('li').first().appendTo($panel);
            $panel.css({'margin-left':'-33.333%'});
        });
    }
    function next_mobile(){    
        $panel.stop().animate({'margin-left': '-100%'},speed,function(){
            $panel.children('li').first().appendTo($panel);
            $panel.css({'margin-left':'-50%'});
        });
    }

    //패널 이전이동 함수
    function prev_web(){        
        $panel.stop().animate({'margin-left': '0%'},speed,function(){
            $panel.children('li').last().prependTo($panel);
            $panel.css({'margin-left':'-25%'});
        });
    }
    function prev_tablet(){   
        $panel.stop().animate({'margin-left': '0%'},speed,function(){
            $panel.children('li').last().prependTo($panel);
            $panel.css({'margin-left':'-33.333%'});
        });
    }
    function prev_mobile(){    
        $panel.stop().animate({'margin-left': '0%'},speed,function(){
            $panel.children('li').last().prependTo($panel);
            $panel.css({'margin-left':'-50%'});
        });
    }



    
});
$(document).ready(function(){

    var $skip_a = $('#skip a'); 
    var skip_ht = $skip_a.height();
    var $gnbWrap = $('.gnb-wrap') ;
    var $gnbWrap_li = $gnbWrap.children('li') ;
    var $gnbWrap_li_a = $gnbWrap_li.children('a');

    /*mobile*/
    var $hideMenu_m =  $('.hideMenu_m');
    var $Gnb_hideMenu_m = $('.Gnb_hideMenu_m');

    var $hideMenuList_m = $('.hideMenuList_m');
    var $hideMenuSubList = $('.hideMenuSubList');
    var $hideMenuList_li_a = $('.hideMenuList_m>li>a');

    //skip navigation    
    $skip_a.on('focusin',function(){
        $(this).css({top : 0});
    });
    $skip_a.on('focusout',function(){
        $(this).css({top : -skip_ht});
    });

    //gnb
    $gnbWrap_li.on('mouseenter', openSub);
    $gnbWrap_li.on('mouseleave', closeSub);

    $gnbWrap_li_a.on('focusin', openSub);
    $gnbWrap_li_a.last().on('focusout', closeSub);


    //mobile gnb
    $hideMenu_m.on('click', function() {
       var has = $Gnb_hideMenu_m.removeClass('on');
        if(has) {
            $Gnb_hideMenu_m.removeClass('on');
            $(this).parent($Gnb_hideMenu_m).addClass('on');
        }else {
            $(this).parent($Gnb_hideMenu_m).removeClass('on');
        }

    });

    $hideMenuList_li_a.on('mouseenter', function() {
        $hideMenuSubList.removeClass('on');
        $(this).siblings($hideMenuSubList).addClass('on');
    });
    $hideMenuList_li_a.on('mouseleave', function() {
        
        var menuenter = $(this).siblings($hideMenuSubList).mouseenter();

        if(menuenter) {
            $(this).siblings($hideMenuSubList).addClass('on');
        } else {
            $(this).siblings($hideMenuSubList).removeClass('on');
        }
    });
    $hideMenuList_m.on('mouseleave', function() {
        $hideMenuSubList.removeClass('on');
    });


  function openSub() {
    $(this).children('a').addClass('on');
    $(this).find('ul').slideDown(300);
    }
  function closeSub() {
    $(this).children('a').removeClass('on');
    $(this).find('ul').slideUp(100);
    }
});
$(document).ready(function(){

    var pos = [];
    var $doc = $('html,body');
    var $boxs = $('.myScroll');
    var $btns = $('#mNav >li');
    var class_name = 'on';
    var speed = 1000;
    var ease = 'swing';

    setPos();
    $(window).on('resize',function() {
        setPos();
        activation();
    });


    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop() + 200 ;
        activation(scroll);
    });

    $btns.on('click',function(e){
        e.preventDefault();
        var target = $(this).children('a').attr('href');
        var targetPos = $(target).offset().top;
        moveScroll(targetPos);
        btnMotion();
    });

    function setPos(){
        pos = [];
        $boxs.each(function(index){
            pos.push($(this).offset().top);
        });
        pos.push($boxs.last().offset().top + $doc.height());
    }

    function activation(scroll){  
        $btns.removeClass(class_name);
        $boxs.removeClass(class_name);

        $boxs.each(function(index){  
           
            if(scroll>= pos[index] && scroll<pos[index+1]){
                $btns.eq(index).addClass(class_name);
                $boxs.eq(index).addClass(class_name);
            }
        });
    }

    function moveScroll(targetPos){
        $doc.stop().animate({'scrollTop':targetPos},speed, ease);
    }

    function btnMotion() {
        var hasClass = $(this).hasClass(class_name);

        if (hasClass) {
        $btns.removeClass(class_name);
        $(this).addClass(class_name);
        } else { 
        $(this).addClass(class_name);   
        }
    }
});
$(document).ready(function(){

	var $next = $('#right');
	var $prev = $('#left');
    var $frame = $('.section3-contents');
    var $child = $('.section3-panel');

    var isDone = true;
       

	$frame.children('li').last().prependTo($frame);

	$next.on('click',function(e){
          e.preventDefault();
		if(isDone){
			isDone = false;
			moveNext($frame, 500);		
		}	
			
	});	

	$prev.on('click',function(e){
          e.preventDefault();
		if(isDone){
			isDone = false;
			movePrev($frame, 500);
		}
		
	});
	

	function moveNext(selector,speed){
		selector.stop().animate({'margin-left':'-200%'},speed,function(){
               selector.children($child).first().appendTo(selector);
               selector.css({'margin-left':'-100%'});
               isDone = true;
		});
	}

	function movePrev(selector,speed){
		selector.stop().animate({'margin-left':'0%'},speed,function(){
               selector.children($child).last().prependTo(selector);
               selector.css({'margin-left':'-100%'});
               isDone = true;	
		});
	}


});


$(document).ready(function(){
    var $subHeader =  $('#subHeader');
    var $hideMenu =  $('.hideMenu');
    var $subGnb_hideMenu = $('.subGnb_hideMenu');
    var $hideMenuList = $('.hideMenuList');
    var $hideMenuSubList = $('.hideMenuSubList');
    var $hideMenuList_li_a = $('.hideMenuList>li>a');

    var gnbColor = $('.subGnbList>li>a').css('background-color');
    var ht_arr =[];
    var ht_max = 0;
    var notAnimated = true;

    $(window).scroll(function(){
        var subVisualH = $('.sub_visual').height();
        var scrollTop = $(window).scrollTop();
        
        if( scrollTop >= subVisualH ) {
            $subHeader.addClass('top');
        } else {
            $subHeader.removeClass('top');
        }
    });

    $('.subGnb').on('mouseenter', function() {
        if(notAnimated){
            notAnimated = false;
            $('.subGnb>li').each(function(i) {
                ht_arr.push($(this).children('ul').height());
                ht_max = Math.max(ht_max, ht_arr[i]);
            });
            $('.subGnb').prepend(
                $('<div class="bgGnb2">').css({
                    width : 3000 , height : ht_max , marginLeft : -1500 ,
                    position : 'absolute', top : 50 , left: '50%',
                    backgroundColor : gnbColor , borderTop : '1px solid #312b4f',
                    display : 'none'
                })
            );        
            $('.bgGnb2').stop().slideDown(300);
            $('.subGnbList').stop().slideDown(300); 
        }           
        
    });

    
    $('.subGnb').on('mouseleave', function() {
        $('.subGnbList').stop().slideUp(200);
        $('.bgGnb2').stop().slideUp(200, function() {
            $(this).remove();
            notAnimated = true;
        });   
       
    });
    

/*----------- tablet -------------*/
    $hideMenu.on('click', function() {
        $subGnb_hideMenu.toggleClass('on');
    });

    $hideMenuList_li_a.on('mouseenter', function() {
        $hideMenuSubList.removeClass('on');
        $(this).siblings($hideMenuSubList).addClass('on');
    });

    $hideMenuList_li_a.on('mouseleave', function() {
        
        var menuenter = $(this).siblings($hideMenuSubList).mouseenter();

        if(menuenter) {
            $(this).siblings($hideMenuSubList).addClass('on');
        } else {
            $(this).siblings($hideMenuSubList).removeClass('on');
        }
    });

    $hideMenuList.on('mouseleave', function() {
        $hideMenuSubList.removeClass('on');
    });


});
$(document).ready(function(){

    var $_panelOn = $('.section4-panel.on');
    var $_tabBtn = $('.tab-wrap >li>a');
    var $section = $('#section4');
    var target, $_panel ;

    $_panelOn.show();

    $_tabBtn.on('click',function(e){
        e.preventDefault();
        target = $(this).attr('href');  
        $_panel = $('.section4-panel');
    
        $_panel.hide();
        $(target).show();
    
        setTimeout(function(){
            $_panel.removeClass('on');
            $(target).addClass('on');
        },100);        
    
        $_tabBtn.parent('li').removeClass('on');
        $(this).parent('li').addClass('on');

        tabMotion();
    });

    function tabMotion() {
        var hasClass = $section.hasClass('on');
        if(hasClass) {
            $section.removeClass('on');    
            setTimeout(function() {
                $section.addClass('on'); 
            },100);
        } else {
            setTimeout(function() {
                $section.addClass('on'); 
            },100);
        }
    }

});


$(document).ready(function(){
   
});