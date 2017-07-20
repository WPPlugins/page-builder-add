<div id="ulpb_dash_container">
  <h2 style="font-size:20px; font-weight: normal;">Page Builder Dashboard</h2>

  <div class="tabs">
    <ul class="tab-links">
        <li class="active"><a href="#tab1" class="tab_link">Welcome</a></li>
        <li><a href="#tab2" class="tab_link">Video Tutorials</a></li>
        <li><a href="#tabUpdates" class="tab_link">Update Log</a></li>
    </ul>

    <div class="tab-content" style="min-height: 750px;">
      <div id="tab1" class="tab active" >
        <h2>Welcome to Page Builder by PluginOps</h2>
        <p>Thank you for choosing the Page Builder plugin and welcome to the community. Find some useful information below and learn how to create beautiful pages in minutes.</p>
        <br>
        <h3>Getting Started - Build Your First Landing Page</h3>
        <br>
        <a href="<?php echo admin_url('post-new.php?post_type=ulpb_post'); ?>" target="_blank" style="font-size:14px; font-weight: bold;">Page Builder - Add New Custom Page</a>
        <p>Ready to start creating pages ? Jump into the page builder by clicking the Add new Page button under the Page builder menu.</p>
        <br>
        <br>
        <div style="float: left; width: 60%;">
        <h3>Or Build a Page With your Theme's Wrapper </h3>
        <br>
        <a href="<?php echo admin_url('post-new.php?post_type=page'); ?>" target="_blank" style="font-size:14px; font-weight: bold;">Pages - Add New Page</a>
        <p>Add new Page and jump into the page builder by clicking the Switch to Page Builder tab.</p>
        </div>
        <div style='width: 40%; float: right;'><img src="<?php echo ULPB_PLUGIN_URL.'/images/dashboard/page-builder-menu-pointer.png'; ?>" style='width:90%;'></div>
        <br>
        <br>
        <div style="float: left; width: 100%;">
          <hr>
          <br>
          <h2>Common Errors and Fixes</h2>
          <br>
          <h3>Page not found error - Fix</h3>
          <a href="http://pluginops.com/fix-404-page-not-found-error-wordpress/" target="_blank">How to fix page not found error.</a>
        </div>
      </div>
      <div id="tab2" class="tab">
        <div class="video-card">
          <iframe width="460" height="255" src="https://www.youtube.com/embed/e2hnpm9RN74?rel=0" frameborder="0" allowfullscreen></iframe>
          <h3>Page Builder Plugin Intro</h3>
        </div>
        <div class="video-card">
          <iframe width="460" height="255" src="https://www.youtube.com/embed/MMqrN12Xs2M?rel=0" frameborder="0" allowfullscreen></iframe>
          <h3>Page Builder Quick Tour</h3>
        </div>
        <div class="video-card">
          <iframe width="460" height="255" src="https://www.youtube.com/embed/VozvCV-xLro?rel=0" frameborder="0" allowfullscreen></iframe>
          <h3>Intro to Rows, Columns & Widgets</h3>
        </div>
        <div class="video-card">
          <iframe width="460" height="255" src="https://www.youtube.com/embed/CRbR7Wy9YBc?rel=0" frameborder="0" allowfullscreen></iframe>
          <h3>How to embed a video.</h3>
        </div>
        <div class="video-card">
          <iframe width="460" height="255" src="https://www.youtube.com/embed/6tHjM3SxDa8?rel=0" frameborder="0" allowfullscreen></iframe>
          <h3>How to select a template.</h3>
        </div>
      </div>
      <div id="tabUpdates" class="tab">
        <h3>V. 1.3.1</h3> 
        <li>Duplicate and insert other page templates (With Same Content)</li>
        <li>Side Panel Moved in collapsible container.</li>
        <li>Duplicate Row Bug Fix</li>
        <br>
        <br>
        <hr>
        <h3>V. 1.2.8</h3>
        <li> Drag and drop Widgets.</li>
        <li> Duplicate and delete widgets from front panel.</li>
        <li> New templates.</li>
        <br>
        <br>
        <hr>
        <h3>V. 1.2.6</h3>
        <li> Set Video as background of rows.</li>
        <li> Set the opacity of colors.</li>
        <li> Page duplication Bug Fixed.</li>
        <br>
        <br>
        <hr>
        <h3>V. 1.2.5</h3>
        <li>4 New Templates Added.</li>
        <li>Video Widget Added.</li>
        <li>Responsive Navigations.</li>
        <br>
        <br>
        <h3>V. 1.2.3</h3>
        <li>Added Subscribe Form Widget.</li>
        <li>Fixed Responsiveness of templates.</li>
        <br>
        <br>
        <hr>
      </div>
    </div>
  </div>
</div>

<style type="text/css">
  .tab_link{
  text-decoration:none;
}
.tabs {
  width:auto;
  display:inline-block;
}
 
   
.tab-links:after {
  display:block;
  clear:both;
  content:'';
}

.video-card{
  display: inline-block;
  max-width:460px;
  max-height:400px;
  background: #fff;
  border:1px solid #d3d3d3;
  text-align: center;
  margin-right: 15px;
  margin-bottom: 40px;
}
.tab-links li {
  margin:0px 5px;
  float:left;
  list-style:none;
}

.tab-links a {
  padding:9px 20px;
  display:inline-block;
  border-radius:7px 7px 0px 0px;
  background:#7fc9fb;
  font-size:16px;
  font-weight:600;
  color:#fff;
  transition:all linear 0.15s;
}
 
.tab-links a:hover {
background:#2fa8f9;
text-decoration:none;
}
 
li.active a, li.active a:hover {
  background:#fff;
  color:#2fa8f9;
}
 

.tab-content {
  border-radius:3px;
  box-shadow:-1px 1px 1px rgba(0,0,0,0.15);
  background:#fff;
}
 
.tab {
  padding: 20px 40px;
  display:none;
  min-width: 60%;
  min-height: 600px
}
 
.tab.active {
  display:block;
}

body{
  background: #F3F6F8 !important;
}


</style>

<script type="text/javascript">
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
</script>