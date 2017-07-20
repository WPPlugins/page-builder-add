( function( $ ) { 

function pbsubscribeFormWidgetRender(this_widget_subscribeForm){

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


}( jQuery ) );