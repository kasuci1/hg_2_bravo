// * HACK-5
// clonar array
// [100,200,300,400,500,600,700]  result >  [100,200,300,400,500,600,700]

let array_a = [100, 200, 300, 400, 500, 600, 700];
let array_b = array_a.slice();
let array_c = new Array(...array_a);

console.log("hack-5");
console.log("clone using slice:", array_b);
console.log("clone using array constructor:", array_c);
