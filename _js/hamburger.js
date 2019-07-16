const $ = window.jQuery;

function isOpen() {
  return $("[hamburger]").hasClass("open");
}

function toggle() {
  isOpen() ? close() : open();
}

function open() {
  const $hamburger = $("[hamburger]");
  const $menu = $("[mobile-menu]");

  $hamburger.addClass("open");
  $hamburger.removeClass("closed");
  $menu.addClass("db");
  $menu.removeClass("dn");
}

function close() {
  const $hamburger = $("[hamburger]");
  const $menu = $("[mobile-menu]");

  $hamburger.removeClass("open");
  $hamburger.addClass("closed");
  $menu.addClass("dn");
  $menu.removeClass("db");
}

function hamburgerListener() {
  $("[hamburger]").on("click", toggle);
}

module.exports = {
  hamburgerListener
};
