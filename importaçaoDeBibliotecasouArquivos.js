const lodash = require("lodash")
const objetodearray = require("./array")

console.log(objetodearray);

const organizado = lodash.uniq(objetodearray.arraynumeros)
const organizado1 = lodash.uniq(objetodearray.arrayletras)
console.log(organizado);
console.log(organizado1);



//  DESESTRUTURANDO O ARRAY.JS

// const { arraynumeros, arrayletras } = require("./array")

// const organizado = lodash.uniq(arraynumeros)
// const organizado1 = lodash.uniq(arrayletras)
// console.log(organizado);
// console.log(organizado1)