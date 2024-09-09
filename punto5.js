var litrosDiarios = [
    1200,
    2500,
    1500,
    2544,
    2846,
    3521
];

var totalSemanal = litrosDiarios.reduce(function(acumulador, litros) {
    return acumulador + litros;
}, 0);

console.log('El total de combustible ingresado durante la semana es: ' + totalSemanal + ' Lts');
