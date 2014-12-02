$(document).ready(function(){

	// Using

	$('.socialbutton').bind('click', function (e) {
 		e.preventDefault();

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


        // Opening a popup window pointing to the twitter intent API:

        if ($(this).hasClass('twitter')) {
        	win = window.open('http://twitter.com/intent/tweet?url=http://carytownbikes.com/giftguide&text=Check out the Carytown Bikes Holiday Gift Guide!', 'TweetWindow', config);
        } else {
        	win = window.open('http://www.facebook.com/sharer/sharer.php?u=www.carytownbikes.com/', 'FacebookWindow', config);
        }

        $('#redeem-instructions').css('display', 'block');
	})

	// $('#tweetLink').tweetAction({
	// 	text:		'Check out the carytown bikes gift guide!',
	// 	url:		'http://carytownbikes.com/gift-guide',
	// 	via:		'carytownbicycle',

	// },
	// function(){});

});