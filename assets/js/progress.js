'use strict';

$('.round')
  .circleProgress({
    lineCap: 'round',

    fill: {
      color: '#FF465E',
    },
    emptyFill: '#191C26',
  })
  .on('circle-animation-progress', function (event, progress, stepValue) {
    $(this)
      .find('strong')
      .text(String(stepValue.toFixed(2)).substr(2) + '%');
  });

$('.round-1')
  .circleProgress({
    lineCap: 'round',

    fill: {
      color: '#FF465E',
    },
    emptyFill: '#FFDAE0',
  })
  .on('circle-animation-progress', function (event, progress, stepValue) {
    $(this)
      .find('strong')
      .text(String(stepValue.toFixed(2)).substr(2) + '%');
  });
