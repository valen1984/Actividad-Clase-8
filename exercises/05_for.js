/* 05_for.js */
function Ejercicio5A() {
  const nuevoArray = ["LPPA", "JS", "HTML", "CSS", "DB"];
  for (let i=0; i<5 ; i++)
  {
      alert ("La palabra en la posicion " + i + " es " + nuevoArray[i]);
  }
}

function Ejercicio5B() {
    const semana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
    for (const day of semana) {
        alert(day[0].toUpperCase() + day.substr(1));
      }
}

function Ejercicio5C() {
  const nuevoArray = [];
  
  for (let i=0; i<10 ; i++)
  {
      nuevoArray[i] = i;
     
  }
  let longString = nuevoArray.length;
  alert ("La longitud del nuevo array es : " + longString);
}