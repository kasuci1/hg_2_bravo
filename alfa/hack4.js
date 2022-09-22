/* HACK-4
     //eliminar los items 300 y 500
     [100,200,300,400,500,600,700]  result >  [100,200,400,600,700]*/

let arr = [100, 200, 300, 400, 500, 600, 700];

arr.splice(2, 3, 400);

// Mostrar resultado en pantalla
console.log(arr);
