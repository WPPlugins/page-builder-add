<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<?php 

$cfb = 'contact-form-add';
  $cfb_install_link =  esc_url( network_admin_url('plugin-install.php?tab=plugin-information&plugin=' . $cfb . '&TB_iframe=true&width=950&height=800' ) );

$tss = 'testimonial-add';
  $tss_install_link =  esc_url( network_admin_url('plugin-install.php?tab=plugin-information&plugin=' . $tss . '&TB_iframe=true&width=950&height=800' ) );

$lss = 'slider-slideshow';
  $lss_install_link =  esc_url( network_admin_url('plugin-install.php?tab=plugin-information&plugin=' . $lss . '&TB_iframe=true&width=950&height=800' ) );

$pss = 'posts-slider';
  $pss_install_link =  esc_url( network_admin_url('plugin-install.php?tab=plugin-information&plugin=' . $pss . '&TB_iframe=true&width=950&height=800' ) );

$ssm = 'mailchimp-subscribe-sm';
  $ssm_install_link =  esc_url( network_admin_url('plugin-install.php?tab=plugin-information&plugin=' . $ssm . '&TB_iframe=true&width=950&height=800' ) );

?>
<div class="lpp_modal_2 columnWidgetPopup">
  <div class="lpp_modal_wrapper">
  <div class="edit_form" style="width: 95% !important;">
    <div class="wdt-left">
      <div class="btn closeWidgetPopup"><span class="dashicons dashicons-yes closeWidgetPopupIcon"></span></div>
      <br>
      <br>
      <div class="pbp-widgets wdt-editor" style="display:none">
          <?php 
          $settings = array('media_buttons'=> true,'columnContent','tinymce' => true, 'editor_height' => 425);
          wp_editor(" ","columnContent",$settings); ?>
      </div>
      <div class="pbp-widgets wdt-img" style="display:none">
        <label>Upload Image :</label>
        <input id="image_location1" type="text" class=" ftr-img upload_image_button2"  name='lpp_add_img_1' value='' placeholder='Insert Image URL here' />
        <input id="image_location1" type="button" class="upload_bg" data-id="2" value="Upload" />
        <br>
        <br>
        <br>
        <br>
        <label>Select Size :</label>
        <select name="ftr-img-size" id="ftr-img-size">
          <option value="original">Original</option>
          <option value="large">Large</option>
          <option value="medium">Medium</option>
          <option value="small">Small</option>
        </select>
        <br>
        <br>
        <label>Select Alignment :</label>
        <select name="ftr-img-alignment" id="ftr-img-alignment">
          <option value="default">Default</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="center">Center</option>
        </select>
      </div>
      <div class="pbp-widgets wdt-menu" style="display:none">

        <label for="ftr-menu-style-1"> Style 1 <img src="<?php echo ULPB_PLUGIN_URL.'/images/menu/menu-style-1.png'; ?>" class='menu-select'> </label>
        <input type="radio" class="ftr-menu-style" id='ftr-menu-style-1' name="ftr-menu-select-style" value='menu-style-1'>
        <br>
        <br>
        <label for="ftr-menu-style-2"> Style 2 (Sticky) <img src="<?php echo ULPB_PLUGIN_URL.'/images/menu/menu-style-2.png'; ?>" class='menu-select'> </label>
        <input type="radio" class="ftr-menu-style" id='ftr-menu-style-2' name="ftr-menu-select-style" value='menu-style-2'>
        <br>
        <br>
        <br>
        <br>
        <label for="ftr-menu-style-4"> Style 3 <img src="<?php echo ULPB_PLUGIN_URL.'/images/menu/menu-style-4.png'; ?>" class='menu-select'> </label>
        <input type="radio" class="ftr-menu-style" id='ftr-menu-style-4' name="ftr-menu-select-style" value='menu-style-4'>
        <br>
        <br>
        <label for="ftr-menu-style-3"> Style 4 (Without Logo) <img src="<?php echo ULPB_PLUGIN_URL.'/images/menu/menu-style-3.png'; ?>" class='menu-select'> </label>
        <input type="radio" class="ftr-menu-style" id='ftr-menu-style-3' name="ftr-menu-select-style" value='menu-style-3'>
        <br>
        <br>
        <label>Select Menu :</label>
        <select name="ftr-menu-select" id="ftr-menu-select">
        <option value="Select">Choose</option>
          <?php
          $menus = get_terms( 'nav_menu', array( 'hide_empty' => true ) ); 
            foreach($menus as $menu){
              echo "<option value='$menu->name'>$menu->name</option>";
            }
           ?>
        </select>
        <br>
        <br>
        <label>Menu Text Color :</label>
        <input type="text" class="btn_color-picker ftr-menu-color" id="ftr-menu-color" value='#333333'>
        <br>
      </div>
      <div class="pbp-widgets wdt-smuzform" style="display:none">
        <?php

        if (is_plugin_active( 'contact-form-add/forms.php' )) {
            echo "active";

          $args = array(
          'posts_per_page'   => 99,
          'offset'           => 0,
          'orderby'          => 'date',
          'order'            => 'ASC',
          'post_type'        => 'smuzform',
          'post_status'      => 'publish',
        );
        
        $wppb_smuzforms = get_posts( $args );
        ?>
        <br>
        <br>
        <label for="select_smuz_form">Please select a form to display : </label>
        <select  id="select_smuz_form">
        <option value="Select">Select</option>
        <?php
        foreach ($wppb_smuzforms as $form) {
          $currentID = $form->ID;
          $title = get_the_title($currentID);
        ?>
        <option value="[sform  id='<?php echo $currentID ?>']" > <?php echo $title ?> </option>
        <?php
        } ?>
        </select>
        <?php } else{ echo "Please install the Form Builder Plugin : <a href='$cfb_install_link' target='_blank'>Install Now</a> "; }   ?>
      </div>
      <div class="pbp-widgets wdt-slider" style="display:none">
        <?php
        if (is_plugin_active('slider-slideshow/slider-slideshow.php')) {

          $args = array(
          'posts_per_page'   => 99,
          'offset'           => 0,
          'orderby'          => 'date',
          'order'            => 'ASC',
          'post_type'        => 'wprls_slider',
          'post_status'      => 'publish',
        );
        
        $wppb_smuz_slider = get_posts( $args );
        ?>
        <br>
        <br>
        <label for="select_smuz_slider">Please select a slider to display : </label>
        <select  id="select_smuz_slider">
        <option value="Select">Select</option>
        <?php
        foreach ($wppb_smuz_slider as $slider) {
          $currentID = $slider->ID;
          $title = get_the_title($currentID);
        ?>
        <option value="[rlslider id='<?php echo $currentID ?>']" > <?php echo $title ?> </option>
        <?php
        } ?>
        </select>

        <?php } else{ echo "Extension not found - Please install the Layer Slider Plugin for free : <a href='$lss_install_link' target='_blank'>Install Now</a> "; }   ?>
      </div>
      <div class="pbp-widgets wdt-sForm" style="display:none">
        <?php
        if (is_plugin_active('mailchimp-subscribe-sm/subcribe-me.php')) {

          $args = array(
          'posts_per_page'   => 99,
          'offset'           => 0,
          'orderby'          => 'date',
          'order'            => 'ASC',
          'post_type'        => 'subscribe_me_forms',
          'post_status'      => 'publish',
        );
        
        $wppb_subscribe_form = get_posts( $args );
        ?>
        <br>
        <br>
        <label for="select_subscribe_form">Please select a Subscribe form to display : </label>
        <select  id="select_subscribe_form">
        <option value="Select">Select</option>
        <?php
        foreach ($wppb_subscribe_form as $sForm) {
          $currentID = $sForm->ID;
          $title = get_the_title($currentID);
        ?>
        <option value="[ssm_form  id='<?php echo $currentID ?>']" > <?php echo $title ?> </option>
        <?php
        } ?>
        </select>

        <?php } else{ echo "Extension not found - Please install the Subscribe Form Plugin : <a href='$ssm_install_link' target='_blank'>Install Now</a> "; }   ?>
      </div>
      <div class="pbp-widgets wdt-postsSlider" style="display:none">
        <?php
        if (is_plugin_active('posts-slider/Posts-Slider.php')) {

          $args = array(
          'posts_per_page'   => 99,
          'offset'           => 0,
          'orderby'          => 'date',
          'order'            => 'ASC',
          'post_type'        => 'mpsp_slider',
          'post_status'      => 'publish',
        );
        
        $wppb_posts_slider = get_posts( $args );
        ?>
        <br>
        <br>
        <label for="select_posts_slider">Please select a posts slider to display : </label>
        <select  id="select_posts_slider">
        <option value="Select">Select</option>
        <?php
        foreach ($wppb_posts_slider as $postsSlider) {
          $currentID = $postsSlider->ID;
          $title = get_the_title($currentID);
        ?>
        <option value="[mpsp_posts_slider  id='<?php echo $currentID ?>']" > <?php echo $title ?> </option>
        <?php
        } ?>
        </select>

        <?php } else{ echo "Extension not found - Please install the Posts Slider Plugin : <a href='$pss_install_link' target='_blank'>Install Now</a> "; }   ?>
      </div>
      <div class="pbp-widgets wdt-testimonialSlider" style="display:none">
        <?php
        if (is_plugin_active('testimonial-add/Testimonials.php')) {

          $args = array(
          'posts_per_page'   => 99,
          'offset'           => 0,
          'orderby'          => 'date',
          'order'            => 'ASC',
          'post_type'        => 'tss_slider',
          'post_status'      => 'publish',
        );
        
        $wppb_testimonials_slider = get_posts( $args );
        ?>
        <br>
        <br>
        <label for="select_testimonials_slider">Please select a slider to display : </label>
        <select  id="select_testimonials_slider">
        <option value="Select">Select</option>
        <?php
        foreach ($wppb_testimonials_slider as $testimonialsSlider) {
          $currentID = $testimonialsSlider->ID;
          $title = get_the_title($currentID);
        ?>
        <option value="[tss_slider  id='<?php echo $currentID ?>']" > <?php echo $title ?> </option>
        <?php
        } ?>
        </select>

        <?php } else{ echo "Extension not found - Please install the Testimonial Slider Plugin : <a href='$tss_install_link' target='_blank'>Install Now</a> "; }   ?>
      </div>
      <div class="pbp-widgets wdt-socialFeed" style="display:none">
        <?php
        if (is_plugin_active('social-feed-premium/plugin.php')) {

          $args = array(
          'posts_per_page'   => 99,
          'offset'           => 0,
          'orderby'          => 'date',
          'order'            => 'ASC',
          'post_type'        => 'wssf_social_feed',
          'post_status'      => 'publish',
        );
        
        $wppb_social_feed = get_posts( $args );
        ?>
        <br>
        <br>
        <label for="select_socialFeed">Please select a slider to display : </label>
        <select  id="select_socialFeed">
        <option value="Select">Select</option>
        <?php
        foreach ($wppb_social_feed as $socialfeed) {
          $currentID = $socialfeed->ID;
          $title = get_the_title($currentID);
        ?>
        <option value="[socialfeed  id='<?php echo $currentID ?>']" > <?php echo $title ?> </option>
        <?php
        } ?>
        </select>

        <?php } else{ echo "Extension not found - Please install the Social Feed Plugin : <a href='http://web-settler.com/wordpress-facebook-feed/?ref=pluginops' target='_blank'>Install Now</a> "; }   ?>
      </div>
      <div class="pbp-widgets wdt-btn-gen" style="display:none; ">
        <h1 id="btn-gen" class="widgetHeader">Button Generator</h1>
        <div id="btn-gen" class="pbp_form">
          <label>Button Text :</label>
          <input type="text" class="btnText" style="width: 250px;" placeholder="Button Text">
          <br>
          <br>
          <label>Button Link :</label>
          <input type="URL" class="btnLink" placeholder="Link URL">
          <br>
          <br>
          <label>Set Height: </label>
          <input type="number" class="btnHeight">
          <br>
          <br>
          <label>Set width: </label>
          <input type="number" class="btnWidth">
          <br>
          <br>
          <label>Button Background Color :</label>
          <input type="text" class="btn_color-picker btnBgColor" id="btnBgColor" value='#333333'>
          <br>
          <label>Button Hover Color :</label>
          <input type="text" class="btn_color-picker btnHoverBgColor" id="btnHoverBgColor" data-alpha='true' value='#333333'>
          <br>
          <label>Button Text Color :</label>
          <input type="text" class="btn_color-picker btnColor" id="btnColor">
          <br>
          <label>Button Font size : </label>
          <input type="number" class="btnFontSize">
          <br>
          <br>
          <label>Border Width: </label>
          <input type="number" class="btnBorderWidth">
          <br>
          <br>
          <label>Border Color: </label>
          <input type="text" class="btn_color-picker btnBorderColor" id="btnBorderColor" value='#ffffff'>
          <br>
          <label>Border Radius: </label>
          <input type="number" class="btnBorderRadius" max="100" min="0">
          <br>
          <br>
          <label>Button Alignment :</label>
          <select class="btnButtonAlignment" id="btnButtonAlignment">
            <option value="default">Default</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="center">Center</option>
          </select>
        </div>
        <div class="btn-preview">
            <button id="btn-prev"></button>
        </div>
      </div>
      
      <div class="pbp-widgets wdt-pb-form pbp_form" style="display: none;">
          <?php include(ULPB_PLUGIN_PATH.'admin/views/UI/widgets/widget-form.php'); ?>
      </div>
      <div class="pbp-widgets wdt-video pbp_video pbp_form" style="display: none;">
        <br>
        <br>
        <label>Video (MP4) :</label>
        <input id="image_location7" type="text" class="videoMpfour upload_image_button7"  name='lpp_add_img_1' value='' placeholder='Insert Video URL here' style="width:40%;" />
        <input id="image_location7" type="button" class="upload_bg" data-id="7" value="Upload" />
        <br><br>
        <label>Video (WebM) :</label>
        <input id="image_location6" type="text" class="videoWebM upload_image_button6"  name='lpp_add_img_6' value='' placeholder='Insert Video URL here' style="width:40%;" />
        <input id="image_location6" type="button" class="upload_bg" data-id="6" value="Upload" />
        <br><br>
        <label>Video Thumbnail :</label>
        <input id="image_location8" type="text" class="videoThumb upload_image_button8"  name='lpp_add_img_1' value='' placeholder='Insert Image URL here' style="width:40%;" />
        <input id="image_location8" type="button" class="upload_bg" data-id="8" value="Upload" />
        <br><br><hr><br>
        <label>Auto Play</label>
        <select class="vidAutoPlay">
          <option value="no">No</option>
          <option value="autoplay">Yes</option>
        </select>
        <br><br><br>
        <label>Loop</label>
        <select class="vidLoop">
          <option value="no">No</option>
          <option value="loop">Yes</option>
        </select> 
        <br><br><br>
        <label>Video Controls</label>
        <select class="vidControls">
          <option value="controls">Yes</option>
          <option value="no">No</option>
        </select> 
      </div>
      <div class="pbp-widgets wdt-audio pbp_audio pbp_form" style="display: none;">
        <br>
        <br>
        <label>Audio (MP3) :</label>
        <input id="image_location4" type="text" class="audioMpThree upload_image_button4"  name='lpp_add_img_1' value='' placeholder='Insert Audio URL here' style="width:40%;" />
        <input id="image_location4" type="button" class="upload_bg" data-id="4" value="Upload" />
        <br><br>
        <label>Audio (OGG) :</label>
        <input id="image_location5" type="text" class="audioOgg upload_image_button5"  name='lpp_add_img_5' value='' placeholder='Insert Video URL here' style="width:40%;" />
        <input id="image_location5" type="button" class="upload_bg" data-id="5" value="Upload" />
        <br><br><hr><br>
        <label>Auto Play</label>
        <select class="audioAutoPlay">
          <option value="no">No</option>
          <option value="autoplay">Yes</option>
        </select>
        <br><br><br>
        <label>Loop</label>
        <select class="audioLoop">
          <option value="no">No</option>
          <option value="loop">Yes</option>
        </select> 
        <br><br><br>
        <label>Audio Controls</label>
        <select class="audioControls">
          <option value="controls">Yes</option>
          <option value="no">No</option>
        </select> 
      </div>
      <div class="pbp-widgets wdt-pbPostSlider pbp_form" style="display: none;">
        <?php include(ULPB_PLUGIN_PATH.'admin/views/UI/widgets/post-slider.php'); ?>
      </div>
      <div class="pbp-widgets wdt-icons pbp_form" style="display: none;">
        <?php include(ULPB_PLUGIN_PATH.'admin/views/UI/widgets/icons-widget.php'); ?>
      </div>
      <div class="pbp-widgets wdt-counter pbp_form" style="display: none;">
        <?php include(ULPB_PLUGIN_PATH.'admin/views/UI/widgets/counter-widget.php'); ?>
      </div>
      <div class="pbp-widgets wdt-shortcode pbp_form" style="display: none;">
          <h3 style="background: #333; color: #fff; padding:15px; width: 90%; ">ShortCode Widget</h3>
          <br>
          <label>Enter Shortcode :</label>
          <input type="text" class="shortCodeInput" id="shortCodeInput" style="width: 250px;">
          <br>
          <br>
          <br>
          <span style="font-size: 14px;"><i>Note :</i> Use onle one shortcode using multiple shortcodes in a single widget might cause errors. </span>
      </div>

    </div>
    <div class="wdt-right">
      <div class="wdt-fields pbp_form" style="margin:40px 0 0 75px;">
        <label>Background Color :</label>
        <input type="text" name="widgetBgColor" class="color-picker widgetBgColor" data-alpha='true' value='transparent' style="margin-left: -150px;">
        <br>
        <br>
        <label>Widget Animation :</label>
        <select class="widgetAnimation">
          <optgroup label="Attention Seekers">
            <option value="bounce">bounce</option>
            <option value="flash">flash</option>
            <option value="pulse">pulse</option>
            <option value="rubberBand">rubberBand</option>
            <option value="shake">shake</option>
            <option value="swing">swing</option>
            <option value="tada">tada</option>
            <option value="wobble">wobble</option>
            <option value="jello">jello</option>
          </optgroup>

          <optgroup label="Bouncing Entrances">
            <option value="bounceIn">bounceIn</option>
            <option value="bounceInDown">bounceInDown</option>
            <option value="bounceInLeft">bounceInLeft</option>
            <option value="bounceInRight">bounceInRight</option>
            <option value="bounceInUp">bounceInUp</option>
          </optgroup>

          <optgroup label="Fading Entrances">
            <option value="fadeIn">fadeIn</option>
            <option value="fadeInDown">fadeInDown</option>
            <option value="fadeInDownBig">fadeInDownBig</option>
            <option value="fadeInLeft">fadeInLeft</option>
            <option value="fadeInLeftBig">fadeInLeftBig</option>
            <option value="fadeInRight">fadeInRight</option>
            <option value="fadeInRightBig">fadeInRightBig</option>
            <option value="fadeInUp">fadeInUp</option>
            <option value="fadeInUpBig">fadeInUpBig</option>
          </optgroup>

          <optgroup label="Flippers">
            <option value="flip">flip</option>
            <option value="flipInX">flipInX</option>
            <option value="flipInY">flipInY</option>
          </optgroup>

          <optgroup label="Lightspeed">
            <option value="lightSpeedIn">lightSpeedIn</option>
          </optgroup>

          <optgroup label="Rotating Entrances">
            <option value="rotateIn">rotateIn</option>
            <option value="rotateInDownLeft">rotateInDownLeft</option>
            <option value="rotateInDownRight">rotateInDownRight</option>
            <option value="rotateInUpLeft">rotateInUpLeft</option>
            <option value="rotateInUpRight">rotateInUpRight</option>
          </optgroup>

          <optgroup label="Sliding Entrances">
            <option value="slideInUp">slideInUp</option>
            <option value="slideInDown">slideInDown</option>
            <option value="slideInLeft">slideInLeft</option>
            <option value="slideInRight">slideInRight</option>

          </optgroup>
          
          <optgroup label="Zoom Entrances">
            <option value="zoomIn">zoomIn</option>
            <option value="zoomInDown">zoomInDown</option>
            <option value="zoomInLeft">zoomInLeft</option>
            <option value="zoomInRight">zoomInRight</option>
            <option value="zoomInUp">zoomInUp</option>
          </optgroup>
          

          <optgroup label="Specials">
            <option value="rollIn">rollIn</option>
          </optgroup>
        </select>
        <br>
        <br>
        <label>Set Margin Top: </label>
        <input type="number" class="widgetMtop">
        <br>
        <br>
        <label>Set Margin Bottom: </label>
        <input type="number" class="widgetMbottom">
        <br>
        <br>
        <label>Set Margin Left: </label>
        <input type="number" class="widgetMleft">
        <br>
        <br>
        <label>Set Margin Right: </label>
        <input type="number" class="widgetMright">
        <br>
        <br>
        <span class="ulp-note">The unit is percentage so set values accordingly.</span>
        <label>Custom Styling (CSS) :</label>
        <br>
        <br>
        <textarea  style="min-width: 250px; min-height: 250px;" class="widgetStyling"></textarea>
      </div>
    </div>
    </div>
  </div>
</div>