var array1 = [100,200,300,400,500,600,700];
var array2 = [",qux","thud,"];
var proto1 = array1.slice(0,4);
var proto2 = array1.slice(4,6);
var newArray1 = proto1+array2+proto2;
console.log(newArray1);