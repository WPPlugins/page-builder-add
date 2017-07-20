<?php if ( ! defined( 'ABSPATH' ) ) exit; 
$is_front_page = get_post_meta($post->ID, 'ULPB_FrontPage', true );
$loadWpHead = get_post_meta($post->ID, 'ULPB_loadWpHead', true );
$loadWpFooter = get_post_meta($post->ID, 'ULPB_loadWpFooter', true );
?>
  <!-- ========= -->
  <!-- Your HTML -->
  <!-- ========= -->
  <script type="text/javascript" src='<?php echo ULPB_PLUGIN_URL."/js/jquery-ui.js"; ?>'></script>
  
  <?php include('tabs.php'); ?>
  <?php include('edit-column.php'); ?>
  <?php include('edit-row.php'); ?>
  <?php include('edit-widget.php'); ?>
  <?php include('new-row.php'); ?>
  <?php include('side-panel.php'); ?>


<div class="lpp_modal pb_loader_container">
  <div class="pb_loader"></div>
</div>

<div class="lpp_modal pb_preview_container" style="">
  <div class="pb_temp_prev" style="text-align: center; overflow: visible; position: absolute;" ></div>
</div>

<input type="hidden" class="draggedWidgetAttributes" value='' >


<div id="pageStatusHolder" style="display: none;">
</div>

<?php $plugData = get_plugin_data(ULPB_PLUGIN_PATH.'/page-builder-add.php',false,true); ?>
<script type="text/javascript">
  var app = {};
  var URLL = "<?php echo admin_url('admin-ajax.php?action=ulpb_admin_data&page_id='.get_the_id()); ?>";
  var PageBuilderAdminImageFolderPath = '<?php echo ULPB_PLUGIN_URL."/images/menu/"; ?>';
  var P_ID = "<?php echo get_the_id(); ?>";
  var P_menu  = "<?php foreach($menus as $menu){  echo "$menu->name"; } ?>";
  var PageBuilder_Version = "<?php echo $plugData['Version']; ?>";
  var admURL = "<?php echo admin_url(); ?>";
  var siteURLpb = "<?php echo site_url(); ?>";
  var isPub = "<?php echo get_post_status( get_the_id() ); ?>";
  var thisPostType = "<?php echo get_post_type(get_the_id()); ?>";

  var pbWrapperWidth = jQuery('#container').width();
  var pluginURL  = '<?php echo ULPB_PLUGIN_URL; ?>';
</script>
<script src="<?php echo ULPB_PLUGIN_URL.'/js/fa.js'; ?>"></script>
<script type="text/javascript">
    jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });

    jQuery('.TemplateTabs .Templatetab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.TemplateTabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });

    jQuery( function() {
    jQuery( "#accordion" ).accordion({
      collapsible: true,
      heightStyle: "content"
    });
  } );
    jQuery( function() {
    jQuery( "#accordion1" ).accordion({
      collapsible: true,
      heightStyle: "content"
    });
  });


    jQuery('.pbicp-auto').iconpicker({ });

});
</script>