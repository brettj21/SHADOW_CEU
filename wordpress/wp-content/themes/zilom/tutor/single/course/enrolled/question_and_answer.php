<?php
/**
 * Question and answer
 *
 * @since v.1.0.0
 * @author themeum
 * @url https://themeum.com
 *
 * @package TutorLMS/Templates
 * @version 1.4.3
 */
global $post;
$disable_qa_for_this_course = get_post_meta($post->ID, '_tutor_disable_qa', true);
$enable_q_and_a_on_course = tutor_utils()->get_option('enable_q_and_a_on_course');
if ( !$enable_q_and_a_on_course || $disable_qa_for_this_course == 'yes') {
	tutor_load_template( 'single.course.q_and_a_turned_off' );
	return;
}
?>
<?php do_action('tutor_course/question_and_answer/before'); ?>
<div class="tutor-queston-and-answer-wrap sc-segment-block">

    <div class="tutor-question-top">
        <div class="tutor-ask-question-btn-wrap">
            <a href="javascript:;" class="tutor-ask-question-btn tutor-btn"><?php echo esc_html__('Ask a new question', 'zilom'); ?> </a>
        </div>
    </div>

    <div class="tutor-add-question-wrap">
        <form method="post" id="tutor-ask-question-form">
			<?php wp_nonce_field( tutor()->nonce_action, tutor()->nonce ); ?>
            <input type="hidden" value="add_question" name="tutor_action"/>
            <input type="hidden" value="<?php echo get_the_ID(); ?>" name="tutor_course_id"/>

            <div class="tutor-form-group">
                <input type="text" name="question_title" value="" placeholder="<?php echo esc_attr__('Question Title', 'zilom'); ?>" required="required">
            </div>

            <div class="tutor-form-group">
				<?php
				$editor_settings = array(
					'teeny' => true,
					'media_buttons' => false,
					'quicktags' => false,
					'editor_height' => 100,
				);
				wp_editor(null, 'question', $editor_settings);
				?>
            </div>

            <div class="tutor-form-group">
                <a href="javascript:;" class="tutor_question_cancel tutor-button tutor-danger"><?php echo esc_html__('Cancel', 'zilom'); ?></a>
                <button type="submit" class="tutor-button tutor-success tutor_ask_question_btn" name="tutor_question_search_btn"><?php echo esc_html__('Post Question', 'zilom'); ?> </button>
            </div>
        </form>
    </div>

    <div class="tutor_question_answer_wrap">
		<?php
		$questions = tutor_utils()->get_top_question();

		if (is_array($questions) && count($questions)){
			foreach ($questions as $question){
				$answers = tutor_utils()->get_qa_answer_by_question($question->comment_ID);
				$profile_url = tutor_utils()->profile_url($question->user_id);
				?>
                <div class="tutor_original_question">
                    <div class="tutor-question-wrap">
                        <div class="question-top-meta">
                            <div class="tutor-question-avater">
                                <a href="<?php echo esc_url($profile_url); ?>"> <?php echo tutor_utils()->get_tutor_avatar($question->user_id); ?></a>
                            </div>
                            <p class="review-meta">
                                <a href="<?php echo esc_url($profile_url); ?>"><?php echo esc_html($question->display_name); ?></a>
                                <span class="tutor-text-mute"><?php echo sprintf(__('%s ago', 'zilom'), human_time_diff(strtotime($question->comment_date_gmt))) ; ?></span>
                            </p>
                        </div>

                        <div class="tutor_question_area">
                            <p><strong><?php echo stripslashes($question->question_title); ?> </strong></p>
							<?php echo stripslashes($question->comment_content); ?>
                        </div>
                    </div>
                </div>


				<?php
					if (is_array($answers) && count($answers)){ ?>
                        <div class="tutor_admin_answers_list_wrap">
                            <?php
                                foreach ($answers as $answer){
                                    $answer_profile = tutor_utils()->profile_url($answer->user_id);
                                    ?>
                                    <div class="tutor_individual_answer <?php echo esc_attr($question->user_id == $answer->user_id ? 'tutor-bg-white' : 'tutor-bg-light') ?> ">
                                        <div class="tutor-question-wrap">
                                            <div class="question-top-meta">
                                                <div class="tutor-question-avater">
                                                    <a href="<?php echo esc_url($answer_profile); ?>"> <?php echo tutor_utils()->get_tutor_avatar($answer->user_id); ?></a>
                                                </div>
                                                <p class="review-meta">
                                                    <a href="<?php echo esc_url($answer_profile); ?>"><?php echo esc_html($answer->display_name); ?></a>
                                                    <span class="tutor-text-mute">
                                                        <?php echo sprintf(__('%s ago', 'zilom'), human_time_diff(strtotime($answer->comment_date_gmt)) ) ; ?>
                                                    </span>
                                                </p>
                                            </div>

                                            <div class="tutor_question_area">
                                                <?php echo stripslashes($answer->comment_content); ?>
                                            </div>
                                        </div>
                                    </div>
                                    <?php
                                }
                            ?>
                        </div>
                    <?php
					} ?>
                    <div class="tutor_add_answer_row">
                        <div class="tutor_add_answer_wrap " data-question-id="<?php echo esc_attr($question->comment_ID); ?>">
                            <div class="tutor_wp_editor_show_btn_wrap">
                                <a href="javascript:;" class="tutor_wp_editor_show_btn tutor-button tutor-success"><?php echo esc_html__('Add an answer', 'zilom'); ?></a>
                            </div>
                            <div class="tutor_wp_editor_wrap" style="display: none;">
                                <form method="post" class="tutor-add-answer-form">
                                    <?php wp_nonce_field( tutor()->nonce_action, tutor()->nonce ); ?>
                                    <input type="hidden" value="tutor_add_answer" name="tutor_action"/>
                                    <input type="hidden" value="<?php echo esc_attr($question->comment_ID); ?>" name="question_id"/>

                                    <div class="tutor-form-group">
                                        <textarea id="tutor_answer_<?php echo esc_attr($question->comment_ID); ?>" name="answer" class="tutor_add_answer_textarea" placeholder="<?php echo esc_attr__('Write your answer here...', 'zilom'); ?>"></textarea>
                                    </div>

                                    <div class="tutor-form-group">
                                        <a href="javascript:;" class="tutor_cancel_wp_editor tutor-button tutor-danger"><?php echo esc_html__('Cancel', 'zilom'); ?></a>
                                        <button type="submit" class="tutor-button tutor_add_answer_btn tutor-success" name="tutor_answer_search_btn">
                                            <?php echo esc_html__('Add Answer', 'zilom'); ?>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

				<?php
			}
		}
		?>
    </div>

</div>
<?php do_action('tutor_course/question_and_answer/after'); ?>