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

<?php get_header(); ?>


<?php 
   if(class_exists('Tribe__Events__Main') && (tribe_is_event() || tribe_is_event_category() || tribe_is_in_main_loop() || ( function_exists('tec_is_view') && tec_is_view() ) || 'tribe_events' == get_post_type() || is_singular( 'tribe_events' ))) {

      get_template_part( 'single', 'event' );

   }else{

      zilom_base_layout('page'); 
   
   }
?>

<?php get_footer(); ?>
