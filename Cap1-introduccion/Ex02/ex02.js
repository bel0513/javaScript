var nombre; // declaracion de la varible "nombre"
nombre = "Juan"; // asignacion de valor a la variable "nombre"
console.log(nombre); // muestra el valor de la variable "nombre" en la consola del navegador

var nombre="maria"; // reasignacion de un nuevo valor a la variable "nombre"
console.log(nombre); // muestra el nuevo valor de la variable "nombre" en la consola
var nombre="carlos"; // reasignacion de un nuevo valor a la variable "nombre"
console.log(nombre); // muestra el nuevo valor de la variable "nombre" en la consola 
var nombre="ana"; // reasignacion de un nuevo valor a la variable "nombre"
console.log(nombre); // muestra el nuevo valor de la variable "nombre" en la consola

/*  diferencia entre var y let: la palabra reservada "var" tiene un alcance de funcion, lo que significa que la variable declarada con "var" es accesible dentro de la funcion en la que se declara. por otro lado, "let" tiene un alcance de bloque, lo que significa que la varianle dclarada con "let" solo es accesible dentro del bloque en el que seclara (por ejemplo, dentro de un bucle o una estructura condicional). ademas, "let" no permite redeclarar la misma variable dentro del mismo bloque, mientras que "var" lo permite.
*/

let bebida; //declaracion de la variable "bebida"
bebida = "coca-cola"; // asignacion de valor a la variable "bebida"

console.log(bebida); // muestra el valor de la variable "bebida" en la consola

let bebida="fanta"; // reasigmacion de un valor a la variable "bebida"
console.log(bebida); // muestra el nuevo valor de la variable "bebida" en la consola
let bebida="sprite"; // reasignacion de un nuevo valor a la variable "bebida"
console.log(bebida); // muestra el nuevo valor de la variable "bebida" en la consola

// Uso de const para declarar una variable constante llamada "PI" y asignarle el valor de 3.14159. luego, se muestra el valor de "PI" en la consola. Intentar reasignar