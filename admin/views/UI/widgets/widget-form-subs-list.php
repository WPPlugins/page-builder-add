<?php if ( ! defined( 'ABSPATH' ) ) exit;

$ssm_subscribers_list = get_post_meta($post->ID,'ssm_subscribers_list',true);
    //update_post_meta( $post->ID, 'ssm_subscribers_list', '', $unique = false);
    //var_dump($ssm_subscribers_list);

    if (empty($ssm_subscribers_list)) {
        $hidebtn = 'none';
      $ssm_subscribers_list[0] = array(
                'name' => 'Example', 
                'email' => 'example@example.com',
            );
    }
?>
<div style='padding:50px; margin:0 auto; margin-top:50px; font-family:sans-serif,arial;font-size:17px; width:60%;'>
<table class='w3-table w3-striped w3-bordered w3-card-4' style="max-width: 750px;">
	<tr class="w3-red">
		<th>Name</th>
		<th>Email</th>
	</tr>
<?php foreach ( $ssm_subscribers_list as $ssm_result ) { ?>
    <tr>
        <td><?php echo $ssm_result['name']; ?></td>
        <td><?php echo $ssm_result['email']; ?></td>
    </tr>
<?php } ?>

</table>
</div>
  <br>
  <br>
  <div></div>
  <form></form>
  
  <form method="post" class="download_file_link" action="<?php echo ULPB_PLUGIN_URL.'/admin/views/UI/widgets/subscriber-list-download.php?download_file=LPB-subcribers-list.csv'; ?>">

<input type="hidden" name="ps_ID" value="<?php echo $post->ID; ?>">
<?php if (!empty($ssm_subscribers_list)) { ?>
<input type="submit" style='background:#F27935; color:#fff; text-decoration:none;padding:15px;' value="DOWNLOAD LIST" >
<?php } ?>
</form>
  <br>
  <br>
  <form method="post" class="empty_button_form" action="<?php echo admin_url('admin-ajax.php?action=ulpb_subscribe_list_empty'); ?>">
  <input type="hidden" name="ps_ID" value="<?php echo $post->ID; ?>">
  <input type="submit" style='background:#F27935; color:#fff; text-decoration:none;padding:15px;' value="Empty List">
 <p id="response">Note : Deleted email addresses can't be recovered. Backup subscribers data before deleting.</p>
  </form>
  <br>


<script type="text/javascript">

		(function($){
    $(document).ready(function() {
    $('.empty_button_form').on('submit',function(){
         
        // Add text 'loading...' right after clicking on the submit button. 
        $('#response').text('Processing'); 
         
        var form = $(this);
        $.ajax({
            url: form.attr('action'),
            method: form.attr('method'),
            data: form.serialize(),
            success: function(result){
                $('.download_file_link').css('display','none');
                if (result == 'Success'){
                    $('#response').text(result);  
                }else {
                    $('#response').text(result);
                }
            }
        });
         
        // Prevents default submission of the form after clicking on the submit button. 
        return false;   
    });

    $('.download_button_form').on('submit',function(){
         
        // Add text 'loading...' right after clicking on the submit button. 
        $('#response').text('Processing'); 
         alert('he')
        var form = $(this);
        $.ajax({
            url: form.attr('action'),
            method: form.attr('method'),
            data: form.serialize(),
            success: function(result){
                if (result == 'success'){
                    $('#response').text(result);  
                }else {
                    $('#response').text(result);
                }
            }
        });
         
        // Prevents default submission of the form after clicking on the submit button. 
        return false;   
    });
});
})(jQuery);

	</script>
	<style type="text/css">
    
        .w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}4
		.w3-table-all{border:1px solid #ccc}
		.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}
		.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}
		.w3-table-all tr:nth-child(odd){background-color:#fff}
		.w3-table-all tr:nth-child(even){background-color:#f1f1f1}
		.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}
		.w3-centered tr th,.w3-centered tr td{text-align:center}
		.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}
		.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}
		.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}
		.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}
    </style>
<?php 
?>