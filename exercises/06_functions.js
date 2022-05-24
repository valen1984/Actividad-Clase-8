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
            if (Number.isInteger(Number(variable1))) {
                if (Number.isInteger(Number(variable2))) {
                    variable3 = Number(variable1) + Number(variable2);
                    alert("La suma es " + variable3);
                } else {
                        variable2 = Math.round(variable2)
                        alert ("El parametro 2 no es entero, el numero redondeado es: " + variable2 );
                }
            } 
            else {
                variable1 = Math.round(variable1)
                alert ("El parametro 1 no es entero, el numero redondeado es: " + variable1 );
            }
                
        }
        }
