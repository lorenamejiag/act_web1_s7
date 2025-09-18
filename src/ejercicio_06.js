let numeros = [1, 2, 3, 4, 5];
console.log("Inicio:", numeros);

// push & pop
numeros.push(6);
console.log("push:", numeros);
numeros.pop();
console.log("pop:", numeros);

// shift & unshift
numeros.shift();
console.log("shift:", numeros);
numeros.unshift(0);
console.log("unshift:", numeros);

// splice
numeros.splice(2, 0, 99); // insertar en pos 2
console.log("splice:", numeros);

// slice
const copia = numeros.slice(1, 3);
console.log("slice (1,3):", copia);
console.log("original:", numeros);
