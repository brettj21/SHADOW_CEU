<?php
   if (!defined('ABSPATH')) {
      exit; // Exit if accessed directly.
   }

   use Elementor\Group_Control_Image_Size;
   $style = $settings['style'];
   $this->add_render_attribute('wrapper', 'class', ['gva-brand-carousel' , $style ]);
   $this->add_render_attribute('carousel', 'class', ['init-carousel-owl owl-carousel']);
?>

<?php if($style == 'style-1'): ?>
   <div <?php echo $this->get_render_attribute_string('wrapper'); ?>>
      <div <?php echo $this->get_render_attribute_string('carousel') ?> <?php echo $this->get_carousel_settings() ?>>
         <?php foreach ($settings['brands'] as $brand): ?>
            <div class="item brand-item">
               <div class="brand-item-content">
                  <?php
                     $image_url = $brand['image']['url']; 
                     $image_html = '<img src="' . esc_url($image_url) .'" alt="" class="brand-img"/>';
                     echo $image_html;
                  ?>
                  <?php echo $this->gva_render_link_overlay($brand['link']) ?>
               </div>
            </div>
         <?php endforeach; ?>
      </div>
   </div>
<?php endif; ?>