
// Siempre hambriento
function siempreHambriento(arr) {
    console.log("Siempre hambriento con FOR");
    
    let cont = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "comida") {
            arr[i] = "delicioso";
            console.log(arr[i]);
            cont++;
        }
    }

    if (cont === 0) {
        console.log("Tengo hambre");
    }
    else {
        cont = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === "delicioso") {
                arr[j] = "comida";
            }
        }
    }

    console.log("");
    console.log("Siempre hambriento con WHILE");

    let a = 0;

    while (a < arr.length) {
        if (arr[a] === "comida") {
            arr[a] = "delicioso";
            console.log(arr[a]);
            cont++;
        }
        a++;
    }

    if (cont === 0) {
        console.log("Tengo hambre");
    }
    else {
        for (let a = 0; a < arr.length; a++) {
            if (arr[a] === "delicioso") {
                arr[a] = "comida";
            }
        }
    }

    console.log("");
}

let arregloUno = [3.14, "comida", "pastel", true, "comida"];
let arregloDos = [4, 1, 5, 7, 2];

console.log("");
console.log("Para el arreglo uno");
console.log("");
siempreHambriento(arregloUno);

console.log("Para el arreglo dos");
console.log("");
siempreHambriento(arregloDos);

// Filtro paso alto
function pasoAltoFor(arr, cutoff) {
    console.log("Paso Alto con FOR");

    let arregloFiltrado = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            if (i === 0) {
                arregloFiltrado.push(arr[i]);
            }
            else {
                arregloFiltrado.push(" " + arr[i]);
            } 
        }
    }

    return arregloFiltrado;
}

function pasoAltoWhile(arr, cutoff) {
    console.log("Paso Alto con WHILE");

    let arregloFiltrado = [], i = 0;
    
    while (i < arr.length) {
        if (arr[i] > cutoff) {
            if (i === 0) {
                arregloFiltrado.push(arr[i]);
            }
            else {
                arregloFiltrado.push(" " + arr[i]);
            }
        }
        i++;
    }

    return arregloFiltrado;
}

let arregloTres = [6, 8, 3, 10, -2, 5, 9];

let resultadoFor = pasoAltoFor(arregloTres, 5);
console.log("Su resultado es: [" + resultadoFor + "]"); 
console.log("");

let resultadoWhile = pasoAltoWhile(arregloTres, 5);
console.log("Su resultado es: [" + resultadoWhile + "]");
console.log("");

// Mejor que el promedio
function mejorQueElPromedioFor(arr) {
    console.log("Mejor que el promedio con FOR");

    let suma = 0, cantidad = 0, promedio = 0;

    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }

    promedio = suma / arr.length;
    
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > promedio) {
            cantidad++;
        }
    }

    return cantidad;
}

function mejorQueElPromedioWhile(arr) {
    console.log("Mejor que el promedio con WHILE");
    
    let suma = 0, cantidad = 0, promedio = 0, i = 0, j = 0;

    while (i < arr.length) {
        suma += arr[i];
        i++;
    }

    promedio = suma / arr.length;

    while (j < arr.length) {
        if (arr[j] > promedio) {
            cantidad++;
        }
        j++;
    }

    return cantidad;
}

let arregloCuatro = [6, 8, 3, 10, -2, 5, 9];

let cantidadMayorPromedioFor = mejorQueElPromedioFor(arregloCuatro);
console.log("Su resultado es: " + cantidadMayorPromedioFor);
console.log(""); 

let cantidadMayorPromedioWhile = mejorQueElPromedioWhile(arregloCuatro);
console.log("Su resultado es: " + cantidadMayorPromedioWhile);
console.log(""); 

// Arreglo invertido
function reversaFor(arr) {
    console.log("Arreglo invertido con FOR");

    let j = 0, temp = 0, num = 0;

    num = Math.floor(arr.length / 2);

    for (let i = arr.length - 1; i >= num; i--) {
        if (j === 0) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = " " + temp;
        }
        else {
            temp = arr[j];
            arr[j] = " " + arr[i];
            arr[i] = " " + temp;
        }
        j++;
    }

    return arr;
}

function reversaWhile(arr) {
    console.log("Arreglo invertido con WHILE");

    let i = arr.length - 1, j = 0, temp = 0, num = 0;

    num = Math.floor(arr.length / 2);

    while (i >= num) {
        if (j === 0) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = " " + temp;
        }
        else {
            temp = arr[j];
            arr[j] = " " + arr[i];
            arr[i] = " " + temp;
        }
        j++;
        i--;
    }

    return arr;
}

let arregloCinco = ["a", "b", "c", "d", "e"], arregloSeis = ["a", "b", "c", "d", "e"]; 

let resultadoInvertidoFor = reversaFor(arregloCinco);
console.log("Su resultado es: [" + resultadoInvertidoFor + "]");
console.log(""); 

let resultadoInvertidoWhile = reversaWhile(arregloSeis);
console.log("Su resultado es: [" + resultadoInvertidoWhile + "]");
console.log(""); 

// Arreglo de Fibonacci 
function arregloFibonacciFor(n) {
    console.log("Fibonacci de " + n + " números con FOR");
    
    let arregloFor = [0, 1], i = 0, temp = 0;
    
    for (let j = 1; j < n - 1; j++) {
        temp = arregloFor[i] + arregloFor[j];
        arregloFor.push(temp);
        i++;
    }

    for (let k = 0; k < n; k++) {
        arregloFor[k] = " " + arregloFor[k];
    }

    return arregloFor;
}

function arregloFibonacciWhile(n) {
    console.log("Fibonacci de " + n + " números con WHILE");

    let arregloWhile = [0, 1], i = 0, j = 1, temp = 0;

    while (j < n -1) {
        temp = arregloWhile[i] + arregloWhile[j];
        arregloWhile.push(temp);
        i++;
        j++;
    }

    for (let k = 0; k < n; k++) {
        arregloWhile[k] = " " + arregloWhile[k];
    }

    return arregloWhile;
}

let resultadoFibonacciFor = arregloFibonacciFor(10);
console.log("Su resultado es:" + resultadoFibonacciFor);
console.log(""); 

let resultadoFibonacciWhile = arregloFibonacciWhile(10);
console.log("Su resultado es:" + resultadoFibonacciWhile);
console.log(""); 



