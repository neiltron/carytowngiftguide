'use strict';

$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionSelector: 'section',
        resize : false,
        sectionsColor: ['#7dae37','#EFAF2E', '#19BBB7', '#9FDE5F', '#0394D1', '#EF4D36','#555'],
        anchors: ['start', 'student', 'friend', 'casual', 'family', 'racer', 'share'],
        menu: '#menu'
      });
  });