<?php
/**
 * @package TutorLMS/Templates
 * @version 1.4.3
 */

?>

<h2><?php echo esc_html__('Purchase History', 'zilom'); ?></h2>
<div class="tutor-dashboard-content-inner">
    <?php
    $orders = tutils()->get_orders_by_user_id();
    $monetize_by = tutils()->get_option('monetize_by');

    if (tutils()->count($orders)){
    	?>
        <div class="responsive-table-wrap">
            <table class="tutor-table">
                <tr>
                    <th><?php echo esc_html__('ID', 'zilom'); ?></th>
                    <th><?php echo esc_html__('Courses', 'zilom'); ?></th>
                    <th><?php echo esc_html__('Amount', 'zilom'); ?></th>
                    <th><?php echo esc_html__('Status', 'zilom'); ?></th>
                    <th><?php echo esc_html__('Date', 'zilom'); ?></th>
                </tr>
                <?php
                foreach ($orders as $order) {
                    if ($monetize_by === 'wc') {
                        $wc_order = wc_get_order($order->ID);
                        $price = tutils()->tutor_price($wc_order->get_total());
                        $status = tutils()->order_status_context($order->post_status);
                    } else if ($monetize_by === 'edd') {
                        $edd_order = edd_get_payment($order->ID);
                        $price = edd_currency_filter( edd_format_amount( $edd_order->total ), edd_get_payment_currency_code( $order->ID ) );
                        $status = $edd_order->status_nicename;
                    }
                    ?>
                    <tr>
                        <td>#<?php echo esc_html($order->ID); ?></td>
                        <td>
                            <?php
                            $courses = tutils()->get_course_enrolled_ids_by_order_id($order->ID);
                            if (tutils()->count($courses)){
                                foreach ($courses as $course){
                                    echo '<p><strong>'.get_the_title($course['course_id']).'</strong></p>';
                                }
                            }
                            ?>
                        </td>
                        <td><?php echo html_entity_decode($price); ?></td>
                        <td><?php echo html_entity_decode($status); ?></td>

                        <td>
                            <?php echo date_i18n(get_option('date_format'), strtotime($order->post_date)) ?>
                        </td>
                    </tr>
                    <?php
                }
                ?>
            </table>
        </div>

    	<?php
    }else{
    	echo '<div class="alert alert-primary">'; 
           echo esc_html__('No purchase history available', 'zilom');
        echo '</div>';    
    }
 ?>
</div>