// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  return Math.max(x, y);
}

// "x" e "y" son números enteros (int).
// Devuelve el número más grande
// Si son iguales, devuelve cualquiera de los dos
// Tu código:

function mayoriaDeEdad(edad) {
  if (edad >= 18) {
    return "Allowed";
  }
  {
    if (edad < 18);
    {
      return "Not allowed";
    }
  }
}

//Determinar si la persona según su edad puede ingresar a un evento.
//Si tiene 18 años ó más, devolver --> "Allowed"
//Si es menor, devolver --> "Not allowed"

function conection(status) {
  if (status === 1) {
    return "Online";
  }
  {
    if (status === 2) {
      return "Away";
    } else {
      return "Offline";
    }
  }
}

//Recibimos un estado de conexión de un usuario representado por un valor numérico.
//Cuando el estado es igual a 1, el usuario está "Online"
//Cuando el estado es igual a 2, el usuario está "Away"
//De lo contrario, presumimos que el usuario está "Offline"
//Devolver el estado de conexión de usuario en cada uno de los casos.

function saludo(idioma) {
  if (idioma === "aleman") {
    return "Guten Tag!";
  }
  {
    if (idioma === "mandarin") {
      return "Ni Hao!";
    }
    {
      if (idioma === "ingles") {
        return "Hello!";
      } else {
        return "Hola!";
      }
    }
  }
}
// Devuelve un saludo en tres diferentes lenguajes:
// Si "idioma" es "aleman", devuelve "Guten Tag!"
// Si "idioma" es "mandarin", devuelve "Ni Hao!"
// Si "idioma" es "ingles", devuelve "Hello!"
// Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
// Tu código:

function colors(color) {
  if (color === "blue") {
    return "This is blue";
  }
  {
    if (color === "red") {
      return "This is red";
    }
    {
      if (color === "green") {
        return "This is green";
      }
      {
        if (color === "orange") {
          return "This is orange";
        } else {
          return "Color not found";
        }
      }
    }
  }
}

//La función recibe un color. Devolver el string correspondiente:
//En caso que el color recibido sea "blue", devuleve --> "This is blue"
//En caso que el color recibido sea "red", devuleve --> "This is red"
//En caso que el color recibido sea "green", devuleve --> "This is green"
//En caso que el color recibido sea "orange", devuleve --> "This is orange"
//Caso default: devuelve --> "Color not found"
//Usar el statement Switch.

function esDiezOCinco(numero) {
  if (numero === 10 || numero === 5) {
    return true;
  } else {
    return false;
  }
}
// Devuelve "true" si "numero" es 10 o 5
// De lo contrario, devuelve "false"
// Tu código:

function estaEnRango(numero) {
  if (numero > 20 && numero < 50) {
    return true;
  } else {
    return false;
  }
}

// Devuelve "true" si "numero" es menor que 50 y mayor que 20
// De lo contrario, devuelve "false"
// Tu código:

function esEntero(num) {
  if (Number.isInteger(num)) {
    return true;
  } else {
    return false;
  }
}
// Devuelve "true" si "numero" es un entero (int/integer)
// Ejemplo: 0.8 -> false
// Ejemplo: 1 -> true
// Ejemplo: -10 -> true
// De lo contrario, devuelve "false"
// Pista: Puedes resolver esto usando `Math.floor`
// Tu código:

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }
  {
    if (num % 3 === 0) {
      return "fizz";
    }
    {
      if (num % 5 === 0) {
        return "buzz";
      } else {
        return num;
      }
    }
  }
}

// Si "numero" es divisible entre 3, devuelve "fizz"
// Si "numero" es divisible entre 5, devuelve "buzz"
// Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
// De lo contrario, devuelve el numero

function operadoresLogicos(num1, num2, num3) {
  let EsmayoryPosit = "Número 1 es mayor y positivo";
  let HayNegativos = "Hay Negativos";
  let esCero = "Error";

  if (num1 < 0 && num2 < 0 && num3 < 0) {
    return HayNegativos;
  }
  {
    if (num1 === 0 || num2 === 0 || num3 === 0) {
      return esCero;
    }
    {
      if (num1 > num2 && num1 > num3 && num1 > 0) {
        return EsmayoryPosit;
      }
      {
        if (num3 > num1 && num3 > num2) {
          return num3 + 1;
        } else {
          return false;
        }
      }
    }
  }
}
//La función recibe tres números distintos.
//Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//Si no se cumplen ninguna de las condiciones anteriores, retornar false.

function esPrimo(numero) {
  if (numero === 1 || numero === 0) {
    return false;
  }
  for (j = 2; j <= numero; j++) {
    if (numero % j === 0) {
      return false;
    } else {
      return true;
    }
  }
}
// Devuelve "true" si "numero" es primo
// De lo contrario devuelve "falso"
// Pista: un número primo solo es divisible por sí mismo y por 1
// Pista 2: Puedes resolverlo usando un bucle `for`
// Nota: Los números 0 y 1 NO son considerados números primos

function esVerdadero(valor) {
  if (valor < 4) {
    return "Soy falso";
  }
  {
    if (valor > 4) {
      return "Soy verdadero";
    }
  }
}
esVerdadero(5);

//Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
//si su valor es true y “Soy falso” si su valor es false.
//Escribe tu código aquí

function tablaDelSeis(x) {
  var tabla = [];
  for (var i = 1; i < 11; i++) document.write(x + "x" + i + "=" + x * i);
}

//Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
//Escribe tu código aquí

function tieneTresDigitos(i) {
  if (Number.isInteger(i) && i >= 100 && i < 1000) {
    return true;
  } else {
    return false;
  }
}

//Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
//Escribe tu código aquí

function doWhile(numero) {
  let limite = 0;
  do {
    numero = numero + 5;
    limite = limite + 1;
  } while (limite < 8);
  return numero;
}

//Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//Retornar el valor final.
//Usar el bucle do ... while.

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile,
};
