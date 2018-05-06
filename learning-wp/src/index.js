//calls functions from sum.js and print results
//depends upon sum.js; needs to require the sum file.

// const sum = require('./sum'); common JS
import sum from './sum'; //ES6
import './image_viewer';

const total = sum(10, 5);
console.log(total);
