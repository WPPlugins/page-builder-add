<?php if ( ! defined( 'ABSPATH' ) ) exit;
	$colWidgets = $currentColumn['colWidgets'];
      for ($j = 0; $j < count($colWidgets); $j++) {  // widgets loop
          $thisWidget = $colWidgets[$j];
          $this_column_type = $thisWidget['widgetType'];
          $widgetStyling = $thisWidget['widgetStyling'];

          $widgetMtop = $thisWidget['widgetMtop'];
          $widgetMleft = $thisWidget['widgetMleft'];
          $widgetMbottom = $thisWidget['widgetMbottom'];
          $widgetMright = $thisWidget['widgetMright'];
          $widgetBgColor = $thisWidget['widgetBgColor'];

          if (isset($thisWidget['widgetAnimation'])) {

              $widgetAnimation = 'animated '.$thisWidget['widgetAnimation'];

          }else{
            $widgetAnimation = '';
          }


          //WYSIWYG Widget
          $this_widget_editor = $thisWidget['widgetWYSIWYG'];
          $thisWidgetContentEditor =  $this_widget_editor['widgetContent'];


          // IMG Widget
          $this_widget_img_content = $thisWidget['widgetImg'];
          $imgUrl  = $this_widget_img_content['imgUrl'];
          $imgSize = $this_widget_img_content['imgSize'];
          $imgAlignment = $this_widget_img_content['imgAlignment'];

          // BTN Widget
          $this_widget_btn_content = $thisWidget['widgetButton'];
          $btnText = $this_widget_btn_content['btnText'];
          $btnLink = $this_widget_btn_content['btnLink'];
          $btnAllignment = $this_widget_btn_content['btnButtonAlignment'];
          $btnTextColor = $this_widget_btn_content['btnTextColor'];
          $btnFontSize = $this_widget_btn_content['btnFontSize'];
          $btnBgColor = $this_widget_btn_content['btnBgColor'];
          $btnWidth = $this_widget_btn_content['btnWidth'];
          $btnHeight = $this_widget_btn_content['btnHeight'];
          $btnHoverBgColor = $this_widget_btn_content['btnHoverBgColor'];
          //$btnBlankAttr = $this_widget_btn_content['btnBlankAttr'];
          $btnBorderColor = $this_widget_btn_content['btnBorderColor'];
          $btnBorderWidth = $this_widget_btn_content['btnBorderWidth'];
          $btnBorderRadius = $this_widget_btn_content['btnBorderRadius'];
          $randomBtnClass = rand(10,99)*200+100;
          $this_widget_btn = "<style> .btn-$randomBtnClass:hover{ background-color: $btnHoverBgColor !important; background: $btnHoverBgColor !important;} </style>
            <div class='wdt-$this_column_type' style='text-align:$btnAllignment;'><a href='$btnLink' style='text-decoration:none !important;' target='' > <button class='btn-$randomBtnClass' style='color:$btnTextColor !important;font-size:$btnFontSize !important; background: $btnBgColor ; background-color: $btnBgColor; padding: $btnHeight"."px $btnWidth"."px !important; border: $btnBorderWidth"."px solid $btnBorderColor !important; border-radius: $btnBorderRadius"."px !important; text-align:center;'>$btnText</button></a></div>
            ";

          //Menu Widget
          $menuSpecificStyles = " ";
          $menuSpecificClass = " ";
          if ($this_column_type == 'wigt-menu') {
            $this_widget_menu_content = $thisWidget['widgetMenu'];
            $menuName = $this_widget_menu_content['menuName'];
            $menuStyle = $this_widget_menu_content['menuStyle'];
            $menuColor = $this_widget_menu_content['menuColor'];

            if ($menuStyle == 'menu-style-1' || $menuStyle == 'menu-style-4') {
              $menuSpecificStyles = "display: flex; justify-content: center; align-items: center;";
            } elseif ($menuStyle == 'menu-style-2') {
              $menuSpecificClass = "widget-$j-menuFixed";
            }

            include('menus/'.$menuStyle.'.php');
          }


          switch ($this_column_type) {
            case 'wigt-WYSIWYG':
              $widgetContent = do_shortcode($thisWidgetContentEditor);
              $contentAlignment = ' ';
              break;
            case 'wigt-img':
              $widgetContent = "<img src=".$imgUrl." style='text-align:".$imgAlignment.";' align=".$imgAlignment." class='ftr-img-".$Columni." img-".$imgSize."'>";
              $contentAlignment = $imgAlignment;
              break;
            case 'wigt-menu':
              $widgetContent = $this_widget_menu;
              $contentAlignment = ' ';
              break;
              case 'wigt-btn-gen':
              $widgetContent = $this_widget_btn;
              $contentAlignment = ' ';
              break;
              case 'wigt-pb-form':

                ob_start();
                $this_widget_subscribeForm = $thisWidget['widgetSubscribeForm'];
                $pbFormID = rand(10,99)*120+200;
                $formLayout = $this_widget_subscribeForm['formLayout'];
                $showNameField = $this_widget_subscribeForm['showNameField'];
                $successAction = $this_widget_subscribeForm['successAction'];
                $successURL = $this_widget_subscribeForm['successURL'];
                $successMessage = $this_widget_subscribeForm['successMessage'];
                $formBtnText = $this_widget_subscribeForm['formBtnText'];
                $formBtnHeight = $this_widget_subscribeForm['formBtnHeight'];
                $formBtnWidth = $this_widget_subscribeForm['formBtnWidth'];
                $formBtnBgColor = $this_widget_subscribeForm['formBtnBgColor'];
                $formBtnColor = $this_widget_subscribeForm['formBtnColor'];
                $formBtnHoverBgColor = $this_widget_subscribeForm['formBtnHoverBgColor'];
                $formBtnFontSize = $this_widget_subscribeForm['formBtnFontSize'];
                $formBtnBorderWidth = $this_widget_subscribeForm['formBtnBorderWidth'];
                $formBtnBorderColor = $this_widget_subscribeForm['formBtnBorderColor'];
                $formBtnBorderRadius = $this_widget_subscribeForm['formBtnBorderRadius'];
                $formDataSaveType = $this_widget_subscribeForm['formDataSaveType'];

                $formLayoutAction = " ";
                $formFieldWidth = '60%';
                $formButtonWidth = '30%';
                if ($showNameField  == 'block') { $formFieldWidth = '35%'; }
                if ($showNameField  == 'block' && $formLayout  == 'inline' ){ $showNameField = 'inline-block'; $formButtonWidth = '25%';}
                if ($formLayout  == 'stacked') { $formLayoutAction = "<br>"; $formFieldWidth = '95%'; $formButtonWidth = '95%'; }
                $randomFormBtnClass = rand(10,99)*120+200;
                $inputNameStyles = "display:".$showNameField."; width:".$formFieldWidth."; padding: ".$formBtnHeight."px 5px; font-size:".$formBtnFontSize."px;";
                $inputEmailStyles = "width:".$formFieldWidth."; padding: ".$formBtnHeight."px 5px; font-size:".$formBtnFontSize."px;";
                $inputButtonStyles = "width:".$formButtonWidth."; padding: ".$formBtnHeight."px ".$formBtnWidth."px; font-size:".$formBtnFontSize."px; background:".$formBtnBgColor."; color:".$formBtnColor."; border: ".$formBtnBorderWidth."px solid ".$formBtnBorderColor." !important; border-radius: ".$formBtnBorderRadius."px !important;    ";

                $this_widget_form_inputID = " <input type='hidden' name='sm_pID' value='".$post->ID."'> ";
                $this_widget_form_inputName = "<input type='text' name='sm_name' placeholder='Your name' style='".$inputNameStyles."' >".$formLayoutAction;
                $this_widget_form_inputEmail = "<input type='email' name='sm_email' placeholder='Your e-mail' style='".$inputEmailStyles."' >".$formLayoutAction.$formLayoutAction;
                $this_widget_form_inputSubmit = "<input type='submit' class='form-btn-$randomFormBtnClass' value='".$formBtnText."'  style='".$inputButtonStyles."'>";

                if (empty($formDataSaveType)) {
                  $SfactionURL = admin_url('admin-ajax.php?action=ulpb_subscribeForm_data');
                } elseif ($formDataSaveType == 'database') {
                  $SfactionURL = admin_url('admin-ajax.php?action=ulpb_subscribeForm_data');
                } elseif ($formDataSaveType == 'mailchimp') { 
                  $SfactionURL = admin_url('admin-ajax.php?action=ulpb_subscribeForm_mailchimp_data');
                }


               echo $this_widget_form = "<form id='ulpb_form".$pbFormID."' action='".$SfactionURL."' method='post'> ".$this_widget_form_inputID.$this_widget_form_inputName." ".$this_widget_form_inputEmail." ".$this_widget_form_inputSubmit."<p id='response'></p> </form>
                  <style>.form-btn-$randomFormBtnClass:hover{ background:$ !important; background-color:$formBtnHoverBgColor !important;}  </style>
                ";
                ?>
                <script type="text/javascript">
                  (function($){
                    $(document).ready(function() {

                    $('#ulpb_form'+'<?php echo $pbFormID; ?>').on('submit', function()  {
                      var successAction = "<?php echo $successAction; ?>";
                      var successMessage = "<?php echo $successMessage; ?>";
                      var successURL = "<?php echo $successURL; ?>";

                      var form = $(this);
                      var result = " ";
                        $.ajax({
                          url: form.attr('action'),
                          method: form.attr('method'),
                          data: form.serialize(),
                          success: function(result){
                              if (result == 'success'){
                                  if (successAction == 'redirect') {
                                    window.location.assign(successURL);
                                  } else{
                                    $('#ulpb_form'+'<?php echo $pbFormID; ?> #response').html(successMessage);
                                    $('#response').show('slow');  
                                  }
                              } else{
                                  $('#response').html(result);
                              }
                          }
                      });
                         
                        // Prevents default submission of the form after clicking on the submit button. 
                        return false;   
                    });

                  });

                    })(jQuery);

                  </script>
                <?php 
                $this_form = ob_get_contents();
                ob_end_clean();
                $widgetContent = $this_form;
                $contentAlignment = ' ';
              break;
              case 'wigt-video':
                $this_widget_widgetVideo = $thisWidget['widgetVideo'];
                $videoWebM = $this_widget_widgetVideo['videoWebM'];
                $videoMpfour = $this_widget_widgetVideo['videoMpfour'];
                $videoThumb = $this_widget_widgetVideo['videoThumb'];
                $vidAutoPlay = $this_widget_widgetVideo['vidAutoPlay'];
                $vidLoop = $this_widget_widgetVideo['vidLoop']; 
                $vidControls = $this_widget_widgetVideo['vidControls'];

                $widgetVideoRender = "<video ".$vidLoop." ".$vidAutoPlay." poster='".$videoThumb."' class='pbp_renderVideo' style='width:100%;' ".$vidControls."='true' ><source src='".$videoWebM."' type='video/webm'><source src='".$videoMpfour."' type='video/mp4'></video>";
                $widgetContent = $widgetVideoRender;
              break;
              case 'wigt-pb-postSlider':
                $this_widget_postsSlider = $thisWidget['widgetPBPostsSlider'];
                
                include 'widgets/widget-postslider.php';
                $widgetContent = $PSlider.$psInitJS;
              break;
              case 'wigt-pb-icons':
                $this_widget_widgetIcons = $thisWidget['widgetIcons'];
                $pbSelectedIcon = $this_widget_widgetIcons['pbSelectedIcon'];
                $pbIconSize = $this_widget_widgetIcons['pbIconSize'];
                $pbIconRotation = $this_widget_widgetIcons['pbIconRotation'];
                $pbIconColor = $this_widget_widgetIcons['pbIconColor'];

                $widgetIconStyles = 'transform: rotate('.$pbIconRotation. 'deg); color:'.$pbIconColor.'; font-size:'.$pbIconSize.'px; margin:0 auto;' ;
                $widgetIconRender = "<i class='$pbSelectedIcon' style='$widgetIconStyles' ></i>";

                $widgetContent = $widgetIconRender;
              break;
              case 'wigt-pb-counter':
                $this_widget_counter = $thisWidget['widgetCounter'];
                $pbCounterID = rand(10,99)*120+200;
                $counterStartingNumber = $this_widget_counter['counterStartingNumber'];
                $counterEndingNumber = $this_widget_counter['counterEndingNumber'];
                $counterNumberPrefix = $this_widget_counter['counterNumberPrefix'];
                $counterNumberSuffix = $this_widget_counter['counterNumberSuffix'];
                $counterAnimationTime = $this_widget_counter['counterAnimationTime'];
                $counterTitle = $this_widget_counter['counterTitle'];
                $counterTextColor = $this_widget_counter['counterTextColor'];
                $counterTitleColor = $this_widget_counter['counterTitleColor'];
                $counterNumberFontSize = $this_widget_counter['counterNumberFontSize'];
                $counterTitleFontSize = $this_widget_counter['counterTitleFontSize'];

                $counterScript = "
                <script> 
                $(window).scroll(function(event){
                  jQuery('#pb_counter-".$pbCounterID."').each(function (i, el){
                    var el = $(el);
                    if (el.visible(true)) {
                      el.html('$counterEndingNumber');
                      var currElementCounter = el; 
                      jQuery({ Counter: ".$counterStartingNumber." }).animate({ 
                        Counter: currElementCounter.text() 
                      },
                      { 
                        duration: ".$counterAnimationTime.", easing: 'swing',
                        step: function () { currElementCounter.text(Math.ceil(this.Counter)); 
                      }
                      });
                    }
                  }); 
                });
                </script>";

                $counterHTMLStyles = 'color:'.$counterTextColor.'; font-size:'.$counterNumberFontSize.'px; line-height:1.5;';

                $counterTitleStyles = 'color:'.$counterTitleColor.'; font-size:'.$counterTitleFontSize.'px; line-height:1.5;';

                $counterTitleHTML = '<div style="'.$counterTitleStyles.'" >'.$counterTitle.'</div>';

                $counterHTML = '<div style="'.$counterHTMLStyles.'" >'.$counterNumberPrefix.'<span id="pb_counter-'.$pbCounterID.'">'.$counterEndingNumber.'</span>'.$counterNumberSuffix.' </div> '.$counterTitleHTML;

                $widgetContent = $counterHTML . $counterScript;
              break;
              case 'wigt-pb-audio':
                $this_widget_audio = $thisWidget['widgetAudio'];
                $audioOgg = $this_widget_audio['audioOgg'];
                $audioMpThree = $this_widget_audio['audioMpThree'];
                $audioAutoPlay = $this_widget_audio['audioAutoPlay'];
                $audioLoop = $this_widget_audio['audioLoop'];
                $audioControls = $this_widget_audio['audioControls'];

                $audioPlayerHTML = '<br><audio '.$audioLoop.' '.$audioControls.' '.$audioAutoPlay.' style="width:100%;" > 
                  <source src="'.$audioOgg.'" type="audio/ogg">
                  <source src="'.$audioMpThree.'" type="audio/mpeg">
                  Your browser does not support the audio player. 
                </audio> <br>';
              $widgetContent = $audioPlayerHTML;
            break;
            case 'wigt-pb-shortcode':
              $this_widget_shortcode = $thisWidget['widgetShortCode'];
              $shortCodeInput = $this_widget_shortcode['shortCodeInput'];
              $widgetContent = do_shortcode( $shortCodeInput );
              $contentAlignment = ' ';
              break;
            default:
              $widgetContent = $thisWidgetContentEditor;
              $contentAlignment = ' ';
                break;
          } // column type switch ends here

          /*
          $widgetMtop = floor( ($widgetMtop/1268)*100);
          $widgetMright = floor( ($widgetMright/1268)*100);
          $widgetMbottom = floor( ($widgetMbottom/1268)*100);
          $widgetMleft = floor( ($widgetMleft/1268)*100); */
          
         /// $columnContentOld = 
          $widgetMarigns = "margin:".$widgetMtop."% ".$widgetMright."% ".$widgetMbottom."% ".$widgetMleft."%; background: $widgetBgColor; background-color:$widgetBgColor; text-align:$imgAlignment;";
          $columnContent = $columnContent."\n"."<div class='widget-$j $menuSpecificClass' style='$widgetMarigns $menuSpecificStyles  $widgetStyling' >".$widgetContent."</div>";
          ?>
          <script type="text/javascript">
            $(window).scroll(function(event) {
              $("#<?php echo $row["rowID"]."-$Columni"; ?> > .widget-<?php echo $j; ?>").each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                  el.addClass("<?php echo $widgetAnimation; ?>"); 
                }
              });
              
            });
          </script>
          <?php 
      } // widget loop ends here
?>