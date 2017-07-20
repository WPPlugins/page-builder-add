<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<div class="lpp_modal edit_column">
  <div class="lpp_modal_wrapper">
    <div class="edit_options_left">
      <h1 class="banner-h1">Column Options</h1>
      <label>Background Color :</label>
      <input type="text" name="columnBgColor" class="color-picker columnBgColor" id="columnBgColor" data-alpha='true' value='#ffffff'>
      <br>
      <br>
      <label>Column Width :</label>
      <input type="number" name="columnWidth" class="columnWidth" id="columnWidth" value='0'>
      <br>
      <span style="font-size: 12px;">(In percentage)</span>
      <br>
      <br>
      <div id="accordion">
      <h4>Margin</h4>
      <div style="height: 188px;">
      <br>
      <br>
      <label>Margin Top :</label>   
      <input type="number" name="columnMarginTop" class="columnMarginTop" id="columnMarginTop" value='0'>
      <br>
      <br>
      <label>Margin Bottom :</label>   
      <input type="number" name="columnMarginBottom" class="columnMarginBottom" id="columnMarginBottom" value='0'>
      <br>
      <br>
      <label>Margin Left :</label>   
      <input type="number" name="columnMarginLeft" class="columnMarginLeft" id="columnMarginLeft" value='0'>
      <br>
      <br>
      <label>Margin Right :</label>   
      <input type="number" name="columnMarginRight" class="columnMarginRight" id="columnMarginRight" value='0'>
      <br>
      <br>
      <span class="ulp-note">The unit is percentage so set values accordingly.</span>
      </div>
      <h4>Padding</h4>
      <div style="height: 188px;">
      <label>Padding Top :</label>
      <input type="number" name="columnPaddingTop" class="columnPaddingTop" id="columnPaddingTop" value='0'>
      <br>
      <br>
      <label>Padding Bottom :</label>
      <input type="number" name="columnPaddingBottom" class="columnPaddingBottom" id="columnPaddingBottom" value='0'>
      <br>
      <br>
      <label>Padding Left :</label>
      <input type="number" name="columnPaddingLeft" class="columnPaddingLeft" id="columnPaddingLeft" value='0'>
      <br>
      <br>
      <label>Padding Right :</label>
      <input type="number" name="columnPaddingRight" class="columnPaddingRight" id="columnPaddingRight" value='0'>
      <br>
      <br>
      <br>
      <span class="ulp-note">The unit is percentage so set values accordingly.</span>
      </div>
      </div>
    </div>
    <div class="edit_form">
      <div class="btn add-widgets"> <span class="dashicons dashicons-plus"></span> Add Widget Area</div>
      <div class="wdt-dr"></div>
      <ul id="widgets">
        <script type="text/template" id="widget-template"></script>
      </ul>
    </div>
    <div class="edit_column_widgets">
      <h1 class="banner-h1" style="margin-bottom: 0 !important;">Widgets</h1>
      <div class="tabs">
        <ul class="tab-links">
          <li class="active"><a href="#tabFreeWidgets" class="tab_link">Widgets</a></li>
          <li><a href="#tabPremiumWidgets" class="tab_link">Extensions</a></li>
        </ul>
        <div class="tab-content" style="padding:10px 0px 15px 15px">
          <div id="tabFreeWidgets" class="tab active">
            <div style="display: inline-block; width: 49%; float: left;">
              <div class="widget wdt-draggable" data-type="wigt-WYSIWYG"><i class="fa fa-file-text-o"></i> <br> Text Editor</div>
              <div class="widget wdt-draggable" data-type="wigt-img"><i class="fa fa-picture-o"></i> <br> Image</div>
              <div class="widget wdt-draggable" data-type="wigt-menu"><i class="fa fa-navicon"></i> <br> Menu</div>
              <div class="widget wdt-draggable" data-type="wigt-video"> <i class="fa fa-video-camera"></i> <br>  Video</div>
              <div class="widget wdt-draggable" data-type="wigt-btn-gen"><i class="fa fa-mouse-pointer"></i> <br> Button</div>
              <div class="widget wdt-draggable" data-type="wigt-pb-audio"> <i class="fa fa-file-audio-o"></i> <br>  Audio</div>
              <div class="widget wdt-draggable" data-type="wigt-pb-shortcode"> <i class="fa fa-code"></i> <br> ShortCode</div>
              <div class="widget wdt-pro" data-type="wigt-pb-cards"><i class="fa fa-quote-left"></i> <br> Testimonial <p><a href="http://pluginops.com/page-builder/?ref=widgets" target="_blank">(Unlock)</a></p></div>
            </div>
            <div style="display: inline-block; width: 49%;">
              <div class="widget wdt-pro" data-type="wigt-pb-counter"> <i class="fa fa-sort-numeric-desc"></i> <br> Counter  <p><a href="http://pluginops.com/page-builder/?ref=widgets" target="_blank">(Unlock)</a></p></div>
              <div class="widget wdt-pro" data-type="wigt-pb-form"> <i class="fa fa-envelope-o"></i> <br> Subscribe Form <p><a href="http://pluginops.com/page-builder/?ref=widgets" target="_blank">(Unlock)</a></p></div>
              <div class="widget wdt-pro" data-type="wigt-pb-postSlider"><i class="fa fa-file-image-o"></i> <br> Posts Slider <p><a href="http://pluginops.com/page-builder/?ref=widgets" target="_blank">(Unlock)</a></p></div>
              <div class="widget wdt-pro" data-type="wigt-pb-icons"><i class="fa fa-fonticons"></i> <br> Icons <p><a href="http://pluginops.com/page-builder/?ref=widgets" target="_blank">(Unlock)</a></p></div>
              <div class="widget wdt-pro" data-type="wigt-pb-cards"><i class="fa fa-fonticons"></i> <br> Card <p><a href="http://pluginops.com/page-builder/?ref=widgets" target="_blank">(Unlock)</a></p></div>
            </div>
          </div>
          <div id="tabPremiumWidgets" class="tab">
            <div style="display: inline-block; width: 49%; float: left;">
            <div class="widget wdt-pro" data-type="wigt-pb-cards"><i class="fa fa-sort-numeric-asc"></i> <br> Countdown <p><a href="http://pluginops.com/page-builder/?ref=widgets" target="_blank">(Unlock)</a></p></div>
              <div class="widget wdt-draggable" data-type="wigt-slider">Image Slider</div>
              <div class="widget wdt-draggable" data-type="wigt-smuzform">Form Builder</div>
            </div>
            <div style="display: inline-block; width: 49%;">
              <div class="widget wdt-draggable" data-type="wigt-Sform">Subscribe Form</div>
              <div class="widget wdt-draggable" data-type="wigt-PostSlider">Posts Slider</div>
              <div class="widget wdt-draggable" data-type="wigt-TestimonialSlider">Testimonial Slider</div>
              <div class="widget wdt-draggable" data-type="wigt-SocialFeed">Social Feed</div>
            </div>
          </div>
          <div id="tabWordPressWidgets" class="tab">
            <div class="widget wdt-draggable" data-type="wigt-slider">Image Slider</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>