(function($) {
   'use strict';
   var scrollToTop = function() {
      var scrollTo = $('#wp-main-content').offset().top - 100;
      $('html, body').stop().animate({
         scrollTop: scrollTo
      }, 400);
   };

   $(window).load(function(){
      $(document).on('click', '.minicart-close', function(e){
         e.preventDefault();
         $(this).parents('.cart').removeClass('open');
      })
   });
   
})(jQuery);
