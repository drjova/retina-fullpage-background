(function($){
    $.RetinaFullBackground = function(el,options){
        var base = this;
        base.$el = $(el);
        base.el = el;
        base.$el.data("RetinaFullBackground", base);
        base.init = function(){
            base.options = $.extend({},$.RetinaFullBackground.defaultOptions, options);
            // Check if paths are array or single
            base.path = base.options.path;
            base.filename = base.options.filename;
            $height = window.screen.height;
            // Check it is retina display
            if(window.devicePixelRatio >= 2) {
                var suffix;
                if($height > 960){ // iPhone 5
                    suffix = base.options.iphone5;
                }else if($height <= 960){ // iPhone 4/4s
                    suffix = base.options.iphone4;
                }
            }else{
                if($height <= 480){ // iPhone 3/3s
                    suffix = base.options.iphone3;
                }else{
                    suffix = false;
                }
            }
            if(typeof suffix  === "undefined"){
                if(base.options.fallback != ''){
                    suffix = base.option.fallback;
                }
            }
            if(suffix){
                var split = base.filename.split('.');
                var finalpath = base.path+'/'+split[0]+'-'+suffix+'.'+split[1];
            }else{
                var finalpath = base.path+'/'+base.filename;
            }
            if(base.el != '' && typeof base.el != undefined){
                base.$el.backstretch(finalpath);
            }else{
                $.backstretch(finalpath);
            }
            
            
        };
        base.init();
    };
    
    $.RetinaFullBackground.defaultOptions = {
        'iphone5' : '1136',
        'iphone4' : '960',
        'iphone'  : '480',
        'fallback': '',
        'path'    : null,
        'filename': null
    };
    
    $.fn.retinaFullBackground = function(paths, options){
        return this.each(function(){
            (new $.RetinaFullBackground(this, options));
        });
    };
    
})(jQuery);
