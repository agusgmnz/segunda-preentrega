
var montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));


var tasaInteresAnual = parseFloat(
  prompt("Ingrese la tasa de interés anual (%):")
);


var numeroCuotas = parseInt(prompt("Ingrese el número de cuotas:"));


var tasaInteresMensual = tasaInteresAnual / 100 / 12;


var cuotaMensual =
  (montoPrestamo * tasaInteresMensual) /
  (1 - Math.pow(1 + tasaInteresMensual, -numeroCuotas));


var totalPagar = cuotaMensual * numeroCuotas;


prompt("Monto del préstamo: $" + montoPrestamo.toFixed(2));
prompt("Número de cuotas a pagar: " + numeroCuotas);
prompt("Total de la cuota mensual: $" + cuotaMensual.toFixed(2));
prompt("Total a pagar: $" + totalPagar.toFixed(2));
