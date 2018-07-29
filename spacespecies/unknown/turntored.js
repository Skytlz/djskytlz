function initLocalClocks() {
  "use strict";
  var date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  
  for (var i = 0; i < hands.length; i++) {
    var elements = document.querySelectorAll('.' + hands[i].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[i].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[i].angle +'deg)';
		
        if (hands[i].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[i + 1].angle);
        }
    }
  }
}initLocalClocks();
