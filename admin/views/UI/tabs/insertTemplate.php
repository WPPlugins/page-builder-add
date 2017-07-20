<?php if ( ! defined( 'ABSPATH' ) ) exit;
?>
<div id='templatesInstallDiv'> <i class='fa fa-circle-o-notch'></i> Get All These Amazing Fatures  : <a href='http://pluginops.com/page-builder/?ref=Templates' target='_blank'>Unlock Premium Features</a></div>
<?php
$thisPageID = get_the_id();
$ULPB_args = array(
	'post_type' => 'ulpb_post'
);

$ULPB_PrevPosts = get_posts( $ULPB_args );
echo "<br> <p style='  text-indent: 50px;'> If you have already created a page and you love it so much that you want to use the same desgin on this page as well then select that page and click on Update Template button.</p>";
echo "<br><br><br> <form class='insertTemplateForm' >
		<label style='margin-right:7%;'> Select a Page to Insert as Template </label>
	 	<select class='selectPostToInsert' name='selectPostToInsert'>
";
foreach ($ULPB_PrevPosts as  $ulpost) {
	$currentPostId = $ulpost->ID;
	$currentPostName = get_the_title( $currentPostId);
	$currentPostLink = get_permalink($currentPostId);
	echo "<option value='$currentPostId' data-pagelink='$currentPostLink' > $currentPostName </option>";
}

echo "</select> 
<input type='hidden' value='$thisPageID' name='pageToUpdate'>
</form>";

?>
<div class="insertTemplateFormSubmit btn-green large-btn"> <strike> Update Template </strike> Pro Users Only </div>
<br>
<br>
<br>
<br>
<br>
<br>
<a href="http://pluginops.com/page-builder/?ref=InsertTemplate" target="_blank"><div class="insertTemplateFormSubmit btn-green large-btn"> GET PREMIUM VERSION </div></a>
<br><br> <p class="upt_response"></p>
<div id="iframePreview" style="margin:3% 3% 3% 0%; background: #333; padding: 15px; min-height: 500px; min-width:100%;"></div>
<script type="text/javascript">

    jQuery('.selectPostToInsert').on('change',function(e) {
    	var selectedOption = jQuery(this).find('option:selected');
    	var OptionValue = selectedOption.data('pagelink');
    	jQuery('#iframePreview').html('<iframe src='+OptionValue+' width="1600"></iframe>');
    });

</script>