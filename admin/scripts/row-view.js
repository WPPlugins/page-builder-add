( function( $ ) { 

function subscribeFormWidgetRender(this_widget_subscribeForm){
            var formLayout = this_widget_subscribeForm['formLayout'];
            var showNameField = this_widget_subscribeForm['showNameField'];
            var successAction = this_widget_subscribeForm['successAction'];
            var successURL = this_widget_subscribeForm['successURL'];
            var successMessage = this_widget_subscribeForm['successMessage'];
            var formBtnText = this_widget_subscribeForm['formBtnText'];
            var formBtnHeight = this_widget_subscribeForm['formBtnHeight'];
            var formBtnWidth = this_widget_subscribeForm['formBtnWidth'];
            var formBtnBgColor = this_widget_subscribeForm['formBtnBgColor'];
            var formBtnColor = this_widget_subscribeForm['formBtnColor'];
            var formBtnHoverBgColor = this_widget_subscribeForm['formBtnHoverBgColor'];
            var formBtnFontSize = this_widget_subscribeForm['formBtnFontSize'];
            var formBtnBorderWidth = this_widget_subscribeForm['formBtnBorderWidth'];
            var formBtnBorderColor = this_widget_subscribeForm['formBtnBorderColor'];
            var formBtnBorderRadius = this_widget_subscribeForm['formBtnBorderRadius'];

            var formLayoutAction = " ";
            var formFieldWidth = '60%';
            var formButtonWidth = '30%';
            if (showNameField  == 'block'){ formFieldWidth = '35%' }
            if (showNameField  == 'block' && formLayout  == 'inline' ){ showNameField = 'inline-block'; formButtonWidth = '25%'}
            if (formLayout  == 'stacked') { formLayoutAction = "<br>"; formFieldWidth = '95%';formButtonWidth = '95%'; }

            var inputNameStyles = "display:"+showNameField+"; width:"+formFieldWidth+"; padding: "+formBtnHeight+"px 5px; font-size:"+formBtnFontSize+"px;";
            var inputEmailStyles = "width:"+formFieldWidth+"; padding: "+formBtnHeight+"px 5px; font-size:"+formBtnFontSize+"px;";
            var inputButtonStyles = "width:"+formButtonWidth+"; padding: "+formBtnHeight+"px "+formBtnWidth+"px; font-size:"+formBtnFontSize+"px; background:"+formBtnBgColor+"; color:"+formBtnColor+"; border: "+formBtnBorderWidth+"px solid "+formBtnBorderColor+" !important; border-radius: "+formBtnBorderRadius+"px !important;    ";

            var this_widget_form_inputName = "<input type='text'  placeholder='Your name' style='"+inputNameStyles+"' >"+formLayoutAction;
            var this_widget_form_inputEmail = "<input type='text' placeholder='Your e-mail' style='"+inputEmailStyles+"' >"+formLayoutAction;
            var this_widget_form_inputSubmit = "<input type='submit' value='"+formBtnText+"'  style='"+inputButtonStyles+"'>";

            var this_widget_form = "<form id='pbSubscribe'> "+this_widget_form_inputName+" "+this_widget_form_inputEmail+" "+this_widget_form_inputSubmit+" </form>";
            return this_widget_form;
}
function postsSliderWidgetRender(this_widget_postsSlider){

  var psAutoplay = this_widget_postsSlider['psAutoplay'];
  var psSlideDelay = this_widget_postsSlider['psSlideDelay'];
  var psSlideLoop = this_widget_postsSlider['psSlideLoop'];
  var psSlideTransition = this_widget_postsSlider['psSlideTransition'];
  var psPostsNumber = this_widget_postsSlider['psPostsNumber'];
  var psDots = this_widget_postsSlider['psDots'];
  var psArrows = this_widget_postsSlider['psArrows'];
  var psFtrImage = this_widget_postsSlider['psFtrImage'];
  var psFtrImageSize = this_widget_postsSlider['psFtrImageSize'];
  var psExcerpt = this_widget_postsSlider['psExcerpt'];
  var psReadMore = this_widget_postsSlider['psReadMore'];
  var psMoreLinkText = this_widget_postsSlider['psMoreLinkText'];
  var psHeadingSize = this_widget_postsSlider['psHeadingSize'];
  var psTextAlignment = this_widget_postsSlider['psTextAlignment'];
  var psBgColor = this_widget_postsSlider['psBgColor'];
  var psTxtColor = this_widget_postsSlider['psTxtColor'];
  var psHeadingTxtColor = this_widget_postsSlider['psHeadingTxtColor'];
  var psPostType = this_widget_postsSlider['psPostType'];
  var psPostsOrderBy = this_widget_postsSlider['psPostsOrderBy'];
  var psPostsOrder = this_widget_postsSlider['psPostsOrder'];
  var psPostsFilterBy = this_widget_postsSlider['psPostsFilterBy'];
  var psFilterValue = this_widget_postsSlider['psFilterValue'];

  function PShexToRGB(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
  }

  switch(psFtrImageSize){
    case 'thumbnail':
    psFtrImageSizes = '150x150';
    break;
    case 'medium':
    psFtrImageSizes = '300x200';
    break;
    case 'large':
    psFtrImageSizes = '750x500';
    break;
    default:
    psFtrImageSizes = '750x700';
    break;
  }

  if (psDots == 'false') {
    psDots = 'none';
  }
  if (psArrows == 'false') {
    psArrows = 'none';
  }

  var DotColor = PShexToRGB(psBgColor, -40);
  var PSliderHeading = '<h3 style="color:'+psHeadingTxtColor+'; font-size:'+psHeadingSize+'px; text-align:'+psTextAlignment+'; ">Hello World!</h3>';
  var PSliderReadMore = '<a  style="display:'+psReadMore+';"> '+psMoreLinkText+' </a>';
  var PSliderExcerpt = '<p style="display:'+psExcerpt+'; text-align:'+psTextAlignment+';color:'+psTxtColor+'; font-size:'+((psHeadingSize/2)+1)+'px;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  '+PSliderReadMore+'</p>';
  var PSliderFtrImage = '<br style="display:'+psFtrImage+';"><img src="http://placehold.it/'+psFtrImageSizes+'" style="display:'+psFtrImage+';"><br style="display:'+psFtrImage+';">';
  var PSliderDots = '<br style="display:'+psDots+';"><br style="display:'+psDots+';"><div style="display:'+psDots+'; margin:0 auto; width:10px; height:10px; border-radius:100px; background:'+DotColor+';"></div>';
  var PSliderArrows = '<br style="display:'+psArrows+';"><div style="display:'+psArrows+'; margin:0 auto;" ><span class="dashicons dashicons-arrow-left-alt2" style="color:'+DotColor+'; margin:5px; font-size:40px;"></span> <span class="dashicons dashicons-arrow-right-alt2" style="color:'+DotColor+'; margin:5px; font-size:40px;"></span> </div>';


  var PSlider = '<div style="background:'+''+'; text-align:'+psTextAlignment+'; width:95%; margin: 0 auto; padding:0.1% 0 2% 0;">'+PSliderFtrImage+PSliderHeading+PSliderExcerpt+PSliderDots+PSliderArrows+'</div>';

  this_widget_postsSlider = PSlider;
  return this_widget_postsSlider;

}

function shortCodeWidgetRender(this_widget_shortcode){
  var shortCodeInput = this_widget_shortcode['shortCodeInput'];
  shortCodeInput = shortCodeInput.replace(/['"]+/g, '');
  var shortCodeContainerUniqueId = 'pb_shortCodeContainer'+Math.floor((Math.random() * 2000) + 100);
  var shortCodeContent = '<div class="'+shortCodeContainerUniqueId+'">Content Here!</div><script type="text/javascript">(function($){ var submit_URl=admURL+"admin-ajax.php?action=ulpb_loadShortcode_content"; var result=" ";$.ajax({url:submit_URl,method:"post",data:"ulpb_shortcode='+shortCodeInput+'",success:function(result){jQuery(".'+shortCodeContainerUniqueId+'").html(result)}}); return false; })(jQuery);</script>';

  return shortCodeContent;
}

var WidgetDraggedAttr = '';

app.RowView = Backbone.View.extend({
    tagName: 'section',
    className: 'row',
    template: _.template($('#item-template').html()),
    events: {
      'click #rowDelete': 'deleteRow',
      'click #rowEdit': 'EditRow',
      'click #rowDuplicate': 'DuplicateRow',
      'click #editRowSave': 'updateRow',
      'click #WidthSave': 'updateWidth',
      'click div.editColumn': 'EditColumn',
      'click #editColumnSave': 'updateColumn',
      'click .draggableWidgets': 'widgetDrag',
      'click .wdgt-dropped': 'widgetDropped',
      'click .widgetDeleteHandle': 'deleteWidget',
      'click .widgetDuplicateHandle': 'duplicateWidget'
    },
    attributes: function() {
        if(this.model) {
            return {
                RowID: this.model.get('rowID')
            }
        }
        return {}
    },
    initialize: function(){
      _.bindAll(this, 'render','deleteRow','updateRow','EditRow','EditColumn','updateColumn','updateWidth','DuplicateRow','widgetDrag','widgetDropped'); // every function that uses 'this' as the current object should be in here

    },
    render: function(){
      this.$el.html(this.template(this.model.toJSON() )  );

      var rowID = this.model.get('rowID');
      var rowCID = this.model.cid;
      rowColumns = this.model.get('columns');
      rowHeight = this.model.get('rowHeight');
      var rowData = this.model.get('rowData');
      var row_bg_img = rowData['bg_img'];
      var row_bg_color = rowData['bg_color'];
      var row_margin = rowData['margin'];
      var row_padding = rowData['padding'];
      var custom_styling = rowData['customStyling'];
      var custom_JS = rowData['customJS'];

      var currRowPadding  = 'padding:'+row_padding['rowPaddingTop'] +'% '+row_padding['rowPaddingRight']+'% '+ row_padding['rowPaddingBottom'] +'% '+ row_padding['rowPaddingLeft']+'%; ';
      var currRowMargins  = 'margin:'+row_margin['rowMarginTop'] +'% '+row_margin['rowMarginRight']+'% '+ row_margin['rowMarginBottom'] +'% '+ row_margin['rowMarginLeft']+'%; ';

      $(this.el).attr('style','height:auto; overflow:hidden; background:'+row_bg_color+'; '+currRowMargins+' '+currRowPadding);

      $(this.el).append('<style>'+custom_styling+'</style>');

      if (row_bg_img) {
        $(this.el).css('background','url("'+row_bg_img+'")');
      }
    

      for(var i = 1; i <= rowColumns; i++){
        var this_column = 'column'+i;
        var thisColumnModelData = this.model.get(this_column);
        
        var this_column_options = thisColumnModelData['columnOptions'];
        var this_column_bg_color = this_column_options['bg_color'];
        var this_column_margin = this_column_options['margin'];
        var this_column_padding = this_column_options['padding'];
        var colWidth = this_column_options['width'];
        //var colWidthInPx = Math.floor( (1268*colWidth)/100);
        var columnMarginTop = this_column_margin['columnMarginTop'];
        var columnMarginRight = this_column_margin['columnMarginRight'];
        var columnMarginBottom = this_column_margin['columnMarginBottom'];
        var columnMarginLeft = this_column_margin['columnMarginLeft'];

        var this_column_margins = "margin:"+columnMarginTop+"% "+columnMarginRight+"% "+columnMarginBottom+"% "+columnMarginLeft+"%;";

        var colWidthUnit = '%';
        if (colWidth > 101) {
          colWidthUnit = 'px';
        }else{
          var colWidthUnit = '%';
        }
        if (colWidth === "") {
          switch (rowColumns) {
          case '1':
            colWidth = 100;
            break;
          case '2':
            colWidth = 50;
            break;
          case '3':
            colWidth = 33.2;
            break;
          case '4':
            colWidth = 25;
            break;
          case '5':
            colWidth = 20;
            break;
          case '6':
            colWidth = 16.5;
            break;
          case '7':
            colWidth = 14.1;
            break;
          case '8':
            colWidth = 12.5;
            break;
          case '9':
            colWidth = 11.05;
            break;
          case '10':
            colWidth = 9.9;
            break;  
          default:
            colWidth = 99;
            break;
        }
      }
        var colEditBtn = "<div class='editColumn' style='float: left; background: #2B87DA; padding: 8px 10px; display: none; cursor: pointer;  z-index: 99; position: absolute; ' data-col_id="+this_column+" data-overlay_id="+this_column+" ><span class='dashicons dashicons-edit' style='color:#fff;' data-col_id="+this_column+" data-overlay_id="+this_column+"></span></div></div>";
        $(this.el).append('<div class="column '+this_column+'" id='+rowID+'-'+this_column+' data-col_id='+this_column+' style="width:' + colWidth +colWidthUnit+'; min-height:'+(rowHeight-25)+'px; background:'+this_column_bg_color+'; '+this_column_margins+' "> <div class="wdgt-dropped" style="display:none;" data-this_col_id='+this_column+'></div> '+colEditBtn+' </div>');

        $('#'+rowID+'-'+this_column).mouseenter(function(ev){
          $(this).children('.editColumn').css('display','block');
          $(this).css('border','3px solid #2B87DA');
        });
        $('#'+rowID+'-'+this_column).mouseleave(function(){
          $('.editColumn').css('display','none');
          $('.column').css('border','none');
        });

        // Column Widgets
        var this_column_widgets = thisColumnModelData['colWidgets'];
        var this_column_widgets_array = _.values(this_column_widgets);

      for (var j = 0; j < this_column_widgets_array.length; j++) { 

        var this_column_widgets_array_C = this_column_widgets_array[j];
        var this_column_widgets_array_current = this_column_widgets_array_C;

        var this_column_type = this_column_widgets_array_current['widgetType'];
        var widgetStyling = this_column_widgets_array_current['widgetStyling'];
        var this_column_editor = this_column_widgets_array_current['widgetWYSIWYG'];
        var this_column_editor_content = this_column_editor['widgetContent'];
        var this_column_img_content = this_column_widgets_array_current['widgetImg'];
        var imgUrl  = this_column_img_content['imgUrl'];
        var imgSize = this_column_img_content['imgSize'];
        var imgAlignment = this_column_img_content['imgAlignment'];
        var this_column_img = "<img src="+imgUrl+" style='text-align:"+imgAlignment+";' align="+imgAlignment+" class='ftr-img-"+this_column+" img-"+imgSize+" '>";

        //Column Menu Widget
        var this_column_menu_content = this_column_widgets_array_current['widgetMenu'];
        var menuName = this_column_menu_content['menuName'];
        var menuStyle = this_column_menu_content['menuStyle'];
        var this_column_menu  = "<img style='max-width:100%;' src='"+PageBuilderAdminImageFolderPath+menuStyle+".png' />";

        //Button Widget
        var this_widget_btn = this_column_widgets_array_current['widgetButton'];
        var btnText = this_widget_btn['btnText'];
        var btnLink = this_widget_btn['btnLink'];
        var btnBgColor = this_widget_btn['btnBgColor'];
        var btnTextColor = this_widget_btn['btnTextColor'];
        var btnFontSize = this_widget_btn['btnFontSize'];
        var btnHoverBgColor = this_widget_btn['btnHoverBgColor'];
        var btnWidth = this_widget_btn['btnWidth'];
        var btnHeight = this_widget_btn['btnHeight'];
        var btnBlankAttr = this_widget_btn['btnBlankAttr'];
        var btnBorderColor = this_widget_btn['btnBorderColor'];
        var btnBorderWidth = this_widget_btn['btnBorderWidth'];
        var btnBorderRadius = this_widget_btn['btnBorderRadius'];
        var btnButtonAlignment = this_widget_btn['btnButtonAlignment'];

        var widgetMtop = this_column_widgets_array_current['widgetMtop'];
        var widgetMleft = this_column_widgets_array_current['widgetMleft'];
        var widgetMbottom = this_column_widgets_array_current['widgetMbottom'];
        var widgetMright = this_column_widgets_array_current['widgetMright'];
        var widgetBgColor = this_column_widgets_array_current['widgetBgColor'];
        if (this_column_widgets_array_current['widgetAnimation'] != 'undefined') {
          var widgetAnimation = this_column_widgets_array_current['widgetAnimation'];
        }else{ 
          var widgetAnimation = '';
        }

        switch (this_column_type) {
          case 'wigt-WYSIWYG':
            this_column_content = this_column_editor_content;
            contentAlign = 'none';
            break;
          case 'wigt-img':
            this_column_content = this_column_img;
            contentAlign = imgAlignment;
            break;
          case 'wigt-menu':
            this_column_content = this_column_menu;
            contentAlign = 'none';
            break;
          case 'wigt-btn-gen':
            var this_widget_btn = "<br><div class='wdt-this_column_type' style='text-align:"+btnButtonAlignment+";'><a href='"+btnLink+"' style='text-decoration:none !important;' target='' > <button style='color:"+btnTextColor+" !important;font-size:"+btnFontSize+" !important; background: "+btnBgColor+" !important; background-color: "+btnBgColor+" !important; padding: "+btnHeight+"px "+btnWidth+"px !important; border: "+btnBorderWidth+"px solid "+btnBorderColor+" !important; border-radius: "+btnBorderRadius+"px !important;' disabled >"+btnText+"</button></a></div><br>";
            this_column_content = this_widget_btn;
            break;
          case 'wigt-pb-form':
            var this_widget_subscribeForm = this_column_widgets_array_current['widgetSubscribeForm'];
              var subForm = subscribeFormWidgetRender(this_widget_subscribeForm);
              this_column_content = subForm;
          break;
          case 'wigt-pb-postSlider':
            var this_widget_postsSlider = this_column_widgets_array_current['widgetPBPostsSlider'];
            var postslider = postsSliderWidgetRender(this_widget_postsSlider);
              this_column_content = postslider;
          break;
          case 'wigt-video':
            var this_widget_widgetVideo = this_column_widgets_array_current['widgetVideo'];
            var videoWebM = this_widget_widgetVideo['videoWebM'];
            var videoMpfour = this_widget_widgetVideo['videoMpfour'];
            var videoThumb = this_widget_widgetVideo['videoThumb'];
            var vidAutoPlay = this_widget_widgetVideo['vidAutoPlay'];
            var vidLoop = this_widget_widgetVideo['vidLoop']; 
            var vidControls = this_widget_widgetVideo['vidControls'];

            var widgetVideoRender = "<video "+vidLoop+" muted "+vidAutoPlay+" poster='"+videoThumb+"' class='pbp_renderVideo' style='width:100%;' "+vidControls+" ><source src='"+videoWebM+"' type='video/webm'><source src='"+videoMpfour+"' type='video/mp4'></video>"

              this_column_content = widgetVideoRender;
          break;
          case 'wigt-pb-icons':
            var this_widget_icons = this_column_widgets_array_current['widgetIcons'];
            var pbSelectedIcon = this_widget_icons['pbSelectedIcon'];
            var pbIconSize = this_widget_icons['pbIconSize'];
            var pbIconRotation = this_widget_icons['pbIconRotation'];
            var pbIconColor = this_widget_icons['pbIconColor'];

            var widgetIconStyles = 'transform: rotate('+pbIconRotation+ 'deg); color:'+pbIconColor+'; font-size:'+pbIconSize+'px;';
            var widgetIconRender = '<i class="'+pbSelectedIcon+'" style="'+widgetIconStyles+'" ></i>';

              this_column_content = widgetIconRender;
          break;
          case 'wigt-pb-counter':
            var this_widget_counter = this_column_widgets_array_current['widgetCounter'];
            var pbCounterID = 'pb_counter'+Math.floor((Math.random() * 2000) + 100);
            var counterStartingNumber = this_widget_counter['counterStartingNumber'];
            var counterEndingNumber = this_widget_counter['counterEndingNumber'];
            var counterNumberPrefix = this_widget_counter['counterNumberPrefix'];
            var counterNumberSuffix = this_widget_counter['counterNumberSuffix'];
            var counterAnimationTime = this_widget_counter['counterAnimationTime'];
            var counterTitle = this_widget_counter['counterTitle'];
            var counterTextColor = this_widget_counter['counterTextColor'];
            var counterTitleColor = this_widget_counter['counterTitleColor'];
            var counterNumberFontSize = this_widget_counter['counterNumberFontSize'];
            var counterTitleFontSize = this_widget_counter['counterTitleFontSize'];

            var counterScript =  "<script> jQuery('#"+pbCounterID+"').each(function () { var currElementCounter = jQuery(this); jQuery({ Counter: "+counterStartingNumber+" }).animate({ Counter: currElementCounter.text() }, { duration: "+counterAnimationTime+", easing: 'swing', step: function () { currElementCounter.text(Math.ceil(this.Counter)); }   });  }); </script>";

            var counterHTMLStyles = 'color:'+counterTextColor+'; font-size:'+counterNumberFontSize+'px; text-align:center; line-height:1.5;';

            var counterTitleStyles = 'color:'+counterTitleColor+'; font-size:'+counterTitleFontSize+'px; text-align:center; line-height:1.5;';

            var counterTitleHTML = '<div style="'+counterTitleStyles+'" >'+counterTitle+'</div>';

            var counterHTML = '<div style="'+counterHTMLStyles+'" >'+counterNumberPrefix+'<span id="'+pbCounterID+'">'+counterEndingNumber+'</span>'+counterNumberSuffix+' </div> '+counterTitleHTML;
            this_column_content = counterHTML + counterScript;
          break;
          case 'wigt-pb-audio':
            var this_widget_audio = this_column_widgets_array_current['widgetAudio'];
            var audioOgg = this_widget_audio['audioOgg'];
            var audioMpThree = this_widget_audio['audioMpThree'];
            var audioAutoPlay = this_widget_audio['audioAutoPlay'];
            var audioLoop = this_widget_audio['audioLoop'];
            var audioControls = this_widget_audio['audioControls'];

            var audioPlayerHTML = '<audio '+audioLoop+' '+audioControls+'  style="width:100%;" > <source src="'+audioOgg+'" type="audio/ogg"> <source src="'+audioMpThree+'" type="audio/mpeg"> Your browser does not support the audio player. </audio>';
            this_column_content = audioPlayerHTML;
          break;
          case 'wigt-pb-shortcode':
            var this_widget_shortcode = this_column_widgets_array_current['widgetShortCode'];
            this_column_content = shortCodeWidgetRender(this_widget_shortcode);
          break;
          default:
            this_column_content = this_column_editor_content;
            contentAlign = 'none';
            break;
        }

        // Render columns

        var widgetHandlesSameStyling  = 'width:25px; height:25px; float:left; padding:5px; display:none; cursor:pointer; z-index:99; position:absolute; text-align:center;';
        var widgetMoveHandle = "<div class='widgetMoveHandle widgetHandle' style=' "+widgetHandlesSameStyling+" background:#494949; margin-left: 50px;' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-overlay_id='widget-"+j+"'><span class='dashicons dashicons-move' style='color:#fff;' title='Move'></span></div>";
        
        var widgetDuplicateHandle = "<div class='widgetDuplicateHandle widgetHandle' style=' "+widgetHandlesSameStyling+" background:#9DC45F; margin-left:85px;' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-overlay_id='widget-"+j+"'><span class='dashicons dashicons-admin-page' style='color:#fff;' title='Duplicate' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' ></span></div>";

        var widgetDeleteHandle = "<div class='widgetDeleteHandle widgetHandle' style=' "+widgetHandlesSameStyling+" background:#e67e22; margin-left:120px;' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-overlay_id='widget-"+j+"'><span class='dashicons dashicons-trash' style='color:#fff;' title='Delete' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' ></span></div>";
        
        var this_widget_margins = "'margin:"+widgetMtop+"% "+widgetMright+"% "+widgetMbottom+"% "+widgetMleft+"%; background:"+widgetBgColor+"; background-color:"+widgetBgColor+"; "+widgetStyling+"'";

        var dragTriggerBtn = "<div class='widget-"+j+" draggableWidgets ' style='display:none' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' ></div>";

        $('section[RowID="'+rowID+'"] '+'.'+this_column).append("<div class='widget-"+j+" widget-Draggable animated "+widgetAnimation+" ' style="+this_widget_margins+" data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' >"+widgetMoveHandle+" "+widgetDuplicateHandle+widgetDeleteHandle+" "+this_column_content+" "+dragTriggerBtn+"  </div>");


        $('#'+rowID+'-'+this_column + ' .widget-Draggable').mouseenter(function(ev){
          
          $(this).children('.widgetHandle').css('display','block');
        });
        $('#'+rowID+'-'+this_column + ' .widget-Draggable').mouseleave(function(){
          $('.widgetHandle').css('display','none');
        });

          $('.widget-Draggable').draggable({
              helper: function(){
                return $("<div class='widgetDragHelper' style='padding: 20px; background: #333; border-radius: 100px;'> <span class='dashicons dashicons-move' style='color:#fff;' title='Move'></span> </div>");
              }, cursor: "move", appendTo: "#container", handle:'.widgetMoveHandle',
            start: function(event,ui){
              $(event.target).attr('style','display:none;');
            //  console.log(this);
              $(this).children('.draggableWidgets').click();
            }
          }); 

       //$('.'+this_column).attr('style','width:' + colWidth +'; background:'+this_column_bg_color+';');
     }
      }


      var pbContainer = $('#container');
      var pbWrapperWidth = $('#container').width();
        $('.column').droppable({
          accept: ".widget-Draggable",
          snap:'.column',
          drop: function(event,ui){
            //$(ui.draggable).click();
            // $(".widget-Draggable").trigger("dragstop");
            var curr_droppable = $(this).attr('id');

           $('#'+curr_droppable +' .wdgt-dropped').click();
          },
          over: function(){
            var curr_droppable = $(this).attr('id');
            $('#'+curr_droppable).css('background','rgba(224, 241, 255, 0.85)');
          },
          out: function(){
            var curr_droppable = $(this).attr('id');
            $('#'+curr_droppable).css('background',this_column_bg_color);
          }

        } );

        var PbWrapperWidth = $('#container').width();

      $('.column').resizable({
        containment: '#container',
        handles: 'e',
        maxWidth: PbWrapperWidth,
        start: function (event, ui) {
          this.widthOfNextEl = ui.originalSize.width + ui.element.next().innerWidth();
        },
        resize: function (event, ui) {
          ui.element.next().width(this.widthOfNextEl - ui.size.width);
          ui.element.children('.overlay').width(ui.size.width);
          ui.element.next().children('.overlay').width(ui.element.next().width());
        },
        stop: function(event, ui) {
          //console.log(ui.element.siblings('#WidthSave'));
          var currentPbWrapperWidth = ui.element.parent().width();
          var colPercentageWidth = ui.element.outerWidth()/ currentPbWrapperWidth * 100;
            ui.element.css('width', colPercentageWidth + '%');
            var nextCol = ui.element.next();
            var nextColPercentWidth= nextCol.outerWidth()/ currentPbWrapperWidth * 100;
            nextCol.css('width', nextColPercentWidth + '%');
            //console.log(currentPbWrapperWidth);
            ui.element.children('.overlay').css('width','100' + '%');
            ui.element.next().children('.overlay').css('width','100' + '%');

            $(ui.element.siblings('#WidthSave')).trigger('click');
        }
      });

      // Row and column buttons
      $(this.el).append('<div style="display:none;"></div><div id="rowDelete" class="row-btn btn-red btn" title="Delete Row" ><span class="dashicons dashicons-trash"></span></div> <div id="rowEdit" class="row-btn btn"  title="Edit Row"> <span class="dashicons dashicons-edit"></span></div> <div id="rowDuplicate" class="row-btn btn" title="Duplicate"> <span class="dashicons dashicons-admin-page"></span></div> <div id="WidthSave" class="pb_hidden"></div> <div class="pbHandle row-btn btn" style="background: rgb(45, 60, 60) !important;"><span class="dashicons dashicons-move" title="Move"></span></div>');

     

      $('li[data-model-cid="'+rowCID+'"]').mouseenter(function(){
        $('li[data-model-cid="'+rowCID+'"] .row-btn').css('display','block');
      });
      $('.row').mouseleave(function(){
       $('.row-btn').css('display','none');
      });

      // Save the current model
      return this;
    },
    widgetDrag: function(ev){
    //  console.log('widgetDrag triggerred;');
      var this_column = $(ev.target).attr('data-wid_col_id');
      var this_widget = $(ev.target).attr('data-widget_id');
      var thisColumnData = this.model.get(this_column);
    //  console.log($(ev.target) );
      var this_column_widgets = thisColumnData['colWidgets'];
      var WidgetDraggedAttr = this_column_widgets[this_widget];

     this_column_widgets.splice(this_widget, 1);

    //  console.log(this_column_widgets);
      
      var thisColumnModelData = this.model.get(this_column);
        var this_column_widgets = thisColumnModelData['colWidgets'];
        var this_column_options = thisColumnModelData['columnOptions'];

        this.model.set({
          [this_column] : {
            colWidgets: this_column_widgets,
            columnOptions: this_column_options,
          }
        });
      
      $(this.el).html('');
      $('.edit_column').slideUp();
      $('#ulpb_column_controls').remove();
      this.render();

      $('.draggedWidgetAttributes').val(JSON.stringify(WidgetDraggedAttr));
       thisColumnData = this.model.get(this_column);
    //  console.log(JSON.stringify(WidgetDraggedAttr));
      
    },
    widgetDropped: function(ev){

    //  console.log('widgetdrop triggerred;');
      var widgetDroppedAttributes = $('.draggedWidgetAttributes').val();
      var this_column = $(ev.target).attr('data-this_col_id');
      var thisColumnData = this.model.get(this_column);
      var this_column_widgets = thisColumnData['colWidgets'];
      if (widgetDroppedAttributes != '' && typeof(widgetDroppedAttributes) !='undefined' ) {
        if (this_column_widgets === 0) {
          this_column_widgets = [];
          this_column_widgets.push(JSON.parse(widgetDroppedAttributes) );
        } else{
          this_column_widgets.push(JSON.parse(widgetDroppedAttributes) );
        }
      }
    //  console.log(this_column_widgets);
      //console.log(WidgetDraggedAttr);
      
      //var widgets = app.widgetList.toJSON();
      var thisColumnModelData = this.model.get(this_column);
        var this_column_widgets = thisColumnModelData['colWidgets'];
        var this_column_options = thisColumnModelData['columnOptions'];

        this.model.set({
          [this_column] : {
            colWidgets: this_column_widgets,
            columnOptions: this_column_options,
          }
        });
      
      $(this.el).html('');
      $('.edit_column').slideUp();
      $('#ulpb_column_controls').remove();
      this.render();
      
    },
    deleteWidget: function(ev){
      var this_column = $(ev.target).attr('data-wid_col_id');
      var this_widget = $(ev.target).attr('data-widget_id');
      var thisColumnData = this.model.get(this_column);
      var this_column_widgets = thisColumnData['colWidgets'];
      var WidgetDraggedAttr = this_column_widgets[this_widget];
      this_column_widgets.splice(this_widget, 1);
      //console.log(this_column_widgets);
        var thisColumnModelData = this.model.get(this_column);
        var this_column_widgets = thisColumnModelData['colWidgets'];
        var this_column_options = thisColumnModelData['columnOptions'];

        this.model.set({
          [this_column] : {
            colWidgets: this_column_widgets,
            columnOptions: this_column_options,
          }
        });
      
      $(this.el).html('');
      this.render();
    },
    duplicateWidget: function(ev){
      var this_column = $(ev.target).attr('data-wid_col_id');
      var this_widget = $(ev.target).attr('data-widget_id');
      var thisColumnData = this.model.get(this_column);
      var this_column_widgets = thisColumnData['colWidgets'];
      var WidgetDraggedAttr = this_column_widgets[this_widget];

     this_column_widgets.push(WidgetDraggedAttr);

    //  console.log(this_column_widgets);
      
      var thisColumnModelData = this.model.get(this_column);
        var this_column_widgets = thisColumnModelData['colWidgets'];
        var this_column_options = thisColumnModelData['columnOptions'];

        this.model.set({
          [this_column] : {
            colWidgets: this_column_widgets,
            columnOptions: this_column_options,
          }
        });
      
      $(this.el).html('');
      this.render();
    },
    deleteRow: function(){ // Removes model from collection and save the collection.
      var cong = confirm('Do you want to delete this Row ?');
      if (cong == true) {
        this.model.destroy();
        $(this.el).remove();
      }
    },
    EditRow: function(){

      var row_height = this.model.get('rowHeight');
      var row_no_columns = this.model.get('columns');
      var rowData = this.model.get('rowData');
      var row_bg_img = rowData['bg_img'];
      var row_bg_color = rowData['bg_color'];
      //var rowBgVideoYt = rowData['rowBgVideoYt'];

      var row_margin = rowData['margin'];
      var rowMarginTop = row_margin['rowMarginTop'];
      var rowMarginBottom = row_margin['rowMarginBottom'];
      var rowMarginLeft = row_margin['rowMarginLeft'];
      var rowMarginRight = row_margin['rowMarginRight'];

      var row_padding = rowData['padding'];
      var rowPaddingTop = row_padding['rowPaddingTop'];
      var rowPaddingBottom = row_padding['rowPaddingBottom'];
      var rowPaddingLeft = row_padding['rowPaddingLeft'];
      var rowPaddingRight = row_padding['rowPaddingRight'];

      var row_video = rowData['video'];
      if (typeof(row_video) != "undefined"){
        var rowBgVideoEnable = row_video['rowBgVideoEnable'];
        var rowBgVideoLoop = row_video['rowBgVideoLoop'];
        var rowVideoMpfour = row_video['rowVideoMpfour'];
        var rowVideoWebM = row_video['rowVideoWebM'];
        var rowVideoThumb = row_video['rowVideoThumb'];
      }

      var customStyling = rowData['customStyling'];
      var customJS = rowData['customJS'];

      $('#row_height').val(row_height);
      $('#number_of_columns').val(row_no_columns);
      $('.rowBgImg').val(row_bg_img);
      $('.rowBgColor').val(row_bg_color);
      //$('.rowBgVideoYt').val(rowBgVideoYt);
      $('.rowMarginTop').val(rowMarginTop);
      $('.rowMarginBottom').val(rowMarginBottom);
      $('.rowMarginLeft').val(rowMarginLeft);
      $('.rowMarginRight').val(rowMarginRight);
      $('.rowPaddingTop').val(rowPaddingTop);
      $('.rowPaddingBottom').val(rowPaddingBottom);
      $('.rowPaddingLeft').val(rowPaddingLeft);
      $('.rowPaddingRight').val(rowPaddingRight);
      $('.rowCustomStyling').val(customStyling);
      $('.rowCustomJS').val(customJS);

      $('.rowBgVideoEnable').val(rowBgVideoEnable);
      $('.rowBgVideoLoop').val(rowBgVideoLoop);
      $('.rowVideoMpfour').val(rowVideoMpfour);
      $('.rowVideoWebM').val(rowVideoWebM);
      $('.rowVideoThumb').val(rowVideoThumb);

      $('.rowBgColor').parent().siblings('.wp-color-result').children().css('background-color',row_bg_color);
      $('.wp-picker-container').css('margin-left','24%');

      $('.edit_options_right').append('<div class="column rules"></div>');

      $(this.el).append('<div id="ulpb_row_controls"> <p><div id="edit_form_close" class="btn-red btn"><span class="dashicons dashicons-no-alt"></span></div></p> <p><div id="editRowSave" class="btn"><span class="dashicons dashicons-yes"></span></div>  </div> </div></div>');


      $('.edit_row').css('display','block');
      $('#edit_form_close').click(function(){
        $('.edit_row').slideUp();
        $('#ulpb_row_controls').remove();
      });
    },
    updateRow: function(){

      var rowheight = $('#row_height').val();
      var numberComlumns = $('#number_of_columns').val();
      var rowBgImg = $('.rowBgImg').val();
      var rowBgColor = $('.rowBgColor').val();
      //var rowBgVideoYt = $('.rowBgVideoYt').val();
      var rowMargin = $('.rowMargin').val();
      var customJS = $('.rowCustomJS').val();
      var customStyling = $('.rowCustomStyling').val();

      var rowMarginTop      =   $('.rowMarginTop').val();
      var rowMarginBottom   =   $('.rowMarginBottom').val();
      var rowMarginLeft     =   $('.rowMarginLeft').val();
      var rowMarginRight    =   $('.rowMarginRight').val();
      var rowPaddingTop     =   $('.rowPaddingTop').val();
      var rowPaddingBottom  =   $('.rowPaddingBottom').val();
      var rowPaddingLeft    =   $('.rowPaddingLeft').val();
      var rowPaddingRight   =   $('.rowPaddingRight').val();

      var rowData = this.model.get('rowData');
      var row_video = rowData['video'];
      if (typeof(row_video) != "undefined"){
        var rowBgVideoEnable = row_video['rowBgVideoEnable'];
        var rowBgVideoLoop = row_video['rowBgVideoLoop'];
        var rowVideoMpfour = row_video['rowVideoMpfour'];
        var rowVideoWebM = row_video['rowVideoWebM'];
        var rowVideoThumb = row_video['rowVideoThumb'];
      }

      var rowMargin = {
        rowMarginTop: rowMarginTop,
        rowMarginBottom: rowMarginBottom,
        rowMarginLeft: rowMarginLeft,
        rowMarginRight: rowMarginRight,
      };

      var rowPadding = {
        rowPaddingTop: rowPaddingTop,
        rowPaddingBottom: rowPaddingBottom,
        rowPaddingLeft: rowPaddingLeft,
        rowPaddingRight: rowPaddingRight,
      };
      var rowVideo = {
        rowBgVideoEnable: rowBgVideoEnable,
        rowBgVideoLoop: rowBgVideoLoop,
        rowVideoMpfour: rowVideoMpfour,
        rowVideoWebM: rowVideoWebM,
        rowVideoThumb: rowVideoThumb,
      };

      if (rowheight) {
        this.model.set({
          rowHeight: rowheight,
          columns: numberComlumns,
          rowData: {
            bg_color: rowBgColor,
            bg_img: rowBgImg,
            margin: rowMargin,
            padding:rowPadding,
            video: rowVideo,
            customStyling: customStyling,
            customJS: customJS,
          }
        });
      }
      
      $(this.el).html('');
      $('.edit_row').slideUp();
      $('#ulpb_row_controls').remove();
      this.render();
    },
    DuplicateRow: function(){
      newRowModel = this.model.clone();
      newRowModel.set({
        rowID: 'ulpb_Row'+Math.floor((Math.random() * 200000) + 100),
      });
      var stuffedModel = JSON.stringify(newRowModel.attributes);
      var unStuffedModel = JSON.parse(stuffedModel);
      app.rowList.add(unStuffedModel);
      $(this.el).html('');
      this.render();
    },
    EditColumn: function(ev){

      var this_column = $(ev.target).attr('data-col_id');
      var rowID = this.model.get('rowID');
      var pbWrapperWidth = $('section[RowID="'+rowID+'"]').width();
      console.log(pbWrapperWidth);
      var thisColumnData = this.model.get(this_column);
      var this_column_widgets = thisColumnData['colWidgets'];
      var this_column_content = thisColumnData['columnContent'];
      var this_column_type = thisColumnData['columnType'];
      var this_column_options = thisColumnData['columnOptions'];
      var this_column_bg_color = this_column_options['bg_color'];
      var this_column_width = this_column_options['width'];

      var this_column_margin = this_column_options['margin'];
      var columnMarginTop = this_column_margin['columnMarginTop'];
      var columnMarginBottom = this_column_margin['columnMarginBottom'];
      var columnMarginLeft = this_column_margin['columnMarginLeft'];
      var columnMarginRight = this_column_margin['columnMarginRight'];

      var this_column_padding = this_column_options['padding'];
      var columnPaddingTop = this_column_padding['columnPaddingTop'];
      var columnPaddingBottom = this_column_padding['columnPaddingBottom'];
      var columnPaddingLeft = this_column_padding['columnPaddingLeft'];
      var columnPaddingRight = this_column_padding['columnPaddingRight'];
      
      var colWidth = $('section[RowID="'+rowID+'"]'+' .'+this_column).width();
      var colWidthPercentage  = ( (colWidth/pbWrapperWidth) * 100);
      colWidthPercentage = colWidthPercentage.toFixed(2);
      $('#columnBgColor').val(this_column_bg_color);
      $('#columnMargin').val(this_column_margin);
      $('#columnPadding').val(this_column_padding);
      $('#columnWidth').val(colWidthPercentage);
      $('.widget-type-field').val(this_column_type);

      $('.columnMarginTop').val(columnMarginTop);
      $('.columnMarginBottom').val(columnMarginBottom);
      $('.columnMarginLeft').val(columnMarginLeft);
      $('.columnMarginRight').val(columnMarginRight);
      $('.columnPaddingTop').val(columnPaddingTop);
      $('.columnPaddingBottom').val(columnPaddingBottom);
      $('.columnPaddingLeft').val(columnPaddingLeft);
      $('.columnPaddingRight').val(columnPaddingRight);

      $('.columnBgColor').css('background-color',this_column_bg_color);
      $('.columnBgColor').parent().siblings('.wp-color-result').children().css('background-color',this_column_bg_color);
      $(this.el).append('<br><p><div id="ulpb_column_controls"><div id="edit_form_close" class="btn-red btn"><span class="dashicons dashicons-no-alt"></span></div></p><p><div id="editColumnSave" style="margin-top: -13px;" class="btn" data-col_id='+this_column+' ><span class="dashicons dashicons-yes" data-col_id='+this_column+'></span></div></p><br></div>');

      // Adding Widgets areas to collection
      app.widgetList.reset();
      if (this_column_widgets) {
        app.widgetList.add(this_column_widgets);

    $('.wdt-droppable').droppable({
      accept: ".widget",
      drop: function(event,ui){
        var type = ui.draggable.data('type');
        var curr_droppable = $(this).attr('data-widgetid');
        //alert(curr_droppable);
        $('input[data-widgetType-id="'+curr_droppable+'"]').val(type);
        switch(type){
          case 'wigt-WYSIWYG': var texta = "HTML Editor"; break;
          case 'wigt-img': var texta = "Image Widget"; break;
          case 'wigt-menu': var texta = "Menu Widget"; break;
          case 'wigt-slider': var texta = "Slider Extension"; break;
          case 'wigt-smuzform': var texta = "Form Extension"; break;
          case 'wigt-btn-gen': var texta = "Button Generator Extension"; break;
          default : var texta = 'No widget or extension'; break;
        }


        $('.widget-area-'+curr_droppable).html(texta+ ' is selected <br> To edit click the green button below. <br> To change widget just drop any other widget here.');

        $('.editWidget-'+curr_droppable).trigger('click');
        //console.log('input[data-widgetType-id="'+curr_droppable+'"]');
      }
     });
      }

        $('.edit_column').slideDown();
        $('#edit_form_close').click(function(){
          $('.edit_column').slideUp();
          $('#ulpb_column_controls').remove();
        });

    },
    updateColumn: function(ev){
      var columnToUpdate =  $(ev.target).attr('data-col_id');
      var columnBgColor     = $('.columnBgColor').val();
      var columnMargin      = $('.columnMargin').val();
      var columnPadding     = $('.columnPadding').val();
      var colWidth          = $('.columnWidth').val();

      var columnMarginTop = $('.columnMarginTop').val();
      var columnMarginBottom = $('.columnMarginBottom').val();
      var columnMarginLeft = $('.columnMarginLeft').val();
      var columnMarginRight = $('.columnMarginRight').val();
      var columnPaddingTop = $('.columnPaddingTop').val();
      var columnPaddingBottom = $('.columnPaddingBottom').val();
      var columnPaddingLeft = $('.columnPaddingLeft').val();
      var columnPaddingRight = $('.columnPaddingRight').val();


      var columnMargin = {
        columnMarginTop: columnMarginTop,
        columnMarginBottom: columnMarginBottom,
        columnMarginLeft: columnMarginLeft,
        columnMarginRight: columnMarginRight,
      };

      var columnPadding = {
        columnPaddingTop: columnPaddingTop,
        columnPaddingBottom: columnPaddingBottom,
        columnPaddingLeft: columnPaddingLeft,
        columnPaddingRight: columnPaddingRight,
      };
      
        //console.log(app.widgetList.models);
        var widgets = app.widgetList.toJSON();
        this.model.set({
          [columnToUpdate] : {
            colWidgets: widgets,
            columnOptions:{
            bg_color: columnBgColor,
            margin: columnMargin,
            padding:columnPadding,
            width: colWidth,
            }
          }
        });
      
      $(this.el).html('');
      $('.edit_column').slideUp();
      $('#ulpb_column_controls').remove();
      this.render();
    },
    updateWidth: function() {
      rowColumns = this.model.get('columns');
      for(var i = 1; i<= rowColumns; i++){
        var this_column = 'column'+i;
        var thisColumnModelData = this.model.get(this_column);
        var this_column_widgets = thisColumnModelData['colWidgets'];
        var this_column_options = thisColumnModelData['columnOptions'];
        var this_column_bg_color = this_column_options['bg_color'];
        var this_column_margin = this_column_options['margin'];
        var this_column_padding = this_column_options['padding'];

        var rowID = this.model.get('rowID');
        var colWidth = $('section[RowID="'+rowID+'"]'+' .'+this_column).width();
        var pbWrapperWidth = $('section[RowID="'+rowID+'"]').width();
        var colWidthPercentage  = ( (colWidth/pbWrapperWidth) * 100);
        colWidthPercentage = colWidthPercentage.toFixed(2);
        console.log(pbWrapperWidth);
        console.log(colWidth);
       // var colWidthPercentage = ($columnWidth/1278)*100;
       var widgets = this_column_widgets;
        this.model.set({
          [this_column] : {
            colWidgets: widgets,
            columnOptions:{
            bg_color: this_column_bg_color,
            margin: this_column_margin,
            padding:this_column_padding,
            width: colWidthPercentage,
            }
          }
        });
      }
    }

});

}( jQuery ) );