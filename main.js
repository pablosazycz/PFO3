function calcularAreadeRectangulo(base, altura) {
  return base * altura;
}

console.log("Soluciion 1: Calcular el area de un rectangulo");
console.log(calcularAreadeRectangulo(10, 5));
console.log(calcularAreadeRectangulo(20, 5));
console.log(calcularAreadeRectangulo(3, 5));

console.log("//////////////////////////////////////////////////////");

/* Proceso de solucion 1
Sabemos que el area de un rectangulo es base por altura, entonces cree una funcion que recibe por parametro
la base y la altura y retorna el area del rectangulo.
*/

function contarPalaras(cadena) {
  return cadena.split(" ").length;
}

console.log("Soluciion 2: Contar palabras de una cadena");
console.log(contarPalaras("Hola mundo"));
console.log(contarPalaras("Humahuaca es un lugar copado"));
console.log(contarPalaras("lorem ipsum dolor sit amet"));

console.log("//////////////////////////////////////////////////////");
/* Proceso de solucion 2
Para este caso en particular use la funcion split() que me permite separar un strin en un array, luego de esto uso 
la funcion length para contar la cantidad de palabras que tiene ese array.
*/

function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

console.log("Solucion 3: Invertir una cadena");
console.log(invertirCadena("Hola mundo"));
console.log(invertirCadena("Humahuaca es un lugar copado"));
console.log(invertirCadena("heroes del silencio, iberia sumergida"));

console.log("//////////////////////////////////////////////////////");

/* Proceso de solucion 3
para esta funcion use split() para serparar la cadena en un array, luego use reverse() para invertir el array y finalmente
use join() para unir el array en un string.
*/

function esPalindromo(cadena) {
  return cadena === cadena.split("").reverse().join("");
}

console.log("Solucion 4: Verificar si una cadena es palindromo");
console.log(esPalindromo("neuquen"));
console.log(esPalindromo("reconocer"));
console.log(esPalindromo("hola mundo"));
console.log(esPalindromo("anita lava la tina"));

console.log("//////////////////////////////////////////////////////");

/* Proceso de solucion 4
use la misma funcion que el punto 3, con la diferencia que la comparo con la cadena original, si da true es palindromo.
*/

function edadCanina() {
  let edadHumana;
  do {
    const entrada = prompt("Ingrese ls edad de su perro");
    edadHumana = parseInt(entrada);

    if (isNaN(edadHumana)) {
      alert("Ingrese un numero valido");
    }
  } while (isNaN(edadHumana));

  const edadCanina = edadHumana * 7;

  alert("Su perro tiene: " + edadCanina + " años caninos");
}

/*
proceso de solucion 5
para esta funcion, le agregue un boton en el html para disparar la funcion, pido al usuario que ingrese su edad, luego valido que sea un numero, si no lo es le muestro un mensaje
que esta mal, si es un numero valido, multiplico la edad por 7 y muestro el resultado.
*/
