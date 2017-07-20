<?php if ( ! defined( 'ABSPATH' ) ) exit;

$data = get_post_meta( $post->ID, 'ULPB_DATA', true );

$current_pageID = $post->ID;


if (isset($data['pageOptions']['VariantB_ID'])) {
  $VariantB_ID = $data['pageOptions']['VariantB_ID'];
  
  if ($VariantB_ID !== 'none') {
    include 'AB/phpab.php';
    $FirstTest = new phpab('AbTestOne');
    if ($FirstTest->get_user_segment() == 'testVariantOne') {
      $data = get_post_meta( $VariantB_ID, 'ULPB_DATA', true );

      $current_pageID = $VariantB_ID;
    } else{
      $data = get_post_meta( $post->ID, 'ULPB_DATA', true );
    }
  }

}

$lp_thisPostType = get_post_type( $post->ID );
if ($lp_thisPostType == 'ulpb_post') {
  include 'counter.php';
}




if (!empty($data)) {
  include('header.php');
?>
<body>

  <?php
  $rows = $data['Rows'];

  foreach ($rows as $row) {
    $columns = $row['columns'];
    $rowHeight = $row['rowHeight'];
    $rowData = $row['rowData'];
    $rowMargins = $rowData['margin'];
    $rowPadding = $rowData['padding'];
    $rowBgColor = $rowData['bg_color'];
    $rowBgImg = $rowData['bg_img'];
    $currentRowcustomCss = $rowData['customStyling'];
    $currentRowcustomJS = $rowData['customJS'];

    $rowMarginTop = $rowMargins['rowMarginTop'];
    $rowMarginBottom = $rowMargins['rowMarginBottom'];
    $rowMarginLeft = $rowMargins['rowMarginLeft'];
    $rowMarginRight = $rowMargins['rowMarginRight'];

    $rowPaddingTop = $rowPadding['rowPaddingTop'];
    $rowPaddingBottom = $rowPadding['rowPaddingBottom'];
    $rowPaddingLeft = $rowPadding['rowPaddingLeft'];
    $rowPaddingRight = $rowPadding['rowPaddingRight'];


/*
    $rowMarginTop = floor( ($rowMarginTop/1268)*100);
    $rowMarginBottom = floor( ($rowMarginBottom/1268)*100);
    $rowMarginLeft = floor( ($rowMarginLeft/1268)*100);
    $rowMarginRight = floor( ($rowMarginRight/1268)*100);

    $rowPaddingTop = floor( ($rowPaddingTop/1268)*100);
    $rowPaddingBottom = floor( ($rowPaddingBottom/1268)*100);
    $rowPaddingLeft = floor( ($rowPaddingLeft/1268)*100);
    $rowPaddingRight = floor( ($rowPaddingRight/1268)*100);
*/

    $rowMarginStyle = "margin:$rowMarginTop"."% $rowMarginRight"."% $rowMarginBottom"."% $rowMarginLeft"."%;";

    $rowPaddingStyle = "padding:$rowPaddingTop"."% $rowPaddingRight"."% $rowPaddingBottom"."% $rowPaddingLeft"."%;";

    $currentRowStyles = "min-height:$rowHeight"."px; background:url('$rowBgImg')no-repeat center center; background-size:cover; background-color:$rowBgColor ; $rowPaddingStyle  $rowMarginStyle";
    //echo($row['rowID']."<br>");
    include_once 'column-width-resize.php';

    ?>

    <style type="text/css">
    <?php echo '#'.$row["rowID"].' { '; ?>
    <?php echo $currentRowcustomCss.' } '; ?>
    </style>
    <script type="text/javascript">
      <?php echo $currentRowcustomJS; ?>
    </script>
    <div class='row w3-row' data-row_id='<?php echo $row["rowID"]; ?>' id='<?php echo $row["rowID"]; ?>' style="<?php echo $currentRowStyles; ?>">

      <?php
      if (isset($rowData['video'])) {
        $rowVideo = $rowData['video'];
        $rowBgVideoEnable = $rowVideo['rowBgVideoEnable'];
        if ($rowBgVideoEnable == 'true') {
          $rowBgVideoLoop = $rowVideo['rowBgVideoLoop'];
          $rowVideoMpfour = $rowVideo['rowVideoMpfour'];
          $rowVideoWebM = $rowVideo['rowVideoWebM'];
          $rowVideoThumb = $rowVideo['rowVideoThumb'];
          ?>
          <video poster="<?php echo $rowVideoThumb; ?>" id="bgVid-<?php echo $row["rowID"]; ?>" playsinline autoplay muted <?php echo $rowBgVideoLoop; ?> >
            <source src="<?php echo $rowVideoWebM; ?>" type="video/webm">
            <source src="<?php echo $rowVideoMpfour; ?>" type="video/mp4">
            </video>
            <style type="text/css">
            #bgVid-<?php echo $row["rowID"]; ?> { 
              position: absolute;
              min-width: 100%;
              min-height: 100%;
              width: auto;
              height: auto;
              z-index: -100;
              background: url('<?php echo $rowVideoThumb; ?>') no-repeat;
              background-size: cover;
              transition: 1s opacity;
          }
          </style>

          <?php
        }
        
      }
      ?>
      
    <?php include('columns.php'); ?>

    </div>
    <?php 
  } // ForEach loop ends here
  ?>

  <?php
      if ($loadWpFooter === 'true') { wp_footer(); }
    ?>

</body>
<?php
} else{
  echo "Please add some content in your page.";
}

?>