/* 02_strings.js */
function Ejercicio2A() {
    let text1 = "1234567890";
    let result = text1.substring(0, 5);
    alert(result);
  }

function Ejercicio2B() {
    let text1 = "academicos";
    alert(text1.charAt(0).toUpperCase() + text1.slice(1));
  }

function Ejercicio2C() {
    let text1 = "acad emico";
    let result = text1.indexOf(" ");
    alert("La posición del primer espacio en blanco se encuentra luego de la: " + result);
 }