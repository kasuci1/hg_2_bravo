/* HACK-1 
     //vaciar el array
     [100,200,300,400,500,600,700]  result >  [] */

let arr = [100, 200, 300, 400, 500, 600, 700];
arr.splice(0, arr.length);

//Mostrar resultado en pantalla
console.log(arr);
