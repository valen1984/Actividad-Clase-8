/* 06_functions.js */
function Ejercicio6A() {
    let Valor1 = prompt("Ingresa el primer valor para la suma");
    let Valor2 = prompt("Ingresa el segundo valor");
    let total = Number(Valor1) + Number(Valor2);
    if(isNaN(total)){
        alert("Los valores deben ser numéricos");
     }else {
        alert("La suma es " + total);
     }
}

function Ejercicio6B() {
  
    let variable1 = prompt("Ingrese el primer parametro");
    let variable2 = prompt("Ingrese el segundo parametro");
    var variable3 = variable1 + variable2;
    let error = 'NaN';
    if (isNaN(variable1)) {
        alert ("El parametro 1 tiene un error, el resultado es: " + error);
    }
        else if (isNaN(variable2)) {
            alert ("El parametro 2 tiene un error, el resultado es: " + error);
        }
            
        else {
            variable3 = Number(variable1) + Number(variable2);
            alert("La suma es " + variable3);
        }
    }

function Ejercicio6C() {
    let Valor1 = prompt("Ingresa el primer valor para la suma");
    let Valor2 = prompt("Ingresa el segundo valor");
    let total = Math.round(Number(Valor1) + Number(Valor2));
    alert("La suma es " + total);
}
