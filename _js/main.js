import '../_css/index.css'
import './slider.js'
import './imgGrid.js'
import { hamburgerListener } from './hamburger.js'

const $ = window.jQuery


$(document).ready(function () {
  hamburgerListener()

  const slider = $('[slider-full-screen]')
  const slides = $('[slide-full-screen]')
  const logo = $('[logo]')
  const hamburger = $('[hamburger]').children()

  const menuItems = $('[menu-item]')

  const fadeIn = (i) => $(slides[i]).addClass('active')
  const fadeOut = (i) => $(slides[i]).removeClass('active')

  const menuColor = (method, logo, hamburger, menuItems) => (color) => {
    logo[method](color)
    hamburger.each((i, item) => $(item)[method](`bg-${color}`))
    menuItems.each((i, item) => $(item)[method](color))
  }

  const addMenuColor = menuColor('addClass', logo, hamburger, menuItems)
  const removeMenuColor = menuColor('removeClass', logo, hamburger, menuItems)

  let currentSlide = 0
  const totalSlides = slides.length

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
    const isDark = slides[currentSlide].hasAttribute('dark')
    if (isDark) {
      addMenuColor('white')
      removeMenuColor('black')
    } else {
      addMenuColor('black')
      removeMenuColor('white')
    }
  }

  if (slides.length) {
    slider.on('click keypress', handleFade)
    slider.on('click keypress', handleMenuColor)

    $(slider).imagesLoaded({ background: '[slide-full-screen]' }, function () {
      handleMenuColor()
      fadeIn(currentSlide)
    })
  }
})
