<?php if ( ! defined( 'ABSPATH' ) ) exit;

include 'temp-functions.php';

$loadWpHead = $data['pageOptions']['loadWpHead'];
$loadWpFooter = $data['pageOptions']['loadWpFooter'];
$pageSeoDescription = $data['pageOptions']['pageSeoDescription'];
$pageSeoKeywords = $data['pageOptions']['pageSeoKeywords'];
$pageSeoName = $data['pageOptions']['pageSeoName'];
$pageBgImage = $data['pageOptions']['pageBgImage'];
$pageBgColor = $data['pageOptions']['pageBgColor'];
$pagePadding = $data['pageOptions']['pagePadding'];
$pagePaddingTop = $pagePadding['pagePaddingTop'];
$pagePaddingBottom = $pagePadding['pagePaddingBottom'];
$pagePaddingLeft = $pagePadding['pagePaddingLeft'];
$pagePaddingRight = $pagePadding['pagePaddingRight'];

if (isset($data['pageOptions']['pageFavIconUrl'])) {
  $pageFavIconUrl = $data['pageOptions']['pageFavIconUrl'];
}


/*
$pagePaddingTop = floor( ($pagePaddingTop/1268)*100);
$pagePaddingBottom = floor( ($pagePaddingBottom/1268)*100);
$pagePaddingLeft = floor( ($pagePaddingLeft/1268)*100);
$pagePaddingRight = floor( ($pagePaddingRight/1268)*100);
*/

?>
<head>
<meta charset="UTF-8" />
<title><?php echo the_title(); ?></title>
<meta charset="UTF-8">
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="object" />
<meta property="og:title" content="<?php echo the_title(); ?>" />
<meta property="og:site_name" content="<?php bloginfo( 'name' ); ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta property="og:url" content="<?php $url = site_url(); echo $url; ?>">
<meta name="description" content="<?php echo $pageSeoDescription; ?>">
<meta name="keywords" content="<?php echo $pageSeoKeywords; ?>">

<?php 
if (isset($pageFavIconUrl)) {
  echo "<link rel='shortcut icon' href='$pageFavIconUrl' />";
}

?>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="https://use.fontawesome.com/076f5df986.js"></script>

<?php include 'style.css'; ?>

<link rel="stylesheet" type="text/css" href="<?php echo ULPB_PLUGIN_URL."/public/templates/animate.min.css"; ?>">
<?php
if ($loadWpHead === 'true') { wp_head(); }
    ?>

  <style type="text/css">
  <?php if (!empty($pageBgImage)) { ?>
    body{
		background:url("<?php echo $pageBgImage; ?>")no-repeat center center; background-size:cover;
    }
  <?php } ?>
  <?php if (!empty($pageBgColor)) { ?>
    body{
		background-color: <?php echo $pageBgColor; ?> ;
    }
  <?php } ?>
  body{
    padding: <?php echo "$pagePaddingTop"."% $pagePaddingRight"."% $pagePaddingBottom"."% $pagePaddingLeft"."% !important"; ?>;
  }
  </style>
  <script type="text/javascript">
  (function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
  })(jQuery);
</script>
  </head>
