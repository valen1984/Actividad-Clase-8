Contenido de la actividad

Descripción del problema a resolver
Para la problemática de la séptima semana deberán realizar los ejercicios de JavaScript brindados al final de este documento, aplicando los conceptos aprendidos.

Cada bloque de ejercicio deberá ser guardado en un nuevo archivo JS dentro de una carpeta llamada “exercises” y esta carpeta deberá ser guardada en el nuevo repositorio. Todos los archivos Javascripts deben estar linkeados al archivo “index.html” a través de la etiqueta <script>. La estructura del nuevo repositorio deberia quedar asi:



index.html

exercises/

    01_variables_and_operators.js

    02_strings.js

    03_arrays.js

    04_if_else.js

    05_for.js

    06_functions.js



Pasos a seguir:
Crear una carpeta nueva y dentro de la misma crear los archivos en los cuales se incluirá la respuesta a los ejercicios JavaScript propuestos.
Utilizar Git Init, sobre la carpeta que contiene el archivo con las respuestas, para iniciar Git.
Crear un repositorio nuevo en GitHub y utilizar Git Remote Add para vincularlo.
Resolver los ejercicios que son parte de la problemática semanal. 
Hacer commits con el progreso y subir el código al nuevo repositorio creado en el paso c
Crear el readme, copiando los ejercicios solicitados e incluyendo las dificultades que tuvieron y cómo los enfrentaron.


Ejercicios de JavaScript



Previo:
Resolver los ejercicios en el orden planteado y hacer un commit por cada ejercicio resuelto (del 1 al 6).
En total son 6 archivos .js (1 por ejercicio), iniciar cada archivo con un comentario con el enunciado del ejercicio. [para hacer comentarios, encerramos lo que desamor comentar /* comentario */]
Todos los ejercicios deber poder verse en consola o en pantalla del navegador.
Los nombres de las variables deben tener sentido (ejemplo: si el ejercicio habla de números, las variables pueden llamarse “num1” y “num2”). 


Listado de ejercicios:
1. Variables y Operadores

Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
2. Strings

Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).


3. Arrays

Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.
Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
Agregar un elemento al principio y al final del array (utilizar unshift y push).
Quitar un elemento del principio y del final del array (utilizar shift y pop).
Invertir el orden del array (utilizar reverse).
Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
4. If Else

Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”. [utilizar alert() ]
Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Menor” si la edad es menor a 18
“Mayor” si la edad es mayor o igual a 18 Y menor que 65
“Jubilado” si la edad es mayor o igual que 65.




5. For

Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).


6. Funciones

Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).