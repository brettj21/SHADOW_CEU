<div class="modal fade modal-ajax-user-form" id="form-ajax-login-popup" tabindex="-1" role="dialog">
   <div class="modal-dialog" role="document">
      <div class="modal-content">
            <div class="modal-header-form">
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
            </div>
         <div class="modal-body">
            <div class="ajax-user-form">
               <h2 class="title"><?php echo esc_html__('Signin', 'zilom-themer'); ?></h2>
               <div class="form-ajax-login-popup-content">
                  <?php 
                     if(class_exists('Zilom_Addons_Login_Ajax')){
                        Zilom_Addons_Login_Ajax::instance()->html_form();
                     } 
                  ?>
               </div>
               <div class="user-registration">
                  <?php echo esc_html__("Don't have an account", "zilom-themer"); ?>
                  <?php 
                     $register_link = site_url('/wp-login.php?action=register&redirect_to=' . get_permalink()); 
                     if(function_exists('tutor')){
                        $register_link = tutils()->student_register_url();
                     }
                  ?>
                  <a class="registration-popup" href="<?php echo esc_url($register_link) ?>">
                     <?php echo esc_html__('Register', 'zilom-themer') ?>
                  </a>
               </div>   
            </div>   
         </div>
      </div>
   </div>
</div>

<div class="modal fade modal-ajax-user-form" id="form-ajax-lost-password-popup" tabindex="-1" role="dialog">
   <div class="modal-dialog" role="document">
      <div class="modal-content">
         <div class="modal-header-form">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
            </button>
         </div>
         <div class="modal-body">
            <div class="ajax-user-form">
               <h2 class="title"><?php echo esc_html__('Reset Password', 'zilom-themer'); ?></h2>
               <div class="form-ajax-login-popup-content">
                  <?php
                     if(class_exists('Zilom_Addons_Forget_Pwd_Ajax')){
                         Zilom_Addons_Forget_Pwd_Ajax::instance()->html_form();
                     } 
                  ?>
               </div>
             
               <div class="user-registration">
                  <?php echo esc_html__("Don't have an account", "zilom-themer"); ?>
                  <?php if(class_exists('uListing\Classes\StmUser')){ ?>
                     <a class="registration-popup" href="<?php echo uListing\Classes\StmUser::getProfileUrl() ?>?tab=register">
                        <?php echo esc_html__('Register', 'zilom-themer') ?>
                     </a>
                  <?php }else{ ?>
                     <a class="registration-popup" data-toggle="modal" data-target="#form-ajax-registration-popup">
                        <?php echo esc_html__('Register', 'zilom-themer') ?>
                     </a>
                  <?php } ?>   
               </div>   

            </div>   
         </div>
      </div>
   </div>
</div>
