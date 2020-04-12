$(function () {
	var $nav = $('.navbar');
	var $window = $(window);
    var $header = $('.header');
    var offset = $nav.offset().top + 1; 

    var fixed = false;
    function fixedNavbar() {
		if ($window.scrollTop() > offset && !fixed) {
            $nav.addClass('fixed-top shadow at-fixed-nav');
            $header.addClass('header-padding');
            fixed = true;
		} 
		else if ($window.scrollTop() < offset && fixed) {
            $nav.removeClass('fixed-top shadow at-fixed-nav');
            $header.removeClass('header-padding');
            fixed = false;
		}
	}

    fixedNavbar();
	$window.scroll(fixedNavbar);
});