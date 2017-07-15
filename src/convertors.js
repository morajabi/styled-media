/**
 * Converts breakpoint units in px to rem or em
 * @param {Object} breakpoints - an object containing breakpoint names as keys and the width as value
 * @param {number} [16] ratio - size of 1 rem in px. What is your main font-size in px? 
 * @param {'rem' | 'em'} unit
 */
function pxToEmOrRem(breakpoints, ratio = 16, unit) {
  const newBreakpoints = {};

  for (let key in breakpoints) {
    const point = breakpoints[key];

    if (String(point).includes('px')) {
      newBreakpoints[key] = +(parseInt(point) / ratio) + unit;
      continue;
    }

    newBreakpoints[key] = point;
  }

  return newBreakpoints;
}
