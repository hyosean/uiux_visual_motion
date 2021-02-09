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