import '../_css/index.css'

const $ = {}

$.toArray = ($el) => [].slice.call($el)
$.one = (selector) => document.querySelector(selector)
$.all = (selector) => $.toArray(document.querySelectorAll(selector))
$.removeClass = ($el, className) => $el.classList.remove(className)
$.addClass = ($el, className) => $el.classList.add(className)
$.on = (events, el, cb) => events
  .split(' ')
  .map(evt => el.addEventListener(evt, cb))


const $slider = $.one('[slider-full-screen]')
const $slides = $.all('[slide-full-screen]')
const $logo = $.one('[logo]')
const $menuItems = $.all('[menu-item]')

const fadeIn = (i) => $.addClass($slides[i], 'active')
const fadeOut = (i) => $.removeClass($slides[i], 'active')

const menuColor = (method, logo, menuItems) => (color) => {
  $[method](logo, color)
  menuItems.forEach(item => $[method](item, color))
}

const addMenuColor = menuColor('addClass', $logo, $menuItems)
const removeMenuColor = menuColor('removeClass', $logo, $menuItems)

let currentSlide = 0
const totalSlides = $slides.length

const handleFade = () => {
  if (currentSlide === totalSlides - 1) {
    currentSlide = 0
    fadeIn(currentSlide)
    fadeOut(totalSlides - 1)
  } else {
    currentSlide ++
    fadeIn(currentSlide)
    if (currentSlide !== 0) fadeOut(currentSlide - 1)
  }
}

const handleMenuColor = () => {
  const isDark = $slides[currentSlide].hasAttribute('dark')
  if (isDark) {
    addMenuColor('white')
    removeMenuColor('black')
  } else {
    addMenuColor('black')
    removeMenuColor('white')
  }
}

setTimeout(() => {
  if ($slides.length > 0) {
    $.on('click keypress', $slider, handleFade)
    $.on('click keypress', $slider, handleMenuColor)
    handleMenuColor()
    fadeIn(currentSlide)
  }
}, 100)
