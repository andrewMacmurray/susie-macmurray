var slider = $('.slider')
var sliderNav = $('.slider-nav')

slider.slick({
  fade: true,
  waitForAnimate: false,
  prevArrow: '#previous',
  nextArrow: '#next'
  // dots: true,
  // customPaging: function (slider, i) {
  //   const imgUrl = $(slider.$slides[i]).find('[imgdata]')[0].getAttribute('imgdata')
  //   return `
  //     <div class="w5 h5">
  //       <div class="w-100 h-100 bg-center cover" style="background-image: url(${imgUrl})"
  //     </div>
  //   `
  // }
})

sliderNav.slick({
  slidesToShow: 5,
  arrows: true,
  fade: true,
  asNavFor: '.slider'
})
