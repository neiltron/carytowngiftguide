'use strict';

$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionSelector: 'section',
        resize: false,
        sectionsColor: ['#7DAE37','#19BBB7','#EF4D36','#555'],
        anchors: ['home','list','send','share'],
        menu: '#menu'
      });
  });