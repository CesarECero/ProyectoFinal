//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var DeNuevo = true;



while (DeNuevo) {

var precio_base = 2000; 

//Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2; // 20%

var recargo_total = 0;
var precio_final = 0;


  var nombre = prompt("Ingrese su nombre, por favor:");
  var edad = parseInt(prompt("¿Cuántos años tiene? Ingrese solamente números:"));
  if (edad < 18) {
    alert("Edad no válida. Debe ser mayor de 18 años para cotizar.");
    continue; 
  }
  var casado = prompt("¿Está casado actualmente? (si/no)").toUpperCase();
  var edad_conyuge = 0;
  if (casado === "SI") {
    edad_conyuge = parseInt(prompt("¿Qué edad tiene su esposo/a?"));
 			if(edad_conyuge < 18 ){ 
   alert("Edad no válida de conyugue. Debe ser mayor de 18 años para cotizar.");
    continue;
  } 
  } 
  var hijos = prompt("¿Tiene hijos o hijas? (si/no)").toUpperCase();
  var cantidad_hijos = 0;

  if (hijos === "SI") {
    cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"));
  }

  if (edad >= 18 && edad < 25) {
    recargo_total += precio_base * edad_18;
  } else if (edad >= 25 && edad < 50) {
    recargo_total += precio_base * edad_25;
  } else if (edad >= 50) {
    recargo_total += precio_base * edad_50;
  }
 
  if (casado === "SI") {
    if (edad_conyuge >= 18 && edad_conyuge < 25) {
      recargo_total += precio_base *  casado_18;
    } else if (edad_conyuge >= 25 && edad_conyuge < 50) {
      recargo_total += precio_base * casado_25;
    } else if (edad_conyuge >= 50) {
      recargo_total += precio_base * casado_50;
    }
  }


  if (cantidad_hijos > 0) {
    recargo_total += precio_base * hijos_recargo * cantidad_hijos;
  }

	precio_final = precio_base + recargo_total;

  alert("Para el asegurado " + nombre);
  alert("El recargo total será de: Q" + recargo_total);
  alert("El precio final del seguro será de: Q" + precio_final);

  var continuar = prompt("¿Desea realizar otra cotización? (si/no)").toUpperCase();
  if (continuar !== "SI") {
    DeNuevo = false;
  }
}