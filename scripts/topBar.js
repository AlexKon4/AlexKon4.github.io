var header = $('.top-bar'),
  scrollPrev = 0;
var headerBg = $('.top-bar__background')

$(window).scroll(function() {
  var scrolled = $(window).scrollTop();
 
  if ( scrolled > 100 && scrolled > scrollPrev ) {
    header.addClass('out');
    headerBg.addClass('out')
  } else {
    header.removeClass('out');
    headerBg.removeClass('out')
  }
  scrollPrev = scrolled;
});