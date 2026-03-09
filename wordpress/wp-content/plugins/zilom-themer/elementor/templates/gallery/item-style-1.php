<?php
   use Elementor\Group_Control_Image_Size;

   $image_id = $image['image']['id']; 
   $image_url = $image['image']['url'];
   $image_url_thumbnail = $image['image']['url'];
   if($image_id){
      $attach_url = Group_Control_Image_Size::get_attachment_image_src($image_id, 'image', $settings);
      if($attach_url){
         $image_url_thumbnail = $attach_url;
      }
   }
?>

<div class="gallery-item">

      <?php if($image_url){ ?>
         <div class="image">
            <img src="<?php echo esc_url($image_url_thumbnail) ?>" alt="<?php echo esc_html($image['title']) ?>" />  
         </div>
         <a class="photo-gallery" href="<?php echo esc_url($image_url); ?>" data-elementor-lightbox-slideshow="gallery-<?php echo esc_attr($_random); ?>"></a>
      <?php } ?>

      <div class="image-content">
         <div class="content-inner">
            <?php if($image['title']){ ?>
               <h3 class="title"><?php echo $image['title'] ?></h3>
            <?php } ?>
            <?php if($image['sub_title']){ ?>
               <div class="sub-title"><?php echo $image['sub_title'] ?></div>
            <?php } ?>
         </div>   
      </div>

   </div>
