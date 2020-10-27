"use strict";

var t1 = new TimelineMax();
t1.from(".ringOne", 4, {
  delay: 0.4,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
}).from(".ringTwo", 4, {
  delay: 0.9,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
}, "-=5");
var divImg = document.querySelector('ringOne ring', 'ringTwo ring');
setTimeout(function () {
  window.location.href = 'home.html';
}, 6000);