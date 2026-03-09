(function($) {
  	"use strict";
  	var GaviasTheme = {
		init: function(){
			this.handleWindow();
			this.initResponsive();
			this.initCarousel();
			this.menuMobile();
			this.postMasonry();
			this.scrollTop();
			this.stickyMenu();
			//this.headerMobile();
			this.courseFilterForm();
			this.dashboardPage();
			this.other();
	
			$('.team__progress-bar').each(function(){
			  	var $progressbar = $(this);
			  	$progressbar.css('width', $progressbar.data('progress-max'));
			})
			$('.review__progress-bar').each(function(){
			  	var $progressbar = $(this);
			  	$progressbar.css('width', $progressbar.data('progress-max'));
			})
		},
		handleWindow: function(){
	 		var body = document.querySelector('body');
        	if (window.innerWidth > body.clientWidth + 6) {
            body.classList.add('has-scrollbar');
            body.setAttribute('style', '--scroll-bar: ' + (window.innerWidth - body.clientWidth) + 'px');
        	} else {
            body.classList.remove('has-scrollbar');
        	}
        	setTimeout(function(){
          	if($('body').hasClass('zilom-site-loading')){
              $('body').removeClass('zilom-site-loading');
              $('.zilom-site-loading').fadeOut(100);
          	}
      	}, 160);
	 	},

	 	initResponsive: function(){
		  	var _event = $.event,
		  	$special, resizeTimeout;
		  	$special = _event.special.debouncedresize = {
				setup: function () {
					$(this).on("resize", $special.handler);
				},
			 	teardown: function () {
					$(this).off("resize", $special.handler);
			 	},
			 	handler: function (event, execAsap) { 
					var context = this,
				  		args = arguments,
				  		dispatch = function () {
					 		event.type = "debouncedresize";
					 		_event.dispatch.apply(context, args);
				  		};
				  	if (resizeTimeout) {
					 	clearTimeout(resizeTimeout);
				  	}
					execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
			 	},
		  		threshold: 150
			};
	 	},

	 	initCarousel: function(){
			$('.init-carousel-owl-theme').each(function(){
		  		var items = GaviasTheme.carouselOptInit('items', this);
		  		var items_lg = GaviasTheme.carouselOptInit('items_lg', this);
		  		var items_md = GaviasTheme.carouselOptInit('items_md', this);
		  		var items_sm = GaviasTheme.carouselOptInit('items_sm', this);
		  		var items_xs = GaviasTheme.carouselOptInit('items_xs', this);
		  		var loop = GaviasTheme.carouselOptInit('loop', this);
		  		var speed = GaviasTheme.carouselOptInit('speed', this);
		  		var auto_play = GaviasTheme.carouselOptInit('auto_play', this);
		  		var auto_play_speed = GaviasTheme.carouselOptInit('auto_play_speed', this);
		  		var auto_play_timeout = GaviasTheme.carouselOptInit('auto_play_timeout', this);
		  		var auto_play_hover = GaviasTheme.carouselOptInit('auto_play_hover', this);
		  		var navigation = GaviasTheme.carouselOptInit('navigation', this);
		  		var rewind_nav = GaviasTheme.carouselOptInit('rewind_nav', this);
		  		var pagination = GaviasTheme.carouselOptInit('pagination', this);
		  		var mouse_drag = GaviasTheme.carouselOptInit('mouse_drag', this);
		  		var touch_drag = GaviasTheme.carouselOptInit('touch_drag', this);
		  		$(this).owlCarousel({
			 		nav: navigation,
			 		autoplay: auto_play,
			 		autoplayTimeout: auto_play_timeout,
			 		autoplaySpeed: auto_play_speed,
			 		autoplayHoverPause: auto_play_hover,
			 		navText: [ '<span><i class="las la-arrow-left"></i></span>', '<span><i class="las la-arrow-right"></i></span>' ],
			 		autoHeight: false,
			 		loop: loop, 
			 		dots: pagination,
			 		rewind: rewind_nav,
			 		smartSpeed: speed,
			 		mouseDrag: mouse_drag,
			 		touchDrag: touch_drag,
			 		responsive : {
						0 : {
						  items: 1,
						  nav: false
						},
						580 : {
						  items : items_xs,
						  nav: false
						},
						768 : {
						  items : items_sm,
						  nav: false
						},
						992: {
						  items : items_md
						},
						1200: {
						  items: items_lg
						},
						1400: {
						  items: items
						}
				 	}
		  		}); 
			}); 
	 	},

	 	carouselOptInit: function(opt, context){
			const opts = {
			  	items: 5, 
			  	items_lg: 4,
			  	items_md: 3, 
			  	items_sm: 2, 
			  	items_xs: 1,
			  	loop: false, 
			  	speed: 200, 
			  	auto_play: false,
			  	auto_play_speed: false,
			  	auto_play_timeout: 1000,
			  	auto_play_hover: false,
			  	navigation: false,
			  	rewind_nav: false,
			  	pagination: false,
			  	mouse_drag: false,
			  	touch_drag: false
			}
			return $(context).data(opt) ? $(context).data(opt) : opts[opt];
	 	},

	 	menuMobile: function(){
			$('.gva-offcanvas-content ul.gva-mobile-menu > li:has(ul)').addClass("has-sub");
			$('.gva-offcanvas-content ul.gva-mobile-menu > li:has(ul) > a').after('<span class="caret"></span>');
			$( document ).on('click', '.gva-offcanvas-content ul.gva-mobile-menu > li > .caret', function(e){
			  	e.preventDefault();
			  	var checkElement = $(this).next();
			  	$('.gva-offcanvas-content ul.gva-mobile-menu > li').removeClass('menu-active');
			  	$(this).closest('li').addClass('menu-active'); 
			  
			  	if((checkElement.is('.submenu-inner')) && (checkElement.is(':visible'))) {
				 	$(this).closest('li').removeClass('menu-active');
				 	checkElement.slideUp('normal');
			  	}
		  
		  		if((checkElement.is('.submenu-inner')) && (!checkElement.is(':visible'))) {
			 		$('.gva-offcanvas-content ul.gva-mobile-menu .submenu-inner:visible').slideUp('normal');
			 		checkElement.slideDown('normal');
		  		}
		  
		  		if (checkElement.is('.submenu-inner')) {
			 		return false;
		  		} else {
			 		return true;  
		  		}   
			})

			$( document ).on( 'click', '.canvas-menu.gva-offcanvas > a.dropdown-toggle', function(e) {
		  		e.preventDefault();
		  		var $style = $(this).data('canvas');
			  	if($('.gva-offcanvas-content' + $style).hasClass('open')){
				 	$('.gva-offcanvas-content' + $style).removeClass('open');
				 	$('#gva-overlay').removeClass('open');
				 	$('#wp-main-content').removeClass('blur');
			  	}else{
				 	$('.gva-offcanvas-content' + $style).addClass('open');
				 	$('#gva-overlay').addClass('open');
				 	$('#wp-main-content').addClass('blur');
			  	}
			});
			$( document ).on( 'click', '#gva-overlay', function(e) {
			  	e.preventDefault();
			  	$(this).removeClass('open');
			  	$('.gva-offcanvas-content').removeClass('open');
			  	$('#wp-main-content').removeClass('blur');
			})
			$( document ).on( 'click', '.top-canvas a.control-close-mm', function(e) {
			  	e.preventDefault();
			  	$('.gva-offcanvas-content').removeClass('open');
			  	$('#gva-overlay').removeClass('open');
			  	$('#wp-main-content').removeClass('blur');
			});

			$('.header-mobile .gva-user .profile a').on('click', function(e){
	      	e.preventDefault();
	      });
	 	},

	 	postMasonry: function(){
			var $container = $('.post-masonry-style');
			$container.imagesLoaded( function(){
		  		$container.masonry({
			 		itemSelector : '.item-masory',
			 		gutterWidth: 0,
			 		columnWidth: 1,
		  		}); 
			});
	 	},

		scrollTop: function(){
			var offset = 300;
			var duration = 500;

			jQuery(window).scroll(function() {
			  	if (jQuery(this).scrollTop() > offset) {
				 	jQuery('.return-top').fadeIn(duration);
			  	} else {
				 	jQuery('.return-top').fadeOut(duration);
			  	}
			});

			$( document ).on('click', '.return-top', function(event){
			  	event.preventDefault();
			  	jQuery('html, body').animate({scrollTop: 0}, duration);
			  	return false;
			});
		},

	 	carouselProductThumbnail: function(){
			$('ol.flex-control-nav').each(function(){
			  	$(this).owlCarousel({
				 	nav: false,
				 	navText: [ '<span><i class="las la-arrow-left"></i></span>', '<span><i class="las la-arrow-right"></i></span>' ],
				 	margin: 10,
				 	dots: false,
				 	responsive : {
						0 : {
						  items: 2,
						  nav: false
						},
						640 : {
						  items : 3,
						  nav: false
						},
						768 : {
						  items : 4,
						  nav: false
						},
						992: {
						  items : 4
						},
						1200: {
						  items: 4
						},
						1400: {
						  items: 4
						}
				 	}
			  	});
			});
	 	},

	 	stickyMenu: function(){
			
			if( $('.gv-sticky-menu').length > 0 ){
				$( ".gv-sticky-menu" ).wrap( "<div class='gv-sticky-wrapper'></div>" );

		      var headerHeight = $('.gv-sticky-menu').height();
		      var menu = $('.gv-sticky-wrapper');

		      $(window).on('scroll', function () {
		         if ($(window).scrollTop() > menu.offset().top) {
		            menu.addClass('is-fixed');
		            $('body').addClass('header-is-fixed');
		            menu.css('height', headerHeight);
		         } else {
		            menu.removeClass('is-fixed');
		            menu.css('height', 'auto');
		            $('body').removeClass('header-is-fixed');
		         }
		      });
			}
	 	},

	 	headerMobile: function(){
	      if($(window).width() <= 1024){
	        var header_height = $('.header_mobile_screen').height();
	        $('.wrapper-page').css('padding-top', header_height);
	      }else{
	        $('.wrapper-page').css('padding-top', 0);
	      }

	      if($(window).width() <= 1024){
		      $(window).on('scroll', function (){
		         if ($(window).scrollTop() > 45){
		            $('body').addClass('header-mobile-is-fixed');
		         } else {
		            $('body').removeClass('header-mobile-is-fixed');
		         }
		      });
		   }

	      $(window).on("debouncedresize", function(event){
	        	if($(window).width() <= 1024){
	          	var header_height = $('.header_mobile_screen').outerHeight();
	          	$('.wrapper-page').css('padding-top', header_height);
	        	}else{
	          	$('.wrapper-page').css('padding-top', 0);
	        	}
	        	if($(window).width() <= 1024){
		        	$(window).on('scroll', function () {
			         if ($(window).scrollTop() > 45) {
			            $('body').addClass('header-mobile-is-fixed');
			         } else {
			            $('body').removeClass('header-mobile-is-fixed');
			         }
			      });
		     	}
	      });
	   },

	 	courseFilterForm: function(){
			if($.fn.select2){
			  	$('.option-select2-filter').each(function(){
				 	var placeholder = $(this).attr('placeholder');
				 	$(this).select2({
						allowClear : true,
						theme: 'default option-select2-filter',
						placeholder: placeholder
				 	}); 
			  	});
				$('.option-select2-filter, .list_job_types').on('select2:unselecting', function(e) {
			  		$(this).on('select2:opening', function(e) {
						e.preventDefault();
			  		});
				});
				$('.option-select2-filter, .list_job_types').on('select2:unselect', function(e) {
			 		var sel = $(this);
			 		setTimeout(function() {
						sel.off('select2:opening');
			 		}, 1);
				});
			}

			//Checkbox with URL filter
        	if($('#course_cat_filter').length > 0){
				let cat = $('#course_cat_filter').val();
				$('.tutor-course-filter-wrapper .course-filter_category input[value=' + cat + ']').prop('checked', true);
			}
			if($('#course_level_filter').length > 0){
				let level = $('#course_level_filter').val();
				$('.tutor-course-filter-wrapper .course-filter_level input[value=' + level + ']').prop('checked', true);
			}
			if($('#course_price_filter').length > 0){
				let price = $('#course_price_filter').val();
				$('.tutor-course-filter-wrapper .course-filter-price_type input[value=' + price + ']').prop('checked', true);
			}
			
        	var hide = true;
			$('body').on("click", function () {
		    	if (hide) $('.course-checkbox-filter').removeClass('active');
		    	hide = true;
			});

			$('.course-checkbox-filter .show-results').on('click', function(e){
				var self = $(this).parents('.course-checkbox-filter');
				if( self.hasClass('active') ){
					self.removeClass('active');
					return false;
				}
				$('.course-checkbox-filter').removeClass('active');
				self.toggleClass('active');
				hide = false;
			});

			$('.course-checkbox-filter input[type="checkbox"]').on('click', function(){
				let _this = $(this);
				let filter_wrap = _this.parents('.course-checkbox-filter');
				let filter_content = _this.parents('.checkbox-filter-content');
				let show_text = filter_wrap.find('.show-results .content-inner').first();
				let placehoder = filter_wrap.find('.show-results').attr('data-placehoder');
				let text_items = '';
				filter_content.find('input[type="checkbox"]:checked').each(function(){
					text_items += '<span>' + $(this).parent().text().trim() + '</span>';
				});
				if(text_items == ''){
					text_items = placehoder;
				}
				show_text.html(text_items);
			});

			$('.course-checkbox-filter').each(function(e){
				let filter_wrap = $(this);
				let filter_content = filter_wrap.find('.checkbox-filter-content').first();
				let show_text = filter_wrap.find('.show-results .content-inner').first();
				let placehoder = filter_wrap.find('.show-results').attr('data-placehoder');
				let text_items = '';
				filter_content.find('input[type="checkbox"]:checked').each(function(){
					text_items += '<span>' + $(this).parent().text().trim() + '</span>';
				});
				if(text_items == ''){
					text_items = placehoder;
				}
				show_text.html(text_items);
			});

			$('.btn-control-sidebar').on('click', function(e){
				e.preventDefault();
				$('body').addClass('open-filter-sidebar');
				$('.tutor-course-filter-container').addClass('open');
				$('.filter-sidebar-overlay').addClass('open');
			});

			$('.filter-sidebar-overlay').on('click', function(e){
				e.preventDefault();
				$('body').removeClass('open-filter-sidebar');
				$('.tutor-course-filter-container').removeClass('open');
				$('.filter-sidebar-overlay').removeClass('open');
			});

			$('.filter-top .btn-close-filter').on('click', function(e){
				e.preventDefault();
				$('body').removeClass('open-filter-sidebar');
				$('.tutor-course-filter-container').removeClass('open');
				$('.filter-sidebar-overlay').removeClass('open');
			});

		},
		dashboardPage: function(){
			$('.dashboard-control-sidebar').on('click', function(e){
				e.preventDefault();
				$('body').addClass('open-overlay');
				$('.dashboard-left-menu').addClass('open');
				$('.dashboard-sidebar-overlay').addClass('open');
			});

			$('.dashboard-sidebar-overlay, .close-sidebar').on('click', function(e){
				e.preventDefault();
				$('body').removeClass('open-overlay');
				$('.dashboard-left-menu').removeClass('open');
				$('.dashboard-sidebar-overlay').removeClass('open');
			});

			var header_height = $('.wp-site-header').height();
			$('.zl-dashboard-page .dashboard-main-content .dashboard-left-menu .tutor-dashboard-header').css('padding-top', header_height);
			$(window).on("debouncedresize", function(event) {
				var header_height = $('.wp-site-header').height();
				$('.zl-dashboard-page .dashboard-main-content .dashboard-left-menu .tutor-dashboard-header').css('padding-top', header_height);
			});
		},
		other: function(){
			$('.popup-video').magnificPopup({
			  	type: 'iframe',
			  	fixedContentPos: false
			});

			$( document ).on( 'click', '.yith-wcwl-add-button.show a', function() {
			  $(this).addClass('loading');
			});

			$(document).on('click', '.gva-search > a.control-search', function(){
				let _btn = $(this);
			  	if(_btn.hasClass('search-open')){
				 	_btn.parents('.gva-search').removeClass('open');
				 	_btn.removeClass('search-open');
			  	}else{
				 	_btn.parents('.gva-search').addClass('open');
				 	_btn.addClass('search-open');
				 	setTimeout(function(){ 
		            _btn.parent('.main-search').find('.gva-search input.input-search').first().focus(); 
		         }, 100);
			  	}
			});

			$(document).on('click', '.mini-cart-header .mini-cart', function(e){
				e.preventDefault();
				$(this).parent('.mini-cart-inner').addClass('open');
			});
			$(document).on('click', '.mini-cart-header .minicart-overlay', function(e){
				e.preventDefault();
				$(this).parent('.mini-cart-inner').removeClass('open');
			});

			$('.mini-cart-header .minicart-content, .dashboard-left-menu').perfectScrollbar();

			$('.gva-user .login-account').on('click', function(){
			  	if($(this).hasClass('open')){
				 	$(this).removeClass('open');
			  	}else{
				 	$(this).addClass('open');
			  	}
			})

			$('.mobile-user .login-account .link-open-menu').on('click', function(e){
				e.preventDefault();
				var wrapper = $(this).parents('.login-account');
			  	if( wrapper.hasClass('open-menu') ){
				 	wrapper.removeClass('open-menu');
			  	}else{
				 	wrapper.addClass('open-menu');
			  	}
			})

			$('.scroll-link[href*="#"]:not([href="#"])').click(function() {
		      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		        var target = $(this.hash);
		        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		        if (target.length) {
		          $('html, body').animate({
		            scrollTop: target.offset().top - 100
		          }, 1500);
		          return false;
		        }
		      }
		   });

			$('.gva-portfolio-grid .portfolio-filter').each(function(){
				$(this).find('.btn-filter').each(function(){
					let _btn = $(this);
					let filter = _btn.attr('data-filter');
					let items = _btn.parents('.gva-portfolio-grid').find('.isotope-items').first();
					_btn.find('.count').first().html('[' + items.find('> ' + filter).length + ']');
				});
			});

			
			var m = [].slice.call(document.querySelectorAll(".btn-theme, .btn-black, .btn-white, .btn-gray, .btn-rev-slider"));
        	m.forEach(function (t) {
          	var e = (document).createElement("span");
          	e.className = "btn-hover-effect";
          	var i = t.appendChild(e);
          	t.onmousemove = function (t) {
            	var e = t.currentTarget.getBoundingClientRect(),
              	s = t.clientX - e.left,
              	a = t.clientY - e.top;
            	i.style.left = s + "px", i.style.top = a + "px"
          	}
        	});

	   	
			$('.course-single-share .btn-control-share').on('click', function(e){
				e.preventDefault();
				if($(this).parent().hasClass('open-share')){
					$(this).parent().removeClass('open-share');
				}else{
					$(this).parent().addClass('open-share');
				}
			});

			$(document).on('click', '.tutor-course-wishlist-btn', function (e) {
    			e.preventDefault();
    			if($(this).hasClass('has-wish-listed')){
    				$(this).removeClass('has-wish-listed');
    			}else{
    				$(this).addClass('has-wish-listed');
    			}
    		});
		}
	}

  	$(document).ready(function(){
	 	GaviasTheme.init();

	 	// $('.logged-in form').on('submit', function(e){
	 	// 	e.preventDefault();
	 	// 	$.notify(
	 	// 		"Demo users are not allowed to modify information.!", 
	 	// 		{className:"warning", position:"right"}
	 	// 	);
	 	// });
	 	
  	})

  	$(window).load(function(){
	 	GaviasTheme.carouselProductThumbnail();
  	})

})(jQuery);
