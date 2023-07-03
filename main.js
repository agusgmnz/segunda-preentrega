var monto = parseInt(prompt("Ingrese el monto:"));
var plazo = parseInt(prompt("Ingrese el plazo en meses:"));

var cuotaMensual = monto / plazo;

var cuotas = [];

for (var i = 1; i <= plazo; i++) {
  cuotas.push(cuotaMensual);
}

console.log("Monto: $" + monto);
console.log("Plazo: " + plazo + " meses");
console.log("Cuota mensual: $" + cuotaMensual.toFixed(2));
console.log("Detalles de las cuotas:");

for (var j = 0; j < cuotas.length; j++) {
  console.log("Cuota " + (j + 1) + ": $" + cuotas[j].toFixed(2));
}
