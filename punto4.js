var ingresosDiarios = [
    10000,
    15000,
    17500,
    20000,
    25000
];

var totalMensual = ingresosDiarios.reduce(function(acumulador, ingreso) {
    return acumulador + ingreso;
}, 0);

console.log('El total de ingresos mensuales es: $' + totalMensual);
