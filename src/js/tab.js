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

