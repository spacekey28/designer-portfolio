export default {
  init() {
    // JavaScript to be fired on all pages

    // hamburger menu
    $('.hamburger-btn').on('click', function () {

      $('.hamburger-icon').toggleClass('open');
      
      if ($('.menu-modal').hasClass('open')) {
          $('.menu-modal').fadeOut('fast', function() {
              $(this).removeClass('open');
          });
      } else {
          $('.menu-modal').fadeIn('fast', function() {
              $(this).addClass('open');
          });
      }
    });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
