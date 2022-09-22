/* HACK-6 
     //total item
     [100,200,300,400,500,600,700]  result > 7 
*/

let arr = [100, 200, 300, 400, 500, 600, 700];
let counter = 0;
let result = null;

for (; counter < arr.length; counter++) {
  result += 1;
}

// Mostrar resultados en pantalla
console.log(`El total de elementos del array es ${result}`);
