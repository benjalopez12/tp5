var pesos = [
    3.34568,
    2.45678,
    4.8765,
    1.548,
    3.78,
    7.74
];

var totalKg = 0;
var i = 0;

do {
    totalKg += pesos[i];
    i++;
} while (i < pesos.length);

console.log('El total de bolsas de manzanas es: ' + totalKg.toFixed(2) + ' kg');
