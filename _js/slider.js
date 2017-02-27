var slider = $('.slider')
var captions = $('.captions')

slider.slick({
  fade: true,
  waitForAnimate: false,
  prevArrow: '#previous',
  nextArrow: '#next',
  asNavFor: '.captions',
  dots: true,
  customPaging: function (slider, i) {
    const imgUrl = $(slider.$slides[i]).find('[imgdata]')[0].getAttribute('imgdata')
    return `
      <div class="w2 h2 w3-ns h3-ns pointer">
        <div class="w-100 h-100 bg-center contain" style="background-image: url(${imgUrl})"
      </div>
    `
  }
})

captions.slick({
  fade: true,
  arrows: false
})
