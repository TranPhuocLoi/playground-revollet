// set fixed menu
$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 80) {
    $('.header').addClass('fixed-shadow', 1000);
  } else {
    $('.header').removeClass('fixed-shadow', 1000);
  }
});

$(document).ready(function() {
  new WOW().init();
  $('.slider').slick({
    dots: true,
    centerMode: true,
    centerPadding: '200px',
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
	// set event click && scroll to section by id
	$('.navbar-nav a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $(".nav-item").removeClass("active");
    $(this).parent().addClass("active");
    let top = 50;
    if ($(window).width() < 1024) {
      $(".navbar-toggler").click();
      top = 20;
    }
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top-top
    }, 100);
	});
});


$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function(i) {
      if ($(this).position().top-70 <= scrollDistance) {
        $('.navbar-nav li.active').removeClass('active');
        $('.navbar-nav li').eq(i).addClass('active');
      }
    });
}).scroll();
