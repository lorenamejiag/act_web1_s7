const nums = [5, 3, 9, 1, 7];
console.log("asc:", [...nums].sort((a, b) => a - b));
console.log("desc:", [...nums].sort((a, b) => b - a));

const nombres = ["Ana", "Luis", "Marta", "Pedro"];
console.log("alfabético:", [...nombres].sort());

const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 20 },
  { nombre: "Marta", edad: 30 }
];
console.log("por edad:", [...personas].sort((a, b) => a.edad - b.edad));

console.log("reverse nombres:", [...nombres].reverse());
