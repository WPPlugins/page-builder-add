( function( $ ) {

if (isPub == "publish") { 
  var btn_text = "Save Page"; 
} else {var btn_text = "Publish Page"; }

var PageStatus  = '<div style="margin:-35px 0 25px 0;"><label>Status :</label><select class="PbPageStatus"><option value="draft">Draft</option><option value="publish">Publish</option><option value="private">Private</option></select></div>';

$('#side-sortables').append('<div id="savePageSide">'+PageStatus+' <div id="SavePageOther" class="btn-green aligncenter large-btn">'+btn_text+'</div></div>');

$sideOptions = $('#sideOptions').html();
$('#side-sortables').append('<div style="min-height:275px; background:#fff; margin-top:25px; border: 3px dashed #7fc9fb;" class="AdvancedOption">'+$sideOptions+'</div>');

$ftrList = $('#ftr-list').html();
$('#side-sortables').append('<div style="min-height:275px; background:#fff; margin-top:25px; border: 3px dashed #7fc9fb;" >'+$ftrList+'</div>');

$('#side-sortables').append('<br><span style="font-size:15px"> Don\'t like this plugin ? Tell lazy developers to fix it :   <a href="https://wordpress.org/support/plugin/page-builder-add" target="_blank"> Report an Issue </a></span>');


$('.switch').click(function(ev){
  var thisSwitch = $(ev.target).attr('class');
  var checkSwitch = $('.'+thisSwitch).attr('checked');
  if (checkSwitch == 'checked') {
  	$('.'+thisSwitch).removeAttr('checked');
  } else{
    $('.'+thisSwitch).attr('checked','checked');
  }
});

$('#SavePageOther').click(function(){
  $('#SavePage').trigger('click');
});




$('#post-body').append('<img class="SPopen-btn animated bounce" src="'+pluginURL+'/images/icons/play-left.png" title="Open Side Panel">');
$('#post-body').append('<img class="SPclose-btn" src="'+pluginURL+'/images/icons/play-right.png" title="Close Side Panel" >');
$('#postbox-container-1').addClass(' animated slideOutRight');

$('.SPopen-btn').on('click',function(){
	$('#postbox-container-1').removeClass('slideOutRight');
	$('#postbox-container-1').addClass('slideInRight');
	$('#postbox-container-1').show(100);
	$('.SPopen-btn').hide();
	$('.SPclose-btn').show();
	$('#postbox-container-1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('#postbox-container-1').removeClass('slideInRight');
	} );
});

$('.SPclose-btn').on('click',function(){
	$('#postbox-container-1').addClass(' slideOutRight');
	$('.SPclose-btn').hide();
	$('.SPopen-btn').show();
	$('#postbox-container-1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('#postbox-container-1').removeClass('slideOutRight');
	} );
	$('#postbox-container-1').hide(1200);
});


$('#collapse-menu').trigger('click');
 }( jQuery ) );