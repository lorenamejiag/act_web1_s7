// 8️⃣ Desestructuración de Arrays
const lenguajes = ["JavaScript", "Python", "Java", "C++", "Go"];

const [l1, l2, l3] = lenguajes;
console.log("Primeros 3:", l1, l2, l3);

const [primero, , , , ultimo] = lenguajes;
console.log("Primero y último:", primero, ultimo);

const [head, ...resto] = lenguajes;
console.log("Head:", head, "Resto:", resto);

let a = 10, b = 20;
[a, b] = [b, a];
console.log("Intercambio:", a, b);
