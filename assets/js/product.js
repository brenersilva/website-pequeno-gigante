// button menu pastel

$(".button-menu-pastel").click(function () {
  $(this).toggleClass("click");
  $(".button-container-pastel").toggleClass("show");
});

// button menu pizza

$(".button-menu-pizza").click(function () {
  $(this).toggleClass("click");
  $(".button-container-pizza").toggleClass("show");
});

// button menu lasanha

$(".button-menu-lasanha").click(function () {
  $(this).toggleClass("click");
  $(".button-container-lasanha").toggleClass("show");
});

// button menu nhoque

$(".button-menu-nhoque").click(function () {
  $(this).toggleClass("click");
  $(".button-container-nhoque").toggleClass("show");
});

// pastel frames

$(".button-pastel-400g").click(function () {
  $(this).toggleClass("click");
  $(".frame-pastel-400g").toggleClass("show");
  $(".frame-pastel-500g").removeClass("show");
  $(".frame-pastel-1kgg").removeClass("show");
  $(".frame-pastel-2kg").removeClass("show");
});

$(".button-close").click(function () {
  $(this).toggleClass("click");
  $(".frame-pastel-400g").removeClass("show");
  $(".frame-pastel-400g").toggleClass("close");
  $(".frame-pastel-400g").removeClass("close");
});

$(".button-pastel-500g").click(function () {
  $(this).toggleClass("click");
  $(".frame-pastel-500g").toggleClass("show");
  $(".frame-pastel-400g").removeClass("show");
  $(".frame-pastel-1kg").removeClass("show");
  $(".frame-pastel-2kg").removeClass("show");
});

$(".button-close").click(function () {
  $(this).toggleClass("click");
  $(".frame-pastel-500g").removeClass("show");
  $(".frame-pastel-500g").toggleClass("close");
  $(".frame-pastel-500g").removeClass("close");
});

$(".button-pastel-1kg").click(function () {
  $(this).toggleClass("click");
  $(".frame-pastel-1kg").toggleClass("show");
  $(".frame-pastel-400g").removeClass("show");
  $(".frame-pastel-500g").removeClass("show");
  $(".frame-pastel-2kg").removeClass("show");
});

$(".button-close").click(function () {
  $(this).toggleClass("click");
  $(".frame-pastel-1kg").removeClass("show");
  $(".frame-pastel-1kg").toggleClass("close");
  $(".frame-pastel-1kg").removeClass("close");
});

$(".button-pastel-2kg").click(function () {
  $(this).toggleClass("click");
  $(".frame-pastel-2kg").toggleClass("show");
  $(".frame-pastel-400g").removeClass("show");
  $(".frame-pastel-500g").removeClass("show");
  $(".frame-pastel-1kg").removeClass("show");
});

$(".button-close").click(function () {
  $(this).toggleClass("click");
  $(".frame-pastel-2kg").removeClass("show");
  $(".frame-pastel-2kg").toggleClass("close");
  $(".frame-pastel-2kg").removeClass("close");
});

// pizza frames

$(".button-pizza-brotinho").click(function () {
  $(this).toggleClass("click");
  $(".frame-pizza-brotinho").toggleClass("show");
  $(".frame-pizza-media").removeClass("show");
});

$(".button-close").click(function () {
  $(this).toggleClass("click");
  $(".frame-pizza-brotinho").removeClass("show");
  $(".frame-pizza-brotinho").toggleClass("close");
  $(".frame-pizza-brotinho").removeClass("close");
});

$(".button-pizza-media").click(function () {
  $(this).toggleClass("click");
  $(".frame-pizza-media").toggleClass("show");
  $(".frame-pizza-brotinho").removeClass("show");
});

$(".button-close").click(function () {
  $(this).toggleClass("click");
  $(".frame-pizza-media").removeClass("show");
  $(".frame-pizza-media").toggleClass("close");
  $(".frame-pizza-media").removeClass("close");
});

// lasanha frames

$(".button-lasanha-500g").click(function () {
  $(this).toggleClass("click");
  $(".frame-lasanha-500g").toggleClass("show");
});

$(".button-close").click(function () {
  $(this).toggleClass("click");
  $(".frame-lasanha-500g").removeClass("show");
  $(".frame-lasanha-500g").toggleClass("close");
  $(".frame-lasanha-500g").removeClass("close");
});

// nhoque frames

$(".button-nhoque-500g").click(function () {
  $(this).toggleClass("click");
  $(".frame-nhoque-500g").toggleClass("show");
});

$(".button-close").click(function () {
  $(this).toggleClass("click");
  $(".frame-nhoque-500g").removeClass("show");
  $(".frame-nhoque-500g").toggleClass("close");
  $(".frame-nhoque-500g").removeClass("close");
});
