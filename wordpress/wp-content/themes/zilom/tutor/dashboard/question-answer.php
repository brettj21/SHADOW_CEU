<?php

/**
 * @package TutorLMS/Templates
 * @version 1.6.4
 */

?>

<h2><?php echo esc_html__('Question & Answer', 'zilom'); ?></h2>
<div class="tutor-dashboard-content-inner">

<?php
$per_page = 10;
$current_page = max( 1, tutils()->avalue_dot('current_page', $_GET) );
$offset = ($current_page - 1) * $per_page;

$total_items = tutils()->get_total_qa_question();
$questions = tutils()->get_qa_questions($offset,  $per_page);

if (tutils()->count($questions)) {
?>
    <div class="tutor-dashboard-info-table-wrap">
        <table class="tutor-dashboard-info-table table-question-answer">
            <tr>
                <th><?php echo esc_html__('Question', 'zilom'); ?></th>
                <th><?php echo esc_html__('Student', 'zilom'); ?></th>
                <th><?php echo esc_html__('Course', 'zilom'); ?></th>
                <th><?php echo esc_html__('Answer', 'zilom'); ?></th>
                <th></th>
            </tr>
            <?php
            foreach ($questions as $question) { ?>
                <tr id="tutor-dashboard-question-<?php echo esc_attr($question->comment_ID); ?>">
                    <td><a href="<?php echo tutils()->get_tutor_dashboard_page_permalink('question-answer/answers?question_id='.$question->comment_ID); ?>"><?php echo esc_html($question->question_title); ?></a></td>
                    <td><?php echo esc_html($question->display_name); ?></td>
                    <td><?php echo esc_html($question->post_title); ?></td>
                    <td><?php echo esc_html($question->answer_count); ?></td>
                    <td>
                        <a href="#tutor-question-delete" class="tutor-dashboard-element-delete-btn" data-id="<?php echo esc_attr($question->comment_ID); ?>">
                            <i class="tutor-icon-garbage"></i> <?php echo esc_html__('Delete', 'zilom') ?>
                        </a>
                    </td>
                </tr>
            <?php
            }
            ?>
        </table>
        <div class="tutor-pagination">
            <?php

            echo paginate_links( array(
                'format' => '?current_page=%#%',
                'current' => $current_page,
                'total' => ceil($total_items/$per_page)
            ) );
            ?>
        </div>
        
        <div class="tutor-frontend-modal" data-popup-rel="#tutor-question-delete" style="display: none">
            <div class="tutor-frontend-modal-overlay"></div>
            <div class="tutor-frontend-modal-content">
                <button class="tm-close tutor-icon-line-cross"></button>

                <div class="tutor-modal-body tutor-course-delete-popup">
                    <img src="<?php echo tutor()->url . 'assets/images/delete-icon.png' ?>" alt="<?php echo esc_attr__('Delete', 'zilom') ?>">
                    <h3><?php echo esc_html__('Delete This Question?', 'zilom'); ?></h3>
                    <p><?php echo esc_html__("You are going to delete this question, it can't be undone", 'zilom'); ?></p>
                    <div class="tutor-modal-button-group">
                        <form action="" id="tutor-dashboard-delete-element-form">
                            <input type="hidden" name="action" value="tutor_delete_dashboard_question">
                            <input type="hidden" name="question_id" id="tutor-dashboard-delete-element-id" value="">
                            <button type="button" class="tutor-modal-btn-cancel"><?php echo esc_html__('Cancel', 'zilom') ?></button>
                            <button type="submit" class="tutor-danger tutor-modal-element-delete-btn"><?php echo esc_html__('Yes, Delete Question', 'zilom') ?></button>
                        </form>
                    </div>
                </div>
                
            </div> <!-- tutor-frontend-modal-content -->
        </div> <!-- tutor-frontend-modal -->
    </div>
<?php
} else {
    echo '<div class="alert alert-primary">';
        echo esc_html__('No question is available', 'zilom');
    echo '</div>'; 
}
 ?>
</div>