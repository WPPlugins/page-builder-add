<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<div class="tabs">
  <ul class="tab-links">
    <li class="active"><a href="#tab1" class="tab_link">Editor</a></li>
    <li><a href="#tab2" class="tab_link">Templates</a></li>
    <li><a href="#tab3" class="tab_link">Page Settings</a></li>
    <li><a href="#tab5" class="tab_link">Insert Template</a></li>
    <li><a href="#tab6" class="tab_link">A/B Testing</a></li>
    <?php
    $pb_subs = get_post_meta($post->ID,'ssm_subscribers_list',true);
     if (!empty($pb_subs)) {
       echo '<li><a href="#tab4" class="tab_link">Subscribers List</a></li>';
     }
    ?>
  </ul>
  <div class="tab-content">
    <div id="tab1" class="tab active">
      <section id="todoapp">
        <header id="header">
          <div class="ulpb_button newRow  btn-green medium-btn" style="min-width:120px; margin-right: 10%;"> <span class="dashicons dashicons-plus"></span> Add new row</div>
        </header>
      </section>
      <div id="pbWrapper">
        <ul id="container">
          <script type="text/template" id="item-template"></script>
        </ul>
      </div>
      <div id="SavePage" class="btn-green aligncenter large-btn SavePage">Save Page</div>
    </div>
    <?php include(ULPB_PLUGIN_PATH.'admin/views/UI/tabs/templates-tab.php'); ?>
    <div id="tab3" class="tab">
    <div class="pbp_form" style="min-height: 400px;padding:20px;">
      <h1 class="seoHeader"> Body Styles </h1>
      <br>
      <label>Body Background Color :</label>
      <input type="text" name="pageBgColor" class="color-picker pageBgColor" id="pageBgColor" data-alpha='true' value='transparent'>
      <br>
      <br>
      <label>Body Background Image :</label>
      <input id="image_location_b" type="url" class=" pageBgImage upload_image_button0"  name='lpp_add_img_0' value=' ' placeholder='Insert Image URL here' style="width:40%;" />
      <input id="image_location_b" type="button" class="upload_bg0 pb_upload_btn" data-id="0" value="Upload"  style="margin-left: 25px;" />
      <br>
      <br>
      <br>
      <label>FavIcon Image :</label>
      <input id="image_location_b" type="url" class=" pageFavIconUrl upload_image_button9"  name='lpp_add_img_9' value=' ' placeholder='Insert Image URL here' style="width:40%;" />
      <input id="image_location_b" type="button" class="upload_bg0 pb_upload_btn" data-id="9" value="Upload"  style="margin-left: 25px;" />
      <br>
      <br>
      <br>
      <label>Padding Top :</label>
      <input type="number" name="pagePaddingTop" class="pagePaddingTop" id="pagePaddingTop" value='0'>
      <br>
      <br>
      <br>
      <label>Padding Bottom :</label>
      <input type="number" name="pagePaddingBottom" class="pagePaddingBottom" id="pagePaddingBottom" value='0'>
      <br>
      <br>
      <br>
      <label>Padding Left :</label>
      <input type="number" name="pagePaddingLeft" class="pagePaddingLeft" id="pagePaddingLeft" value='0'>
      <br>
      <br>
      <br>
      <label>Padding Right :</label>
      <input type="number" name="pagePaddingRight" class="pagePaddingRight" id="pagePaddingRight" value='0'>
      <br>
      <br>
      <br>
      <span class="ulp-note">The unit is percentage so set values accordingly.</span>
      <br>
      <br>
      <br>
      <h1 class="seoHeader"> Page SEO </h1>
      <br>
      <br>
      <label>Page Keywords <span class="text_small">(Separated with Commas)</span> :</label>
      <input type="text" class="pageSeoKeywords" style="width:60%">
      <br>
      <br>
      <br>
      <label> Short Page Description :</label>
      <textarea class="pageSeoDescription" cols="60"></textarea>
      <br>
      <br>
    </div>
    </div>
    <div id="tab4" class="tab">
        <?php include(ULPB_PLUGIN_PATH.'admin/views/UI/widgets/widget-form-subs-list.php'); ?>    
    </div>
    <div id="tab5" class="tab" style="width: 100%; background: #fff;">
        <?php include(ULPB_PLUGIN_PATH.'admin/views/UI/tabs/insertTemplate.php'); ?>    
    </div>
    <div id="tab6" class="tab" style="width: 100%; background: #fff;">
        <?php include(ULPB_PLUGIN_PATH.'admin/views/UI/tabs/abSelect.php'); ?>    
    </div>
  </div>
  <br>
</div>