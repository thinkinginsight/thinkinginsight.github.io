$(document).ready(function(){
  var lastPosition;
  $('.expand-click').on('click', function(){
    lastPosition = $(window).scrollTop();
    var expandPosition = $(this).offset().top;
    $(this).addClass('expand-content__expanded');
    $(this).removeClass('expand-click');
    $('body').addClass('noScroll');
    $('html, body').animate({
        scrollTop: expandPosition
    }, 500);
  });

  $('.close-icon').on('click', function(e){
    e.stopPropagation();
    $(this).closest('.expand-content__expanded').animate({
      scrollTop: 0
    }, 200);
    $(this).closest('.expand-content__expanded').addClass('expand-click');
    $(this).closest('.expand-content__expanded').toggleClass('expand-content__expanded');
    $('body').removeClass('noScroll');
    $('html, body').animate({
        scrollTop: lastPosition
    }, 500);
  });
})
