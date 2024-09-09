var precios = [
    150548.00,
    100147.00,
    51254.00,
    255500.45,
    35.45,
    78.80
];

var total = 0;

for (var i = 0; i < precios.length; i++) {
    total += precios[i];
}

var totalFormateado = Math.round(total * 100) / 100;

console.log('El monto total a pagar es: $' + totalFormateado);
