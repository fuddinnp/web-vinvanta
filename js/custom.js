"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],function(n){return t(n,e,e.document)}):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&exports?module.exports=t(require("jquery"),e,e.document):t(jQuery,e,e.document)}("undefined"!=typeof window?window:void 0,function(e,t,n,s){var i="inViewportClass",o={tellMeClass:"i-v",inViewClass:"in-viewport",onceInViewClass:"in-viewport-once",wasInViewClass:"was-in-viewport"},a=e(t),l=(e(n),{});l[i]=function(){function t(n,s){_classCallCheck(this,t),this.el=n,this.opts=e.extend({},o,s),this._defaultOptions=o,this.$el=e(this.el),this.$elements=[],this.init()}return _createClass(t,[{key:"init",value:function(){var t=this;this.$el.find("."+this.opts.tellMeClass).each(function(n,s){t.$elements.push(e(s))}),a.on("resize scroll",function(e){t.update()}),this.update()}},{key:"update",value:function(){var e=this,t=a.scrollTop(),n=t+a.outerHeight();this.$elements.forEach(function(s){0!==s.length&&(!0===e.isInViewport(s,t,n)?s.hasClass(e.opts.inViewClass)||(s.addClass(e.opts.inViewClass),s.hasClass(e.opts.onceInViewClass)||s.addClass(e.opts.onceInViewClass)):s.hasClass(e.opts.inViewClass)&&(s.removeClass(e.opts.inViewClass),s.addClass(e.opts.wasInViewClass)))})}},{key:"isInViewport",value:function(e,t,n){var s=e.offset().top;return s+e.outerHeight()>=t&&s<n}}]),t}(),e.fn[i]=function(t){return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new l[i](this,t))})}}),jQuery(function(){$(document).inViewportClass()});
//# sourceMappingURL=jquery.in-viewport-class.min.js.map
 
 $(window).scroll(function () {
  	var scroll = $(window).scrollTop();

  	if (scroll >= 300) {
  		$("header").addClass("nav-bg-change");
  	} else {
  		$("header").removeClass("nav-bg-change");
  	}
  });

  //   Menu Trigger Function
  (function () {
  	var $body = document.body,
  		$menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

  	if (typeof $menu_trigger !== 'undefined') {
  		$menu_trigger.addEventListener('click', function () {
  			$body.className = ($body.className == 'menu-active') ? '' : 'menu-active';
  		});
  	}

  }).call(this);
  //   Menu Trigger Function




  /*! Pushy - v1.3.0 - 2019-6-25
   * Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
   * https://github.com/christophery/pushy/
   * by Christopher Yee */

  (function ($) {
  	var pushy = $('.pushy'), //menu css class
  		body = $('body'),
  		push = $('.push'), //css class to add pushy capability
  		pushyLeft = 'pushy-left', //css class for left menu position
  		pushyOpenLeft = 'pushy-open-left', //css class when menu is open (left position)
  		pushyOpenRight = 'pushy-open-right', //css class when menu is open (right position)
  		siteOverlay = $('.site-overlay'), //site overlay
  		menuLinkFocus = $(pushy.data('focus')), //focus on link when menu is open
  		menuSpeed = 200, //jQuery fallback menu speed
  		menuWidth = pushy.width() + 'px', //jQuery fallback menu width
  		submenuClass = '.pushy-submenu',
  		submenuOpenClass = 'pushy-submenu-open',
  		submenuClosedClass = 'pushy-submenu-closed',
  		submenu = $(submenuClass);

  	//check if menu-btn-class data attribute exists
  	if (typeof pushy.data('menu-btn-class') !== 'undefined') {
  		var menuBtnClass = pushy.data('menu-btn-class'); //take user defined menu button CSS class
  	} else {
  		var menuBtnClass = '.menu-btn'; //set default menu button CSS class
  	}

  	//css classes to toggle the menu
  	var menuBtn = $(menuBtnClass + ', .pushy-link');

  	//css class to focus when menu is closed w/ esc key
  	var menuBtnFocus = $(menuBtnClass);

  	// check if container-selector data attribute exists
  	var containerSelector = '#container';
  	if (typeof pushy.data('container-selector') !== 'undefined') {
  		containerSelector = pushy.data('container-selector');
  	}
  	var container = $(containerSelector);


  	//close menu w/ esc key
  	$(document).keyup(function (e) {
  		//check if esc key is pressed
  		if (e.keyCode == 27) {

  			//check if menu is open
  			if (body.hasClass(pushyOpenLeft) || body.hasClass(pushyOpenRight)) {
  				if (cssTransforms3d) {
  					closePushy(); //close pushy
  				} else {
  					closePushyFallback();
  					opened = false; //set menu state
  				}

  				//focus on menu button after menu is closed
  				if (menuBtnFocus) {
  					menuBtnFocus.focus();
  				}

  			}

  		}
  	});

  	function togglePushy() {
  		//add class to body based on menu position
  		if (pushy.hasClass(pushyLeft)) {
  			body.toggleClass(pushyOpenLeft);
  		} else {
  			body.toggleClass(pushyOpenRight);
  		}

  		//focus on link in menu after css transition ends
  		if (menuLinkFocus) {
  			pushy.one('transitionend', function () {
  				menuLinkFocus.focus();
  			});
  		}

  	}

  	function closePushy() {
  		if (pushy.hasClass(pushyLeft)) {
  			body.removeClass(pushyOpenLeft);
  		} else {
  			body.removeClass(pushyOpenRight);
  		}
  	}

  	function openPushyFallback() {
  		//animate menu position based on CSS class
  		if (pushy.hasClass(pushyLeft)) {
  			body.addClass(pushyOpenLeft);
  			pushy.animate({
  				left: "0px"
  			}, menuSpeed);
  			container.animate({
  				left: menuWidth
  			}, menuSpeed);
  			//css class to add pushy capability
  			push.animate({
  				left: menuWidth
  			}, menuSpeed);
  		} else {
  			body.addClass(pushyOpenRight);
  			pushy.animate({
  				right: '0px'
  			}, menuSpeed);
  			container.animate({
  				right: menuWidth
  			}, menuSpeed);
  			push.animate({
  				right: menuWidth
  			}, menuSpeed);
  		}

  		//focus on link in menu
  		if (menuLinkFocus) {
  			menuLinkFocus.focus();
  		}
  	}

  	function closePushyFallback() {
  		//animate menu position based on CSS class
  		if (pushy.hasClass(pushyLeft)) {
  			body.removeClass(pushyOpenLeft);
  			pushy.animate({
  				left: "-" + menuWidth
  			}, menuSpeed);
  			container.animate({
  				left: "0px"
  			}, menuSpeed);
  			//css class to add pushy capability
  			push.animate({
  				left: "0px"
  			}, menuSpeed);
  		} else {
  			body.removeClass(pushyOpenRight);
  			pushy.animate({
  				right: "-" + menuWidth
  			}, menuSpeed);
  			container.animate({
  				right: "0px"
  			}, menuSpeed);
  			push.animate({
  				right: "0px"
  			}, menuSpeed);
  		}
  	}

  	function toggleSubmenu() {
  		//hide submenu by default
  		$(submenuClass).addClass(submenuClosedClass);

  		$(submenuClass).on('click', function (e) {
  			var selected = $(this);

  			if (selected.hasClass(submenuClosedClass)) {
  				//hide same-level opened submenus
  				selected.siblings(submenuClass).addClass(submenuClosedClass).removeClass(submenuOpenClass);
  				//show submenu
  				selected.removeClass(submenuClosedClass).addClass(submenuOpenClass);
  			} else {
  				//hide submenu
  				selected.addClass(submenuClosedClass).removeClass(submenuOpenClass);
  			}
  			// prevent event to be triggered on parent
  			e.stopPropagation();
  		});
  	}

  	//checks if 3d transforms are supported removing the modernizr dependency
  	var cssTransforms3d = (function csstransforms3d() {
  		var el = document.createElement('p'),
  			supported = false,
  			transforms = {
  				'webkitTransform': '-webkit-transform',
  				'OTransform': '-o-transform',
  				'msTransform': '-ms-transform',
  				'MozTransform': '-moz-transform',
  				'transform': 'transform'
  			};

  		if (document.body !== null) {
  			// Add it to the body to get the computed style
  			document.body.insertBefore(el, null);

  			for (var t in transforms) {
  				if (el.style[t] !== undefined) {
  					el.style[t] = 'translate3d(1px,1px,1px)';
  					supported = window.getComputedStyle(el).getPropertyValue(transforms[t]);
  				}
  			}

  			document.body.removeChild(el);

  			return (supported !== undefined && supported.length > 0 && supported !== "none");
  		} else {
  			return false;
  		}
  	})();

  	if (cssTransforms3d) {
  		//toggle submenu
  		toggleSubmenu();

  		//toggle menu
  		menuBtn.on('click', function () {
  			togglePushy();
  		});
  		//close menu when clicking site overlay
  		siteOverlay.on('click', function () {
  			togglePushy();
  		});
  	} else {
  		//add css class to body
  		body.addClass('no-csstransforms3d');

  		//hide menu by default
  		if (pushy.hasClass(pushyLeft)) {
  			pushy.css({
  				left: "-" + menuWidth
  			});
  		} else {
  			pushy.css({
  				right: "-" + menuWidth
  			});
  		}

  		//fixes IE scrollbar issue
  		container.css({
  			"overflow-x": "hidden"
  		});

  		//keep track of menu state (open/close)
  		var opened = false;

  		//toggle submenu
  		toggleSubmenu();

  		//toggle menu
  		menuBtn.on('click', function () {
  			if (opened) {
  				closePushyFallback();
  				opened = false;
  			} else {
  				openPushyFallback();
  				opened = true;
  			}
  		});

  		//close menu when clicking site overlay
  		siteOverlay.on('click', function () {
  			if (opened) {
  				closePushyFallback();
  				opened = false;
  			} else {
  				openPushyFallback();
  				opened = true;
  			}
  		});
  	}
  }(jQuery));








  var navTrigger = document.getElementsByClassName('nav-trigger')[0],
  	body = document.getElementsByTagName('body')[0];

  navTrigger.addEventListener('click', toggleNavigation);

  function toggleNavigation(event) {
  	event.preventDefault();
  	body.classList.toggle('dashboard-right-section-slide');
  }




