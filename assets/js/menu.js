$(".nav-link").click(function () {
  $(this).toggleClass("click");
    $(".navbar-collapse").removeClass("show");
});

$(".dropdown-item").click(function () {
  $(this).toggleClass("click");
    $(".navbar-collapse").removeClass("show");
});