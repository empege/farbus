(function ($) {
  // Main page slider   
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });
  // Zoomed Image Slider & Exit
  // Propagation - stops parent event from activating
  $('.zoomed-img-wrapper').on('click', function (e) { e.stopPropagation(); });
  $('.arrow-left').on('click', function (e) {
    e.stopPropagation();
    plusDivs(-1);
  });
  $('.arrow-right').on('click', function (e) {
    e.stopPropagation();
    plusDivs(+1);
  });
  var slideIndex = 1;
  if ($('body').attr('class') == 'kutije' || $('body').attr('class') == 'tacne') {
    showDivs(slideIndex);
  }
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  function showDivs(n) {
    var i;
    var x = $('.zoomed-img');
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }
  $('.exit-img').on('click', function (e) {
    $('.zoomed-section').fadeOut(350);
    showDivs(slideIndex);
    slideIndex = 1;
  });
  $('.zoomed-section').on('click', function () {
    $(this).fadeOut(350);
    slideIndex = 1;
    showDivs(slideIndex);
  });
  // Zoom in
  $('.product-img-wrapper').on('click', function () {
    var a = $(this).children('img').attr('src');
    var b = a.slice(0, -6) + "b.webp";
    $('.zoomed-a').attr('src', a);
    $('.zoomed-b').attr('src', b);
    $('.zoomed-section').fadeIn(350);
  });


  // Hamburger Menu
  $('.ham').on('click', function () {
    let src = ($(this).attr('src') == 'ham.png') ? 'hamx.png' : 'ham.png';
    $(this).attr('src', src);
    $('nav').toggle();
  });

  // Exit "Obavestenje"
  // $('#obavestenje-exit').on('click', () => {
  //   $('#obavestenje-exit').fadeOut();
  //   $('#obavestenje').fadeOut();
  //   $('#content-wrapper').fadeIn();
  //   window.scrollTo(0, 0)
  // })





})(jQuery);