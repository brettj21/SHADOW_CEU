<?php

$profile_completion = tutils()->user_profile_completion();

if ($profile_completion->progress < 100) { ?>
    <div class="clearfix">
        <div class="tutor-profile-completion-warning">
            <div class="profile-completion-warning-icon">
                <span class="tutor-icon-warning-2"></span>
            </div>
            <div class="profile-completion-warning-content">
                <h4><?php echo esc_html__('Complete Your Profile', 'zilom'); ?></h4>
                <div class="profile-completion-warning-details">
                    <p><?php echo esc_html__('Complete your profile so people can know more about you! Go to Profile', 'zilom'); ?>
                        <a href="<?php echo tutils()->tutor_dashboard_url('settings'); ?>"><?php echo esc_html__('Settings', 'zilom'); ?></a>
                    </p>
                    <ul>
                        <?php 
                        foreach ($profile_completion->empty_fields as $empty_field) {
                            echo '<li>' . esc_html__('Set Your', 'zilom') . '<span> '. $empty_field.'</span></li>';
                        } ?>
                    </ul>
                </div>
                <div class="profile-completion-warning-status">
                    <p><span><?php echo esc_html($profile_completion->progress) . esc_html__('% Complete', 'zilom'); ?>,</span> <?php echo esc_html__('You are almost done!', 'zilom'); ?></p>
                    <div class="tutor-progress-bar-wrap">
                        <div class="tutor-progress-bar">
                            <div class="tutor-progress-filled" style="--tutor-progress-left: <?php echo esc_attr($profile_completion->progress); ?>%;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php
    } 
?>