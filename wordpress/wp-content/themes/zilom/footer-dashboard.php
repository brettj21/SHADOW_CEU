<?php
/**
 * $Desc
 *
 * @author     Gaviasthemes Team     
 * @copyright  Copyright (C) 2021 gaviasthemes. All Rights Reserved.
 * @license    GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 * 
 */
$copyright_default = esc_html__('Copyright 2021 - Company - All rights reserved. Powered by WordPress.', 'zilom');
$copyright = zilom_get_option('copyright_text', $copyright_default);
?>


	<footer id="wp-footer" class="clearfix">
		<div class="copyright-dashboard">
				<div class="copyright-content">
					<?php echo esc_html($copyright); ?>
				</div>	
			</div>
		</div>
	</footer>
	
<?php wp_footer(); ?>

