( function( $ ) {
    app.Row = Backbone.Model.extend({
      defaults:{
        rowID: 'ulpb_Row'+Math.floor((Math.random() * 200000) + 100),
        rowHeight: 100,
        columns: 1,
        columnsDivRule:'none',
        rowData: {
          bg_color: 'transparent',
          bg_img: ' ',
          margin: {
            rowMarginTop: 0,
            rowMarginBottom: 0,
            rowMarginLeft: 0,
            rowMarginRight: 0,
          },
          padding:{
            rowPaddingTop: 0,
            rowPaddingBottom: 0,
            rowPaddingLeft: 0,
            rowPaddingRight: 0,
          },
          video:{
            rowBgVideoEnable: 'false',
            rowBgVideoLoop: 'loop',
            rowVideoMpfour: ' ',
            rowVideoWebM: ' ',
            rowVideoThumb: ' ',
          },
          customStyling: '#a { }',
          customJS: ' ',
        },
        column1: {
          colWidgets: 0,
          columnOptions:{
          bg_color: 'transparent',
          margin: {
            columnMarginTop: 0,
            columnMarginBottom: 0,
            columnMarginLeft: 0,
            columnMarginRight: 0,
          },
          padding:{
            columnPaddingTop: 0,
            columnPaddingBottom: 0,
            columnPaddingLeft: 0,
            columnPaddingRight: 0,
          },
          width: '',
          columnAnimation:'none',
          }
        },
        column2: {
          colWidgets: 0,
          columnOptions:{
          bg_color: 'transparent',
          margin: {
            columnMarginTop: 0,
            columnMarginBottom: 0,
            columnMarginLeft: 0,
            columnMarginRight: 0,
          },
          padding:{
            columnPaddingTop: 0,
            columnPaddingBottom: 0,
            columnPaddingLeft: 0,
            columnPaddingRight: 0,
          },
          width: '',
          columnAnimation:'none',
          }
        },
        column3: {
          colWidgets: 0,
          columnOptions:{
          bg_color: 'transparent',
          margin: {
            columnMarginTop: 0,
            columnMarginBottom: 0,
            columnMarginLeft: 0,
            columnMarginRight: 0,
          },
          padding:{
            columnPaddingTop: 0,
            columnPaddingBottom: 0,
            columnPaddingLeft: 0,
            columnPaddingRight: 0,
          },
          width: '',
          columnAnimation:'none',
          }
        },
        column4: {
          colWidgets: 0,
          columnOptions:{
          bg_color: 'transparent',
          margin: {
            columnMarginTop: 0,
            columnMarginBottom: 0,
            columnMarginLeft: 0,
            columnMarginRight: 0,
          },
          padding:{
            columnPaddingTop: 0,
            columnPaddingBottom: 0,
            columnPaddingLeft: 0,
            columnPaddingRight: 0,
          },
          width: '',
          columnAnimation:'none',
          }
        },
        column5: {
          colWidgets: 0,
          columnOptions:{
          bg_color: 'transparent',
          margin: {
            columnMarginTop: 0,
            columnMarginBottom: 0,
            columnMarginLeft: 0,
            columnMarginRight: 0,
          },
          padding:{
            columnPaddingTop: 0,
            columnPaddingBottom: 0,
            columnPaddingLeft: 0,
            columnPaddingRight: 0,
          },
          width: '',
          columnAnimation:'none',
          }
        },
        column6: {
          colWidgets: 0,
          columnOptions:{
          bg_color: 'transparent',
          margin: {
            columnMarginTop: 0,
            columnMarginBottom: 0,
            columnMarginLeft: 0,
            columnMarginRight: 0,
          },
          padding:{
            columnPaddingTop: 0,
            columnPaddingBottom: 0,
            columnPaddingLeft: 0,
            columnPaddingRight: 0,
          },
          width: '',
          columnAnimation:'none',
          }
        },
        column7: {
          colWidgets: 0,
          columnOptions:{
          bg_color: 'transparent',
          margin: {
            columnMarginTop: 0,
            columnMarginBottom: 0,
            columnMarginLeft: 0,
            columnMarginRight: 0,
          },
          padding:{
            columnPaddingTop: 0,
            columnPaddingBottom: 0,
            columnPaddingLeft: 0,
            columnPaddingRight: 0,
          },
          width: '',
          columnAnimation:'none',
          }
        },
        column8: {
          colWidgets: 0,
          columnOptions:{
          bg_color: 'transparent',
          margin: {
            columnMarginTop: 0,
            columnMarginBottom: 0,
            columnMarginLeft: 0,
            columnMarginRight: 0,
          },
          padding:{
            columnPaddingTop: 0,
            columnPaddingBottom: 0,
            columnPaddingLeft: 0,
            columnPaddingRight: 0,
          },
          width: '',
          columnAnimation:'none',
          }
        }
      },
      url: "/"
    });
/*
app.Column = Backbone.Model.extend({
  defaults: {
      colWidgets: 0,
      columnOptions:{
      bg_color: 'transparent',
      margin: {
        columnMarginTop: 0,
        columnMarginBottom: 0,
        columnMarginLeft: 0,
        columnMarginRight: 0,
        },
      padding:{
        columnPaddingTop: 0,
        columnPaddingBottom: 0,
        columnPaddingLeft: 0,
        columnPaddingRight: 0,
      },
      width: '',
      }
  }
});
*/

}( jQuery ) );