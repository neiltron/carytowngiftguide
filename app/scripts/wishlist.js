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
      touchSensitivity: 30,
      sectionsColor: ['#7DAE37','#19BBB7','#EF4D36','#555'],
      anchors: ['home','list','send','share'],
      menu: '#menu'
    });

  $('form').on('submit', function (e) {
    e.preventDefault();
  });

  $('#send_wishlist').on('submit', function (e) {
    e.preventDefault();

    sendEmail();
  });
});


var sendEmail = function () {
  var m = new mandrill.Mandrill('cgQbcV7Y1OCbMlmnUWb_vQ');

  var name = $('#name_field').val(),
      emails = [];

  $('.emailform').each(function(i, el) {
    var email = $(el).val();

    if (validEmail(email)) {
      emails.push({'email': email});
    }
  });

  var params = {
    'template_name': 'wish-list',
    'template_content': [],
    'message': {
      "merge": true,
      "merge_language": "mailchimp",
      "track_opens": true,
      "track_clicks": true,
      "auto_text": true,
      'from_email':'bikes@carytownbikes.com',
      'from_name':'Carytown Bicycle Co.',
      'to': emails,
      'subject': name + "'s Wish List",
      'bcc_address': 'wishlist@carytownbikes.com',
      'global_merge_vars': [
        {
          'name': 'name',
          'content': name,
        }, {
          'name': 'item1',
          'content': $('#item1').val(),
        }, {
          'name': 'item2',
          'content': $('#item2').val(),
        }, {
          'name': 'item3',
          'content': $('#item3').val(),
        }, {
          'name': 'item4',
          'content': $('#item4').val(),
        }, {
          'name': 'item5',
          'content': $('#item5').val()
        }
      ]
    }
  };

  m.messages.sendTemplate(params, function(res) {
    $('.emailbutton')
      .css('background-color', '#477dca')
      .val('Success!');

  }, function(err) {
    console.log(err);
  });
};


var validEmail = function (email) {
  return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
}