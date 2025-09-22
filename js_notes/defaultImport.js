import isSatSun from './defaultExport.js';
// default import allows rename - from isWeekend to isSatSun

console.log(isSatSun(today));
console.log(isSatSun(today.add(5, 'day')));
