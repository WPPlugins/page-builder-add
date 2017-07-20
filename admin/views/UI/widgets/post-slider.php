<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<div class="tabs" style="width: 107%;">
  <ul class="tab-links">
    <li class="active"><a href="#ps1" class="tab_link">Slider</a></li>
    <li><a href="#ps2" class="tab_link">Layout</a></li>
    <li><a href="#ps3" class="tab_link">Design</a></li>
    <li><a href="#ps4" class="tab_link">Content</a></li>
  </ul>
<div class="tab-content" style="box-shadow:none;">
	<div id="ps1" class="tab active">
		<br>
        <label>AutoPlay</label>
		<select class="psAutoplay">
			<option value="true">Yes</option>
			<option value="false">No</option>
		</select>
		<br>
		<br>
		<label>Delay (Seconds) </label>
        <input type="number" class="psSlideDelay">
        <br>
        <br>
        <label>Loop </label>
        <select class="psSlideLoop">
			<option value="true">Yes</option>
			<option value="false">No</option>
		</select>
        <br>
        <br>
        <label>Transition </label>
        <select class="psSlideTransition">
			<option value="backSlide">Slide</option>
			<option value="fade">Fade</option>
		</select>
        <br>
        <br>
        <label>Number of Posts </label>
        <input type="number" class="psPostsNumber">
        <br>
        <br>
        <h3>Slider Controls</h3>
        <hr>
        <label>Show Dots </label>
        <select class="psDots">
			<option value="true">Show</option>
			<option value="false">Hide</option>
		</select>
        <br>
        <br>
        <label>Show Arrows </label>
        <select class="psArrows">
			<option value="true">Show</option>
			<option value="false">Hide</option>
		</select>
        <br>
        <br>
	</div>
	<div id="ps2" class="tab">
		<label>Featured Image</label>
		<select class="psFtrImage">
			<option value="initial">Show</option>
			<option value="none">Hide</option>
		</select>
		<br>
		<br>
		<label>Image Size</label>
		<select class="psFtrImageSize">
			<option value="thumbnail">Small</option>
			<option value="medium">Medium</option>
			<option value="large">Large</option>
			<option value="original">Original</option>
		</select>
		<br>
		<br>
		<h3>Content</h3>
		<hr>
		<br>
		<label>Post Excerpt</label>
		<select class="psExcerpt">
			<option value="initial">Show</option>
			<option value="none">Hide</option>
		</select>
		<br>
		<br>
		<label>Read more Link</label>
		<select class="psReadMore">
			<option value="initial">Show</option>
			<option value="none">Hide</option>
		</select>
		<br>
		<br>
		<label>More link Text </label>
        <input type="text" class="psMoreLinkText">
        <br>
        <br>
	</div>
	<div id="ps3" class="tab">
		<label>Heading Size (px)</label>
        <input type="number" class="psHeadingSize">
        <br>
        <br>
        <label>Text Alignment</label>
		<select class="psTextAlignment">
			<option value="left">Left</option>
			<option value="center">Center</option>
			<option value="right">Right</option>
		</select>
		<br>
		<br>
		<h3>Colors</h3>
		<hr>
		<br>
		<label>Background Color :</label>
        <input type="text" class="btn_color-picker psBgColor" data-alpha='true' id="psBgColor">
        <br>
        <br>
        <label>Text Color :</label>
        <input type="text" class="btn_color-picker psTxtColor" id="psTxtColor">
        <br>
        <br>
        <label>Heading Color :</label>
        <input type="text" class="btn_color-picker psHeadingTxtColor" id="psHeadingTxtColor">
        <br>
        <br>
	</div>
	<div id="ps4" class="tab">
		<label>Post Type</label>
        <select class="psPostType">
			<option value="post">Posts</option>
			<option value="page">Pages</option>
		</select>
		<br>
		<br>
		<label>Order By</label>
		<select class="psPostsOrderBy">
			<option value="true">Date</option>
			<option value="false">Center</option>
			<option value="right">Right</option>
		</select>
		<br>
		<br>
		<label>Order</label>
		<select class="psPostsOrder">
			<option value="Descending">Descending</option>
			<option value="Ascending">Ascending</option>
		</select>
		<br>
		<br>
		<h3>Filter</h3>
		<hr>
		<br>
		<label>Filter By</label>
		<select class="psPostsFilterBy">
			<option value="none">None</option>
			<option value="true">Categories</option>
			<option value="false">Author Name</option>
		</select>
		<br>
		<br>
		<label>Filter Value :</label>
        <input type="text" class="psFilterValue">
        <br>
        <br>
	</div>
</div>
</div>
