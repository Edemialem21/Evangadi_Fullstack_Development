// var arrr = 1;
// function addition(){
//     var arrr = 54;
//     console.log(arrr);
// }
// addition()
// console.log(module);

const x = require("./Teste_modularity");

var arrr = 1;
function additio(){
    var arrr = 54;
    console.log(arrr);
}
additio();
// console.log(module);
module.exports.arrr = arrr;
module.exports.fun = additio;
// or we can use like this
// module.exports = {arrr, fun: additio};
console.log(module);
console.log(x.sum(20, 5));

// using ES6 standard we can use only the key export
export default sum;
export  arrr;   

// to import using ES6 
import {var_name} from "./pathname";

// common JS way
// -create a folder
// -npm init -y
// create a js file
// write a code 
// export function, so it is avaliable to another module
// - module.exports.Functionname = variable;