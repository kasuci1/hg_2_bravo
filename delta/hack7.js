// * HACK-7
// remplazar el item 300
// por tú alias
// [100,200,300,400,500,600,700]  result >  [100,200,foo,400,500,600,700]

let array = [100, 200, 300, 400, 500, 600, 700];
array[2] = "delta";

console.log("hack-7");
console.log("array:", array);
