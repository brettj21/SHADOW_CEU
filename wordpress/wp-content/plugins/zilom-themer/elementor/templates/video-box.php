<?php

   $style = $settings['style'];

   if ( ! empty( $settings['link']['url'] ) ) {
      $this->add_render_attribute( 'link', 'href', $settings['link']['url'] );
      $this->add_render_attribute( 'link', 'class', 'popup-video' );

      if ( $settings['link']['is_external'] ) {
         $this->add_render_attribute( 'link', 'target', '_blank' );
      }

      if ( $settings['link']['nofollow'] ) {
         $this->add_render_attribute( 'link', 'rel', 'nofollow' );
      }
   }

   $this->add_render_attribute( 'block', 'class', [ 'widget gsc-video-box clearfix', $settings['style'] ] );

   ?>

   <?php if($style == 'style-1'){ ?>
      <div <?php echo $this->get_render_attribute_string( 'block' ) ?>>
         <div class="video-inner">
            <?php if(isset($settings['image']['url']) && $settings['image']['url']){ ?>
               <div class="video-image">
                  <a <?php echo $this->get_render_attribute_string( 'link' ) ?>>
                     <img src="<?php echo esc_url($settings['image']['url']) ?>" alt="<?php echo esc_html($settings['title_text']) ?>"/>
                  </a>   
               </div>
            <?php } ?>   

            <div class="video-content">
               <div class="video-action">
                  <?php if($settings['link']['url']){ ?>
                     <a <?php echo $this->get_render_attribute_string( 'link' ) ?>><span><i class="fa fa-play"></i></span></a>
                  <?php } ?>  
               </div>   
            </div>    
         </div>
      </div> 
   <?php } ?>

   <?php if($style == 'style-2'){ ?>
      <div <?php echo $this->get_render_attribute_string( 'block' ) ?>>
         <div class="video-inner">
            <div class="video-content">
               <div class="video-action">
                  <?php if($settings['link']['url']){ ?>
                     <a <?php echo $this->get_render_attribute_string( 'link' ) ?>><span><i class="fa fa-play"></i></span></a>
                  <?php } ?>  
               </div>
               <?php if( $settings['title_text'] ){ ?>
                  <div class="title"><?php echo $settings['title_text'] ?></div>
               <?php } ?>
            </div>    
         </div>
      </div> 
   <?php } ?>

 
 
