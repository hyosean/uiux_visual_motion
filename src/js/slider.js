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

