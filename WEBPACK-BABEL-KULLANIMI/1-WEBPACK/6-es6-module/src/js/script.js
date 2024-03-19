import {sum, mult} from "./lib";
// console.log(sum(1,2,3,4,5,6,7), "from lib.js");
// console.log(mult(1,2,3,4,5,6,7), "from lib.js");


//Not : lib.js de hangileri export ile dışarı açılmışsa onlar alınır!
import * as lib from "./lib";//tek bir takma isim üzerinden çağırma işlemi

// console.log(lib.sum(1,2,3,4,5,6,7), "from lib.js");
// console.log(lib.mult(1,2,3,4,5,6,7), "from lib.js");

import myLib from "./lib";
//class kavramı içerisinden çağırma işlemi
let ex = new myLib();
console.log(ex.sum(1,2,4,5,6));
console.log(ex.mult(1,2,4,5,6));

let name = "Tolga Aymaz";
console.log(name);

const sayHello = () =>{
    console.log("Hello There");
}
sayHello();