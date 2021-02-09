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