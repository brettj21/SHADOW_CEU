<?php
/**
 * @package TutorLMS/Templates
 * @version 1.4.3
 */

?>

<?php 
	 if(!get_option( 'users_can_register', false )) {
		  echo '<div class="alert alert-info">',__('Registration disabled. Please ask site admin to enable registration.', 'zilom'),'</div>';
		  return;
	 }
?>

<div class="z-register-form">
	
	<div class="row no-margin">
		<div class="col-12 col-md-5 register-content-left">
			<span class="img-register">
				<img src="<?php echo (ZILOM_THEME_URL . '/images/register.png') ?>" alt="register" />
			</span>
			<div class="content-inner">
				<div class="quick-login">
					<span class="text"><?php echo esc_html__('Already a member', 'zilom') ?></span>
					<a class="btn-theme btn-small login-link" href="#" data-toggle="modal" data-target="#form-ajax-login-popup">
						<?php echo esc_html__('Login', 'zilom') ?>
					</a>
				</div>
			</div>
		</div>

		<div class="register-form-content col-12 col-md-7">
			<?php do_action('tutor_before_instructor_reg_form'); ?>
			
			<h2 class="form-title"><?php echo esc_html__('Create a free account', 'zilom') ?></h2>
			<div class="form-des"><?php echo esc_html__('A few clicks away from creating your account.', 'zilom') ?></div>
			<div class="form-links">
				<a href="<?php echo tutils()->student_register_url(); ?>"><?php echo esc_html__('Student', 'zilom') ?></a>
				<a class="active"><?php echo esc_html__('Instructor', 'zilom') ?></a>
			</div>

			<form method="post" enctype="multipart/form-data">

				<?php do_action('tutor_instructor_reg_form_start');?>
				<?php wp_nonce_field( tutor()->nonce_action, tutor()->nonce ); ?>
				<input type="hidden" value="tutor_register_instructor" name="tutor_action"/>

			 	<?php
				 	$errors = apply_filters('tutor_instructor_register_validation_errors', array());
				 	if (is_array($errors) && count($errors)){
					  	echo '<div class="tutor-alert-warning"><ul class="tutor-required-fields">';
					  	foreach ($errors as $error_key => $error_value){
							echo "<li>{$error_value}</li>";
					  	}
					  	echo '</ul></div>';
				 	}
			 	?>

			 	<div class="tutor-form-row">
				  	<div class="tutor-form-col-6">
						<div class="tutor-form-group">
							<label><?php echo esc_html__('First Name', 'zilom'); ?> </label>
							<input type="text" name="first_name" value="<?php echo tutor_utils()->input_old('first_name'); ?>" placeholder="<?php echo esc_attr__('First Name', 'zilom'); ?>" required autocomplete="given-name">
						</div>
				  	</div>
				  	<div class="tutor-form-col-6">
						<div class="tutor-form-group">
							<label><?php echo esc_html__('Last Name', 'zilom'); ?></label>
							<input type="text" name="last_name" value="<?php echo tutor_utils()->input_old('last_name'); ?>" placeholder="<?php echo esc_attr__('Last Name', 'zilom'); ?>" required autocomplete="family-name">
						</div>
				  	</div>
			 	</div>

			 	<div class="tutor-form-row">
				  	<div class="tutor-form-col-6">
						<div class="tutor-form-group">
							<label><?php echo esc_html__('User Name', 'zilom'); ?></label>
							<input type="text" name="user_login" class="tutor_user_name" value="<?php echo tutor_utils()->input_old('user_login'); ?>" placeholder="<?php echo esc_attr__('User Name', 'zilom'); ?>" required autocomplete="username">
						</div>
				  	</div>

				  	<div class="tutor-form-col-6">
						<div class="tutor-form-group">
							<label><?php echo esc_html__('E-Mail', 'zilom'); ?></label>
							<input type="text" name="email" value="<?php echo tutor_utils()->input_old('email'); ?>" placeholder="<?php echo esc_attr__('E-Mail', 'zilom'); ?>" required autocomplete="email">
						</div>
				  	</div>
			 	</div>

				<div class="tutor-form-row">
					<div class="tutor-form-col-6">
						<div class="tutor-form-group">
							<label><?php echo esc_html__('Password', 'zilom'); ?></label>
							<input type="password" name="password" value="<?php echo tutor_utils()->input_old('password'); ?>" placeholder="<?php echo esc_attr__('Password', 'zilom'); ?>" required autocomplete="new-password">
						</div>
					</div>

					<div class="tutor-form-col-6">
						<div class="tutor-form-group">
							<label><?php echo esc_html__('Password confirmation', 'zilom'); ?></label>
							<input type="password" name="password_confirmation" value="<?php echo tutor_utils()->input_old('password_confirmation'); ?>" placeholder="<?php echo esc_attr__('Password Confirmation', 'zilom'); ?>" required autocomplete="new-password">
						</div>
					</div>
				</div>

			 	<div class="tutor-form-row">
				  	<div class="tutor-form-col-12">
						<div class="tutor-form-group">
							<?php
								//providing register_form hook
								do_action('tutor_instructor_reg_form_middle');
								do_action('register_form');
							?>
						</div>
				  	</div>
			 	</div> 

 				<?php do_action('tutor_instructor_reg_form_end');?>

			 	<div class="tutor-form-row">
				  	<div class="tutor-form-col-12">
						<div class="tutor-form-group tutor-reg-form-btn-wrap">
							<button type="submit" name="tutor_register_instructor_btn" value="register" class="tutor-button"><?php echo esc_html__('Register as instructor', 'zilom'); ?></button>
						</div>
				  	</div>
			 	</div>
			</form>
			<?php do_action('tutor_after_instructor_reg_form'); ?>

		</div>
	</div>      
</div>    