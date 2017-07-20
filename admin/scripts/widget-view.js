( function( $ ) { 
app.WidgetView = Backbone.View.extend({
  tagName: 'div',
  className: 'wdt-droppable',
  template: _.template($('#widget-template').html()),
  attributes: function() {
        if(this.model) {
            return {
                'data-widgetID': this.model.cid
            }
        }
        return {}
    },
  events: {
    'click #widgetDelete': 'deleteWidget',
    'click #widgetEdit': 'EditWidget',
    'click #widgetSave': 'updateWidget',
    'click #widgetDuplicate': 'duplicateWidget'
  },
  initialize: function () {
    _.bindAll(this,'render','deleteWidget','EditWidget','updateWidget','duplicateWidget');
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON() )  );

    var widgetType = this.model.get('widgetType');
    var textb = "<br> To edit this widget click the edit button. <br><br> To change widget just drop any other widget here.";
    switch(widgetType){
        case 'wigt-WYSIWYG': textc = 'Text Widget';      var texta = 'fa-file-text-o'; break;
        case 'wigt-img': textc = 'Image Widget';      var texta = 'fa-picture-o'; break;
        case 'wigt-menu': textc = 'Menu Widget';     var texta = 'fa-picture-o'; break;
        case 'wigt-slider': textc = 'Slider Widget';   var texta = "Slider Extension"; break;
        case 'wigt-smuzform': textc = 'Form Builder Widget';     var texta = "Form Extension"; break;
        case 'wigt-btn-gen': textc = 'Button Widget';      var texta = 'fa-mouse-pointer'; break;
        case 'wigt-Sform': textc = 'Subscribe Form Widget';    var texta = "Subscribe Form Extension"; break;
        case 'wigt-PostSlider': textc = 'Posts Slider Widget';   var texta = "Posts Slider Extension"; break;
        case 'wigt-TestimonialSlider': textc = 'Testimonial Slider Widget';    var texta = "Testimonial Slider Extension"; break;
        case 'wigt-SocialFeed': textc = 'Social Stream Widget';   var texta = "Social Feed Extension"; break;
        case 'wigt-pb-form': textc = 'Subscribe Form Widget';      var texta = 'fa-envelope-o'; break;
        case 'wigt-video': textc = 'Video Widget';    var texta = 'fa-video-camera'; break;
        case 'wigt-pb-postSlider': textc = 'Posts Slider Widget';    var texta = 'fa-file-image-o'; break;
        case 'wigt-pb-icons': textc = 'Icon Widget';     var texta = 'fa-fonticons'; break;
        case 'wigt-pb-counter': textc = 'Number Counter Widget';   var texta = 'fa-sort-numeric-desc'; break;
        case 'wigt-pb-audio': textc = 'Audio Widget';     var texta = 'fa-file-audio-o'; break;
        case 'wigt-pb-cards': textc = 'Card Widget';     var texta = 'fa-fonticons'; break;
        case 'wigt-pb-testimonial': textc = 'Testimonial Widget';   var texta = 'fa-quote-left'; break;
        case 'wigt-pb-shortcode': textc = 'Shortcode Widget';     var texta = 'fa-code'; break;
        case 'wigt-pb-countdown': textc = 'Countdown Timer Widget';     var texta = 'fa-sort-numeric-desc'; break;
        default : textc = 'No Widget Selected';     var texta = 'Drag a widget or extension and drop it here to use it.'; var textb = " ";  break;
      }

    $(this.el).append('<p class="widget-area-'+this.model.cid+'" style="margin-top:-45px; font-size:14px;"> <i style="font-size:28px; color:#40AFF9;" class="fa '+texta+'"></i> <br>'+textc+' <br> '+textb+'</p><div class="btn btn-red remove-widgets" id="widgetDelete" style="display:none;" ><span class="dashicons dashicons-trash"></span></div><div id="widgetEdit" class="btn editWidget-'+this.model.cid+'" style="display:none;"> <span class="dashicons dashicons-edit"></span></div><div id="widgetDuplicate" class="btn" style="display:none;"> <span class="dashicons dashicons-admin-page"></span></div> <div class="pbHandle btn" style="background:#2D3C3C; display:none;"><span class="dashicons dashicons-move"></span></div> <input type="text" name="widget-type" class="bp_hidden" style="display:none"  data-widgetType-id="'+this.model.cid+'" value="'+widgetType+'">');

    $('.wdt-droppable').mouseover(function(ev){
        $(ev.target).children('.btn').css('display','block');
    });
    $('.wdt-droppable').mouseleave(function(ev){
        $('#widgetDelete, #widgetEdit, #widgetDuplicate, .pbHandle').css('display','none');
    });

    $(this.el).append('<div id="widgetSave" class="pb_hidden" data-saveCurrWidget="'+this.model.cid+'"></div>');
  },
  deleteWidget: function () {
    this.model.destroy();
    $(this.el).remove();
    //alert('deleted');
  },
  EditWidget: function () {
    $('.lpp_modal_2').slideDown('500');
    var this_widget_type = $('input[data-widgetType-id="'+this.model.cid+'"]').val();

    var widgetStyling = this.model.get('widgetStyling');
    var widgetMtop = this.model.get('widgetMtop');
    var widgetMbottom = this.model.get('widgetMbottom');
    var widgetMleft = this.model.get('widgetMleft');
    var widgetMright = this.model.get('widgetMright');
    var widgetBgColor = this.model.get('widgetBgColor');
    var widgetAnimation = this.model.get('widgetAnimation');
    // WYISWYG Options
    var this_widget_editor_content = this.model.get('widgetWYSIWYG');
    var editorContent = this_widget_editor_content['widgetContent'];
    //Image widget Options
    var this_widget_img_content = this.model.get('widgetImg');
    var imgUrl  = this_widget_img_content['imgUrl'];
    var imgSize = this_widget_img_content['imgSize'];
    var imgAlignment = this_widget_img_content['imgAlignment'];

    // Menu Widget
    var this_widget_menu_content = this.model.get('widgetMenu');
    var menuName = this_widget_menu_content['menuName'];
    var menuStyle = this_widget_menu_content['menuStyle'];
    var menuColor = this_widget_menu_content['menuColor'];

    // form Widget
    var this_widget_form_content = this.model.get('widgetForm');
    var formName = this_widget_form_content['formName'];

    // form Widget
    var this_widget_slider_content = this.model.get('widgetSlider');
    var sliderName = this_widget_slider_content['sliderName'];

    var this_widget_sForm_content = this.model.get('widgetSform');
    var sFormName = this_widget_sForm_content['sFormName'];

    var this_widget_postsSlider_content = this.model.get('widgetPostSlider');
    var postsSliderName = this_widget_postsSlider_content['postsSliderName'];

    var this_widget_testimonialSlider_content = this.model.get('widgetTestimonialSlider');
    var testimonialSliderName = this_widget_testimonialSlider_content['testimonialSliderName'];

    var this_widget_socialFeed_content = this.model.get('widgetSocialFeed');
    var socialFeedName = this_widget_socialFeed_content['socialFeedName'];

    // btn Widget
    var this_widget_btn = this.model.get('widgetButton');
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

    // Subscribe Form Widget
    var this_widget_subscribeForm = this.model.get('widgetSubscribeForm');
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

    //Video Widget
    var this_widget_video = this.model.get('widgetVideo');
    var videoWebM = this_widget_video['videoWebM'];
    var videoMpfour = this_widget_video['videoMpfour'];
    var videoThumb = this_widget_video['videoThumb'];
    var vidAutoPlay = this_widget_video['vidAutoPlay'];
    var vidLoop = this_widget_video['vidLoop'];
    var vidControls = this_widget_video['vidControls'];

    // Audio Widget
    var this_widget_audio = this.model.get('widgetAudio');

    var this_widget_pbPS = this.model.get('widgetPBPostsSlider');
    psAutoplay = this_widget_pbPS['psAutoplay'];
    psSlideDelay = this_widget_pbPS['psSlideDelay'];
    psSlideLoop = this_widget_pbPS['psSlideLoop'];
    psSlideTransition = this_widget_pbPS['psSlideTransition'];
    psPostsNumber = this_widget_pbPS['psPostsNumber'];
    psDots = this_widget_pbPS['psDots'];
    psArrows = this_widget_pbPS['psArrows'];
    psFtrImage = this_widget_pbPS['psFtrImage'];
    psFtrImageSize = this_widget_pbPS['psFtrImageSize'];
    psExcerpt = this_widget_pbPS['psExcerpt'];
    psReadMore = this_widget_pbPS['psReadMore'];
    psMoreLinkText = this_widget_pbPS['psMoreLinkText'];
    psHeadingSize = this_widget_pbPS['psHeadingSize'];
    psTextAlignment = this_widget_pbPS['psTextAlignment'];
    psBgColor = this_widget_pbPS['psBgColor'];
    psTxtColor = this_widget_pbPS['psTxtColor'];
    psHeadingTxtColor = this_widget_pbPS['psHeadingTxtColor'];
    psPostType = this_widget_pbPS['psPostType'];
    psPostsOrderBy = this_widget_pbPS['psPostsOrderBy'];
    psPostsOrder = this_widget_pbPS['psPostsOrder'];
    psPostsFilterBy = this_widget_pbPS['psPostsFilterBy'];
    psFilterValue = this_widget_pbPS['psFilterValue'];


      // Icons Widget
    var this_widget_pbIcon = this.model.get('widgetIcons');
    pbSelectedIcon = this_widget_pbIcon['pbSelectedIcon'];
    pbIconSize = this_widget_pbIcon['pbIconSize'];
    pbIconRotation = this_widget_pbIcon['pbIconRotation'];
    pbIconColor = this_widget_pbIcon['pbIconColor'];


    // Counter Widget
    var this_widget_pbCounter = this.model.get('widgetCounter');
    counterStartingNumber = this_widget_pbCounter['counterStartingNumber'];
    counterEndingNumber = this_widget_pbCounter['counterEndingNumber'];
    counterNumberPrefix = this_widget_pbCounter['counterNumberPrefix'];
    counterNumberSuffix = this_widget_pbCounter['counterNumberSuffix'];
    counterAnimationTime = this_widget_pbCounter['counterAnimationTime'];
    counterTitle = this_widget_pbCounter['counterTitle'];
    counterTextColor = this_widget_pbCounter['counterTextColor'];
    counterNumberFontSize = this_widget_pbCounter['counterNumberFontSize'];
    counterTitleFontSize = this_widget_pbCounter['counterTitleFontSize'];


    // Shortcode Widget
    var this_widget_shortcode = this.model.get('widgetShortCode');




/*
    function outputVals(item, index){
        console.log(index + ' : ' + item);
    }

    var this_widget_pbIconArray = $.map(this_widget_pbIcon, function(value, index) {
    return [index +' '+value];
    });
    this_widget_pbIconArray.forEach(outputVals);

*/

    //setting values to empty fields
    $('.widgetStyling').val(widgetStyling);
    $('.widgetMtop').val(widgetMtop);
    $('.widgetMbottom').val(widgetMbottom);
    $('.widgetMleft').val(widgetMleft);
    $('.widgetMright').val(widgetMright);
    $('.widgetBgColor').val(widgetBgColor); 
    $('.widgetAnimation').val(widgetAnimation); 
    $('.ftr-img').val(imgUrl);
    $('#ftr-img-size').val(imgSize);
    $('#ftr-img-alignment').val(imgAlignment);
    $('.ftr-img').val(imgUrl);
    $('#ftr-menu-select').val(menuName);
    $('input[value='+menuStyle+']').attr('checked','checked');
    $('#ftr-menu-color').val(menuColor);
    $('#select_smuz_form').val(formName);
    $('#select_smuz_slider').val(sliderName);
    $('#select_subscribe_form').val(sFormName);
    $('#select_posts_slider').val(postsSliderName);
    $('#select_testimonials_slider').val(testimonialSliderName);
    $('#select_socialFeed').val(socialFeedName);

    //btn fiedls
    $('.btnText').val(btnText);
    $('.btnLink').val(btnLink);
    $('.btnHeight').val(btnHeight);
    $('.btnWidth').val(btnWidth);
    $('.btnColor').val(btnTextColor);
    $('.btnFontSize').val(btnFontSize);
    $('.btnBgColor').val(btnBgColor);
    $('.btnHoverBgColor').val(btnHoverBgColor);
    $('.btnBorderWidth').val(btnBorderWidth);
    $('.btnBorderColor').val(btnBorderColor);
    $('.btnBorderRadius').val(btnBorderRadius);
    $('.btnBlankAttr').val(btnBlankAttr);
    $('.btnButtonAlignment').val(btnButtonAlignment);

    //  Subs Form
    $('.formLayout').val(formLayout);
    $('.showNameField').val(showNameField);
    $('.successAction').val(successAction);
    $('.successURL').val(successURL);
    $('.successMessage').val(successMessage);
    $('.formBtnText').val(formBtnText);
    $('.formBtnHeight').val(formBtnHeight);
    $('.formBtnWidth').val(formBtnWidth);
    $('.formBtnBgColor').val(formBtnBgColor);
    $('.formBtnColor').val(formBtnColor);
    $('.formBtnHoverBgColor').val(formBtnHoverBgColor);
    $('.formBtnFontSize').val(formBtnFontSize);
    $('.formBtnBorderWidth').val(formBtnBorderWidth);
    $('.formBtnBorderColor').val(formBtnBorderColor);
    $('.formBtnBorderRadius').val(formBtnBorderRadius);

    //video
    $('.videoMpfour').val(videoMpfour);
    $('.videoWebM').val(videoWebM);
    $('.videoThumb').val(videoThumb);
    $('.vidAutoPlay').val(vidAutoPlay);
    $('.vidLoop').val(vidLoop); 
    $('.vidControls').val(vidControls);

    // Audio
    $('.audioOgg').val(this_widget_audio['audioOgg']);
    $('.audioMpThree').val(this_widget_audio['audioMpThree']);
    $('.audioAutoPlay').val(this_widget_audio['audioAutoPlay']);
    $('.audioLoop').val(this_widget_audio['audioLoop']);
    $('.audioControls').val(this_widget_audio['audioControls']);

    // Widget Posts Slider
    $('.psAutoplay').val(psAutoplay);
    $('.psSlideDelay').val(psSlideDelay);
    $('.psSlideLoop').val(psSlideLoop);
    $('.psSlideTransition').val(psSlideTransition);
    $('.psPostsNumber').val(psPostsNumber);
    $('.psDots').val(psDots);
    $('.psArrows').val(psArrows);
    $('.psFtrImage').val(psFtrImage);
    $('.psFtrImageSize').val(psFtrImageSize);
    $('.psExcerpt').val(psExcerpt);
    $('.psReadMore').val(psReadMore);
    $('.psMoreLinkText').val(psMoreLinkText);
    $('.psHeadingSize').val(psHeadingSize);
    $('.psTextAlignment').val(psTextAlignment);
    $('.psBgColor').val(psBgColor);
    $('.psTxtColor').val(psTxtColor);
    $('.psHeadingTxtColor').val(psHeadingTxtColor);
    $('.psPostType').val(psPostType);
    $('.psPostsOrderBy').val(psPostsOrderBy);
    $('.psPostsOrder').val(psPostsOrder);
    $('.psPostsFilterBy').val(psPostsFilterBy);
    $('.psFilterValue').val(psFilterValue);

      // Icons Widget
    $('.pbicp-auto').val(pbSelectedIcon);
    $('.pbSelectedIcon').children().attr('class',pbSelectedIcon);
    $('.pbIconSize').val(pbIconSize);
    $('.pbIconRotation').val(pbIconRotation);
    $('.pbIconColor').val(pbIconColor);


    // Counter Widget
    $('.counterStartingNumber').val(counterStartingNumber);
    $('.counterEndingNumber').val(counterEndingNumber);
    $('.counterNumberPrefix').val(counterNumberPrefix);
    $('.counterNumberSuffix').val(counterNumberSuffix);
    $('.counterAnimationTime').val(counterAnimationTime);
    $('.counterTitle').val(counterTitle);
    $('.counterTextColor').val(counterTextColor);
    $('.counterTitleColor').val(counterTitleColor);
    $('.counterNumberFontSize').val(counterNumberFontSize);
    $('.counterTitleFontSize').val(counterTitleFontSize);

    // Shortcode Widget
    $('.shortCodeInput').val(this_widget_shortcode['shortCodeInput']);


    $('.pbselIconStyles').attr('style', 'transform: rotate('+pbIconRotation+ 'deg); color:'+pbIconColor+'; font-size:'+pbIconSize+'px;');

    $('#btn-prev').text(btnText);
    $('#btn-prev').attr('style','padding: '+btnHeight+'px '+btnWidth+'px; color:'+btnTextColor+'; background-color:'+btnBgColor+'; border :'+btnBorderWidth+'px solid'+btnBorderColor+'; border-radius:'+btnBorderRadius+'px; font-size:'+btnFontSize+'px;');

    //console.log( );

    $('.widgetBgColor').parent().parent().css('margin-left','0');
    $('.widgetBgColor').parent().siblings('.wp-color-result').children().css('background-color',widgetBgColor);
    $('#ftr-menu-color').parent().parent().css('margin-left','10px');
    $('#ftr-menu-color').parent().prev().css('background-color',menuColor);
    $('#btnColor').parent().prev().css('background-color',btnTextColor);
    $('#btnBgColor').parent().prev().css('background-color',btnBgColor);
    $('#btnHoverBgColor').parent().prev().css('background-color',btnHoverBgColor);
    $('#btnBorderColor').parent().prev().css('background-color',btnBorderColor);

    $('#formBtnColor').parent().prev().css('background-color',formBtnColor);
    $('#formBtnBgColor').parent().prev().css('background-color',formBtnBgColor);
    $('#formBtnHoverBgColor').parent().prev().css('background-color',formBtnHoverBgColor);
    $('#formBtnBorderColor').parent().prev().css('background-color',formBtnBorderColor);

    $('.psBgColor').parent().prev().css('background-color',psBgColor);
    $('.psTxtColor').parent().prev().css('background-color',psTxtColor);
    $('.psHeadingTxtColor').parent().prev().css('background-color',psHeadingTxtColor);

    $('.pbIconColor').parent().prev().css('background-color',pbIconColor);


    // Editor Widget Options
    var editorID = 'columnContent';
    if ($('#wp-'+editorID+'-wrap').hasClass("tmce-active"))
        tinyMCE.get(editorID).setContent(editorContent);
    else
      $('#'+editorID).val(editorContent);
      
    //$('#columnContent').val(this_column_content);

    switch (this_widget_type) { 
        case 'wigt-WYSIWYG':
          $('.pbp-widgets').hide(100);
          $('.wdt-editor').slideDown(500);
          break;
        case 'wigt-img':
          $('.pbp-widgets').hide(100);
          $('.wdt-img').slideDown(500);
          break;
        case 'wigt-menu':
          $('.pbp-widgets').hide(100);
          $('.wdt-menu').slideDown(500);
          break;
        case 'wigt-smuzform':
          $('.pbp-widgets').hide(100);
          $('.wdt-smuzform').slideDown(500);
          break;
        case 'wigt-slider':
          $('.pbp-widgets').hide(100);
          $('.wdt-slider').slideDown(500);
          break;
        case 'wigt-btn-gen':
          $('.pbp-widgets').hide(100);
          $('.wdt-btn-gen').slideDown(500);
          break;
          case 'wigt-Sform':
          $('.pbp-widgets').hide(100);
          $('.wdt-sForm').slideDown(500);
          break;
          case 'wigt-PostSlider':
          $('.pbp-widgets').hide(100);
          $('.wdt-postsSlider').slideDown(500);
          break;
          case 'wigt-TestimonialSlider':
          $('.pbp-widgets').hide(100);
          $('.wdt-testimonialSlider').slideDown(500);
          break;
          case 'wigt-SocialFeed':
          $('.pbp-widgets').hide(100);
          $('.wdt-socialFeed').slideDown(500);
          break;
          case 'wigt-pb-form':
          $('.pbp-widgets').hide(100);
          $('.wdt-pb-form').slideDown(500);
          break;
          case 'wigt-video':
          $('.pbp-widgets').hide(100);
          $('.wdt-video').slideDown(500);
          break;
          case 'wigt-pb-postSlider': 
          $('.pbp-widgets').hide(100);
          $('.wdt-pbPostSlider').slideDown(500);
          break;
          case 'wigt-pb-icons': 
          $('.pbp-widgets').hide(100);
          $('.wdt-icons').slideDown(500);
          break;
          case 'wigt-pb-counter': 
          $('.pbp-widgets').hide(100);
          $('.wdt-counter').slideDown(500);
          break;
          case 'wigt-pb-audio': 
          $('.pbp-widgets').hide(100);
          $('.wdt-audio').slideDown(500);
          break;
          case 'wigt-pb-shortcode':
          $('.pbp-widgets').hide(100);
          $('.wdt-shortcode').slideDown(500);
          break;
        default:
          $('.pbp-widgets').hide(100);
          $('.wdt-droppable').slideDown(100);
          $('.wdt-editor, .wdt-img, .wdt-menu, .wdt-smuzform').css('display','none');
          break;
      }

    var that = this.model.cid;
      $('.closeWidgetPopup').attr('data-CurrWidget',that);
      $('.closeWidgetPopupIcon').attr('data-CurrWidget',that);
    },
  updateWidget: function () {

    var widgetType = $('input[data-widgetType-id="'+this.model.cid+'"]').val();
    var widgetStyling     = $('.widgetStyling').val();
    var widgetMtop        = $('.widgetMtop').val();
    var widgetMbottom     = $('.widgetMbottom').val();
    var widgetMleft       = $('.widgetMleft').val();
    var widgetMright      = $('.widgetMright').val();
    var widgetBgColor      = $('.widgetBgColor').val();
    var widgetAnimation      = $('.widgetAnimation').val();
    
    var widgetImgUrl      = $('.ftr-img').val();
    var widgetImgSize     = $('#ftr-img-size').val();
    var widgetImgAlignment= $('#ftr-img-alignment').val();
    var widgetMenuName    = $('#ftr-menu-select').val();
    var widgetMenuStyle   = $('input[name=ftr-menu-select-style]:checked').val();
    var widgetMenuColor   = $('#ftr-menu-color').val();
    var formName          = $('#select_smuz_form').val();
    var sliderName        = $('#select_smuz_slider').val();
    var sFormName         = $('#select_subscribe_form').val();
    var postsSliderName   = $('#select_posts_slider').val();
    var testimonialSliderName = $('#select_testimonials_slider').val();
    var socialFeedName    = $('#select_socialFeed').val();

    //btn-gen 
    var btnText = $('.btnText').val();
    btnLink = $('.btnLink').val();
    btnHeight = $('.btnHeight').val();
    btnWidth = $('.btnWidth').val();
    btnColor = $('.btnColor').val();
    btnFontSize = $('.btnFontSize').val();
    btnBgColor = $('.btnBgColor').val();
    btnHoverBgColor = $('.btnHoverBgColor').val();
    btnBorderWidth = $('.btnBorderWidth').val();
    btnBorderColor = $('.btnBorderColor').val();
    btnBorderRadius = $('.btnBorderRadius').val();
    btnBlankAttr = $('.btnBlankAttr').val();
    btnButtonAlignment = $('.btnButtonAlignment').val();


    // subs form
    var this_widget_subscribeForm = this.model.get('widgetSubscribeForm');
    pbFormID = this_widget_subscribeForm['pbFormID'];

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

    // Widget Posts Slider
    var this_widget_pbPS = this.model.get('widgetPBPostsSlider');
    psAutoplay = this_widget_pbPS['psAutoplay'];
    psSlideDelay = this_widget_pbPS['psSlideDelay'];
    psSlideLoop = this_widget_pbPS['psSlideLoop'];
    psSlideTransition = this_widget_pbPS['psSlideTransition'];
    psPostsNumber = this_widget_pbPS['psPostsNumber'];
    psDots = this_widget_pbPS['psDots'];
    psArrows = this_widget_pbPS['psArrows'];
    psFtrImage = this_widget_pbPS['psFtrImage'];
    psFtrImageSize = this_widget_pbPS['psFtrImageSize'];
    psExcerpt = this_widget_pbPS['psExcerpt'];
    psReadMore = this_widget_pbPS['psReadMore'];
    psMoreLinkText = this_widget_pbPS['psMoreLinkText'];
    psHeadingSize = this_widget_pbPS['psHeadingSize'];
    psTextAlignment = this_widget_pbPS['psTextAlignment'];
    psBgColor = this_widget_pbPS['psBgColor'];
    psTxtColor = this_widget_pbPS['psTxtColor'];
    psHeadingTxtColor = this_widget_pbPS['psHeadingTxtColor'];
    psPostType = this_widget_pbPS['psPostType'];
    psPostsOrderBy = this_widget_pbPS['psPostsOrderBy'];
    psPostsOrder = this_widget_pbPS['psPostsOrder'];
    psPostsFilterBy = this_widget_pbPS['psPostsFilterBy'];
    psFilterValue = this_widget_pbPS['psFilterValue'];

    // video
    videoMpfour = $('.videoMpfour').val();
    videoWebM = $('.videoWebM').val();
    videoThumb = $('.videoThumb').val();
    vidAutoPlay = $('.vidAutoPlay').val();
    vidLoop = $('.vidLoop').val(); 
    vidControls = $('.vidControls').val();


    // Icons Widget
    var this_widget_pbIcon = this.model.get('widgetIcons');
    pbSelectedIcon = this_widget_pbIcon['pbSelectedIcon'];
    pbIconSize = this_widget_pbIcon['pbIconSize'];
    pbIconRotation = this_widget_pbIcon['pbIconRotation'];
    pbIconColor = this_widget_pbIcon['pbIconColor'];


    // Counter Widget
    var this_widget_pbCounter = this.model.get('widgetCounter');
    pbCounterID = this_widget_pbCounter['pbCounterID'];
    counterStartingNumber = this_widget_pbCounter['counterStartingNumber'];
    counterEndingNumber = this_widget_pbCounter['counterEndingNumber'];
    counterNumberPrefix = this_widget_pbCounter['counterNumberPrefix'];
    counterNumberSuffix = this_widget_pbCounter['counterNumberSuffix'];
    counterAnimationTime = this_widget_pbCounter['counterAnimationTime'];
    counterTitle = this_widget_pbCounter['counterTitle'];
    counterTextColor = this_widget_pbCounter['counterTextColor'];
    counterNumberFontSize = this_widget_pbCounter['counterNumberFontSize'];
    counterTitleFontSize = this_widget_pbCounter['counterTitleFontSize'];

    //audio widget
    audioOgg = $('.audioOgg').val();
    audioMpThree = $('.audioMpThree').val();
    audioAutoPlay = $('.audioAutoPlay').val();
    audioLoop = $('.audioLoop').val();
    audioControls = $('.audioControls').val();

    // shortcode widget
    shortCodeInput = $('.shortCodeInput').val();

    var editorID = 'columnContent';
    if($('#wp-'+editorID+'-wrap').hasClass("tmce-active")){
        var widgetEditorData = tinyMCE.get(editorID).getContent({format : 'raw'});
    }else{
        var widgetEditorData = $('#'+editorID).val();
    }
    //console.log(widgetAnimation);
      this.model.set({
        widgetType:widgetType,
        widgetStyling:widgetStyling,
        widgetMtop:widgetMtop,
        widgetMleft:widgetMleft,
        widgetMbottom:widgetMbottom,
        widgetMright:widgetMright,
        widgetBgColor: widgetBgColor,
        widgetAnimation: widgetAnimation,
        widgetWYSIWYG: {
          widgetContent:widgetEditorData
        },
        widgetMenu:{
          menuName: widgetMenuName,
          menuStyle: widgetMenuStyle,
          menuColor: widgetMenuColor
        },
        widgetImg:{
          imgUrl: widgetImgUrl,
          imgSize: widgetImgSize,
          imgAlignment: widgetImgAlignment
        },
        widgetForm:{
          formName: formName
        },
        widgetSlider:{
          sliderName: sliderName
        },
        widgetSform:{
          sFormName: sFormName
        },
        widgetPostSlider:{
          postsSliderName: postsSliderName
        },
        widgetTestimonialSlider:{
          testimonialSliderName: testimonialSliderName
        },
        widgetSocialFeed:{
          socialFeedName: socialFeedName
        },
        widgetButton:{
          btnText: btnText,
          btnLink: btnLink,
          btnTextColor: btnColor,
          btnFontSize: btnFontSize,
          btnBgColor: btnBgColor,
          btnWidth: btnWidth,
          btnHeight: btnHeight,
          btnHoverBgColor: btnHoverBgColor,
          btnBlankAttr: btnBlankAttr,
          btnBorderColor: btnBorderColor,
          btnBorderWidth: btnBorderWidth,
          btnBorderRadius: btnBorderRadius,
          btnButtonAlignment: btnButtonAlignment,
        },
        widgetSubscribeForm:{
          pbFormID: pbFormID,
          formLayout: formLayout,
          showNameField: showNameField,
          successAction:successAction,
          successURL:successURL,
          successMessage:successMessage,
          formBtnText:formBtnText,
          formBtnHeight:formBtnHeight,
          formBtnWidth:formBtnWidth,
          formBtnBgColor:formBtnBgColor,
          formBtnColor:formBtnColor,
          formBtnHoverBgColor:formBtnHoverBgColor,
          formBtnFontSize:formBtnFontSize,
          formBtnBorderWidth:formBtnBorderWidth,
          formBtnBorderColor:formBtnBorderColor,
          formBtnBorderRadius:formBtnBorderRadius,
        },
        widgetVideo:{
          videoWebM: videoWebM,
          videoMpfour: videoMpfour,
          videoThumb: videoThumb,
          vidAutoPlay: vidAutoPlay,
          vidLoop: vidLoop,
          vidControls: vidControls
        },
        widgetPBPostsSlider:{
          psAutoplay: psAutoplay,
          psSlideDelay: psSlideDelay,
          psSlideLoop: psSlideLoop,
          psSlideTransition: psSlideTransition,
          psPostsNumber: psPostsNumber,
          psDots: psDots,
          psArrows: psArrows,
          psFtrImage: psFtrImage,
          psFtrImageSize: psFtrImageSize,
          psExcerpt: psExcerpt,
          psReadMore: psReadMore,
          psMoreLinkText: psMoreLinkText,
          psHeadingSize: psHeadingSize,
          psTextAlignment: psTextAlignment,
          psBgColor: widgetBgColor,
          psTxtColor: psTxtColor,
          psHeadingTxtColor: psHeadingTxtColor,
          psPostType: psPostType,
          psPostsOrderBy: psPostsOrderBy,
          psPostsOrder: psPostsOrder,
          psPostsFilterBy: psPostsFilterBy,
          psFilterValue: psFilterValue,
          },
        widgetIcons:{
          pbSelectedIcon: pbSelectedIcon,
          pbIconSize: pbIconSize,
          pbIconRotation: pbIconRotation,
          pbIconColor: pbIconColor,
        },
        widgetCounter:{
          pbCounterID: pbCounterID,
          counterStartingNumber: counterStartingNumber,
          counterEndingNumber:counterEndingNumber,
          counterNumberPrefix: counterNumberPrefix,
          counterNumberSuffix: counterNumberSuffix,
          counterAnimationTime: counterAnimationTime,
          counterTitle: counterTitle,
          counterTextColor: counterTextColor,
          counterTitleColor: counterTitleColor,
          counterNumberFontSize: counterNumberFontSize,
          counterTitleFontSize: counterTitleFontSize,
        },
        widgetAudio:{
          audioOgg: audioOgg,
          audioMpThree: audioMpThree,
          audioAutoPlay: audioAutoPlay,
          audioLoop: audioLoop,
          audioControls: audioControls
        },
        widgetShortCode: {
          shortCodeInput: shortCodeInput,
        },
      });

      //alert(this.model.cid);
      $('.columnWidgetPopup').slideUp('200');
      $(this.el).html('');
      this.render();
  },
  duplicateWidget: function () {
      newModel = this.model.clone();
      //console.log(newModel.attributes);
      app.widgetList.add(newModel.attributes);
      $(this.el).html('');
      this.render();
  }


});

}( jQuery ) );