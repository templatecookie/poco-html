'use strict';
/*SKILL POGRESSBAR*/
function Circlle(el) {
  $(el)
    .circleProgress({
      lineCap: 'round',
      fill: {
        color: '#FF465E',
      },
    })
    .on('circle-animation-progress', function (event, progress, stepValue) {
      $(this)
        .find('strong')
        .text(String(stepValue.toFixed(2)).substr(2) + '%');
    });
}
Circlle('.round');
