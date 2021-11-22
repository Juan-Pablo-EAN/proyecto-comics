$(function () {
    var $mybook = $('#mybook');
    var $bttn_next = $('#next_page_button');
    var $bttn_prev = $('#prev_page_button');
    var $loading = $('#loading');
    var $mybook_images = $mybook.find('img');
    var cnt_images = $mybook_images.length;
    var loaded = 0;

    $mybook_images.each(function () {
        var $img = $(this);
        var source = $img.attr('src');
        $('<img/>').load(function () {
            ++loaded;
            if (loaded == cnt_images) {
                $loading.hide();
                $bttn_next.show();
                $bttn_prev.show();
                if(window.screen.availWidth > 600){
                    $mybook.show().booklet({
                        name: null,                   
                        width: 900,      
                        height: 700,                        
                        speed: 700,                    
                        direction: 'LTR',    
                        next: $bttn_next,    
                        prev: $bttn_prev,          	
                    });
                } else {
                    $mybook.show().booklet({
                        name: null,                   
                        width: 1400,      
                        height: 1000,                        
                        speed: 700,                    
                        direction: 'LTR',    
                        next: $bttn_next,    
                        prev: $bttn_prev,          	
                    });
                }
                Cufon.refresh();
            }
        }).attr('src', source);
    });

});