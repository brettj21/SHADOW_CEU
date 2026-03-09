<?php
   if (!defined('ABSPATH')) {
      exit; // Exit if accessed directly.
   }
   use Elementor\Icons_Manager;

   $this->add_render_attribute('wrapper', 'class', ['gsc-brand-hover layout-carousel', $settings['style']]);
   $this->add_render_attribute('carousel', 'class', ['init-carousel-owl owl-carousel']);
?>

<div <?php echo $this->get_render_attribute_string('wrapper'); ?>>
   <div <?php echo $this->get_render_attribute_string('carousel') ?> <?php echo $this->get_carousel_settings() ?>>
      <?php foreach ($settings['brands'] as $brand): ?>
         <div class="item brand-item">
            <?php include $this->get_template('brand-hover/item.php'); ?>
         </div>
      <?php endforeach; ?>
   </div>
</div>
