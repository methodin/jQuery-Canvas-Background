(function( $ )
{
    var settings = {
        opacity: 0.1,
        uniform: true,
        baseColor: '#000',
        boundColor: '#757575',
        padding: [1,1],
        size: [1,1]
    };
    var ctx = null;
    var canvas = null;
    var wrapper = null;
    var methods = {
        // Initializes the context
        init: function(options) {
            if(typeof(options) != 'undefined') {
                $.extend(settings, options);
            }
            
            wrapper = jQuery(this).wrapInner('<div />').children();
            canvas = document.createElement("canvas");
            canvas.width = 100;
            canvas.height = 100;
            ctx = canvas.getContext("2d");
            
            // Get the RGB values
            var baseRGB = this.canvas('hexToRGB',settings.baseColor);
            var boundRGB = this.canvas('hexToRGB',settings.boundColor);
            var diffRGB = [];
            for(i=0;i<=2;i++) diffRGB[i] = boundRGB[i] - baseRGB[i];
            
            var x, y, r, g, b;
            for (x=0; x<canvas.width; x += settings.padding[0]) {
                for (y=0; y<canvas.height; y += settings.padding[1]) {
                    r = baseRGB[0] + Math.floor(Math.random() * diffRGB[0]);
                    g = settings.uniform ? r : baseRGB[1] + Math.floor(Math.random() * diffRGB[1]);
                    b = settings.uniform ? r : baseRGB[2] + Math.floor(Math.random() * diffRGB[2]);
                    ctx.fillStyle = "rgba("+r+","+g+","+b+","+settings.opacity+")";
                    ctx.fillRect(x, y, settings.size[0], settings.size[1]);
                }
            }            
            
            wrapper.css({
                'background-image': "url("+canvas.toDataURL("image/png")+")",
                width: '100%',
                height: '100%'
            });
            
            return this;
        },
        
        // Converts hex to an RGB array
        hexToRGB: function(hex) {
            if(hex.charAt(0) == "#") hex = hex.substring(1);
            if(hex.length == 3) hex = hex.replace(/(.{1})/g,"$1$1")
            return [
                parseInt(hex.substring(0,2),16),
                parseInt(hex.substring(2,4),16),
                parseInt(hex.substring(4,6),16)
            ];
        },
        
        // Notebook paper
        paper: function(options) {
            var default_options = {
                opacity: 0.1,
                uniform: false,
                baseColor: '#0ff',
                boundColor: '#0aa',
                padding: [1,10],
                size: [1,1]
            };
            if(typeof(options) != 'undefined')
            {
                default_options = $.extend(default_options ,options);
            }

            return this.canvas('init',default_options );            
        },
        
        // Graph paper
        graph: function(options) {
            var default_options = {
                opacity: 0.2,
                uniform: false,
                baseColor: '#000',
                boundColor: '#666',
                padding: [10,10],
                size: [1,1]
            };
            if(typeof(options) != 'undefined')
            {
                default_options = $.extend(default_options ,options);
            }

            return this.canvas('init',default_options );
        },
      
        // Color tiles
        tile: function(options) {
            var default_options = {
                opacity: 0.1,
                uniform: false,
                baseColor: '#000',
                boundColor: '#fff',
                padding: [10,10],
                size: [7,7]
            };
            if(typeof(options) != 'undefined')
            {
                default_options = $.extend(default_options ,options);
            }

            return this.canvas('init',default_options );
        }             
    };

    $.fn.canvas= function(method) {
        if ( methods[method] )
        {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        }
        else if ( typeof method === 'object' || ! method )
        {
            return methods.init.apply( this, arguments );
        }
        else
        {
            $.error( 'Method ' +  method + ' does not exist on jQuery.canvas' );
        }
    };
})( jQuery );