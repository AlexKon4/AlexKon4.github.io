AOS.init({
  duration: 1200,
  throttleDelay: 130,
  disable: function() {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  }
})
