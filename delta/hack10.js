// * HACK-10
// agregar después del item 500
// los alias qux y thud
// [100,200,300,400,500,600,700]  result >  [100,200,300,400,500,qux,thud,600,700]

let array_a = [100, 200, 300, 400, 500, 600, 700];
let array_b = [...array_a.slice(0, 5), "qux", "thud", ...array_a.slice(5)];

console.log("hack-10");
console.log("array:", array_b);
