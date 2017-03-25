const slider = $('.slider')
const captions = $('.captions')

slider.on('init', (_, s) => {
  const currentSlide = $(s.$slides[0])
  const isVideo = currentSlide.find('[video]').length > 0
  isVideo
    ? sendArrowsBack(s)
    : sendArrowsForward(s)
})

slider.on('beforeChange', (_, s, __, next) => {
  const currentSlide = $(s.$slides[next])
  const isVideo = currentSlide.find('[video]').length > 0
  isVideo
    ? sendArrowsBack(s)
    : sendArrowsForward(s)
})

slider.slick({
  fade: true,
  prevArrow: '#previous',
  nextArrow: '#next',
  asNavFor: '.captions',
  lazyLoad: 'progressive',
  touchThreshold: 300,
  dots: true,
  customPaging: function (slider, i) {
    const img = $(slider.$slides[i]).find('[imgdata]')[0]
    const imgUrl = img
      ? img.getAttribute('imgdata')
      : ''

    return `
      <div class="w2 h2 w3-ns h3-ns pointer">
        <div class="w-100 h-100 bg-center contain" style="background-image: url(${imgUrl})"
      </div>
    `
  }
})

$(slider).imagesLoaded({ background: '[slide-img]' }, () => $(slider).removeClass('o-0'))

captions.slick({
  fade: true,
  arrows: false
})

function sendArrowsBack (slick) {
  const { prev, next } = getArrows(slick)
  prev.removeClass('z-5')
  next.removeClass('z-5')
  prev.addClass('z-3')
  next.addClass('z-3')
}

function sendArrowsForward (slick) {
  const { prev, next } = getArrows(slick)
  prev.addClass('z-5')
  next.addClass('z-5')
  prev.removeClass('z-3')
  next.removeClass('z-3')
}

function getArrows (slick) {
  const prev = $(slick.$prevArrow)
  const next = $(slick.$nextArrow)
  return { prev, next }
}
