const n = require('lodash');
const array1 = [1,[1,2],[4],[5]];
const array2 = n.flattenDeep(array1);
console.log(array2);