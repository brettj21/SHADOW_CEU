(function ($) {
	"use strict";

  var GaviasElements = {
	 init: function(){     
		GaviasElements.initDebouncedresize();
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-heading-block.default', GaviasElements.elementHeadingBlock);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-testimonials.default', GaviasElements.elementTestimonial);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-posts.default', GaviasElements.elementPosts);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-portfolio.default', GaviasElements.elementPortfolio);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-teams.default', GaviasElements.elementTeams);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-gallery.default', GaviasElements.elementGallery);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-events.default', GaviasElements.elementEvents);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-brand.default', GaviasElements.elementBrand);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-counter.default', GaviasElements.elementCounter);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-services-group.default', GaviasElements.elementServices);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-icon-box-group.default', GaviasElements.elementIconBoxGroup);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-testimonials-single.default', GaviasElements.elementTestimonialSingle);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-countdown.default', GaviasElements.elementCountDown);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-box-hover.default', GaviasElements.elementBoxHover);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-video-carousel.default', GaviasElements.elementVideoCarousel);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-locations_map.default', GaviasElements.elementLocationMap);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-user.default', GaviasElements.elementUser);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-circle-progress.default', GaviasElements.elementCircleProgress);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-slider-images.default', GaviasElements.elementSliderImages);
		
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-users-instructor.default', GaviasElements.elementUsers);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-course.default', GaviasElements.elementCourse);
		elementorFrontend.hooks.addAction('frontend/element_ready/gva-course-banner-group.default', GaviasElements.elementCourseBannerGroup);
		
		elementorFrontend.hooks.addAction('frontend/element_ready/column', GaviasElements.elementColumn);

	 },

	 initDebouncedresize: function(){
		 var $event = $.event,
		  $special, resizeTimeout;
		  $special = $event.special.debouncedresize = {
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
					 $event.dispatch.apply(context, args);
				  };

				  if (resizeTimeout) {
					 clearTimeout(resizeTimeout);
				  }

				execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
			 },
		  threshold: 150
		};
	 },


	 elementColumn: function($scope){

		if( ($scope).hasClass('column-style-bg-overflow-right') ){
		  
			 var left = $scope.offset().left;

			 var rwidth = $(window).width() - left + 10;
			 // if( ($scope).width() > $(window).width()/2 + 10){
			 //   rwidth = $(window).width() + 10;
			 // }

			 $scope.children('.elementor-column-wrap, .elementor-widget-wrap').append('<div class="bg-overfolow"></div>');
			 $scope.children('.elementor-column-wrap, .elementor-widget-wrap').children('.bg-overfolow').css('width', rwidth);

			 $(window).on("debouncedresize", function(event) {
				var left = $scope.offset().left;
			 
				rwidth = $(window).width() - left + 10;
				// if( ($scope).width() > $(window).width()/2 + 10){
				//   rwidth = $(window).width() + 10;
				// }
				$scope.children('.elementor-column-wrap, .elementor-widget-wrap').children('.bg-overfolow').css('width', rwidth);
			 });
		}

		if( ($scope).hasClass('column-style-bg-overflow-left') ){
		  var right = $(window).width() - ($scope.offset().left + $scope.outerWidth(true));
		  var lwidth = $(window).width() - right + 10;
		
		  $scope.children('.elementor-column-wrap, .elementor-widget-wrap').append('<div class="bg-overfolow"></div>');
		  $scope.children('.elementor-column-wrap, .elementor-widget-wrap').children('.bg-overfolow').css('width', lwidth);
		  $(window).on("debouncedresize", function(event) {
			 lwidth = $(window).width() - right + 10;
			$scope.children('.elementor-column-wrap, .elementor-widget-wrap').children('.bg-overfolow').css('width', lwidth);
		  });
		}

	 },

	 elementTestimonial: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	 },

	 elementTestimonialSingle: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	 },

	 elementPosts: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	 },

	 elementCourse: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	 },

	 elementServices: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	 },

	 elementPortfolio: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
		if ( $.fn.isotope ) {
		  if($('.isotope-items').length){
			 $( '.isotope-items' ).each(function() {
				var $el = $( this ),
					 $filter = $( '.portfolio-filter a'),
					 $loop =  $( this );

				$loop.isotope();
				
				$(window).load(function() {
				  $loop.isotope( 'layout' );
				});
			 
				if ( $filter.length > 0 ) {
				  $filter.on( 'click', function( e ) {
					 e.preventDefault();
					 var $a = $(this);
					 $filter.removeClass( 'active' );
					 $a.addClass( 'active' );
					 $loop.isotope({ filter: $a.data( 'filter' ) });
				  });
				};
			 });
		  }
		};

	 },

	 elementTeams: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	 },

	 elementGallery: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	 },

	 elementEvents: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	 },

	 elementBrand: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	 },

	 elementCounter: function($scope){
		var $block = $scope.find('.milestone-block');
		$block.appear(function() {
		  var $endNum = parseInt(jQuery(this).find('.milestone-number').text());
		  jQuery(this).find('.milestone-number').countTo({
			 from: 0,
			 to: $endNum,
			 speed: 4000,
			 refreshInterval: 60,
			 formatter: function (value, options) {
				value = value.toFixed(options.decimals);
				value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
				return value;
			 }
		  });
		},{accX: 0, accY: 0});
	 },
	  elementIconBoxGroup: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	 },
	 elementCountDown: function($scope){
		$('[data-countdown="countdown"]').each(function(index, el) {
		  var $this = $(this);
		  var $date = $this.data('date').split("-");
		  $this.gvaCountDown({
			 TargetDate:$date[0]+"/"+$date[1]+"/"+$date[2]+" "+$date[3]+":"+$date[4]+":"+$date[5],
			 DisplayFormat:"<div class=\"countdown-times\"><div class=\"day\">%%D%% <span class=\"label\">Days</span> </div><div class=\"hours\">%%H%% <span class=\"label\">Hours</span> </div><div class=\"minutes\">%%M%% <span class=\"label\">Minutes</span> </div><div class=\"seconds\">%%S%% <span class=\"label\">Seconds</span></div></div>",
			 FinishMessage: "Expired"
		  });
		});
	 },

	 elementBoxHover: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	 },

	 elementVideoCarousel: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	 },

	 elementLocationMap: function($scope){
		var location_data = [];
		var i = 0;
		$('#locations_map_content .maker-item').each(function(){
		  var location_item = [];
		  location_item['id'] = $(this).data('id');
		  var lat = $(this).data('lat');
		  if(lat){
				lat = lat.split(",");
				location_item['latLng'] = [lat[0], lat[1]];
		  }
		  location_item['data'] = '';
		  location_item['options'] = {};
		  location_data[i] = location_item;
		  i++;
		}); 

		$('#map_canvas_gva_01').gmap3({
		  map:{
			 options:{
				"draggable": true,
				"mapTypeControl": true,
				"mapTypeId": google.maps.MapTypeId.ROADMAP,
				"scrollwheel": false,
				"panControl": true,
				"rotateControl": false,
				"scaleControl": true,
				"streetViewControl": true,
				"zoomControl": true,
				"center": location_data[0]['latLng'],
				"zoom": 12,
			  }
			},
			marker:{
			  values: location_data,
			  options:{
				 draggable: false
			  },
			  events:{
				 click: function(marker, event, context){
					var id = context.id;
					var content = $('div[data-id=' + id + '].maker-item .marker-hidden-content').html();
					  var map = $(this).gmap3("get"),
						 infowindow = $(this).gmap3({get:{name:"infowindow"}});
					  if (infowindow){
						 infowindow.open(map, marker);
						 infowindow.setContent(content);
					  } else {
						 $(this).gmap3({
							infowindow:{
							  anchor:marker, 
							  options:{content: content}
							}
						 });
					  }
				 }
			  }
			}
		});
		  
		var map = $('#map_canvas_gva_01').gmap3("get");
		$(".location-item").on('click', function(){
		  $('.location-item .location-item-inner').removeClass('active');
		  $(this).find('.location-item-inner').first().addClass('active');
		  var id = $(this).data('id');
		  var marker = $('#map_canvas_gva_01').gmap3({ get: { id: id } });
		  new google.maps.event.trigger(marker, 'click');
		  map.setCenter(marker.getPosition());
		});
	 },

	elementCircleProgress: function($scope){
		$scope.find(".circle-progress").appear(function () {
	      $scope.find(".circle-progress").each(function () {
	         let progress = $(this);
	         let progressOptions = progress.data("options");
	         progress.circleProgress({
	         	startAngle: -Math.PI / 2
	         }).on('circle-animation-progress', function(event, progress, stepValue) {
				   $(this).find('strong').html(Math.round(stepValue.toFixed(2).substr(1) * 100) + '<i>%</i>');
				});
	      });
	   });
	},

	elementCourseBannerGroup: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	},
	
	elementUsers: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	},

	elementSliderImages: function($scope){
		var $carousel = $scope.find('.init-carousel-owl');
		GaviasElements.initCarousel($carousel);
	},

	elementHeadingBlock: function($scope){
		if ($scope.find('.typed-effect').length) {
			var _this = $scope.find('.typed-effect').first();
      	var typedStrings = _this.data('strings');
      	var typedTag = _this.attr('id');
      	var typed = new Typed('#' + typedTag, {
	        typeSpeed: 100,
	        backSpeed: 100,
	        fadeOut: true,
	        loop: true,
	        strings: typedStrings.split(',')
      	});
	  	}
	},

	initCarousel: function($target){
		if (!$target.length) { return; }
		var items = $target.data('items') ? $target.data('items') : 5;
		var items_lg = $target.data('items_lg') ? $target.data('items_lg') : 4;
		var items_md = $target.data('items_md') ? $target.data('items_md') : 3;
		var items_sm = $target.data('items_sm') ? $target.data('items_sm') : 2;
		var items_xs = $target.data('items_xs') ? $target.data('items_xs') : 1;
		var items_xx = $target.data('items_xx') ? $target.data('items_xx') : 1;
		var loop = $target.data('loop') ? $target.data('loop') : false;
		var speed = $target.data('speed') ? $target.data('speed') : 200;
		var auto_play = $target.data('auto_play') ? $target.data('auto_play') : false;
		var auto_play_speed = $target.data('auto_play_speed') ? $target.data('auto_play_speed') : false;
		var auto_play_timeout = $target.data('auto_play_timeout') ? $target.data('auto_play_timeout') : 1000;
		var auto_play_hover = $target.data('auto_play_hover') ? $target.data('auto_play_hover') : false;
		var navigation = $target.data('navigation') ? $target.data('navigation') : false;
		var pagination = $target.data('pagination') ? $target.data('pagination') : false;
		var mouse_drag = $target.data('mouse_drag') ? $target.data('mouse_drag') : false;
		var touch_drag = $target.data('touch_drag') ? $target.data('touch_drag') : false;
		var center = $target.hasClass('carousel-center') ? true : false;
		var stage_padding = $target.data('stage_padding') ? $target.data('stage_padding') : 0;
		var animate_out = false;
		var animate_in = false;
		if($target.hasClass('slider-fade')){ 
			animate_out = 'fadeOut';
			animate_in = 'fadeIn';
		}
		$target.owlCarousel({
		  	center: center,
		  	nav: navigation,
		  	autoplay: auto_play,// auto_play,
		  	autoplayTimeout: auto_play_timeout,
		  	autoplaySpeed: auto_play_speed,
		  	autoplayHoverPause: auto_play_hover,
		  	navText: [ '<span><i class="las la-arrow-left"></i></span>', '<span><i class="las la-arrow-right"></i></span>' ],
		  	autoHeight: false,
		  	loop: loop, 
		  	dots: pagination,
		  	rewind: true,
		  	smartSpeed: speed,
		  	mouseDrag: mouse_drag,
		  	touchDrag: touch_drag,
		  	stagePadding: stage_padding,
		  	animateOut: animate_out,
      	animateIn: animate_in,
		  	responsive : {
			 	0 : {
					items: 1,
					nav: false,
					dots: pagination
			 	},
			 	390 : {
					items: items_xx,
					nav: false,
					dots: pagination
			 	},
			 	640 : {
					items : items_xs,
					nav: false,
					dots: pagination
			 	},
			 	768 : {
					items : items_sm,
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
  
		var total = $target.find('.owl-item.active').length;
		$target.find('.owl-item').removeClass('first');
		$target.find('.owl-item').removeClass('center');
		$target.find('.owl-item').removeClass('last');
		$target.find('.owl-item.active').each(function(index) {
			if (index === 0) {
				$(this).addClass('first')
			}
			if(index === 1){
				$(this).addClass('center')
			}
			if (index === total - 1 && total > 1) {
				$(this).addClass('last')
			}
		})

		
		$target.on('translated.owl.carousel', function(e){
		  	var total = $target.find('.owl-item.active').length;
			$target.find('.owl-item').removeClass('first');
			$target.find('.owl-item').removeClass('center');
			$target.find('.owl-item').removeClass('last');
			$target.find('.owl-item.active').each(function(index) {
				if (index === 0) {
					$(this).addClass('first')
				}
				if(index === 1){
					$(this).addClass('center')
				}
				if (index === total - 1 && total > 1) {
					$(this).addClass('last')
				}
			})
		});

	 }

  };
  
  $(window).on('elementor/frontend/init', GaviasElements.init);   

}(jQuery));
