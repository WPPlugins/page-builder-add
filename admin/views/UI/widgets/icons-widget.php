<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<h3 style="background: #333; color: #fff; padding:15px; width: 90%; ">Icons Widget</h3>
<br>
<br>
<label>Select Icon:  </label>
<input data-placement="bottomRight" class="icp pbicp-auto" value="fa-archive" type="text" />
<span class="input-group-addon pbSelectedIcon pbselIconStyles"></span>
<br>
<br>
<label>Size: </label>
<input type="number" class="pbIconSize">
<br>
<br>
<label>Rotate: </label>
<input type="number" class="pbIconRotation">
<br>
<br>
<label>Color :</label>
<input type="text" class="btn_color-picker pbIconColor" id="pbIconColor">
<br>
<br>




<style type="text/css">
	.pbicp-auto{
		width: 200px !important;
		font-size: 18px;
	}
	.popover-title > input{
		float: none;
		width:160px !important;
		margin: 0 auto !important;
		display: block !important;
	}
	.input-group-addon{
		font-size: 65px;
		margin-right : 20px;
		float: right;
	}
</style>

<script type="text/javascript">
	jQuery('.pbIconSize').change(function(){
    	var pbIconSize = jQuery('.pbIconSize').val();
    	jQuery('.pbselIconStyles').css('font-size',pbIconSize+'px');
  	});
  	jQuery('.pbIconRotation').change(function(){
    	var pbIconRotation = jQuery('.pbIconRotation').val();
    	jQuery('.pbselIconStyles').css('transform','rotate('+pbIconRotation+ 'deg)');
  	});
  	jQuery('.pbIconColor').change(function(){
    	var pbIconColor = jQuery('.pbIconColor').val();
    	jQuery('.pbselIconStyles').css('color',pbIconColor);
  	});

</script>