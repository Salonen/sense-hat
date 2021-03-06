'use strict';

require('./common');
const sense = require('../lib/es5');
const leds = sense.leds;

let x = 0;
let y = 0;
function updatePos() {
  leds.setPixel(x, y, [0, 0, 0]);
  x++;
  if (x > 7) {
    x = 0;
    y++;
  }
  if (y > 7) {
    y = 0;
  }
  leds.setPixel(x, y, [255, 0, 0]);
}

setInterval(updatePos, 250);
