<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<div class="lpp_modal edit_row">
  <div class="lpp_modal_wrapper">
  <div class="edit_options_left">
      <h1 class="banner-h1">Row Options</h1>
       <label>Row Height :</label>
      <input type="number" name="row_height" id="row_height" placeholder="Set row height" class="edit_fields" value='200'>
      <br>
      <br>
      <label>Number of Columns :</label>
      <input type="number" name="number_of_columns" id="number_of_columns" placeholder="Number of columns in row" min="1" max="8"  class="edit_fields" value='1'>
      <br>
      <br>
      <label>Background Image :</label>
      <input id="image_location1" type="text" class=" rowBgImg upload_image_button2"  name='lpp_add_img_1' value='' placeholder='Insert Image URL here' />
      <input id="image_location1" type="button" class="upload_bg" data-id="2" value="Upload"  style="margin-left: 75px;" />
      <br>
      <br>
      <br>
      <br>
      <label>Background Color :</label>
      <input type="text" name="rowBgColor" class="color-picker rowBgColor" data-alpha='true' value='#fff'>
      <br>
      <br>
      <!--
      <label>Background Video (Youtube) :</label>
      <input type="text" name="rowBgVideoYt" class="rowBgVideoYt" value=''>
      <br>
      <br>
      -->
      <br>
      <br>
      <div id="accordion1">
      <h4>Margin</h4>
      <div style="height: 188px;">
      <label>Margin Top :</label>   
      <input type="number" name="rowMarginTop" class="rowMarginTop" id="rowMarginTop" value='0'>
      <br>
      <br>
      <label>Margin Bottom :</label>   
      <input type="number" name="rowMarginBottom" class="rowMarginBottom" id="rowMarginBottom" value='0'>
      <br>
      <br>
      <label>Margin Left :</label>   
      <input type="number" name="rowMarginLeft" class="rowMarginLeft" id="rowMarginLeft" value='0'>
      <br>
      <br>
      <label>Margin Right :</label>   
      <input type="number" name="rowMarginRight" class="rowMarginRight" id="rowMarginRight" value='0'>
      <br>
      <br>
      <br>
      <span class="ulp-note">The unit is percentage so set values accordingly.</span>
      </div>
      <h4>Padding</h4>
      <div style="height: 188px;">
      <label>Padding Top :</label>
      <input type="number" name="rowPaddingTop" class="rowPaddingTop" id="rowPaddingTop" value='0'>
      <br>
      <br>
      <label>Padding Bottom :</label>
      <input type="number" name="rowPaddingBottom" class="rowPaddingBottom" id="rowPaddingBottom" value='0'>
      <br>
      <br>
      <label>Padding Left :</label>
      <input type="number" name="rowPaddingLeft" class="rowPaddingLeft" id="rowPaddingLeft" value='0'>
      <br>
      <br>
      <label>Padding Right :</label>
      <input type="number" name="rowPaddingRight" class="rowPaddingRight" id="rowPaddingRight" value='0'>
      <br>
      <br>
      <br>
      <br>
      <span class="ulp-note">The unit is percentage so set values accordingly.</span>
      </div>
      </div>
    </div>
    <div class="edit_options_right">
      <div class="tabs">
        <ul class="tab-links">
          <li class="active"><a href="#tabRowVideo" class="tab_link">Row Background Video</a></li>
          <li><a href="#tabCustomCss" class="tab_link">Custom CSS</a></li>
          <li><a href="#tabCustomJS" class="tab_link">Custom JS</a></li>
        </ul>
        <div class="tab-content">
          <div id="tabRowVideo" class="tab active" style="min-height:400px;">
          <div style=" width: auto; min-height: 500px; position: absolute; background: rgba(5, 12, 21, 0.44); min-width: 50%; display: none;"><a href="http://pluginops.com/page-builder/?ref=rowVideo" target="_blank"><h3 style="cursor: pointer; color: #fff; text-align: center;margin-top: 15%; font-size: 27px; padding: 48px; background: rgba(11, 105, 121, 0.33); width: 40%; margin: 15% auto;">Premium Only</h3></a>
          </div>
          <div class="pbp_form" style="margin: 10px;">
            <br>
            <br>
            <label>Background Video :</label> 
            <select class="rowBgVideoEnable">
              <option value="false">Disable</option>
              <option value="true">Enable</option>
            </select>
            <br>
            <br>
            <label>Loop</label> 
            <select class="rowBgVideoLoop">
              <option value="no">No</option>
              <option value="loop">Yes</option>
            </select>
            <br>
            <br>
            <label>Video (MP4) :</label>
            <input id="image_location9" type="text" class="rowVideoMpfour upload_image_button9"  name='lpp_add_img_1' value='' placeholder='Insert Video URL here' style="width:40%;" />
            <input id="image_location9" type="button" class="upload_bg" data-id="9" value="Upload" />
            <br><br>
            <label>Video (WebM) :</label>
            <input id="image_location10" type="text" class="rowVideoWebM upload_image_button10"  name='lpp_add_img_1' value='' placeholder='Insert Video URL here' style="width:40%;" />
            <input id="image_location10" type="button" class="upload_bg" data-id="10" value="Upload" />
            <br><br>
            <label>Video Thumbnail :</label>
            <input id="image_location11" type="text" class="rowVideoThumb upload_image_button11"  name='lpp_add_img_1' value='' placeholder='Insert Image URL here' style="width:40%;" />
            <input id="image_location11" type="button" class="upload_bg" data-id="11" value="Upload" />
            </div>
          </div>
          <div id="tabCustomCss" class="tab">
            <textarea class="rowCustomStyling" rows="20" cols="120"></textarea>
          </div>
          <div id="tabCustomJS" class="tab">
            <textarea class="rowCustomJS" rows="20" cols="120"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>