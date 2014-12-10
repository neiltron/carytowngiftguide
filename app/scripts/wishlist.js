'use strict';

$(document).ready(function() {

  // Fastclick
  FastClick.attach(document.body);

  // social popups/$5 off instructions
  $('.socialbutton').bind('click', function (e) {
    e.preventDefault();

    // setup twitter/fb windows
    var options = $.extend({
        url: window.location.href
      }, options);

    var width = 550,
        height = 350,
        top = (window.screen.height - height) / 2,
        left = (window.screen.width - width) / 2;

    var config = [
        'scrollbars=yes', 'resizable=yes', 'toolbar=no', 'location=yes',
        'width=' + width, 'height=' + height, 'left=' + left, 'top=' + top
      ].join(',');


    // open twitter/fb window depending on class of clicked element
    if ($(this).hasClass('twitter')) {
      window.open('http://twitter.com/intent/tweet?url=http://giftguide.carytownbikes.com/wishlist&text=Check out the Carytown Bikes Holiday Wish List!', 'TweetWindow', config);
    } else {
      window.open('http://www.facebook.com/sharer/sharer.php?u=http://giftguide.carytownbikes.com/wishlist', 'FacebookWindow', config);
    }
  });

  $('#fullpage').fullpage({
      sectionSelector: 'section',
      resize: false,
      sectionsColor: ['#7DAE37','#19BBB7','#EF4D36','#555'],
      anchors: ['home','list','send','share'],
      menu: '#menu'
    });
});
