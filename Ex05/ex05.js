let a, b;

let suma, resta, mult, div, residuo, potencia;

a = parseInt(prompt("ingresa el primer numero")); // Se piden datos al usuario
b = parseInt(prompt("ingresa el segundo numero"));



// Resultado de operaciones
suma = a + b;
resta = a - b;
mult = a * b;
div = a / b;
residuo = a % b;
potencia = a ** b;

// Imprimir Resultados
document.writeln("La suma es: ", suma, "<br>");
document.writeln("La resta es: ", resta, "<br>");
document.writeln("La multiplicacion es: ", mult, "<br>");
document.writeln("La division es: ", div, "<br>");
document.writeln("El residuo es: ", residuo, "<br>");
document.writeln("La potencia es: ", potencia, "<br>");