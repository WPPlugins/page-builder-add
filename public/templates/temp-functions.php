<?php if ( ! defined( 'ABSPATH' ) ) exit;

function PShexToRGB($col, $amt) {
  
	    $usePound = false;
	  
	    if ($col[0] == "#") {
	        $col = substr($col,1);
	        $usePound = true;
	    }
	 
	    $num = intval($col,16);
	 
	    $r = ($num >> 16) + $amt;
	 
	    if ($r > 255) $r = 255;
	    else if  ($r < 0) $r = 0;
	 
	    $b = (($num >> 8) & 0x00FF) + $amt;
	 
	    if ($b > 255) $b = 255;
	    else if  ($b < 0) $b = 0;
	 
	    $g = ($num & 0x0000FF) + $amt;
	 
	    if ($g > 255) $g = 255;
	    else if ($g < 0) $g = 0;
	 	
	 	$rt = sprintf("#%02x%02x%02x", $r, $g, $b);
	  	return $rt;
}


?>