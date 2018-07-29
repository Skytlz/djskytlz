function SkytlzgetTimeRemaining(endtime) {
	"use strict";
  var SkytlzT= Date.parse(endtime) - Date.parse(new Date());
  var Skytlzseconds = Math.floor((SkytlzT % (1000*60))/1000);
  var Skytlzminutes = Math.floor((SkytlzT %(1000 * 60 * 60))/(1000 * 60));
  var Skytlzhours = Math.floor((SkytlzT % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var Skytlzdays = Math.floor(SkytlzT / (1000 * 60 * 60 * 24));
  return {
    'total': SkytlzT,
	'days': Skytlzdays,
    'hours': Skytlzhours,
    'minutes': Skytlzminutes,
    'seconds': Skytlzseconds
  };
}

function SkytlzinitializeClock(id, endtime) {
	"use strict";
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function SkytlzupdateClock() {
    var SkytlzTIME = SkytlzgetTimeRemaining(endtime);
	daysSpan.innerHTML = ('0' + SkytlzTIME.days).slice(-2);
    hoursSpan.innerHTML = ('0' + SkytlzTIME.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + SkytlzTIME.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + SkytlzTIME.seconds).slice(-2);
    if (SkytlzTIME.total <= 0) {
      clearInterval(Skytlztimeinterval);
    }
  }

  SkytlzupdateClock();
  var Skytlztimeinterval = setInterval(SkytlzupdateClock, 1000);
}

var SkytlzRelease = "2018-05-13T23:00:00Z";
SkytlzinitializeClock('Skytlzclockdiv', SkytlzRelease);