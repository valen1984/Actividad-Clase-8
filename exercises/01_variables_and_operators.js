/* 01_variables_and_operators.js */
function Ejercicio1A() {
  let text1 = "Hola";
  let text2 = "Profesor";
  let result = text1.concat(" ", text2);
  alert(result);
}

function Ejercicio1B() {
  let text1 = "Hola";
  let text2 = "Profesor";
  var stringLength1 = text1.length;
  var stringLength2 = text2.length;
  var resultadolength = text1.length + text2.length;
  alert("Hola profesor tiene " + resultadolength + " caracteres");
}