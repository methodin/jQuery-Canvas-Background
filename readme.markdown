Canvas Background for jQuery
======================================================================

# Introduction

Generate dynamic backgrounds without images using HTML5 Canvas

# Requirements

 * jQuery
 * HTML5 Canvas Support

# Dependencies

jQuery 1.4+ - http://jquery.com/

# Usage

Here is a complete example

	$(document).ready(function(){
	    $('#test').canvas();
	    $('#test2').canvas('paper',{opacity:0.3});
	    $('#test3').canvas('graph',{opacity:0.3});
	    $('#test4').canvas('tile');
	});

# Options

## opacity (default = 0.1)

The opacity of the background

## uniform (default = true)

If set to true the image will be grayscale

## baseColor (default = '#000')

Set the base color in the range

## boundColor (default = '#757575')

Set the bounding color in the range

## padding (default = [1,1])

The padding in between the items in the background (e.g. spacing) [x, y]

## size (default = [1,1])

The size of the items in the background [width, height]
        
# default

The default mode is noise

# paper

Displays lines like a notebook in blue

# graph 

Displays a graph-paper like background

# tile

Color tiles

# NOTE:

All variations accept an optional options parameter that can override any defaults.