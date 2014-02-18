        function doResize() {
        var winhight = $.mobile.getScreenHeight();
        var headhight = $('[data-role="header"]').first().outerHeight();
        var foothight = $('[data-role="footer"]').first().outerHeight();
        var $content=$('[data-role="content"]');
        newhight = winhight - headhight - foothight; 
        $content.css('min-height',newhight + 'px');
        }
        $(document).bind('pageshow',doResize);
        $(window).bind('resize orientationchange',doResize);
