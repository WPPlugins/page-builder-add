( function( $ ) {
app.rowList = new app.RowCollection();
app.widgetList = new app.WidgetCollection();
app.PageBuilderModel = new app.ULPBPage();

var row = new app.Row();
var widget = new app.ColWidget();
//var savedPage = app.PageBuilderModel.fetch();
app.PageBuilderModel.fetch({
    success: function() { 
      var Rows = app.PageBuilderModel.get('Rows');
      var pageOptions = app.PageBuilderModel.get('pageOptions');
      var pageStatus = app.PageBuilderModel.get('pageStatus');
      var frontPage = pageOptions['frontPage'];
      var loadWpHead = pageOptions['loadWpHead'];
      var loadWpFooter = pageOptions['loadWpFooter'];
      var pageSeoName = pageOptions['pageSeoName'];
      var pageLink = pageOptions['pageLink'];
      var pageSeoDescription = pageOptions['pageSeoDescription'];
      var pageSeoKeywords = pageOptions['pageSeoKeywords'];
      var pageFavIconUrl = pageOptions['pageFavIconUrl'];
      var VariantB_ID = pageOptions['VariantB_ID'];

      var pageBgColor = pageOptions['pageBgColor'];
      var pageBgImage = pageOptions['pageBgImage'];
      var pagePadding = pageOptions['pagePadding'];
      var pagePaddingTop = pagePadding['pagePaddingTop'];
      var pagePaddingBottom = pagePadding['pagePaddingBottom'];
      var pagePaddingRight = pagePadding['pagePaddingRight'];
      var pagePaddingLeft = pagePadding['pagePaddingLeft'];

      var formMailchimp = app.PageBuilderModel.get('formMailchimp');
      var mailchimpListIdHolder = formMailchimp['listId'];
      var mailchimpApiKeyHolder = formMailchimp['apiKey'];
      
    $('#title').val(pageSeoName);
    $('#new-post-slug').val(pageLink);
    $('#title-prompt-text').html(' ');
    $('.PbPageStatus').val(pageStatus);
    $('.pageSeoDescription').val(pageSeoDescription);
    $('.pageSeoKeywords').val(pageSeoKeywords);
    $('.pageBgImage').val(pageBgImage);
    $('.pageBgColor').val(pageBgColor);
    $('.pagePaddingTop').val(pagePaddingTop);
    $('.pagePaddingBottom').val(pagePaddingBottom);
    $('.pagePaddingLeft').val(pagePaddingLeft);
    $('.pagePaddingRight').val(pagePaddingRight); 
    $('.pageFavIconUrl').val(pageFavIconUrl);
    $('.VariantB_ID').val(VariantB_ID);

    $('.mailchimpListIdHolder').val(mailchimpListIdHolder); 
    $('.mailchimpApiKeyHolder').val(mailchimpApiKeyHolder)
    
    $('.pageBgColor').parent().prev().css('background-color',pageBgColor);
    $('#pbWrapper').attr('style','background-image: url("'+pageBgImage+'"); background-size:cover; background-color:'+pageBgColor+'; padding: '+pagePaddingTop+'% '+pagePaddingRight+'% '+pagePaddingBottom+'% '+pagePaddingLeft+'%  ;  ');

      _.each( Rows, function(Row, index ) {
        app.rowList.add(Row);
      });
     //console.log(JSON.stringify(app.PageBuilderModel) );
    },
    error: function() {
        console.log('Failed to fetch!');
    }
});


var PgCollectionView = new Backbone.CollectionView( {
    el : $( "#container" ),
    modelView : app.RowView,
    collection : app.rowList,
    sortable: true,
    selectable: false,
    emptyListCaption: '<h3>Add some rows.</h3>'
} );

/*
var PgFullWidthCollectionView = new Backbone.CollectionView( {
    el : $( "#fullWidthContainer" ),
    modelView : app.RowView,
    collection : app.rowList,
    sortable: true,
    selectable: false,
    emptyListCaption: '<h3>Add some rows.</h3>'
} );
*/

var widgetCollectionView = new Backbone.CollectionView( {
    el : $( "#widgets" ),
    modelView : app.WidgetView,
    collection : app.widgetList,
    sortable: true,
    selectable: false,
    emptyListCaption: 'Add some widgets.'
} );

PgCollectionView.render();
//PgFullWidthCollectionView.render();
widgetCollectionView.render();
}( jQuery ) );