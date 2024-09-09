var notas = [];
var cantidadNotas = 5;
for (var i = 0; i < cantidadNotas; i++) {
    var nota = prompt("Ingrese la nota del TP" + (i + 1) + ":");
    notas.push(parseFloat(nota));
}
var suma = 0;
for (var j = 0; j < notas.length; j++) {
    suma += notas[j];
}
var promedio = suma / notas.length;
console.log("Suma total: $" + Math.floor(suma));
console.log("Promedio: $" + Math.floor(promedio));
