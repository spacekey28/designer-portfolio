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

    // animate scolling move
    $('a.scrolldown-arrow').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });

    // Work load more action
    var numWork = $('.entry__container .entry-work').length;
    var limit = 5;
    var limit_1 = limit-1;
    var $workLoadmore = $('.work button.loadmore');
    
    if(limit >= numWork){
        $workLoadmore.hide();
    }
    
    $('.entry__container .entry-work:gt('+limit_1+')').hide();
    $workLoadmore.click(function () {
        $('.entry__container .entry-work:gt('+limit_1+')').css('display', 'flex').hide().fadeIn('slow', function() {
            $(this).addClass('added');
        });
        $(this).hide();
    });
    

  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
