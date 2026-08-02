<?php
defined('ABSPATH') || die();

class Nextend_Social_Login_Widget extends WP_Widget {

    public static function register() {
        register_widget('Nextend_Social_Login_Widget');
    }

    public function __construct() {
        parent::__construct('nextend_social_login', sprintf(__('%s Buttons', 'nextend-facebook-connect'), 'Nextend Social Login'));
    }

    public function form($instance) {
        $instance = wp_parse_args((array)$instance, array('title' => ''));
        $title    = $instance['title'];

        $style = isset($instance['style']) ? sanitize_key($instance['style']) : 'default';
        $align = isset($instance['align']) ? sanitize_key($instance['align']) : 'left';

        $loginButtons  = isset($instance['login-buttons']) ? !!intval($instance['login-buttons']) : true;
        $linkButtons   = isset($instance['link-buttons']) ? !!intval($instance['link-buttons']) : false;
        $unlinkButtons = isset($instance['unlink-buttons']) ? !!intval($instance['unlink-buttons']) : false;

        $isPRO = apply_filters('nsl-pro', false);

        ?>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('title')); ?>">
                <?php _e('Title:', 'nextend-facebook-connect'); ?>
                <input class="widefat"
                       id="<?php echo esc_attr($this->get_field_id('title')); ?>"
                       name="<?php echo esc_attr($this->get_field_name('title')); ?>"
                       type="text"
                       value="<?php echo esc_attr($title); ?>"/>
            </label>
        </p>

        <?php if ($isPRO): ?>

            <p>
                <label for="<?php echo esc_attr($this->get_field_id('style')); ?>">
                    <?php _e('Button style:', 'nextend-facebook-connect'); ?>
                </label><br>

                <input class="widefat"
                       id="<?php echo esc_attr($this->get_field_id('style_default')); ?>"
                       name="<?php echo esc_attr($this->get_field_name('style')); ?>"
                       type="radio"
                       value="default"
                        <?php checked($style, 'default'); ?> />
                <label for="<?php echo esc_attr($this->get_field_id('style_default')); ?>">
                    <?php _e('Default', 'nextend-facebook-connect'); ?>
                </label>
                <br>

                <input class="widefat"
                       id="<?php echo esc_attr($this->get_field_id('style_icon')); ?>"
                       name="<?php echo esc_attr($this->get_field_name('style')); ?>"
                       type="radio"
                       value="icon"
                        <?php checked($style, 'icon'); ?> />
                <label for="<?php echo esc_attr($this->get_field_id('style_icon')); ?>">
                    <?php _e('Icon', 'nextend-facebook-connect'); ?>
                </label>
                <br>
            </p>
        <?php endif; ?>

        <p>
            <label for="<?php echo esc_attr($this->get_field_id('align')); ?>">
                <?php _e('Button align:', 'nextend-facebook-connect'); ?>
            </label><br>

            <input class="widefat"
                   id="<?php echo esc_attr($this->get_field_id('align_left')); ?>"
                   name="<?php echo esc_attr($this->get_field_name('align')); ?>"
                   type="radio"
                   value="left"
                    <?php checked($align, 'left'); ?> />
            <label for="<?php echo esc_attr($this->get_field_id('align_left')); ?>">
                <?php _e('Left', 'nextend-facebook-connect'); ?>
            </label>
            <br>

            <input class="widefat"
                   id="<?php echo esc_attr($this->get_field_id('align_center')); ?>"
                   name="<?php echo esc_attr($this->get_field_name('align')); ?>"
                   type="radio"
                   value="center"
                    <?php checked($align, 'center'); ?> />
            <label for="<?php echo esc_attr($this->get_field_id('align_center')); ?>">
                <?php _e('Center', 'nextend-facebook-connect'); ?>
            </label>
            <br>

            <input class="widefat"
                   id="<?php echo esc_attr($this->get_field_id('align_right')); ?>"
                   name="<?php echo esc_attr($this->get_field_name('align')); ?>"
                   type="radio"
                   value="right"
                    <?php checked($align, 'right'); ?> />
            <label for="<?php echo esc_attr($this->get_field_id('align_right')); ?>">
                <?php _e('Right', 'nextend-facebook-connect'); ?>
            </label>
            <br>
        </p>

        <p>
            <input name="<?php echo esc_attr($this->get_field_name('login-buttons')); ?>"
                   type="hidden"
                   value="0"/>
            <input id="<?php echo esc_attr($this->get_field_id('login-buttons')); ?>"
                   name="<?php echo esc_attr($this->get_field_name('login-buttons')); ?>"
                   type="checkbox"
                   value="1"
                    <?php checked($loginButtons); ?> />
            <label for="<?php echo esc_attr($this->get_field_id('login-buttons')); ?>">
                <?php _e('Show login buttons', 'nextend-facebook-connect'); ?>
            </label>
        </p>

        <p>
            <input name="<?php echo esc_attr($this->get_field_name('link-buttons')); ?>"
                   type="hidden"
                   value="0"/>
            <input id="<?php echo esc_attr($this->get_field_id('link-buttons')); ?>"
                   name="<?php echo esc_attr($this->get_field_name('link-buttons')); ?>"
                   type="checkbox"
                   value="1"
                    <?php checked($linkButtons); ?> />
            <label for="<?php echo esc_attr($this->get_field_id('link-buttons')); ?>">
                <?php _e('Show link buttons', 'nextend-facebook-connect'); ?>
            </label>
        </p>

        <p>
            <input name="<?php echo esc_attr($this->get_field_name('unlink-buttons')); ?>"
                   type="hidden"
                   value="0"/>
            <input id="<?php echo esc_attr($this->get_field_id('unlink-buttons')); ?>"
                   name="<?php echo esc_attr($this->get_field_name('unlink-buttons')); ?>"
                   type="checkbox"
                   value="1"
                    <?php checked($unlinkButtons); ?> />
            <label for="<?php echo esc_attr($this->get_field_id('unlink-buttons')); ?>">
                <?php _e('Show unlink buttons', 'nextend-facebook-connect'); ?>
            </label>
        </p>
        <?php
    }

    public function widget($args, $instance) {
        $title = !empty($instance['title']) ? $instance['title'] : '';

        $title = apply_filters('widget_title', $title, $instance, $this->id_base);

        $style = !empty($instance['style']) ? sanitize_key($instance['style']) : 'default';
        $align = !empty($instance['align']) ? sanitize_key($instance['align']) : 'left';

        $loginButtons  = isset($instance['login-buttons']) ? intval($instance['login-buttons']) : 1;
        $linkButtons   = isset($instance['link-buttons']) ? intval($instance['link-buttons']) : 0;
        $unlinkButtons = isset($instance['unlink-buttons']) ? intval($instance['unlink-buttons']) : 0;

        echo $args['before_widget'];
        if ($title) {
            echo $args['before_title'] . wp_kses_post($title) . $args['after_title'];
        }

        echo do_shortcode(sprintf('[nextend_social_login style="%s" login="%d" link="%d" unlink="%d" align="%s"]', esc_attr($style), $loginButtons, $linkButtons, $unlinkButtons, esc_attr($align)));

        echo $args['after_widget'];
    }
}

add_action('widgets_init', 'Nextend_Social_Login_Widget::register');
