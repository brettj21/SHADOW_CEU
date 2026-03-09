<?php
/**
 * $Desc
 *
 * @author     Gaviasthemes Team     
 * @copyright  Copyright (C) 2021 gaviasthemes. All Rights Reserved.
 * @license    GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 * 
 */
?>
<form method="get" class="searchform gva-main-search" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<div class="gva-search">
		<input name="s" maxlength="40" class="form-control input-large input-search" type="text" size="20" placeholder="<?php echo esc_attr__('Search...', 'zilom') ?>">
      <span class="input-group-addon input-large btn-search">
			<input type="submit" class="las" value="&#xf002;" />
		</span>
	</div>
</form>


