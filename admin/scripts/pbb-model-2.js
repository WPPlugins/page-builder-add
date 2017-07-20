( function( $ ) {
app.ULPBPage = Backbone.Model.extend({
      defaults:{
        pageID: P_ID,
        postType: thisPostType,
        pageLink: '',
        pageTitle:'',
        pageStatus:'unpublished',
        pageBuilderVersion: PageBuilder_Version,
        pageOptions: {
          setFrontPage: 0,
          loadWpHead:0,
          loadWpFooter:0,
          pageBgImage: ' ',
          pageBgColor: 'transparent',
          pagePadding: '0',
          pageSeoName: '',
          pageSeoDescription: '',
          pageSeoKeywords: '',
          pageFavIconUrl: '',
          VariantB_ID: '',
        },
        formMailchimp:{
          listId:'',
          apiKey:'',
        },
        rows:{}
      },
      url: URLL
});

app.ColWidget = Backbone.Model.extend({
      defaults:{
      	widgetType:' ',
        widgetStyling:'/* Custom CSS for widget here. */',
        widgetMtop:'',
        widgetMleft:'',
        widgetMbottom:'',
        widgetMright:'',
        widgetBgColor: 'transparent',
        widgetAnimation: 'none',
        widgetWYSIWYG: {		
        	widgetContent: ' '
        },
        widgetMenu:{
        	menuName: 'Select',
          menuStyle: 'menu-style-1',
          menuColor: '#333'
        },
        widgetImg:{
        	imgUrl: '/',
            imgSize: 'original',
            imgAlignment: 'default'
        },
        widgetForm:{
        	formName: 'Select'
        },
        widgetSlider:{
        	sliderName: 'Select'
        },
        widgetSform:{
          sFormName: 'Select'
        },
        widgetPostSlider:{
          postsSliderName: 'Select'
        },
        widgetTestimonialSlider:{
          testimonialSliderName: 'Select'
        },
        widgetSocialFeed:{
          socialFeedName: 'Select'
        },
        widgetButton:{
          btnText: 'Click Me',
          btnLink: '#',
          btnTextColor: '#fff',
          btnFontSize: '14px',
          btnBgColor: '#333',
          btnWidth: '40',
          btnHeight: '20',
          btnHoverBgColor: '#222',
          btnBlankAttr: '_blank',
          btnBorderColor: '',
          btnBorderWidth: '',
          btnBorderRadius: '10',
          btnButtonAlignment: 'Select',
        },
        widgetSubscribeForm:{
          pbFormID: 'ulpb_form'+Math.floor((Math.random() * 20000) + 100),
          formLayout: 'stacked',
          showNameField: 'block',
          successAction:'showMessage',
          successURL:'',
          successMessage:'Thanks for subscribing! Please check your email for further instructions.',
          formBtnText:'Subscribe',
          formBtnHeight:'20',
          formBtnWidth:'40',
          formBtnBgColor:'#333',
          formBtnColor:'#fff',
          formBtnHoverBgColor:'#e3e3e3',
          formBtnFontSize:'16',
          formBtnBorderWidth:'1',
          formBtnBorderColor:'#111',
          formBtnBorderRadius:'5',
        },
        widgetVideo:{
          videoWebM: '',
          videoMpfour: '',
          videoThumb: '',
          vidAutoPlay: 'no',
          vidLoop: 'no',
          vidControls: 'controls'
        },
        widgetPBPostsSlider:{
          psAutoplay: 'false',
          psSlideDelay: '1',
          psSlideLoop: 'true',
          psSlideTransition: 'fade',
          psPostsNumber: '10',
          psDots: 'true',
          psArrows: 'true',
          psFtrImage: 'true',
          psFtrImageSize: 'medium',
          psExcerpt: 'true',
          psReadMore: 'false',
          psMoreLinkText: 'Read More',
          psHeadingSize: '24',
          psTextAlignment: 'left',
          psBgColor: '#333',
          psTxtColor: '#fff',
          psHeadingTxtColor: '#fff',
          psPostType: 'post',
          psPostsOrderBy: 'date',
          psPostsOrder: 'Descending',
          psPostsFilterBy: 'none',
          psFilterValue: ' '
        },
        widgetIcons:{
          pbSelectedIcon: 'fa-archive',
          pbIconSize: '55',
          pbIconRotation: '0',
          pbIconColor: '#333',
        },
        widgetCounter:{
          pbCounterID: 'ulpb_counter'+Math.floor((Math.random() * 20000) + 100),
          counterStartingNumber: '0',
          counterEndingNumber: '100',
          counterNumberPrefix: '',
          counterNumberSuffix: '',
          counterAnimationTime: '1000',
          counterTitle: 'Cool Counter',
          counterTextColor: '#333',
          counterTitleColor: '#333',
          counterNumberFontSize: '36',
          counterTitleFontSize: '34',
        },
        widgetAudio:{
          audioOgg: '',
          audioMpThree: '',
          audioAutoPlay: 'no',
          audioLoop: 'no',
          audioControls: 'controls'
        },
        widgetShortCode: {
          shortCodeInput: '',
        },
      },
      url: '/'
});


app.RowCollection = Backbone.Collection.extend({
    model:app.Row
});

app.WidgetCollection = Backbone.Collection.extend({
    model:app.ColWidget
});


}( jQuery ) );