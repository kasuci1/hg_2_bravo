/* HACK-10 
     //agregar después del item 500
     //los alias qux y thud
     [100,200,300,400,500,600,700]  result >  [100,200,300,400,500,qux,thud,600,700]*/

let arr = [100, 200, 300, 400, 500, 600, 700];

arr.splice(4, 0, "qux", "thud");

// Mostrar solucion en pantalla
console.log(arr);
