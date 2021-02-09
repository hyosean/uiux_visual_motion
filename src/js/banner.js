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