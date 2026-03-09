<?php
   if (!defined('ABSPATH')) {
      exit; // Exit if accessed directly.
   }
   use Elementor\Icons_Manager;

   $this->add_render_attribute('wrapper', 'class', ['gsc-brand-hover layout-grid']);

   //add_render_attribute grid
   $this->get_grid_settings();
?>

<div <?php echo $this->get_render_attribute_string('wrapper'); ?>>
   <div <?php echo $this->get_render_attribute_string('grid') ?>>
      <?php foreach ($settings['brands'] as $brand): ?>
         <div class="item brand-item">
            <?php include $this->get_template('brand-hover/item.php'); ?>
         </div>
      <?php endforeach; ?>
   </div>   
</div>
