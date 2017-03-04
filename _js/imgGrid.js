const imgGrid = $('[img-grid]')

if (imgGrid) {
  $(imgGrid).imagesLoaded({ background: '[bg-image]'}, function () {
    $(imgGrid).removeClass('o-0')
  })
}
