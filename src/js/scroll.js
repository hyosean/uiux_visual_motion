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