const imgGrid = $("[img-grid]");

if (imgGrid) {
  $(imgGrid).imagesLoaded({ background: "[bg-image]" }, () =>
    $(imgGrid).removeClass("o-0")
  );
}
