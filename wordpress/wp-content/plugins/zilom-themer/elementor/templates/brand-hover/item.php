<?php
   $image_url = $brand['image']['url']; 
   $image_hover_url = $brand['image_hover']['url']; 
   $active = $brand['active'];
   $classes = !empty($image_hover_url) ? 'brand-hover' : 'band-no-hover';
   $classes .= ($active == 'yes') ? ' active' : '';
?>
<div class="brand-item-content <?php echo esc_attr($classes); ?>">
   <span class="brand-image">
      <img src="<?php echo esc_url($image_url) ?>" alt="<?php echo esc_html__($brand['title']) ?>" class="brand-img"/>
   </span>   
   <?php if(!empty($image_hover_url)){ ?>
      <span class="brand-image-hover">
         <img src="<?php echo esc_url($image_hover_url) ?>" alt="<?php echo esc_html__($brand['title']) ?>" class="brand-img"/>
      </span>   
   <?php } ?>
   <?php echo $this->gva_render_link_overlay($brand['link']) ?>
</div>
