//  Los tipos de dato son las distintas formas o definiciones que se tienen para almacenar datos en las variables. Cuando se declara una variable y se inicializa, se le está asignando un valor y ese valor es un tipo de dato; es decir: entero, decimal, booleano, cadena o carácter entre otros.
//  En JavaScript, los tipos de datos se dividen en dos categorías: primitivos y objetos. Los tipos de datos primitivos incluyen:

//  - Number: para números enteros y decimales.
//  - String: para cadenas de texto.
//  - Boolean: para valores verdaderos o falsos.
//  - Null: para representar la ausencia de valor.
//  - Undefined: para variables que no han sido asignadas.
//  - Symbol: para valores únicos e inmutables.

//  Los objetos, por otro lado, son estructuras de datos más complejas que pueden contener múltiples valores y funciones. Algunos ejemplos de objetos en JavaScript incluyen:
//  - Array: para almacenar listas de valores.
//  - Object: para almacenar pares clave-valor.
//  - Function: para definir funciones.
//  Es importante entender los tipos de datos en JavaScript, ya que esto afecta cómo se manipulan y se comportan las variables en el código. Por ejemplo, al realizar operaciones matemáticas, es crucial asegurarse de que los valores sean del tipo Number para evitar errores o resultados inesperados. Además, al trabajar con cadenas de texto, es necesario utilizar el tipo String para garantizar que las operaciones de concatenación y manipulación de texto funcionen correctamente.


let nombre="Giorgio"; // string o cadena de texto
let cantidad = 10; // number o numero entero
let precio = 15.5; // number o numero decimal
let disponible = true; // boolean
let descripcion = null; // null
console.log("nombre", nombre);
console.log("cantidad", cantidad);
console.log("precio", precio);
console.log("disponible", disponible);
console.log("descripcion", descripcion);

document.write("nombre: " + nombre + "<br>", "cantidad: " + cantidad + "<br>", "precio: " + precio + "<br>", "disponible: " + disponible + "<br>", "descripcion: " + descripcion);