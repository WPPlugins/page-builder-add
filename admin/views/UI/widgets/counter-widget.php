<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<h3 style="background: #333; color: #fff; padding:15px; width: 90%; ">Counter Widget</h3>
<div class="tabs" style="width: 107%;">
  <ul class="tab-links">
    <li class="active"><a href="#cf1" class="tab_link">Counter</a></li>
    <li><a href="#cf2" class="tab_link">Style</a></li>
  </ul>
<div class="tab-content" style="box-shadow:none;">
	<div id="cf1" class="tab active">
	<br>
		<br>
        <label>Starting Number: </label>
        <input type="number" class="counterStartingNumber">
        <br>
        <hr>
        <br>
        <label>Ending Number: </label>
        <input type="number" class="counterEndingNumber">
        <br>
        <hr>
        <br>
        <label>Number Prefix: </label>
        <input type="text" class="counterNumberPrefix">
        <br>
        <hr>
        <br>
        <label>Number Suffix: </label>
        <input type="text" class="counterNumberSuffix">
        <br>
        <hr>
        <br>
        <label>Animation Time: </label>
        <input type="number" class="counterAnimationTime" min="500" >
        <br>
        <hr>
        <br>
        <label>Title: </label>
        <input type="text" class="counterTitle" >
        <br>
        <hr>
        <br>
	</div>
	<div id="cf2" class="tab">
		<br>
        <label>Text Color :</label>
		<input type="text" class="btn_color-picker counterTextColor" id="counterTextColor" value='#333333'>
		<br>
		<hr>
		<br>
		<label>Title Color :</label>
		<input type="text" class="btn_color-picker counterTitleColor" id="counterTitleColor" value='#333333'>
		<br>
		<hr>
		<br>
		<label>Counter Font Size : </label>
        <input type="number" class="counterNumberFontSize">
        <br>
        <hr>
		<br>
		<label>Title Font Size : </label>
        <input type="number" class="counterTitleFontSize">
	</div>
</div>
</div>