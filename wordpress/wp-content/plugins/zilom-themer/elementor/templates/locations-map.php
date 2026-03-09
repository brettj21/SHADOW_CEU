<?php
   if (!defined('ABSPATH')) {
      exit; // Exit if accessed directly.
   }
   use Elementor\Group_Control_Image_Size;
   
   $this->add_render_attribute('wrapper', 'class', ['gva-locations-map' ]);
   $this->get_grid_settings();
   ?>
   <div <?php echo $this->get_render_attribute_string('wrapper'); ?>>
      <div id="map_canvas_gva_01" class="map_canvas" style="width:100%;height:500px;"></div>
      <div id="locations_map_content" class="makers">
         <div <?php echo $this->get_render_attribute_string('grid') ?>>
            <?php
            $index = 0;
            foreach ($settings['locations'] as $item): ?>
               <?php 
                  $index ++;
                  $image = (isset($item['image']['url']) && $item['image']['url']) ? $item['image']['url'] : '';
               ?>
               <div class="location-item maker-item" data-id="maker_<?php echo $index ?>" data-lat="<?php echo $item['location_map'] ?>">
                  <div class="location-item-inner maker-item-inner">
                     <div class="left"><i class="icon fa fa-map-marker"></i></div>
                     <div class="right">
                        <h3 class="location-title"><?php echo $item['title']; ?></h3>
                        <div class="location-body market-body"><?php echo $item['address']; ?></div>
                        <div class="marker-hidden-content market-content hidden" data-id="maker_<?php echo $index ?>">
                           <div class="marker">
                              <?php if($image){ ?>
                                 <div class="image"><img src="<?php echo $image ?>" alt="<?php echo esc_html($item['title']) ?>" /></div>
                              <?php } ?>
                              <div class="info">
                                 <h3 class="title"><?php echo $item['title']; ?></h3>
                                 <div class="desc"><?php echo $item['content']; ?></div>
                                 
                                 <?php if( isset($item['link']['url']) && $item['link']['url'] ){ ?>
                                    <?php $this->gva_render_link_html('<span>' . esc_html__( 'Read More', 'zilom-themer' ) . '</span>', $item['link'], 'link-visit btn-inline'); ?>
                                 <?php } ?>

                              </div>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            <?php endforeach; ?>
         </div>   
      </div>
   </div>
